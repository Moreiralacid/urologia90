/* Questões 1–30 — Fundamentos, Infecções, Litíase e Disfunções miccionais */
URO.questions = URO.questions || [];

URO.questions.push(
  {
    id: "q-bas-01", topicId: "top-bas-01", area: "bas", difficulty: 1,
    stem: "Durante a orquiectomia radical por neoplasia testicular, a via de acesso recomendada é a inguinal. Qual é a principal justificativa anatômica para evitar a via escrotal?",
    options: [
      "O testículo drena para linfonodos para-aórticos; a manipulação escrotal pode alterar a drenagem linfática e favorecer recidiva local.",
      "A artéria testicular origina-se da artéria femoral, tornando a via escrotal tecnicamente impossível.",
      "O testículo é um órgão intraperitoneal e a via escrotal não permite acesso ao pedículo.",
      "O testículo drena primariamente para linfonodos inguinais, que devem ser preservados.",
      "A via escrotal impede a identificação do epidídimo e do ducto deferente."
    ],
    answer: 0,
    comment: "O testículo drena para os linfonodos para-aórticos, acompanhando os vasos gonadais. A incisão escrotal rompe esse padrão e pode semear a pele e os linfáticos inguinais, aumentando recidiva local. A artéria testicular nasce da aorta, o testículo é extraperitoneal e a drenagem inguinal é da pele escrotal, não do testículo. A via inguinal permite controlar o cordão antes de mobilizar o tumor.",
    source: "EAU Testicular Cancer; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-bas-02", topicId: "top-bas-01", area: "bas", difficulty: 1,
    stem: "Homem de 65 anos apresenta nódulo pétreo e irregular na face posterior da próstata ao toque retal. A biópsia confirma adenocarcinoma. Em qual zona prostática se origina a maioria desses tumores?",
    options: [
      "Zona central",
      "Zona periférica",
      "Zona de transição",
      "Zona fibromuscular anterior",
      "Estroma periuretral"
    ],
    answer: 1,
    comment: "Cerca de 70% dos adenocarcinomas de próstata surgem na zona periférica, que é posterior e palpável ao toque retal. A zona de transição é o epicentro da hiperplasia benigna; a zona central e a fibromuscular anterior são sedes menos comuns. Essa distribuição explica por que o toque retal ainda tem valor na investigação, embora não substitua PSA e imagem.",
    source: "Campbell-Walsh-Wein Urology; EAU Prostate Cancer."
  },
  {
    id: "q-bas-03", topicId: "top-bas-02", area: "bas", difficulty: 2,
    stem: "Durante a fase de enchimento vesical, qual conjunto de eventos fisiológicos está correto?",
    options: [
      "Contração do detrusor por receptores M3 e relaxamento do esfíncter interno por alfa-1.",
      "Relaxamento do detrusor por receptores beta-3 e contração do esfíncter interno por alfa-1.",
      "Contração do detrusor por receptores beta-3 e relaxamento do esfíncter externo pelo pudendo.",
      "Relaxamento do detrusor por receptores alfa-1 e contração do esfíncter externo pelo pudendo.",
      "Contração do esfíncter externo por receptores muscarínicos e relaxamento do detrusor por nicotínicos."
    ],
    answer: 1,
    comment: "No enchimento, predomina o simpático (T10–L1): beta-3 relaxa o detrusor e alfa-1 contrai o esfíncter interno, permitindo armazenar urina com baixa pressão. Na micção, o parassimpático (S2–S4) contrai o detrusor por M3 e o pudendo relaxa o esfíncter externo. As demais alternativas invertem receptores ou atribuem ao pudendo uma função de contração do detrusor, o que não ocorre.",
    source: "Campbell-Walsh-Wein Urology; EAU Neuro-urology."
  },
  {
    id: "q-bas-04", topicId: "top-bas-02", area: "bas", difficulty: 2,
    stem: "Homem de 70 anos com LUTS realiza urofluxometria e medida de resíduo pós-miccional. Qmax = 8 mL/s e resíduo = 180 mL. Qual interpretação é mais adequada?",
    options: [
      "Fluxo normal e esvaziamento completo; os sintomas são irritativos sem obstrução.",
      "Fluxo sugestivo de obstrução e esvaziamento incompleto, compatível com HPB, sem afastar outras causas.",
      "Diagnóstico definitivo de câncer de próstata.",
      "Bexiga hiperativa pura, sem componente obstrutivo.",
      "Retenção urinária aguda com indicação imediata de nefrostomia."
    ],
    answer: 1,
    comment: "Qmax < 10 mL/s sugere obstrução e resíduo de 180 mL indica esvaziamento incompleto. Isso é compatível com HPB, mas não é patognomônico: estenose de uretra, bexiga neurogênica e detrusor hipoativo podem produzir achados semelhantes. Câncer não é diagnosticado por fluxometria; bexiga hiperativa pura não explica resíduo alto; retenção aguda é clínica e exige cateterismo, não nefrostomia de rotina.",
    source: "EAU Male LUTS; AUA BPH Guideline."
  },
  {
    id: "q-bas-05", topicId: "top-bas-03", area: "bas", difficulty: 1,
    stem: "Homem de 60 anos, tabagista de longa data, apresenta hematúria macroscópica indolor há duas semanas. Ultrassom de rins e vias urinárias é normal. Qual é a conduta mais adequada?",
    options: [
      "Tranquilizar, pois o ultrassom normal exclui câncer urológico.",
      "Tratar empiricamente como ITU e reavaliar em três meses.",
      "Solicitar TC urográfica e cistoscopia.",
      "Repetir apenas urina tipo 1 em seis meses.",
      "Indicar biópsia renal percutânea imediata."
    ],
    answer: 2,
    comment: "Hematúria macroscópica indolor em tabagista é sinal de alarme para câncer urotelial. A investigação inclui TC urográfica para o trato superior e cistoscopia para a bexiga; o ultrassom normal não exclui tumor vesical. Tratar como ITU sem repetir urina é erro clássico. Biópsia renal não é indicada sem lesão focal suspeita.",
    source: "AUA/EAU Hematuria Guideline."
  },
  {
    id: "q-bas-06", topicId: "top-bas-03", area: "bas", difficulty: 2,
    stem: "Mulher de 68 anos, em uso de varfarina, apresenta hematúria microscópica persistente em três exames, sem disúria ou febre. Qual conduta é mais correta?",
    options: [
      "Atribuir à anticoagulação e não investigar.",
      "Suspender a varfarina definitivamente e reavaliar em um ano.",
      "Investigar com imagem e cistoscopia conforme risco, mantendo a anticoagulação sob supervisão.",
      "Tratar com antibiótico por sete dias e repetir a urina.",
      " Indicar nefrectomia profilática."
    ],
    answer: 2,
    comment: "A anticoagulação não explica hematúria até que causas estruturais sejam excluídas. A paciente tem idade e hematúria persistente, indicando investigação com TC urográfica e cistoscopia. Suspender anticoagulação sem indicação expõe a risco tromboembólico; antibiótico sem infecção não resolve; nefrectomia profilática é absurda. O manejo anticoagulante deve ser individualizado com a equipe assistente.",
    source: "AUA/EAU Hematuria Guideline."
  },

  {
    id: "q-inf-01", topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Mulher de 26 anos, previamente saudável, apresenta disúria, urgência e frequência há dois dias, sem febre, dor lombar ou corrimento. Qual é o tratamento de primeira linha mais adequado para cistite não complicada?",
    options: [
      "Ciprofloxacino 500 mg 12/12 h por 14 dias.",
      "Nitrofurantoína 100 mg 6/6 h por 5 dias.",
      "Ceftriaxona 1 g IM dose única.",
      "Metronidazol 500 mg 8/8 h por 7 dias.",
      "Fluconazol 150 mg dose única."
    ],
    answer: 1,
    comment: "Nitrofurantoína por 5 dias é primeira linha para cistite não complicada, com boa cobertura de E. coli e baixa resistência. Fluoroquinolonas são reserva e por tempo excessivo; ceftriaxona é para infecção sistêmica/parenteral; metronidazol cobre anaeróbios, não uropatógenos típicos; fluconazol é para candidíase. Na gestação, avaliar restrições específicas.",
    source: "IDSA/ESCMID; NICE NG109; EAU Urological Infections."
  },
  {
    id: "q-inf-02", topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Homem de 23 anos apresenta corrimento uretral purulento e disúria após relação sexual desprotegida. Qual esquema empírico é mais adequado?",
    options: [
      "Azitromicina 1 g dose única isolada.",
      "Ceftriaxona 500 mg IM dose única + doxiciclina 100 mg 12/12 h por 7 dias.",
      "Nitrofurantoína 100 mg 6/6 h por 5 dias.",
      "Penicilina benzatina 2,4 milhões UI IM dose única.",
      "Aciclovir 400 mg 8/8 h por 7 dias."
    ],
    answer: 1,
    comment: "A uretrite é tratada empiricamente para gonococo e clamídia: ceftriaxona 500 mg IM dose única + doxiciclina por 7 dias, com testagem de parceiros e de outras IST. Azitromicina isolada não cobre gonococo adequadamente e há resistência; nitrofurantoína não atinge uretra; penicilina é para sífilis; aciclovir é antiviral. Sempre confirmar com NAAT.",
    source: "CDC STI Treatment Guidelines; EAU Urological Infections."
  },
  {
    id: "q-inf-03", topicId: "top-inf-05", area: "inf", difficulty: 2,
    stem: "Mulher de 52 anos com pielonefrite há 24 horas apresenta febre persistente, hipotensão e oligúria. Ultrassom mostra hidronefrose à direita com cálculo ureteral. Além de antibiótico IV e ressuscitação, qual conduta é prioritária?",
    options: [
      "Aguardar 72 horas de antibiótico antes de qualquer intervenção.",
      "Desobstrução urgente com nefrostomia percutânea ou cateter duplo J.",
      "Nefrectomia imediata.",
      "Litotripsia extracorpórea imediata.",
      "Alta com antibiótico oral e retorno ambulatorial."
    ],
    answer: 1,
    comment: "Obstrução infectada é emergência urológica: a urina sob pressão perpetua bacteremia e impede a penetração do antibiótico. A desobstrução (nefrostomia ou duplo J) deve ser feita sem atraso, em paralelo à ressuscitação. Aguardar 72 h é perigoso; nefrectomia não é inicial; LECO é contraindicada na infecção ativa; alta é inadequada para paciente instável.",
    source: "EAU Urological Infections; Surviving Sepsis Campaign."
  },
  {
    id: "q-inf-04", topicId: "top-inf-07", area: "inf", difficulty: 2,
    stem: "Gestante de 16 semanas, assintomática, apresenta urocultura com E. coli > 100.000 UFC/mL. Qual é a conduta correta?",
    options: [
      "Não tratar, pois bacteriúria assintomática é benigna.",
      "Tratar com antibiótico oral guiado por cultura e repetir a urocultura após o tratamento.",
      "Internar para antibioticoterapia IV obrigatória.",
      "Realizar cesariana imediata.",
      "Aguardar o terceiro trimestre para tratar."
    ],
    answer: 1,
    comment: "Na gestação, bacteriúria assintomática deve ser rastreada e tratada: até 30–40% evoluem para pielonefrite, com risco de parto prematuro. O tratamento é oral, conforme sensibilidade (por exemplo, cefalexina ou nitrofurantoína, evitando esta última no final da gestação). Internação e cesariana não são indicadas de rotina; adiar aumenta o risco.",
    source: "NICE NG111; EAU Urological Infections; ACOG."
  },
  {
    id: "q-inf-05", topicId: "top-inf-06", area: "inf", difficulty: 2,
    stem: "Homem de 45 anos apresenta febre, dor perineal intensa, disúria e retenção urinária. Ao toque retal, a próstata é muito dolorosa e edemaciada. Qual é a duração recomendada do tratamento antibiótico para prostatite bacteriana aguda?",
    options: [
      "3 dias.",
      "7 dias.",
      "4 semanas.",
      "6 meses.",
      "Apenas dose única."
    ],
    answer: 2,
    comment: "A prostatite bacteriana aguda exige antibioticoterapia prolongada, geralmente fluoroquinolona por 4 semanas (ou TMP-SMX conforme cultura), pois a penetração prostática é limitada. Tratamentos curtos aumentam recidiva e cronificação. Evite massagem prostática vigorosa e investigue abscesso se não houver melhora. A retenção pode exigir cateterismo ou cistostomia.",
    source: "EAU Urological Infections; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-inf-06", topicId: "top-inf-06", area: "inf", difficulty: 1,
    stem: "Homem de 25 anos com dor escrotal há três dias, febre baixa, aumento doloroso do epidídimo e alívio da dor com elevação testicular. Nega início súbito. Qual é o diagnóstico mais provável?",
    options: [
      "Torção testicular.",
      "Epididimite.",
      "Torção do apêndice testicular.",
      "Câncer de testículo.",
      "Fournier."
    ],
    answer: 1,
    comment: "Início gradual, febre, dor localizada no epidídimo e sinal de Prehn positivo apontam para epididimite. Torção costuma ser súbita, com testículo alto, reflexo cremastérico ausente e náuseas. Torção de apêndice ocorre em crianças com nódulo azulado; câncer é massa indolor; Fournier é necrose perineal grave. Na dúvida, explorar para não perder torção.",
    source: "EAU Urological Infections; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-inf-07", topicId: "top-inf-07", area: "inf", difficulty: 1,
    stem: "Paciente de 80 anos, cateter vesical há 10 dias, apresenta urina turva e fétida, sem febre, dor ou instabilidade. Qual é a conduta mais adequada?",
    options: [
      "Iniciar antibiótico de amplo espectro imediatamente.",
      "Trocar o cateter e observar; não tratar se assintomático.",
      "Realizar nefrostomia bilateral.",
      "Indicar cistectomia.",
      "Coletar cultura e tratar por 14 dias mesmo sem sintomas."
    ],
    answer: 1,
    comment: "Urina turva em paciente cateterizado não é sinônimo de ITU. A colonização assintomática não deve ser tratada, pois seleciona resistência sem benefício. Troque o cateter se necessário e investigue apenas se houver sintomas como febre ou dor. Antibiótico empírico, nefrostomia e cistectomia são condutas desproporcionais.",
    source: "IDSA Asymptomatic Bacteriuria; EAU Urological Infections."
  },
  {
    id: "q-inf-08", topicId: "top-inf-07", area: "inf", difficulty: 2,
    stem: "Gestante de 36 semanas com cistite não complicada por E. coli sensível. Qual opção terapêutica deve ser evitada nesse momento?",
    options: [
      "Cefalexina.",
      "Amoxicilina.",
      "Nitrofurantoína.",
      "Ceftriaxona.",
      "Paracetamol para analgesia."
    ],
    answer: 2,
    comment: "A nitrofurantoína deve ser evitada no final da gestação pelo risco de anemia hemolítica neonatal e em deficiência de G6PD. Cefalexina, amoxicilina e ceftriaxona são alternativas conforme sensibilidade. A escolha deve considerar cultura e trimestre. Paracetamol é apenas sintomático e não substitui antibiótico.",
    source: "NICE NG111; ACOG; EAU Urological Infections."
  },

  {
    id: "q-lit-01", topicId: "top-lit-08", area: "lit", difficulty: 1,
    stem: "Paciente com infecções urinárias de repetição por Proteus e cálculo coraliforme na TC. Qual é a composição mais provável do cálculo?",
    options: [
      "Oxalato de cálcio.",
      "Ácido úrico.",
      "Estruvita.",
      "Cistina.",
      "Fosfato de cálcio puro."
    ],
    answer: 2,
    comment: "Estruvita (fosfato amoníaco-magnesiano) forma-se em urina alcalina produzida por bactérias produtoras de urease, como Proteus, e tende a cálculos coraliformes. Oxalato de cálcio é o mais comum, mas não tem essa associação infecciosa; ácido úrico ocorre em urina ácida e é radiolucente; cistina é hereditária; fosfato de cálcio puro é menos comum. O tratamento exige remoção completa do cálculo e erradicação da infecção.",
    source: "EAU Urolithiasis."
  },
  {
    id: "q-lit-02", topicId: "top-lit-08", area: "lit", difficulty: 2,
    stem: "Homem de 60 anos, diabético, apresenta cálculo renal radiolucente em urina persistentemente ácida. Qual é a hipótese e a medida terapêutica específica?",
    options: [
      "Estruvita; antibioticoterapia isolada.",
      "Ácido úrico; alcalinização urinária com citrato de potássio.",
      "Cistina; acidificação urinária.",
      "Oxalato de cálcio; restrição total de cálcio.",
      "Fosfato de cálcio; aumento da ingestão de sódio."
    ],
    answer: 1,
    comment: "Cálculo radiolucente com urina ácida sugere ácido úrico. A alcalinização com citrato de potássio aumenta a solubilidade, e alopurinol é útil se houver hiperuricemia. Estruvita é radiopaca e associada a infecção; cistina exige alcalinização, não acidificação; restringir cálcio não é rotina; aumentar sódio piora calciúria.",
    source: "EAU Urolithiasis; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-lit-03", topicId: "top-lit-09", area: "lit", difficulty: 1,
    stem: "Homem de 40 anos com cólica renal típica chega estável, sem febre. Qual exame é o padrão-ouro para confirmar e localizar o cálculo?",
    options: [
      "Radiografia simples de abdome.",
      "Ultrassom abdominal.",
      "TC de abdome e pelve sem contraste.",
      "Urografia excretora.",
      "Ressonância magnética."
    ],
    answer: 2,
    comment: "A TC sem contraste detecta quase todos os cálculos, inclusive de ácido úrico, e avalia hidronefrose e diagnósticos alternativos. Raio-X simples perde cálculos radiolucentes; ultrassom é útil em gestantes e crianças, mas menos sensível para ureter distal; urografia é pouco usada na fase aguda; RM não é o exame de escolha para cálculo.",
    source: "EAU Urolithiasis; AUA Guideline."
  },
  {
    id: "q-lit-04", topicId: "top-lit-09", area: "lit", difficulty: 2,
    stem: "Mulher de 48 anos com cálculo ureteral obstrutivo apresenta febre de 39 °C, calafrios e hipotensão. Qual é a conduta mais adequada?",
    options: [
      "Analgesia e alta com retorno em 48 horas.",
      "Antibiótico oral isolado.",
      "Ressuscitação, antibiótico IV e desobstrução urgente.",
      "Litotripsia extracorpórea imediata.",
      "Aguardar eliminação espontânea."
    ],
    answer: 2,
    comment: "Obstrução infectada é emergência: exige ressuscitação, antibiótico de amplo espectro e drenagem urgente (nefrostomia ou duplo J). Antibiótico isolado não controla o foco; LECO é contraindicada na infecção ativa; aguardar ou dar alta pode evoluir para choque séptico. A desobstrução não deve esperar melhora clínica.",
    source: "EAU Urolithiasis; EAU Urological Infections."
  },
  {
    id: "q-lit-05", topicId: "top-lit-09", area: "lit", difficulty: 1,
    stem: "Homem de 35 anos com cólica renal, afebril, cálculo de 4 mm no ureter distal, hidronefrose leve, dor controlada com AINE. Qual é a conduta inicial mais adequada?",
    options: [
      "Nefrectomia imediata.",
      "Observação com analgesia, hidratação oral e orientação de retorno; considerar terapia expulsiva.",
      "PCNL imediata.",
      "Cistectomia.",
      "Antibiótico por 14 dias."
    ],
    answer: 1,
    comment: "Cálculos < 5 mm têm alta taxa de eliminação espontânea (~80%). Analgesia, hidratação oral e orientação são adequadas; tamsulosina pode ser considerada para cálculos distais. Procedimentos invasivos não são primeira linha; antibiótico não trata cálculo; nefrectomia e cistectomia são absurdas. Retorno imediato se febre, dor intratável ou anúria.",
    source: "EAU Urolithiasis."
  },
  {
    id: "q-lit-06", topicId: "top-lit-09", area: "lit", difficulty: 2,
    stem: "Qual é o principal benefício da tamsulosina na cólica renal por cálculo ureteral distal de 6 mm?",
    options: [
      "Dissolver o cálculo de oxalato de cálcio.",
      "Reduzir a necessidade de analgesia e aumentar a chance de eliminação espontânea.",
      "Prevenir infecção urinária.",
      "Reduzir permanentemente o tamanho da próstata.",
      "Corrigir a hipercalciúria."
    ],
    answer: 1,
    comment: "A tamsulosina relaxa a musculatura lisa ureteral e facilita a passagem de cálculos distais de 5–10 mm, reduzindo dor e necessidade de intervenção. Ela não dissolve cálculos, não previne infecção, não reduz próstata de forma permanente e não corrige distúrbios metabólicos. É adjuvante, não substitui analgesia ou desobstrução quando indicada.",
    source: "EAU Urolithiasis; AUA Guideline."
  },
  {
    id: "q-lit-07", topicId: "top-lit-10", area: "lit", difficulty: 2,
    stem: "Paciente com cálculo coraliforme de 3,5 cm e infecções recorrentes por Proteus. Qual é o tratamento mais adequado?",
    options: [
      "LECO.",
      "Observação.",
      "Nefrolitotomia percutânea (PCNL) com remoção completa e tratamento da infecção.",
      "Ureteroscopia simples.",
      "Apenas antibiótico."
    ],
    answer: 2,
    comment: "Cálculos coraliformes e > 2 cm são tratados preferencialmente por PCNL, buscando remoção completa. Deixar fragmentos mantém a infecção por urease e a recidiva. LECO não é eficaz para coraliforme; observação perpetua infecção; ureteroscopia isolada não dá conta; antibiótico isolado não remove o nicho.",
    source: "EAU Urolithiasis."
  },
  {
    id: "q-lit-08", topicId: "top-lit-10", area: "lit", difficulty: 2,
    stem: "Homem com cálculos recorrentes de oxalato de cálcio e hipercalciúria. Qual orientação dietética está correta?",
    options: [
      "Restringir radicalmente o cálcio da dieta.",
      "Aumentar a ingestão de sódio para melhorar a diurese.",
      "Manter ingestão normal de cálcio, reduzir sódio e aumentar a ingestão de água.",
      "Aumentar a ingestão de oxalato para saturar a urina.",
      "Suspender toda a ingesta de líquidos à noite."
    ],
    answer: 2,
    comment: "A restrição radical de cálcio aumenta a absorção intestinal de oxalato e a oxalúria, piorando o risco. A conduta é manter cálcio dietético normal, reduzir sódio (reduz calciúria), hidratar para diurese de 2–2,5 L/dia e limitar oxalato. Aumentar sódio ou oxalato piora; restringir líquidos concentra a urina. Tiazídico pode ser usado na hipercalciúria selecionada.",
    source: "EAU Urolithiasis."
  },

  {
    id: "q-fun-01", topicId: "top-fun-11", area: "fun", difficulty: 1,
    stem: "Homem de 67 anos com LUTS tem IPSS de 18. Como esse escore é classificado?",
    options: [
      "Leve.",
      "Moderado.",
      "Grave.",
      "Normal.",
      "Não interpretável sem urofluxometria."
    ],
    answer: 1,
    comment: "O IPSS varia de 0 a 35: 0–7 leve, 8–19 moderado, 20–35 grave. Um escore de 18 é moderado. Ele quantifica sintomas e orienta a decisão terapêutica, mas não confirma obstrução nem exclui câncer. A avaliação deve incluir toque, PSA, urina, fluxometria e resíduo conforme o caso.",
    source: "EAU Male LUTS; AUA BPH Guideline."
  },
  {
    id: "q-fun-02", topicId: "top-fun-11", area: "fun", difficulty: 2,
    stem: "Homem de 72 anos com HPB apresenta Qmax de 8 mL/s e resíduo pós-miccional de 200 mL. Qual afirmação é mais correta?",
    options: [
      "O quadro confirma câncer de próstata.",
      "Há obstrução provável e esvaziamento incompleto, mas o diagnóstico diferencial inclui estenose e bexiga neurogênica.",
      "O resíduo é normal e não tem significado.",
      "A cirurgia é obrigatória imediatamente em todos os casos.",
      "Anticolinérgico é a primeira escolha sem restrições."
    ],
    answer: 1,
    comment: "Qmax baixo e resíduo elevado sugerem obstrução e esvaziamento incompleto, compatíveis com HPB, mas não são específicos. Estenose de uretra, detrusor hipoativo e bexiga neurogênica entram no diferencial. Câncer não é diagnosticado por esses parâmetros; resíduo de 200 mL é anormal; cirurgia depende de sintomas, complicações e preferência; anticolinérgico pode precipitar retenção.",
    source: "EAU Male LUTS."
  },
  {
    id: "q-fun-03", topicId: "top-fun-12", area: "fun", difficulty: 2,
    stem: "Homem de 70 anos usa finasterida há 12 meses. O PSA atual é 3,0 ng/mL. Qual é a interpretação mais adequada?",
    options: [
      "O PSA real estimado é cerca de 1,5 ng/mL, e não há risco oncológico.",
      "O PSA real estimado é cerca de 6,0 ng/mL; o valor deve ser interpretado com cautela.",
      "A finasterida não altera o PSA.",
      "O PSA dobra com o uso de finasterida.",
      "O PSA deve ser suspenso definitivamente."
    ],
    answer: 1,
    comment: "Inibidores da 5-alfa-redutase reduzem o PSA em cerca de 50% após 6 meses. Para interpretar, multiplica-se o valor medido por dois: 3,0 → ~6,0 ng/mL. Não se deve assumir ausência de risco nem suspender o exame; a finasterida não aumenta o PSA. O toque e a RM ajudam na investigação.",
    source: "AUA BPH Guideline; EAU Male LUTS."
  },
  {
    id: "q-fun-04", topicId: "top-fun-12", area: "fun", difficulty: 2,
    stem: "Durante uma RTU de próstata, o paciente desenvolve confusão, náusea, bradicardia e hiponatremia. Qual é a complicação mais provável e o tratamento inicial?",
    options: [
      "Síndrome de reabsorção; NaCl 3% e restrição hídrica.",
      "Hipercalemia; gluconato de cálcio.",
      "Sepse; antibiótico apenas.",
      "Hipoglicemia; glicose oral.",
      "Reação anafilática; adrenalina IM."
    ],
    answer: 0,
    comment: "A síndrome de reabsorção ocorre pela absorção de líquido hipotônico de irrigação, causando hiponatremia dilucional, sintomas neurológicos e bradicardia. O tratamento é suspender a irrigação, restringir líquidos e usar NaCl 3% se sintomático. As outras opções não explicam o conjunto. Prevenção: limitar tempo cirúrgico e usar solução isotônica.",
    source: "Campbell-Walsh-Wein Urology; EAU Male LUTS."
  },
  {
    id: "q-fun-05", topicId: "top-fun-13", area: "fun", difficulty: 1,
    stem: "Mulher de 55 anos, multípara, perde urina ao tossir e rir, sem urgência. Exame mostra perda ao esforço. Qual é a primeira linha de tratamento?",
    options: [
      "Anticolinérgico.",
      "Fisioterapia do assoalho pélvico e medidas comportamentais.",
      "Cistectomia.",
      "Nefrostomia.",
      "Antibiótico profilático."
    ],
    answer: 1,
    comment: "Incontinência de esforço é tratada inicialmente com fisioterapia do assoalho pélvico, perda de peso, tratamento de constipação e medidas comportamentais. Se falhar, sling suburetral ou colpossuspensão. Anticolinérgico é para urgência; cistectomia e nefrostomia são desproporcionais; antibiótico não trata incontinência.",
    source: "EAU Female LUTS; ACOG."
  },
  {
    id: "q-fun-06", topicId: "top-fun-13", area: "fun", difficulty: 2,
    stem: "Mulher de 75 anos com urgência e frequência tem resíduo pós-miccional de 280 mL. Qual conduta é mais segura antes de iniciar anticolinérgico?",
    options: [
      "Iniciar oxibutinina em dose alta imediatamente.",
      "Avaliar obstrução e esvaziamento; tratar a retenção antes ou evitar anticolinérgico.",
      "Prescrever antibiótico.",
      "Indicar sling de uretra.",
      "Aumentar a ingestão de cafeína."
    ],
    answer: 1,
    comment: "Resíduo de 280 mL sugere retenção/obstrução; anticolinérgico pode agravar e precipitar retenção completa. É preciso investigar a causa (HPB, prolapso, bexiga neurogênica) e tratar o esvaziamento. Anticolinérgico não é primeira escolha nesse contexto; antibiótico e sling não são indicados sem diagnóstico; cafeína piora urgência.",
    source: "EAU Female LUTS; AUA BPH Guideline."
  },
  {
    id: "q-fun-07", topicId: "top-fun-14", area: "fun", difficulty: 2,
    stem: "Homem de 45 anos apresenta retenção urinária, anestesia em sela e fraqueza bilateral de membros inferiores após episódio de lombalgia. Qual é a conduta imediata?",
    options: [
      "Tratar como HPB com alfa-bloqueador.",
      "Prescrever anticolinérgico.",
      "MRI urgente e avaliação para descompressão medular.",
      "Cistoscopia eletiva.",
      "Repouso e retorno em uma semana."
    ],
    answer: 2,
    comment: "O quadro é sugestivo de síndrome da cauda equina, emergência neurocirúrgica. Anestesia em sela, retenção e fraqueza bilateral exigem MRI imediata e descompressão. Tratar como HPB ou dar alta pode deixar sequelas permanentes. Anticolinérgico é inadequado; cistoscopia não é prioridade.",
    source: "EAU Neuro-urology; Campbell-Walsh-Wein Urology."
  },
  {
    id: "q-fun-08", topicId: "top-fun-14", area: "fun", difficulty: 3,
    stem: "Paciente com lesão medular completa acima de T6 apresenta bexiga neurogênica. Qual padrão urodinâmico é mais esperado?",
    options: [
      "Bexiga arreflexa sem contrações, com retenção e transbordamento.",
      "Hiperatividade do detrusor com dissinergia detrusor-esfíncter e risco de pressão alta.",
      "Bexiga normal, sem alterações.",
      "Incontinência apenas por esforço.",
      "Obstrução exclusiva por cálculo uretral."
    ],
    answer: 1,
    comment: "Lesões suprassacrais interrompem a inibição pontina, causando hiperatividade do detrusor e, frequentemente, dissinergia com o esfíncter, o que gera pressões altas e risco ao trato superior. Bexiga arreflexa é típica de lesão infrassacral/cauda equina. O manejo inclui cateterismo intermitente, antimuscarínicos e monitorização renal.",
    source: "EAU Neuro-urology."
  }
);
