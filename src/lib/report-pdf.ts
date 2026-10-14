import { jsPDF } from "jspdf";
import {
  formatDuration,
  pct,
  recommendations,
  weakestSubjects,
  type ExamReport,
} from "./report";

export function downloadReportPdf(report: ExamReport) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const M = 48;
  let y = M;
  const width = doc.internal.pageSize.getWidth() - M * 2;

  const line = (text: string, size = 11, bold = false, gap = 16) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size);
    const parts = doc.splitTextToSize(text, width) as string[];
    for (const p of parts) {
      if (y > doc.internal.pageSize.getHeight() - M) {
        doc.addPage();
        y = M;
      }
      doc.text(p, M, y);
      y += gap;
    }
  };

  line("Relatório de simulado", 20, true, 26);
  line(report.examLabel, 12, true, 18);
  line(
    `${new Date(report.finishedAt).toLocaleString("pt-BR")} · modo ${
      report.mode === "completo"
        ? "simulado completo"
        : report.mode === "revisao"
          ? "revisão espaçada"
          : "prática"
    } · tempo ${formatDuration(report.durationMs)}`,
    10,
    false,
    22,
  );

  line("Desempenho geral", 13, true, 20);
  line(
    `Acertos: ${report.correct}/${report.total} (${pct({
      correct: report.correct,
      total: report.total,
    })}%)`,
  );
  line(
    `Conhecimentos gerais: ${report.geral.correct}/${report.geral.total} (${pct(report.geral)}%)`,
  );
  line(
    `Conhecimentos específicos: ${report.especifica.correct}/${report.especifica.total} (${pct(report.especifica)}%)`,
    11,
    false,
    24,
  );

  line("Desempenho por matéria", 13, true, 20);
  for (const [subject, s] of Object.entries(report.bySubject)) {
    line(`${subject}: ${s.correct}/${s.total} (${pct(s)}%)`);
  }
  y += 8;

  const weak = weakestSubjects(report);
  if (weak.length) {
    line("Temas mais fracos", 13, true, 20);
    for (const w of weak) line(`• ${w.subject} — ${w.pct}% de acerto`);
    y += 8;
  }

  line("Metas recomendadas", 13, true, 20);
  for (const r of recommendations(report)) line(`• ${r}`);

  doc.save(
    `relatorio-simulado-${report.examId}-${new Date(report.finishedAt)
      .toISOString()
      .slice(0, 10)}.pdf`,
  );
}
