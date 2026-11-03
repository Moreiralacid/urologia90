/* ==========================================================================
   URO 90 — Configuração declarativa
   Conteúdo autoral de estudo, baseado em diretrizes públicas (EAU/AUA/SBU/MSD).
   Não é prova oficial nem material de banca. Prioridades = inferência pedagógica.
   ========================================================================== */
window.URO = window.URO || {};

URO.meta = {
  app: "URO 90",
  version: "1.2.0",
  storageKey: "URO90_STATE_V1",
  dbName: "URO90_DB",
  language: "pt-BR",
  timezone: "America/Sao_Paulo",
  buildDate: "2026-11-02",
  disclaimer: "Plataforma autoral de revisão para prova de Urologia. O conteúdo resume diretrizes públicas e não substitui o material da disciplina, o professor ou avaliação médica individual.",
  evidenceNote: "O banco amplo é inferência pedagógica baseada em diretrizes e recorrência típica em avaliações — marcado [VERIFICAR]. A trilha AP2 2026.2 acrescenta 36 questões históricas com prova de origem preservada; isso não é previsão da próxima prova nem estatística oficial da banca."
};

/* Arquitetura da avaliação assumida (editável na tela Meu Plano).
   Prova objetiva de 40 itens, 5 alternativas, 2,5 pts cada; caso clínico dissertativo de 0 a 10. */
URO.exam = {
  name: "Prova de Urologia",
  subtitle: "Reta final de 1 dia — prioridades de alta incidência",
  objective: {
    questions: 40,
    alternatives: 5,
    points: 100,
    perQuestion: 2.5,
    minScore: 50,
    minPerArea: 1,
    penalty: 0,
    meta: 90,
    metaHits: 36
  },
  essay: {
    points: 10,
    minScore: 5,
    meta: 9,
    lines: 30,
    charsPerLine: 65
  },
  combined: { points: 110, meta: 99 },
  areas: ["onc", "inf", "lit", "fun", "and", "tra", "ped", "bas"]
};

/* Distribuição do simulado (40 itens) e do banco.
   As prioridades macro usam a distribuição do simulado como proxy de peso. */
URO.areas = [
  {
    id: "onc", name: "Oncologia urológica", short: "ONCO", color: "#dc2626",
    questions: 8, bank: 10, weight: 20, timeShare: 22, priority: "Prioritária absoluta",
    why: "Maior bloco de alta incidência: próstata, bexiga, rim e testículo concentram decisões diagnósticas e terapêuticas clássicas."
  },
  {
    id: "inf", name: "Infecções do trato urinário", short: "INF", color: "#2563eb",
    questions: 6, bank: 8, weight: 15, timeShare: 14, priority: "Prioritária absoluta",
    why: "Cenário frequente em prova e emergência: cistite, pielonefrite, prostatite, ITU na gravidez e sepse urinária."
  },
  {
    id: "lit", name: "Litíase e obstrução", short: "LIT", color: "#7c3aed",
    questions: 6, bank: 8, weight: 15, timeShare: 16, priority: "Prioritária absoluta",
    why: "Cólica renal é diagnóstico sindrômico clássico; indicações de desobstrução e prevenção rendem muitos pontos."
  },
  {
    id: "fun", name: "Disfunções miccionais e HPB", short: "FUN", color: "#0891b2",
    questions: 6, bank: 8, weight: 15, timeShare: 14, priority: "Complementar de alto impacto",
    why: "HPB, incontinência e bexiga neurogênica aparecem em quadros clínicos e em condutas cirúrgicas comparadas."
  },
  {
    id: "and", name: "Andrologia e emergências escrotais", short: "AND", color: "#d97706",
    questions: 5, bank: 8, weight: 12.5, timeShare: 12, priority: "Complementar de alto impacto",
    why: "Torção testicular é emergência com janela terapêutica; infertilidade, disfunção erétil e priapismo completam o bloco."
  },
  {
    id: "tra", name: "Trauma urológico e emergências", short: "TRA", color: "#475569",
    questions: 4, bank: 6, weight: 10, timeShare: 9, priority: "Complementar estratégica",
    why: "Poucos itens, mas alto rendimento por regras objetivas: grau de lesão, exame contrastado e via de acesso."
  },
  {
    id: "ped", name: "Urologia pediátrica", short: "PED", color: "#059669",
    questions: 3, bank: 6, weight: 7.5, timeShare: 8, priority: "Complementar estratégica",
    why: "Criptorquidia, refluxo, hidronefrose e válvula de uretra posterior têm condutas padronizadas e cobráveis."
  },
  {
    id: "bas", name: "Fundamentos: anatomia, fisiologia e hematúria", short: "BAS", color: "#64748b",
    questions: 2, bank: 6, weight: 5, timeShare: 5, priority: "Complementar estratégica",
    why: "Base para interpretar o restante; hematúria é tema transversal com algoritmo próprio."
  }
];

/* --------------------------------------------------------------------------
   Camada Meso — 28 tópicos (cobertura integral do programa de revisão)
   temp: hot | warm | cold
   -------------------------------------------------------------------------- */
