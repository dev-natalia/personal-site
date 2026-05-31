import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import { curriculo } from "@/lib/curriculo";

const C = {
  bg:      "#FFFFFF",
  sidebar: "#F1F5F9",
  accent:  "#0D9488",
  text:    "#111827",
  muted:   "#4B5563",
  light:   "#9CA3AF",
  border:  "#E2E8F0",
};

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    flexDirection: "row",
    backgroundColor: C.bg,
    fontSize: 9,
    color: C.text,
  },

  // ── sidebar
  sidebar: {
    width: "32%",
    backgroundColor: C.sidebar,
    paddingTop: 28, paddingBottom: 28,
    paddingLeft: 18, paddingRight: 14,
  },
  sideSection:    { marginBottom: 18 },
  sideSectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: C.accent,
    letterSpacing: 1,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  contactRow:   { flexDirection: "row", marginBottom: 5 },
  contactLabel: { fontSize: 7.5, color: C.light, width: 46 },
  contactValue: { fontSize: 8, color: C.muted, flex: 1 },
  skillItem:    { fontSize: 8, color: C.muted, marginBottom: 4, paddingLeft: 6 },
  eduBlock:     { marginBottom: 10 },
  eduCurso:     { fontFamily: "Helvetica-Bold", fontSize: 8, color: C.text },
  eduInst:      { fontSize: 7.5, color: C.muted, marginTop: 1 },
  eduPeriodo:   { fontSize: 7, color: C.light, marginTop: 1 },

  // ── main
  main: {
    width: "68%",
    paddingTop: 28, paddingBottom: 28,
    paddingLeft: 20, paddingRight: 22,
  },

  // header
  header:  { marginBottom: 14 },
  nome:    { fontFamily: "Helvetica-Bold", fontSize: 20, color: C.text },
  titulo:  { fontFamily: "Helvetica-Oblique", fontSize: 9, color: C.accent, marginTop: 3 },
  divider: { borderBottomWidth: 1.5, borderBottomColor: C.accent, marginTop: 10, marginBottom: 14 },

  // sections
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7.5,
    color: C.accent,
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  resumoText: { fontSize: 8.5, color: C.muted, lineHeight: 1.6, marginBottom: 16 },

  // experience
  expBlock:   { marginBottom: 13 },
  expHeader:  { flexDirection: "row", justifyContent: "space-between", marginBottom: 1 },
  expEmpresa: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: C.text },
  expPeriodo: { fontSize: 7.5, color: C.light },
  expCargo:   { fontFamily: "Helvetica-Oblique", fontSize: 8, color: C.accent, marginBottom: 5 },
  bullet:     { flexDirection: "row", marginBottom: 3, paddingLeft: 4 },
  bulletDot:  { fontSize: 9, color: C.accent, width: 10 },
  bulletText: { fontSize: 8, color: C.muted, flex: 1, lineHeight: 1.5 },
});

export function CurriculoPDF() {
  return (
    <Document title={`Currículo — ${curriculo.nome}`} author={curriculo.nome}>
      <Page size="A4" style={s.page}>

        {/* ── SIDEBAR ── */}
        <View style={s.sidebar}>

          <View style={s.sideSection}>
            <Text style={s.sideSectionTitle}>CONTATO</Text>
            <View style={s.contactRow}>
              <Text style={s.contactLabel}>Local</Text>
              <Text style={s.contactValue}>{curriculo.localizacao}</Text>
            </View>
            <View style={s.contactRow}>
              <Text style={s.contactLabel}>Email</Text>
              <Link src={`mailto:${curriculo.email}`} style={{ fontSize: 8, color: C.accent }}>
                {curriculo.email}
              </Link>
            </View>
            <View style={s.contactRow}>
              <Text style={s.contactLabel}>LinkedIn</Text>
              <Link src={`https://${curriculo.linkedin}`} style={{ fontSize: 7.5, color: C.accent }}>
                {curriculo.linkedin}
              </Link>
            </View>
            <View style={s.contactRow}>
              <Text style={s.contactLabel}>GitHub</Text>
              <Link src={`https://${curriculo.github}`} style={{ fontSize: 7.5, color: C.accent }}>
                {curriculo.github}
              </Link>
            </View>
          </View>

          <View style={s.sideSection}>
            <Text style={s.sideSectionTitle}>SKILLS</Text>
            {curriculo.skills.map((sk, i) => (
              <Text key={i} style={s.skillItem}>· {sk}</Text>
            ))}
          </View>

          <View style={s.sideSection}>
            <Text style={s.sideSectionTitle}>FORMAÇÃO</Text>
            {curriculo.formacao.map((f, i) => (
              <View key={i} style={s.eduBlock}>
                <Text style={s.eduCurso}>{f.curso}</Text>
                <Text style={s.eduInst}>{f.instituicao}</Text>
                <Text style={s.eduPeriodo}>{f.periodo}</Text>
              </View>
            ))}
          </View>

        </View>

        {/* ── MAIN ── */}
        <View style={s.main}>

          <View style={s.header}>
            <Text style={s.nome}>{curriculo.nome}</Text>
            <Text style={s.titulo}>{curriculo.titulo}</Text>
            <View style={s.divider} />
          </View>

          <Text style={s.sectionTitle}>RESUMO</Text>
          <Text style={s.resumoText}>{curriculo.resumo}</Text>

          <Text style={s.sectionTitle}>EXPERIÊNCIA</Text>
          {curriculo.experiencia.map((exp, i) => (
            <View key={i} style={s.expBlock}>
              <View style={s.expHeader}>
                <Text style={s.expEmpresa}>{exp.empresa}</Text>
                <Text style={s.expPeriodo}>{exp.periodo}</Text>
              </View>
              <Text style={s.expCargo}>{exp.cargo}</Text>
              {exp.itens.map((item, j) => (
                <View key={j} style={s.bullet}>
                  <Text style={s.bulletDot}>·</Text>
                  <Text style={s.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}

        </View>
      </Page>
    </Document>
  );
}
