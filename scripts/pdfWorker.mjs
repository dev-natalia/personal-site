/**
 * Worker thread separado do webpack do Next.js.
 * Usa diretamente o React e @react-pdf/renderer do node_modules,
 * evitando conflito de instâncias.
 */
import { workerData, parentPort } from "worker_threads";
import { renderToBuffer, Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import { createElement as h } from "react";

const curriculo = workerData;

const C = {
  bg: "#FFFFFF", sidebar: "#F1F5F9", accent: "#0D9488",
  text: "#111827", muted: "#4B5563", light: "#9CA3AF", border: "#E2E8F0",
};

const s = StyleSheet.create({
  page:     { fontFamily: "Helvetica", flexDirection: "row", backgroundColor: C.bg, fontSize: 9, color: C.text, paddingTop: 28, paddingBottom: 28 },
  sidebar:  { width: "32%", backgroundColor: C.sidebar, paddingTop: 20, paddingLeft: 18, paddingRight: 14 },
  main:     { width: "68%", paddingTop: 20, paddingLeft: 20, paddingRight: 22 },
  secTitle: { fontFamily: "Helvetica-Bold", fontSize: 7, color: C.accent, letterSpacing: 1, marginBottom: 8, paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: C.border },
  row:      { flexDirection: "row", marginBottom: 5 },
  lbl:      { fontSize: 7.5, color: C.light, width: 46 },
  val:      { fontSize: 8, color: C.muted, flex: 1 },
  skill:    { fontSize: 8, color: C.muted, marginBottom: 4, paddingLeft: 6 },
  eduBlock: { marginBottom: 10 },
  eduCurso: { fontFamily: "Helvetica-Bold", fontSize: 8, color: C.text },
  eduInst:  { fontSize: 7.5, color: C.muted, marginTop: 1 },
  eduPer:   { fontSize: 7, color: C.light, marginTop: 1 },
  header:   { marginBottom: 14 },
  nome:     { fontFamily: "Helvetica-Bold", fontSize: 20, color: C.text },
  titulo:   { fontFamily: "Helvetica-Oblique", fontSize: 9, color: C.accent, marginTop: 3 },
  divider:  { borderBottomWidth: 1.5, borderBottomColor: C.accent, marginTop: 10, marginBottom: 14 },
  sTitle:   { fontFamily: "Helvetica-Bold", fontSize: 7.5, color: C.accent, letterSpacing: 0.8, marginBottom: 8 },
  resumo:   { fontSize: 8.5, color: C.muted, lineHeight: 1.6, marginBottom: 16 },
  expBlock: { marginBottom: 13 },
  expHead:  { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  empresa:  { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: C.text },
  periodo:  { fontSize: 7.5, color: C.light },
  cargo:    { fontFamily: "Helvetica-Oblique", fontSize: 8, color: C.accent, marginBottom: 5 },
  bullet:   { flexDirection: "row", marginBottom: 3, paddingLeft: 4 },
  dot:      { fontSize: 9, color: C.accent, width: 10 },
  bText:    { fontSize: 8, color: C.muted, flex: 1, lineHeight: 1.5 },
});

const doc = h(Document, { title: `Currículo — ${curriculo.nome}`, author: curriculo.nome },
  h(Page, { size: "A4", style: s.page },

    h(View, { style: s.sidebar },
      h(View, { style: { marginBottom: 18 } },
        h(Text, { style: s.secTitle }, "CONTATO"),
        h(View, { style: s.row }, h(Text, { style: s.lbl }, "Local"),    h(Text, { style: s.val }, curriculo.localizacao)),
        h(View, { style: s.row }, h(Text, { style: s.lbl }, "Email"),    h(Link, { src: `mailto:${curriculo.email}`,     style: { fontSize: 8,   color: C.accent, flex: 1 } }, curriculo.email)),
        h(View, { style: s.row }, h(Text, { style: s.lbl }, "LinkedIn"), h(Link, { src: `https://${curriculo.linkedin}`, style: { fontSize: 7.5, color: C.accent, flex: 1 } }, curriculo.linkedin)),
        h(View, { style: s.row }, h(Text, { style: s.lbl }, "GitHub"),   h(Link, { src: `https://${curriculo.github}`,   style: { fontSize: 7.5, color: C.accent, flex: 1 } }, curriculo.github)),
      ),
      h(View, { style: { marginBottom: 18 } },
        h(Text, { style: s.secTitle }, "SKILLS"),
        ...curriculo.skills.map((sk, i) => h(Text, { key: i, style: s.skill }, `· ${sk}`)),
      ),
      h(View, { style: { marginBottom: 18 } },
        h(Text, { style: s.secTitle }, "FORMAÇÃO"),
        ...curriculo.formacao.map((f, i) =>
          h(View, { key: i, style: s.eduBlock },
            h(Text, { style: s.eduCurso }, f.curso),
            h(Text, { style: s.eduInst  }, f.instituicao),
            h(Text, { style: s.eduPer   }, f.periodo),
          )
        ),
      ),
    ),

    h(View, { style: s.main },
      h(View, { style: s.header },
        h(Text, { style: s.nome   }, curriculo.nome),
        h(Text, { style: s.titulo }, curriculo.titulo),
        h(View, { style: s.divider }),
      ),
      h(Text, { style: s.sTitle }, "RESUMO"),
      h(Text, { style: s.resumo }, curriculo.resumo),
      h(Text, { style: s.sTitle }, "EXPERIÊNCIA"),
      ...curriculo.experiencia.map((exp, i) =>
        h(View, { key: i, style: s.expBlock },
          h(View, { style: s.expHead },
            h(Text, { style: s.empresa }, exp.empresa),
            h(Text, { style: s.periodo }, exp.periodo),
          ),
          h(Text, { style: s.cargo }, exp.cargo),
          ...exp.itens.map((item, j) =>
            h(View, { key: j, style: s.bullet },
              h(Text, { style: s.dot   }, "·"),
              h(Text, { style: s.bText }, item),
            )
          ),
        )
      ),
    ),
  )
);

const buffer = await renderToBuffer(doc);
parentPort.postMessage(buffer, [buffer.buffer]);