URO.topics = [
  {
    id: "top-bas-01", area: "bas", title: "Anatomia cirúrgica do trato urinário", temp: "hot", minutes: 40,
    subtopics: ["Rim, ureter e bexiga", "Zonas da próstata", "Uretra masculina e feminina", "Irrigação, drenagem linfática e inervação"],
    evidence: "[VERIFICAR] Base anatômica cobrada de forma aplicada em quase toda questão cirúrgica.",
    source: "Campbell-Walsh-Wein Urology, 12. ed.; Moore, Anatomia Orientada para a Clínica."
  },
  {
    id: "top-bas-02", area: "bas", title: "Fisiologia da micção e exame urológico", temp: "warm", minutes: 30,
    subtopics: ["Fases de enchimento e esvaziamento", "Centros pontinos e controle medular", "Toque retal e exame da bolsa escrotal", "Urofluxometria e resíduo pós-miccional"],
    evidence: "[VERIFICAR] Fisiologia costuma aparecer embutida em bexiga neurogênica e HPB.",
    source: "EAU Guidelines on Non-neurogenic Female LUTS; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-bas-03", area: "bas", title: "Hematúria e exames de imagem", temp: "hot", minutes: 35,
    subtopics: ["Microscópica versus macroscópica", "Hematúria glomerular versus urológica", "TC urográfica e cistoscopia", "Falsos positivos e anticoagulação"],
    evidence: "[VERIFICAR] Tema transversal com algoritmo objetivo e alto rendimento.",
    source: "AUA/EAU Guideline on Hematuria; Radiopaedia."
  },
  {
    id: "top-inf-04", area: "inf", title: "ITU baixa: cistite e uretrite", temp: "hot", minutes: 35,
    subtopics: ["Cistite não complicada", "Uretrite gonocócica e não gonocócica", "Quando não tratar bacteriúria assintomática", "Escolha e duração do antibiótico"],
    evidence: "[VERIFICAR] Alta frequência em provas e em atendimento primário.",
    source: "IDSA/ESCMID; NICE NG109; EAU Urological Infections."
  },
  {
    id: "top-inf-05", area: "inf", title: "Pielonefrite e ITU complicada", temp: "hot", minutes: 40,
    subtopics: ["Critérios de gravidade e sepse", "Indicação de internação", "Obstrução infectada", "Imagem e coleta de cultura"],
    evidence: "[VERIFICAR] Cenário de emergência com conduta que muda desfecho.",
    source: "EAU Urological Infections; Surviving Sepsis Campaign; MSD Manual."
  },
  {
    id: "top-inf-06", area: "inf", title: "Prostatite e epididimite", temp: "warm", minutes: 30,
    subtopics: ["Prostatite bacteriana aguda", "Prostatite crônica e dor pélvica", "Epididimite por IST versus entérica", "Abscesso prostático"],
    evidence: "[VERIFICAR] Diferenciação clínica e duração terapêutica são cobradas.",
    source: "EAU Urological Infections; CDC STI Treatment Guidelines."
  },
  {
    id: "top-inf-07", area: "inf", title: "ITU na gravidez, cateter e profilaxia", temp: "warm", minutes: 25,
    subtopics: ["Rastreio e tratamento na gestação", "Antibióticos seguros por trimestre", "CAUTI e febre pós-instrumentação", "Profilaxia perioperatória"],
    evidence: "[VERIFICAR] Regras simples e frequentemente negligenciadas em prova.",
    source: "NICE NG111; EAU Urological Infections; ACOG."
  },
  {
    id: "top-lit-08", area: "lit", title: "Litíase: tipos e fisiopatologia", temp: "hot", minutes: 30,
    subtopics: ["Oxalato de cálcio, estruvita, ácido úrico e cistina", "pH urinário e cristalúria", "Fatores de risco", "Composição e radiopacidade"],
    evidence: "[VERIFICAR] Base para prevenção e escolha terapêutica.",
    source: "EAU Guidelines on Urolithiasis; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-lit-09", area: "lit", title: "Cólica renal: diagnóstico e crise", temp: "hot", minutes: 40,
    subtopics: ["Quadro clínico e diagnóstico diferencial", "TC sem contraste", "Analgesia e terapia expulsiva", "Indicações de desobstrução urgente"],
    evidence: "[VERIFICAR] Diagnóstico sindrômico de altíssima frequência.",
    source: "EAU Urolithiasis; AUA/Endourological Society Guideline."
  },
  {
    id: "top-lit-10", area: "lit", title: "Tratamento cirúrgico e prevenção metabólica", temp: "warm", minutes: 35,
    subtopics: ["TamANH de ureteroscopia, LECO e PCNL", "Tamanho e localização do cálculo", "Hidratação e dieta", "Tiazídico, alopurinol e citrato"],
    evidence: "[VERIFICAR] Comparações de indicação cirúrgica caem com frequência.",
    source: "EAU Urolithiasis; AUA Guideline."
  },
  {
    id: "top-fun-11", area: "fun", title: "HPB: avaliação e quadro clínico", temp: "hot", minutes: 35,
    subtopics: ["Sintomas obstrutivos e irritativos", "IPSS, toque retal e PSA", "Resíduo pós-miccional e urofluxometria", "Diagnósticos diferenciais"],
    evidence: "[VERIFICAR] Doença prevalente e presença clássica em prova.",
    source: "EAU Guidelines on Non-neurogenic Male LUTS; AUA BPH Guideline."
  },
  {
    id: "top-fun-12", area: "fun", title: "HPB: tratamento farmacológico e cirúrgico", temp: "hot", minutes: 40,
    subtopics: ["Alfa-bloqueadores e 5-ARI", "Terapia combinada e anticolinérgicos", "TURP, HOLEP e prostatectomia simples", "Complicações e síndrome de reabsorção"],
    evidence: "[VERIFICAR] Escolha terapêutica por volume prostático e comorbidade.",
    source: "EAU Male LUTS; AUA BPH Guideline; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-fun-13", area: "fun", title: "Incontinência urinária e prolapso", temp: "warm", minutes: 35,
    subtopics: ["Incontinência de esforço, urgência e transbordamento", "Avaliação e diário miccional", "Tratamento comportamental e farmacológico", "Sling, colpossuspensão e pessário"],
    evidence: "[VERIFICAR] Diferenciação clínica simples e cobrável.",
    source: "EAU Female LUTS; ACOG; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-fun-14", area: "fun", title: "Bexiga neurogênica e retenção urinária", temp: "warm", minutes: 30,
    subtopics: ["Lesão medular alta versus baixa", "Bexiga hiperativa neurogênica", "Cateterismo intermitente limpo", "Síndrome da cauda equina e bexiga acinética"],
    evidence: "[VERIFICAR] Correlação neuroanatomia e conduta é ponto clássico.",
    source: "EAU Neuro-urology; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-onc-15", area: "onc", title: "Câncer de próstata: rastreamento e diagnóstico", temp: "hot", minutes: 40,
    subtopics: ["PSA, densidade e fração livre", "Toque retal e RM multiparamétrica", "PI-RADS e biópsia dirigida", "Gleason e ISUP"],
    evidence: "[VERIFICAR] Tema de maior peso oncológico em avaliações.",
    source: "EAU Prostate Cancer Guidelines; AUA Early Detection Guideline; NCCN."
  },
  {
    id: "top-onc-16", area: "onc", title: "Câncer de próstata: estadiamento e tratamento", temp: "hot", minutes: 40,
    subtopics: ["Grupos de risco e estadiamento", "Vigilância ativa", "Prostatectomia versus radioterapia", "Doença avançada e ADT"],
    evidence: "[VERIFICAR] Decisão terapêutica por risco rende questões de raciocínio.",
    source: "EAU Prostate Cancer; NCCN Prostate Cancer; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-onc-17", area: "onc", title: "Câncer de bexiga", temp: "hot", minutes: 40,
    subtopics: ["Urotelial e fatores de risco", "NMIBC e BCG", "CIS e seguimento cistoscópico", "Cistectomia e derivação urinária"],
    evidence: "[VERIFICAR] Hematúria indolor + tabagismo é associação clássica.",
    source: "EAU Non-muscle-invasive Bladder Cancer; AUA Bladder Cancer Guideline."
  },
  {
    id: "top-onc-18", area: "onc", title: "Câncer renal e massas renais", temp: "hot", minutes: 35,
    subtopics: ["Carcinoma de células claras e variantes", "Síndromes paraneoplásicas", "Angiomiolipoma", "Nefrectomia parcial versus radical"],
    evidence: "[VERIFICAR] Achado incidental e síndromes associadas são cobrados.",
    source: "EAU Renal Cell Carcinoma; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-onc-19", area: "onc", title: "Câncer de testículo", temp: "hot", minutes: 35,
    subtopics: ["Seminoma versus não seminoma", "AFP, hCG e LDH", "Orquiectomia inguinal radical", "Estadiamento e fertilidade"],
    evidence: "[VERIFICAR] Marcadores tumorais e via cirúrgica são pontos decisivos.",
    source: "EAU Testicular Cancer; NCCN Testicular Cancer."
  },
  {
    id: "top-and-20", area: "and", title: "Bolsa escrotal aguda e torção testicular", temp: "hot", minutes: 30,
    subtopics: ["Torção versus epididimite", "Reflexo cremastérico e sinal do ponto azul", "Doppler e janela de 6 horas", "Orquidopexia contralateral"],
    evidence: "[VERIFICAR] Emergência com diagnóstico clínico e tempo cirúrgico.",
    source: "EAU Sexual and Reproductive Health; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-and-21", area: "and", title: "Infertilidade masculina e varicocele", temp: "warm", minutes: 35,
    subtopics: ["Análise seminal da OMS", "Fatores pré-testiculares, testiculares e pós-testiculares", "Varicocele e indicação cirúrgica", "Azoospermia obstrutiva versus não obstrutiva"],
    evidence: "[VERIFICAR] Valores de referência e raciocínio hormonal.",
    source: "WHO Manual for the Examination of Human Semen, 6. ed.; AUA/ASRM Male Infertility Guideline."
  },
  {
    id: "top-and-22", area: "and", title: "Disfunção erétil e priapismo", temp: "warm", minutes: 30,
    subtopics: ["Disfunção erétil orgânica versus psicogênica", "Inibidores da PDE5 e contraindicações", "Priapismo isquêmico versus não isquêmico", "Aspiração e fenilefrina"],
    evidence: "[VERIFICAR] Priapismo é emergência com conduta sequencial clara.",
    source: "EAU Sexual and Reproductive Health; AUA Priapism Guideline."
  },
  {
    id: "top-and-23", area: "and", title: "Hipogonadismo masculino", temp: "cold", minutes: 25,
    subtopics: ["Testosterona total e LH/FSH", "Primário versus secundário", "Contraindicações da reposição", "Fertilidade e hCG"],
    evidence: "[VERIFICAR] Tema menos frequente, mas com regras objetivas de segurança.",
    source: "EAU Sexual and Reproductive Health; Endocrine Society Guideline."
  },
  {
    id: "top-tra-24", area: "tra", title: "Trauma renal e ureteral", temp: "warm", minutes: 30,
    subtopics: ["Classificação AAST", "TC com fase excretora", "Indicações absolutas de cirurgia", "Lesão ureteral iatrogênica"],
    evidence: "[VERIFICAR] Conduta por estabilidade hemodinâmica é ponto-chave.",
    source: "EAU Urological Trauma; AUA Urotrauma Guideline."
  },
  {
    id: "top-tra-25", area: "tra", title: "Trauma vesical e uretral", temp: "warm", minutes: 30,
    subtopics: ["Ruptura intraperitoneal versus extraperitoneal", "Uretrorrafia e uretrocistografia retrógrada", "Sangue no meato e próstata alta", "Trauma anterior por straddle"],
    evidence: "[VERIFICAR] Frases clássicas e sequência de exames são muito cobradas.",
    source: "EAU Urological Trauma; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-tra-26", area: "tra", title: "Fournier e sepse urológica", temp: "hot", minutes: 30,
    subtopics: ["Fasciíte necrosante perineal", "Sinais de gravidade e crepitação", "Antibiótico de amplo espectro", "Desbridamento cirúrgico urgente"],
    evidence: "[VERIFICAR] Emergência com mortalidade alta e conduta sem atraso.",
    source: "EAU Urological Infections; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-ped-27", area: "ped", title: "Criptorquidia, fimose e hérnia inguinal", temp: "hot", minutes: 30,
    subtopics: ["Descida testicular e janela de orquidopexia", "Fimose fisiológica e parafimose", "Hérnia inguinal indireta", "Hidrocele e transiluminação"],
    evidence: "[VERIFICAR] Prazos e condutas pediátricas são objetivos.",
    source: "EAU Paediatric Urology; Campbell-Walsh-Wein Urology."
  },
  {
    id: "top-ped-28", area: "ped", title: "Refluxo, hidronefrose e válvula de uretra posterior", temp: "warm", minutes: 30,
    subtopics: ["Graus de refluxo vesicoureteral", "Hidronefrose antenatal e cintilografia", "Válvula de uretra posterior", "Enurese noturna primária"],
    evidence: "[VERIFICAR] Diagnóstico por imagem e conduta inicial são cobrados.",
    source: "EAU Paediatric Urology; Campbell-Walsh-Wein Urology."
  }
];

/* --------------------------------------------------------------------------
   Camada Micro — 18 regras acionáveis de maior retorno por minuto
   -------------------------------------------------------------------------- */
URO.micro = [
  { id: "mi-01", topicId: "top-onc-19", rule: "Marcadores do testículo: AFP sobe em tumor de saco vitelino; hCG em coriocarcinoma; LDH é inespecífico e ligado à carga tumoral. Seminoma puro NÃO eleva AFP.", minutes: 8, difficulty: 1, roi: 5, prereq: "Nenhum", source: "EAU Testicular Cancer" },
  { id: "mi-02", topicId: "top-onc-19", rule: "Massa testicular sólida → orquiectomia inguinal radical. Nunca biópsia escrotal nem orquiectomia escrotal: risco de alterar drenagem linfática e recidiva local.", minutes: 6, difficulty: 1, roi: 5, prereq: "Linfáticos do testículo drenam para para-aórticos", source: "EAU Testicular Cancer" },
  { id: "mi-03", topicId: "top-and-20", rule: "Torção testicular é emergência cirúrgica: janela ideal < 6 h; após 12 h a chance de salvamento cai muito. Não esperar Doppler para operar se a suspeita é alta.", minutes: 7, difficulty: 1, roi: 5, prereq: "Nenhum", source: "EAU/ Campbell-Walsh" },
  { id: "mi-04", topicId: "top-lit-09", rule: "Cólica renal + febre/sepse ou rim único obstruído = desobstrução URGENTE (duplo J ou nefrostomia percutânea) + antibiótico. Não é apenas analgesia.", minutes: 8, difficulty: 2, roi: 5, prereq: "Obstrução infectada é emergência urológica", source: "EAU Urolithiasis" },
  { id: "mi-05", topicId: "top-lit-09", rule: "TC de abdome sem contraste é o padrão-ouro para cálculo ureteral. Ultrassom é escolha na gestação e em crianças; raio-X simples perde cálculos de ácido úrico.", minutes: 6, difficulty: 1, roi: 5, prereq: "Nenhum", source: "EAU Urolithiasis" },
  { id: "mi-06", topicId: "top-fun-12", rule: "Finasterida/dutasterida reduzem o PSA em ~50% após 6 meses. Ao interpretar PSA em usuário de 5-ARI, dobre o valor medido.", minutes: 5, difficulty: 1, roi: 5, prereq: "5-ARI inibe 5-alfa-redutase tipo 2", source: "AUA BPH / EAU Male LUTS" },
  { id: "mi-07", topicId: "top-fun-12", rule: "Síndrome de reabsorção pós-TURP: irrigação com solução hipotônica → hiponatremia dilucional, confusão, náusea, bradicardia. Tratar com NaCl 3%, restringir líquido e suspender irrigação.", minutes: 8, difficulty: 2, roi: 5, prereq: "Fisiologia da osmolaridade", source: "Campbell-Walsh-Wein Urology" },
  { id: "mi-08", topicId: "top-tra-25", rule: "Sangue no meato + fratura pélvica + próstata alta = suspeita de lesão de uretra posterior. NÃO passar sonda vesical; pedir uretrocistografia retrógrada e fazer cistostomia suprapúbica.", minutes: 8, difficulty: 2, roi: 5, prereq: "Anatomia da uretra posterior", source: "EAU Urological Trauma" },
  { id: "mi-09", topicId: "top-tra-24", rule: "Trauma renal: instabilidade hemodinâmica, hematoma em expansão ou avulsão do pedículo = indicação cirúrgica. Paciente estável com grau I–IV: tratamento conservador e reavaliação.", minutes: 6, difficulty: 2, roi: 4, prereq: "Classificação AAST", source: "AUA Urotrauma" },
  { id: "mi-10", topicId: "top-inf-05", rule: "Pielonefrite com obstrução não melhora só com antibiótico: drenar é parte do tratamento. A sepse urinária obstrutiva é uma das poucas indicações de desobstrução imediata.", minutes: 6, difficulty: 2, roi: 5, prereq: "Fisiopatologia da infecção sob pressão", source: "EAU Urological Infections" },
  { id: "mi-11", topicId: "top-inf-04", rule: "Bacteriúria assintomática só se trata na gestação e antes de cirurgia urológica invasiva. Fora disso, antibiótico não melhora desfecho e seleciona resistência.", minutes: 5, difficulty: 1, roi: 5, prereq: "Nenhum", source: "IDSA Asymptomatic Bacteriuria" },
  { id: "mi-12", topicId: "top-onc-15", rule: "PSA elevado não é biópsia automática: repetir PSA, calcular densidade e fração livre, fazer toque e RM multiparamétrica. Biópsia dirigida + sistemática quando indicada.", minutes: 7, difficulty: 2, roi: 5, prereq: "Cinética do PSA", source: "EAU Prostate Cancer" },
  { id: "mi-13", topicId: "top-onc-17", rule: "Hematúria macroscópica indolor + tabagismo = investigar câncer urotelial com cistoscopia e TC urográfica, mesmo que a hematúria tenha cessado.", minutes: 5, difficulty: 1, roi: 5, prereq: "Fatores de risco do urotelial", source: "AUA/EAU Hematuria" },
  { id: "mi-14", topicId: "top-onc-18", rule: "Carcinoma renal clássico: massa incidental, células claras, resistente à radio/quimio. Nefrectomia parcial é preferida em T1 quando tecnicamente viável.", minutes: 6, difficulty: 2, roi: 4, prereq: "Nenhum", source: "EAU Renal Cell Carcinoma" },
  { id: "mi-15", topicId: "top-fun-14", rule: "Cauda equina: anestesia em sela + retenção urinária + fraqueza bilateral de membros inferiores = emergência (MRI e descompressão). Bexiga acinética com resíduo alto.", minutes: 7, difficulty: 2, roi: 5, prereq: "Neuroanatomia S2–S4", source: "EAU Neuro-urology" },
  { id: "mi-16", topicId: "top-ped-28", rule: "Válvula de uretra posterior: menino, hidronefrose bilateral, bexiga espessada, jato fraco, 'keyhole' na uretrocistografia. Cateter vesical urgente e ablação endoscópica.", minutes: 7, difficulty: 2, roi: 5, prereq: "Obstrução infravesical congênita", source: "EAU Paediatric Urology" },
  { id: "mi-17", topicId: "top-tra-26", rule: "Fournier: dor desproporcional, crepitação, necrose perineal, diabetes. Desbridamento cirúrgico imediato + piperacilina-tazobactam + cobertura para MRSA/anaeróbios. Antibiótico isolado mata o paciente.", minutes: 8, difficulty: 2, roi: 5, prereq: "Infecção polimicrobiana de tecidos moles", source: "EAU Urological Infections" },
  { id: "mi-18", topicId: "top-and-22", rule: "Priapismo isquêmico (>4 h, corpos cavernosos rígidos, dor) é emergência: aspirar sangue e injetar fenilefrina; se falhar, shunt cirúrgico. Priapismo não isquêmico costuma ser indolor e por trauma.", minutes: 7, difficulty: 2, roi: 4, prereq: "Fisiologia da ereção", source: "AUA Priapism Guideline" }
];

/* --------------------------------------------------------------------------
   Biblioteca de materiais e fontes
   -------------------------------------------------------------------------- */
URO.materials = [
  { id: "mat-01", title: "EAU Guidelines — portal oficial", org: "European Association of Urology", type: "Diretriz", url: "https://uroweb.org/guidelines", note: "Diretrizes atualizadas de urolitíase, infecções, câncer de próstata/bexiga/rim, trauma e andrologia.", tags: ["todas"] },
  { id: "mat-02", title: "AUA Guidelines", org: "American Urological Association", type: "Diretriz", url: "https://www.auanet.org/guidelines-and-quality/guidelines", note: "Recomendações por doença, com força de evidência e algoritmos.", tags: ["todas"] },
  { id: "mat-03", title: "SBU — Sociedade Brasileira de Urologia", org: "SBU", type: "Sociedade", url: "https://www.sbu.org.br", note: "Guias e conteúdo em português; útil para terminologia e condutas locais.", tags: ["todas"] },
  { id: "mat-04", title: "Campbell-Walsh-Wein Urology", org: "Elsevier", type: "Livro-texto", url: "https://www.sciencedirect.com/book/9780323642615/campbell-walsh-wein-urology", note: "Referência acadêmica de urologia; consulte a edição disponível na sua biblioteca.", tags: ["todas"] },
  { id: "mat-05", title: "MSD Manual — Doenças geniturinárias", org: "Merck Sharp & Dohme", type: "Referência", url: "https://www.msdmanuals.com/pt-br/profissional/doen%C3%A7as-geniturin%C3%A1rias", note: "Revisão rápida em português, boa para véspera e dúvidas pontuais.", tags: ["todas"] },
  { id: "mat-06", title: "EAU — Urolitíase", org: "EAU", type: "Diretriz", url: "https://uroweb.org/guidelines/urolithiasis", note: "Diagnóstico, terapia expulsiva, indicações cirúrgicas e prevenção metabólica.", tags: ["lit"] },
  { id: "mat-07", title: "EAU — Infecções urológicas", org: "EAU", type: "Diretriz", url: "https://uroweb.org/guidelines/urological-infections", note: "ITU complicada, prostatite, epididimite, sepse e profilaxia.", tags: ["inf"] },
  { id: "mat-08", title: "EAU — Câncer de próstata", org: "EAU", type: "Diretriz", url: "https://uroweb.org/guidelines/prostate-cancer", note: "Rastreamento, RM, biópsia, grupos de risco e tratamento.", tags: ["onc"] },
  { id: "mat-09", title: "EAU — Câncer de bexiga não músculo-invasivo", org: "EAU", type: "Diretriz", url: "https://uroweb.org/guidelines/non-muscle-invasive-bladder-cancer", note: "Estratificação de risco, BCG e seguimento.", tags: ["onc"] },
  { id: "mat-10", title: "EAU — Trauma urológico", org: "EAU", type: "Diretriz", url: "https://uroweb.org/guidelines/urological-trauma", note: "Classificação e manejo de trauma renal, ureteral, vesical e uretral.", tags: ["tra"] },
  { id: "mat-11", title: "NICE NG109 — ITU em adultos", org: "NICE (Reino Unido)", type: "Diretriz", url: "https://www.nice.org.uk/guidance/ng109", note: "Antibioticoterapia, duração e manejo de ITU recorrente.", tags: ["inf"] },
  { id: "mat-12", title: "OMS — Manual de análise seminal", org: "Organização Mundial da Saúde", type: "Manual", url: "https://www.who.int/publications/i/item/9789240030787", note: "Valores de referência do espermograma (6.ª edição).", tags: ["and"] },
  { id: "mat-13", title: "Radiopaedia — Urologia", org: "Radiopaedia", type: "Imagem", url: "https://radiopaedia.org/", note: "Casos e sinais radiológicos: cálculo, tumor, trauma e obstrução.", tags: ["bas", "onc", "tra"] },
  { id: "mat-14", title: "UICC — Classificação TNM", org: "Union for International Cancer Control", type: "Estadiamento", url: "https://www.uicc.org/resources/tnm", note: "Referência para estadiamento oncológico; confira a edição adotada na sua prova.", tags: ["onc"] },
  { id: "mat-15", title: "CDC — Diretrizes de tratamento de IST", org: "CDC", type: "Diretriz", url: "https://www.cdc.gov/std/treatment-guidelines/default.htm", note: "Uretrite, epididimite e parceiros sexuais.", tags: ["inf", "and"] },
  { id: "mat-16", title: "Surviving Sepsis Campaign", org: "SCCM/ESICM", type: "Diretriz", url: "https://www.sccm.org/survivingsepsiscampaign", note: "Sepse urinária: antibiótico precoce, controle de foco e ressuscitação.", tags: ["inf", "tra"] }
];

/* --------------------------------------------------------------------------
   Casos clínicos dissertativos (autoavaliação guiada)
   -------------------------------------------------------------------------- */
URO.cases = [
  {
    id: "caso-01", title: "Sepse urinária com obstrução", area: "inf", minutes: 30,
    prompt: "<p>Homem de 58 anos, diabético, chega ao pronto-socorro com febre de 39,2 °C, calafrios, dor lombar à direita e confusão mental iniciada há 6 horas. PA 86/54 mmHg, FC 124 bpm, FR 26/min, SatO2 94% em ar ambiente. Exame: dor à punho-percussão lombar direita, sem sinais de peritonite. Creatinina 2,8 mg/dL (previamente 0,9), leucócitos 19.800/mm³ com 12% de bastões, lactato 4,2 mmol/L. Ultrassom mostra hidronefrose direita moderada com cálculo de 9 mm no ureter proximal.</p><p>Descreva, de forma fundamentada, a conduta imediata e a sequência terapêutica nas primeiras 24 horas.</p>",
    tasks: ["Priorize o controle do foco e a ressuscitação.", "Justifique a escolha do método de desobstrução.", "Defina antibioticoterapia empírica e ajustes.", "Explique por que só antibiótico não resolve."],
    expected: "<h2>Espelho de resposta</h2><p><strong>1. Reconhecer sepse com foco urinário obstrutivo.</strong> O quadro preenche critérios de sepse (infecção + disfunção orgânica: hipotensão, creatinina elevada, lactato, alteração mental). A hidronefrose com cálculo impactado define <strong>obstrução infectada</strong>, emergência urológica.</p><p><strong>2. Ressuscitação paralela.</strong> Acesso venoso, cristaloide balanceado 30 mL/kg nas primeiras 3 h (reavaliando), monitorização, hemoculturas e urocultura antes do antibiótico quando não atrasar, lactato seriado, noradrenalina se hipotensão persistente. Controle glicêmico.</p><p><strong>3. Antibiótico empírico precoce.</strong> Cobertura de enterobactérias produtoras de ESBL conforme risco local: piperacilina-tazobactam ou cefepime; em choque ou risco alto de resistência, carbapenêmico. Ajustar após cultura e função renal.</p><p><strong>4. Desobstrução urgente — o ponto central.</strong> A pressão na via urinária infectada favorece bacteremia e necrose. Escolha: <strong>nefrostomia percutânea</strong> (preferida em sepse grave/instabilidade) ou cateter duplo J, conforme disponibilidade e experiência. Não retardar por exames adicionais.</p><p><strong>5. Seguimento.</strong> UTI, reavaliação hemodinâmica, controle de eletrólitos, nova imagem se não melhorar, tratamento definitivo do cálculo após estabilização. Investigar e controlar diabetes.</p><div class='callout warn'><strong>Erro grave:</strong> prescrever antibiótico e aguardar melhora sem drenar a obstrução. A fonte não é controlada enquanto a urina infectada permanece sob pressão.</div>",
    rubric: [
      { label: "Reconhecimento da sepse e da obstrução infectada", max: 5, note: "Sepse + hidronefrose + cálculo = emergência; não apenas pielonefrite." },
      { label: "Ressuscitação e antibioticoterapia adequadas", max: 2.5, note: "Volume, culturas, antibiótico de amplo espectro precoce e ajuste renal." },
      { label: "Desobstrução urgente e seguimento", max: 2.5, note: "Nefrostomia ou duplo J sem atraso; plano pós-estabilização." }
    ]
  },
  {
    id: "caso-02", title: "PSA elevado: investigar sem biopsiar às cegas", area: "onc", minutes: 30,
    prompt: "<p>Homem de 63 anos, assintomático, procura consulta para 'checar a próstata'. Pai com câncer de próstata aos 70 anos. Toque retal: próstata de 40 g, superfície lisa, sem nódulos. PSA total 6,8 ng/mL; PSA livre 12%; creatinina normal; urina sem leucócitos. Ele pergunta se precisa 'fazer a biópsia imediatamente'.</p><p>Explique a investigação, a interpretação dos dados e a decisão compartilhada.</p>",
    tasks: ["Interprete PSA total, fração livre e toque.", "Descreva o papel da RM multiparamétrica.", "Explique biópsia dirigida e sistemática.", "Discuta vigilância ativa versus tratamento."],
    expected: "<h2>Espelho de resposta</h2><p><strong>1. PSA não é diagnóstico.</strong> 6,8 ng/mL é elevado, mas próstata de 40 g e hiperplasia benigna podem contribuir. Fração livre de 12% aumenta a suspeita (valores &lt; 10–15% associam-se a maior risco), enquanto toque normal é tranquilizador, mas não exclui câncer. Confirmar com nova dosagem em condições adequadas (sem ejaculação/estímulo recente, sem ITU, mesma metodologia).</p><p><strong>2. Risco individual.</strong> Idade, história familiar de primeiro grau e etnia negra aumentam o risco. Calcular densidade do PSA (PSA/volume): 6,8/40 = 0,17 ng/mL/g, valor que reforça a investigação.</p><p><strong>3. RM multiparamétrica antes da biópsia.</strong> Estratifica lesões por PI-RADS. Em centros experientes, PI-RADS 1–2 com densidade baixa pode permitir seguimento; PI-RADS 3–5 indica biópsia. A RM reduz biópsias inúteis e melhora a detecção de tumores clinicamente significativos.</p><p><strong>4. Biópsia.</strong> Preferencialmente por via transperineal (menor risco de sepse) ou transretal com profilaxia adequada. Fazer <strong>biópsia dirigida às lesões suspeitas + amostragem sistemática</strong>, pois cerca de 10–20% dos cânceres significativos podem não ser visíveis na RM. Solicitar escore de Gleason/ISUP e número de fragmentos positivos.</p><p><strong>5. Decisão compartilhada.</strong> Se câncer de baixo risco (ISUP 1, PSA &lt; 10, baixo volume), vigilância ativa é opção preferencial: PSA seriado, RM e biópsia de confirmação. Se risco intermediário/alto ou expectativa de vida longa, discutir prostatectomia radical versus radioterapia, com efeitos sobre continência, função erétil e intestino. Rastreamento não é 'biópsia universal'.</p>",
    rubric: [
      { label: "Interpretação integrada de PSA, fração livre e toque", max: 5, note: "Não tratar PSA isolado; considerar volume, densidade e contexto." },
      { label: "Uso racional da RM e da biópsia", max: 2.5, note: "PI-RADS, dirigida + sistemática, via e profilaxia." },
      { label: "Decisão compartilhada e vigilância ativa", max: 2.5, note: "Estratificação de risco e preferências do paciente." }
    ]
  },
  {
    id: "caso-03", title: "Trauma pélvico com sangue no meato", area: "tra", minutes: 25,
    prompt: "<p>Homem de 34 anos, motociclista, é trazido após colisão frontal. Está consciente, PA 110/70 mmHg, FC 108 bpm. Refere dor pélvica intensa e incapacidade de urinar. Ao exame: equimose perineal, sangue no meato uretral, bexiga palpável acima da sínfise e próstata não claramente palpável. Radiografia mostra fratura de ramos pubianos bilateral.</p><p>Qual a suspeita, quais exames solicitar e qual a conduta imediata? O que NÃO deve ser feito?</p>",
    tasks: ["Identifique a lesão provável.", "Descreva o exame de imagem correto.", "Defina o manejo inicial da bexiga.", "Explique o seguimento definitivo."],
    expected: "<h2>Espelho de resposta</h2><p><strong>1. Suspeita: lesão de uretra posterior (membranosa).</strong> Fratura pélvica + sangue no meato + retenção + bexiga palpável + próstata 'alta' formam o quadro clássico. A uretra posterior é fixada pelo ligamento puboprostático; o deslocamento da sínfise pode cisalhá-la.</p><p><strong>2. Exame.</strong> <strong>Uretrocistografia retrógrada</strong> é o padrão para confirmar e localizar a lesão. Não é necessário TC de uretra. Avaliar também trauma associado (bexiga, reto, vascular) conforme mecanismo; TC de abdome/pelve com contraste se estável.</p><p><strong>3. Conduta imediata.</strong> <strong>Não tentar passar sonda vesical</strong> — risco de converter lesão parcial em completa, criar falso trajeto e agravar sangramento. Realizar <strong>cistostomia suprapúbica</strong> para derivação urinária, analgesia, antibiótico e avaliação cirúrgica.</p><p><strong>4. Definitivo.</strong> Lesões parciais podem ser manejadas com cateter suprapúbico e reavaliação; completas geralmente necessitam de uretroplastia tardia (após 3–6 meses), quando a inflamação cedeu. Não fazer uretrorrafia primária aberta na fase aguda na maioria dos casos. Acompanhar estenose, incontinência e disfunção erétil.</p><div class='callout warn'><strong>Não fazer:</strong> cateterismo uretral às cegas, palpação prostática vigorosa ou 'teste' com sonda. Sangue no meato é contraindicação relativa a cateterismo até excluir lesão.</div>",
    rubric: [
      { label: "Reconhecimento da lesão uretral posterior", max: 5, note: "Nexo fratura pélvica + meato sangrante + retenção." },
      { label: "Sequência de imagem e derivação", max: 2.5, note: "Uretrocistografia retrógrada e cistostomia suprapúbica." },
      { label: "Evitar cateterismo e planejar seguimento", max: 2.5, note: "Risco de falso trajeto; uretroplastia tardia e complicações." }
    ]
  },
  {
    id: "caso-04", title: "Dor testicular aguda em adolescente", area: "and", minutes: 25,
    prompt: "<p>Adolescente de 15 anos chega com dor testicular direita súbita há 3 horas, náuseas e vômitos. Nega trauma e febre. Exame: testículo direito elevado, doloroso à palpação difusa, reflexo cremastérico ausente à direita, dor intensa que não alivia com elevação. Ultrassom Doppler mostra fluxo reduzido no testículo direito; o restante do exame é normal.</p><p>Qual a hipótese principal, o diferencial e a conduta? Justifique o tempo.</p>",
    tasks: ["Diferencie torção de epididimite.", "Interprete o Doppler.", "Defina a conduta e o tempo cirúrgico.", "Explique o manejo do testículo contralateral."],
    expected: "<h2>Espelho de resposta</h2><p><strong>1. Hipótese principal: torção testicular.</strong> Dor súbita, náuseas, testículo alto, reflexo cremastérico abolido e ausência de alívio com elevação (sinal de Prehn negativo) apontam para torção. Epididimite costuma ter início mais gradual, febre, dor localizada no epidídimo e alívio com elevação.</p><p><strong>2. Doppler.</strong> Fluxo reduzido/ausente é compatível com torção, mas um Doppler normal não exclui torção intermitente ou precoce. O diagnóstico é clínico e a exploração cirúrgica não deve esperar por imagem quando a suspeita é alta.</p><p><strong>3. Conduta.</strong> <strong>Exploração escrotal urgente</strong> com detorção e orquidopexia se viável. A janela ideal é de até 6 horas; após 12 horas a taxa de salvamento cai drasticamente. Se o testículo estiver necrótico, orquiectomia. Nunca apenas analgesia e retorno ambulatorial.</p><p><strong>4. Contralateral.</strong> Fixar o testículo contralateral (orquidopexia bilateral), pois a anomalia de fixação (bell-clapper) costuma ser bilateral. Orientar sobre fertilidade e acompanhamento.</p><div class='callout green'><strong>Ponto de prova:</strong> torção = emergência cirúrgica; epididimite = tratamento clínico. O tempo de isquemia é o fator prognóstico mais importante.</div>",
    rubric: [
      { label: "Diagnóstico diferencial e sinais clínicos", max: 5, note: "Início súbito, reflexo cremastérico, Prehn, náuseas." },
      { label: "Conduta cirúrgica e janela de tempo", max: 2.5, note: "Exploração imediata; < 6 h; não esperar imagem." },
      { label: "Orquidopexia contralateral e seguimento", max: 2.5, note: "Bell-clapper bilateral; fertilidade." }
    ]
  },
  {
    id: "caso-05", title: "Hidronefrose neonatal e jato urinário fraco", area: "ped", minutes: 25,
    prompt: "<p>Recém-nascido do sexo masculino, 20 dias, apresenta febre, recusa alimentar e jato urinário fraco desde o nascimento. Ultrassom pré-natal mostrava hidronefrose bilateral e bexiga espessada. Ao exame: palpação de bexiga distendida, sem massa escrotal. Creatinina 1,4 mg/dL; leucócitos 18.000/mm³; urina com piúria.</p><p>Qual a principal hipótese, o exame confirmatório e a conduta inicial? Como prevenir lesão renal?</p>",
    tasks: ["Identifique a obstrução congênita.", "Descreva o achado típico na uretrocistografia.", "Defina a conduta urgente.", "Explique o seguimento renal."],
    expected: "<h2>Espelho de resposta</h2><p><strong>1. Hipótese: válvula de uretra posterior (VUP).</strong> Menino, hidronefrose bilateral, bexiga espessada, jato fraco e retenção urinária. É a obstrução infravesical congênita mais comum em meninos e pode se manifestar por ITU ou insuficiência renal.</p><p><strong>2. Exame.</strong> <strong>Uretrocistografia miccional</strong> mostra uretra posterior dilatada com transição abrupta (sinal do 'keyhole') e refluxo vesicoureteral frequente. Ultrassom mostra espessamento do detrusor e dilatação do trato superior.</p><p><strong>3. Conduta inicial.</strong> <strong>Cateterismo vesical urgente</strong> para desobstruir e drenar urina infectada; antibiótico para ITU; correção de distúrbios hidroeletrolíticos e acidose. Após estabilização, <strong>ablação endoscópica das válvulas</strong>. Em casos graves, derivação temporária (vesicostomia) pode ser necessária.</p><p><strong>4. Seguimento.</strong> Função renal, creatinina, eletrólitos, refluxo e bexiga neurogênica secundária. Muitos evoluem com bexiga de baixa complacência e precisam de cateterismo intermitente e acompanhamento nefrológico/urológico prolongado. A obstrução crônica pode levar a doença renal crônica mesmo após a desobstrução.</p><div class='callout warn'><strong>Erro comum:</strong> atribuir o quadro a 'ITU simples' e não palpar a bexiga ou ignorar o jato fraco. A febre pode ser a primeira manifestação da obstrução.</div>",
    rubric: [
      { label: "Reconhecimento da válvula de uretra posterior", max: 5, note: "Menino + hidronefrose bilateral + bexiga espessada + jato fraco." },
      { label: "Confirmação e desobstrução urgente", max: 2.5, note: "Uretrocistografia; cateter vesical; antibiótico; ablação." },
      { label: "Seguimento renal e vesical", max: 2.5, note: "DRC, complacência, refluxo, cateterismo intermitente." }
    ]
  }
];

/* Checklists de véspera e dia da prova */
URO.checklists = {
  vespera: [
    { id: "chk-v1", title: "Fechar o conteúdo novo até 21h", desc: "Depois disso, só flashcards, caderno de erros e sono. Conteúdo novo na véspera aumenta ansiedade sem ganho." },
    { id: "chk-v2", title: "Revisar 20 flashcards de maior dificuldade", desc: "Priorize os marcados como 'não lembrei' e as regras micro de emergência." },
    { id: "chk-v3", title: "Separar documento original com foto e caneta transparente", desc: "Confira também comprovante de inscrição, se exigido, e água/leve lanche." },
    { id: "chk-v4", title: "Conferir local, horário e rota", desc: "Calcule chegar com 60 minutos de antecedência. Salve o endereço offline." },
    { id: "chk-v5", title: "Dormir 7–8 horas", desc: "Sono consolida memória. Virar a noite reduz desempenho em questões de raciocínio." },
    { id: "chk-v6", title: "Reler apenas a Régua de Corte", desc: "10 regras de emergência: torção, obstrução infectada, trauma uretral, Fournier, PUV, cauda equina." }
  ],
  prova: [
    { id: "chk-p1", title: "Chegar com 60 min de antecedência", desc: "Evite imprevistos de trânsito e fila; localize a sala antes." },
    { id: "chk-p2", title: "Ler o enunciado duas vezes e grifar o comando", desc: "A pergunta often pede 'a conduta inicial' ou 'o diagnóstico mais provável' — não o tratamento definitivo." },
    { id: "chk-p3", title: "Responder todas as questões", desc: "Sem desconto por erro: nunca deixar em branco. Marque as dúvidas e volte depois." },
    { id: "chk-p4", title: "Gestão de tempo: ~1,5 min por questão", desc: "Se travar, marque, siga e retorne. Reserve 10 min finais para o cartão." },
    { id: "chk-p5", title: "Desconfiar de 'sempre', 'nunca' e 'somente'", desc: "Em medicina, exceções importam. Prefira a alternativa com conduta proporcional e segura." },
    { id: "chk-p6", title: "No caso clínico: estrutura antes de escrever", desc: "Reconheça o problema, justifique, descreva conduta e seguimento. Use terminologia precisa." }
  ]
};
