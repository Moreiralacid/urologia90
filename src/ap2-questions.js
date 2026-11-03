/* ==========================================================================
   URO 90 — AP2 2026.2: 36 questões históricas + 16 flashcards
   O campo `origin` preserva a prova de origem. `caveat` registra a
   divergência entre o gabarito histórico e a prática 2026, quando houver.
   ========================================================================== */
window.URO = window.URO || {};

URO.ap2Questions = [
  /* ------------------------------ M1 ------------------------------ */
  {
    id: "ap2-m1-01", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024.2 · Q1",
    topicId: "top-fun-13", area: "fun", difficulty: 1,
    stem: "São causas/contextos de incontinência urinária masculina e feminina, EXCETO:",
    options: [
      "Histerectomia.",
      "Partos normais.",
      "HPB (incontinência por transbordamento).",
      "Prostatectomia radical.",
      "Laparotomia exploradora."
    ],
    answer: 4,
    comment: "A histerectomia altera o suporte do assoalho pélvico e predispõe à incontinência de esforço. Partos normais são apontados como fator de lesão do suporte pélvico. A HPB pode produzir grande resíduo e incontinência por transbordamento/paradoxal. A prostatectomia radical é causa clássica por comprometimento do mecanismo esfincteriano. A laparotomia exploradora, isoladamente, não é mecanismo típico de incontinência no material da disciplina. A banca mistura procedimentos reais associados à incontinência com um procedimento abdominal genérico.",
    source: "MEDCID AP2 2026.2 · M1 · Q1 — base UEA; comentário autoral de revisão."
  },
  {
    id: "ap2-m1-02", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024.2 · Q2",
    topicId: "top-bas-02", area: "bas", difficulty: 1,
    stem: "Adrenalina e noradrenalina ligam-se predominantemente a qual receptor presente na musculatura detrusora para promover relaxamento e aumento da capacidade de armazenamento?",
    options: ["M1.", "Beta-1.", "M2.", "Beta-3.", "M3."],
    answer: 3,
    comment: "O receptor β3 adrenérgico é o alvo cobrado para relaxamento do detrusor e armazenamento vesical. M1 não é o receptor ensinado para esse efeito; β1 não é o alvo enfatizado pela aula; M2 e M3 pertencem ao grupo muscarínico relacionado à contração detrusora. A pegadinha é trocar β3, que relaxa, por M3, que contrai.",
    source: "MEDCID AP2 2026.2 · M1 · Q2 — base UEA; comentário autoral de revisão."
  },
  {
    id: "ap2-m1-03", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024.2 · Q3",
    topicId: "top-fun-14", area: "fun", difficulty: 1,
    stem: "O exame que melhor avalia a fisiologia vesical em pacientes com história de TRM após a fase de choque medular é:",
    options: [
      "Uretrocistografia miccional.",
      "US dos rins e vias urinárias com resíduo pós-miccional.",
      "Estudo urodinâmico.",
      "TC helicoidal do abdome total com contraste.",
      "Videocistoscopia."
    ],
    answer: 2,
    comment: "O estudo urodinâmico é o exame funcional destacado para avaliar armazenamento, esvaziamento, pressão, complacência e coordenação detrusor-esfíncter. A uretrocistografia demonstra anatomia e refluxo, mas não substitui a avaliação funcional completa; o ultrassom mede anatomia e resíduo, mas não caracteriza pressão e coordenação; a TC é anatômica; a cistoscopia avalia a luz do trato urinário inferior, não a fisiologia completa. Imagem anatômica não substitui teste funcional.",
    source: "MEDCID AP2 2026.2 · M1 · Q3 — base UEA; comentário autoral de revisão.",
    caveat: "Atualização 2026: em pacientes neurológicos, a EAU considera a videourodinâmica o procedimento ideal quando disponível; na indisponibilidade, cistometria de enchimento seguida de estudo pressão-fluxo. O gabarito histórico continua correto."
  },
  {
    id: "ap2-m1-04", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024.2 · Q4",
    topicId: "top-fun-13", area: "fun", difficulty: 2,
    stem: "Paciente de 45 anos com disúria, polaciúria, nictúria e episódios de urgência com/sem incontinência, com uroculturas repetidamente negativas. Hipótese e tratamento mais compatíveis:",
    options: [
      "Bexiga hiperativa e agonistas beta-3.",
      "Bexiga atônica e antibioticoterapia.",
      "Bexiga hiperativa e antibioticoterapia.",
      "Litíase vesical e cistolitotripsia.",
      "Bexiga atônica e antagonistas M3."
    ],
    answer: 0,
    comment: "Urgência, frequência e nictúria com culturas repetidamente negativas formam o padrão cobrado de bexiga hiperativa; β3 é uma opção ensinada. Bexiga atônica associa-se mais a esvaziamento inadequado/retenção, e cultura negativa não sustenta antibiótico. O diagnóstico pode ser OAB, mas antibioticoterapia não corresponde ao mecanismo da síndrome. O enunciado não oferece achado que sustente cálculo vesical. Bloquear receptor muscarínico na bexiga atônica reduziria ainda mais a contração detrusora. Disúria não obriga ITU quando a cultura permanece negativa.",
    source: "MEDCID AP2 2026.2 · M1 · Q4 — base UEA; comentário autoral de revisão.",
    caveat: "Atualização 2026: β3 agonistas seguem como opção na OAB não neurogênica. Em neurobexiga, a EAU 2026 não recomenda usá-los com a finalidade específica de reduzir hiperatividade detrusora neurogênica comprovada."
  },
  {
    id: "ap2-m1-05", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q5",
    topicId: "top-fun-14", area: "fun", difficulty: 2,
    stem: "Paciente de 20 anos após mergulho em águas rasas com lesão medular C3/C4, cateterismo intermitente e, no 6º mês, ureia 99, creatinina 2,5 e uretero-hidronefrose grau IV. Qual diagnóstico explica as alterações?",
    options: [
      "Bexiga atônica com elevado resíduo pós-miccional.",
      "Bexiga hiperativa com esfíncter urinário normal.",
      "Dissinergismo vesicoesfincteriano associado a refluxo vesicoureteral grave.",
      "Bexiga de padrão normal associada a refluxo vesicoureteral grave.",
      "Cateterismo limpo intermitente realizado de forma inadequada."
    ],
    answer: 2,
    comment: "Detrusor e esfíncter contraindo juntos elevam a pressão vesical, favorecendo refluxo, hidronefrose e perda renal. Uma bexiga atônica pode reter urina, mas o material destaca a dissinergia de alta pressão como padrão que mais ameaça o trato superior. Se o esfíncter relaxa adequadamente, a pressão de esvaziamento tende a ser menos agressiva. Bexiga funcionalmente normal não explica o padrão neurológico de alta pressão. Técnica inadequada de cateterismo pode causar complicações, mas não é a explicação fisiopatológica principal cobrada no caso. Não foque apenas no resíduo: na neurobexiga, alta pressão é a ameaça renal central.",
    source: "MEDCID AP2 2026.2 · M1 · Q5 — base UEA; comentário autoral de revisão."
  },
  {
    id: "ap2-m1-06", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q6",
    topicId: "top-bas-02", area: "bas", difficulty: 1,
    stem: "Quais os receptores responsáveis pela contração da musculatura detrusora?",
    options: ["M2 e M3.", "Alfa-1a.", "Beta-3.", "Alfa-2a.", "M1."],
    answer: 0,
    comment: "A combinação M2 e M3 é a cobrada pela prova e repetida no material antigo da disciplina. Alfa-1 associa-se ao tônus da saída vesical/uretra prostática, não à contração principal do detrusor. Beta-3 está ligado ao relaxamento do detrusor durante o armazenamento. Alfa-2 não é o receptor ensinado como efetor principal da contração detrusora. M1 não é o receptor cobrado para a contração vesical. Para a prova histórica, memorize M2 + M3; dentro da revisão atual, M3 aparece como principal efetor funcional.",
    source: "MEDCID AP2 2026.2 · M1 · Q6 — base UEA; comentário autoral de revisão.",
    caveat: "Atualização 2026: a resposta mais específica para o principal receptor funcional da contração detrusora é M3. M2/M3 permanece como formulação histórica da banca."
  },
  {
    id: "ap2-m1-07", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q7",
    topicId: "top-bas-02", area: "bas", difficulty: 1,
    stem: "A capacidade vesical média em homens adultos é:",
    options: ["150 a 250 mL.", "200 a 250 mL.", "250 a 300 mL.", "300 a 350 mL.", "350 a 500 mL."],
    answer: 4,
    comment: "A faixa de 350 a 500 mL é a expressamente utilizada no material e no gabarito histórico. As demais opções ficam abaixo do intervalo ensinado para capacidade vesical adulta. Não confundir capacidade vesical com primeira sensação de enchimento: a primeira sensação ocorre com volume menor, enquanto a capacidade funcional se aproxima da faixa de 350–500 mL.",
    source: "MEDCID AP2 2026.2 · M1 · Q7 — base UEA; comentário autoral de revisão."
  },
  {
    id: "ap2-m1-08", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q8",
    topicId: "top-fun-13", area: "fun", difficulty: 1,
    stem: "Paciente de 59 anos, climatério há 15 anos, disúria, polaciúria 12x, nictúria 5x e urgência com perda; US normal e cultura negativa. Diagnóstico provável:",
    options: ["Cistite aguda.", "Pielonefrite aguda.", "Cólica ureteral.", "Bexiga hiperativa.", "Cólica nefrética."],
    answer: 3,
    comment: "Urgência é o sintoma central; frequência, nictúria e perda reforçam bexiga hiperativa. Cultura negativa e padrão persistente de urgência/frequência enfraquecem cistite bacteriana. Não há quadro sistêmico ou lombalgia febril típica de pielonefrite, nem dor cólica ou evidência de obstrução ureteral. A banca usa disúria para tentar puxar para ITU; a urgência com cultura negativa aponta para OAB.",
    source: "MEDCID AP2 2026.2 · M1 · Q8 — base UEA; comentário autoral de revisão."
  },
  {
    id: "ap2-m1-09", ap2Module: "ap2-m1", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q9",
    topicId: "top-fun-14", area: "fun", difficulty: 1,
    stem: "Qual a melhor conduta para indivíduo com TRM que evoluiu com bexiga atônica (ausência de contração detrusora) no estudo urodinâmico?",
    options: [
      "Fisioterapia perineal.",
      "Bloqueadores M2 e M3.",
      "Agonistas beta-3.",
      "Bloqueadores alfa-1a.",
      "Cateterismo limpo intermitente."
    ],
    answer: 4,
    comment: "Se a bexiga não contrai, a prioridade é esvaziar de forma programada; o cateterismo limpo intermitente é a estratégia central para bexiga atônica. Fisioterapia perineal não corrige a ausência de contração detrusora necessária ao esvaziamento. Antimuscarínicos reduziriam ainda mais a atividade detrusora. Beta-3 favorece relaxamento/armazenamento e não resolve detrusor atônico. Alfa-bloqueio não substitui uma estratégia de esvaziamento quando o detrusor não contrai.",
    source: "MEDCID AP2 2026.2 · M1 · Q9 — base UEA; comentário autoral de revisão."
  },
  /* ------------------------------ M2 ------------------------------ */
  {
    id: "ap2-m2-48", ap2Module: "ap2-m2", bank: "ap2", historical: true,
    origin: "Prova parcial AP2 antiga · p.44 · Q48",
    topicId: "top-tra-24", area: "tra", difficulty: 2,
    stem: "Em trauma urológico, quais afirmativas estavam corretas? I. Trauma de uretra posterior pode associar-se a lesão extraperitoneal de bexiga. II. Lesões renais por arma de fogo frequentemente associam-se a lesões de outros órgãos. III. Paciente instável com hematoma retroperitoneal expansivo nunca deve ser explorado. IV. Fratura de pênis é tratada apenas com antibiótico/AINE/abstinência. V. Lesões ureterais são frequentemente iatrogênicas e podem causar fístula/hidronefrose.",
    options: ["I, II e III.", "I, IV e V.", "Todas.", "I, II e V.", "III, IV e V."],
    answer: 3,
    comment: "I é verdadeira: fratura pélvica é contexto clássico para lesão de uretra posterior e de bexiga extraperitoneal. II é verdadeira: ferimentos renais por arma de fogo frequentemente têm lesões associadas de outros órgãos. III é falsa: instabilidade com hematoma retroperitoneal expansivo pode exigir exploração. IV é falsa: fratura peniana é tipicamente cirúrgica, não apenas antibiótico/AINE/abstinência. V é verdadeira: lesão ureteral é frequentemente iatrogênica e pode evoluir com fístula ou hidronefrose. Gabarito histórico: D (I, II e V).",
    source: "MEDCID AP2 2026.2 · M2 · Q48 — prova parcial AP2 antiga; comentário autoral de revisão."
  },
  {
    id: "ap2-m2-49", ap2Module: "ap2-m2", bank: "ap2", historical: true,
    origin: "Prova parcial AP2 antiga · p.45 · Q49",
    topicId: "top-and-20", area: "and", difficulty: 1,
    stem: "Em trauma genital, qual alternativa NÃO está correta?",
    options: [
      "Hematoma escrotal após contusão deve ser obrigatoriamente drenado pelo risco de abscesso.",
      "Ruptura testicular requer exploração, desbridamento e rafia quando viável.",
      "US de bolsa ajuda a diferenciar ruptura e hematoma.",
      "Lesões penetrantes de bolsa testicular devem ser exploradas cirurgicamente.",
      "Trauma genital exige avaliação de integridade testicular/uretral."
    ],
    answer: 0,
    comment: "A palavra “obrigatoriamente” torna a alternativa falsa. Hematomas e hematoceles não são todos manejados da mesma forma: tamanho, perfusão, evolução e suspeita de ruptura importam. Ruptura testicular confirmada ou imagem inconclusiva com suspeita exige exploração, desbridamento e rafia quando viável. Ultrassom ajuda a diferenciar ruptura e hematoma. Lesões penetrantes da bolsa são exploradas cirurgicamente. Todo trauma genital pede avaliação da integridade testicular e uretral.",
    source: "MEDCID AP2 2026.2 · M2 · Q49 — prova parcial AP2 antiga; comentário autoral de revisão."
  },
  {
    id: "ap2-m2-50", ap2Module: "ap2-m2", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q50",
    topicId: "top-tra-24", area: "tra", difficulty: 1,
    stem: "Na classificação tomográfica do trauma renal, qual grau foi cobrado como eminentemente cirúrgico?",
    options: ["Grau I.", "Grau II.", "Grau III.", "Grau IV.", "Grau V."],
    answer: 4,
    comment: "O gabarito histórico é grau V: rim estilhaçado ou lesão hilar/pedicular grave, classicamente descrito como eminentemente cirúrgico. Preserve esse gabarito para a prova antiga. Na prática atual, estabilidade hemodinâmica, sangramento ativo e lesões associadas pesam mais do que o grau isolado; pacientes selecionados, inclusive com grau V, podem ser manejados de forma não operatória. A alternativa correta para a prova histórica continua sendo E.",
    source: "MEDCID AP2 2026.2 · M2 · Q50 — MED48 AP2; comentário autoral de revisão.",
    caveat: "Gabarito histórico divergente da abordagem moderna: grau V não significa cirurgia automática. A estabilidade hemodinâmica é o critério principal; sangramento arterial em paciente estável favorece embolização seletiva."
  },
  {
    id: "ap2-m2-51", ap2Module: "ap2-m2", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q51",
    topicId: "top-tra-24", area: "tra", difficulty: 1,
    stem: "Paciente estável após acidente motociclístico, TC compatível com trauma renal grau I. Melhor conduta?",
    options: [
      "Laparotomia urgente.",
      "4 concentrados de hemácias e CTI.",
      "Arteriografia/embolização.",
      "TC seriada a cada 72 h.",
      "Conduta conservadora com monitorização e Hb/Ht seriados."
    ],
    answer: 4,
    comment: "Trauma renal de baixo grau em paciente hemodinamicamente estável é classicamente tratado de forma não operatória, com monitorização clínica, Hb/Ht seriados e reavaliação. Laparotomia urgente não é indicada apenas pelo grau I; transfusão maciça e CTI não são a primeira conduta para um paciente estável; arteriografia/embolização é considerada em sangramento arterial ativo, não de rotina no grau I; TC seriada a cada 72 h não é protocolo universal. A conduta conservadora é a resposta histórica e permanece alinhada à prática atual.",
    source: "MEDCID AP2 2026.2 · M2 · Q51 — MED48 AP2; comentário autoral de revisão."
  },
  {
    id: "ap2-m2-52", ap2Module: "ap2-m2", bank: "ap2", historical: true,
    origin: "Prova parcial AP2 antiga · p.44 · Q52",
    topicId: "top-tra-25", area: "tra", difficulty: 1,
    stem: "Lesão de uretra posterior e lesão extraperitoneal de bexiga podem compartilhar mecanismo associado a fratura pélvica.",
    options: ["Verdadeiro.", "Falso."],
    answer: 0,
    comment: "Verdadeiro. A fratura pélvica é contexto clássico para ambas as lesões. A uretra posterior (membranosa) é fixada pelo ligamento puboprostático e pode ser cisalhada pelo deslocamento da sínfise; a bexiga extraperitoneal pode romper por espículas ósseas ou aumento abrupto de pressão. Por isso, diante de fratura pélvica com uretrorragia ou hematúria, é preciso pensar nos dois diagnósticos e escolher o exame contrastado adequado antes de instrumentar a uretra às cegas.",
    source: "MEDCID AP2 2026.2 · M2 · Q52 — prova parcial AP2 antiga; comentário autoral de revisão."
  },
  {
    id: "ap2-m2-53", ap2Module: "ap2-m2", bank: "ap2", historical: true,
    origin: "Prova parcial AP2 antiga · p.44 · Q53",
    topicId: "top-tra-24", area: "tra", difficulty: 1,
    stem: "Lesões ureterais são comumente iatrogênicas e podem evoluir com fístula urinária ou hidronefrose.",
    options: ["Verdadeiro.", "Falso."],
    answer: 0,
    comment: "Verdadeiro. A lesão ureteral é frequentemente iatrogênica, sobretudo em cirurgias pélvicas e abdominais. O diagnóstico pode ser tardio e manifestar-se com urinoma, fístula urinária, estenose ou hidronefrose. A TC urográfica e a avaliação retrógrada/anterógrada ajudam a localizar a lesão; o manejo pode incluir stent, nefrostomia ou reparo cirúrgico conforme extensão e momento. Esse conteúdo estava sub-representado no módulo anterior e agora recebe bloco próprio.",
    source: "MEDCID AP2 2026.2 · M2 · Q53 — prova parcial AP2 antiga; comentário autoral de revisão."
  },
  {
    id: "ap2-m2-54", ap2Module: "ap2-m2", bank: "ap2", historical: true,
    origin: "Lista de revisão AP2 · p.39 · Q15 (discursiva)",
    topicId: "top-tra-25", area: "tra", difficulty: 2,
    stem: "Após trauma pélvico com suspeita de lesão uretral e/ou vesical, qual é o exame inicial e qual conduta substitui o cateterismo uretral quando ele é contraindicado?",
    options: [
      "Uretrocistografia retrógrada; cistostomia suprapúbica.",
      "Uretrocistografia retrógrada; sondagem vesical às cegas.",
      "Cistografia isolada; cateterismo uretral de demora.",
      "TC sem contraste; nefrostomia percutânea.",
      "US de vias urinárias; punção aspirativa do globo vesical."
    ],
    answer: 0,
    comment: "A uretrocistografia retrógrada é o exame inicial para confirmar ou afastar lesão uretral; se a uretra estiver íntegra, prossegue-se com cistografia para avaliar a bexiga. Diante de suspeita ou confirmação de lesão uretral, não se passa sonda vesical às cegas: o risco é criar falso trajeto e agravar a lesão. A descompressão da retenção é feita por cistostomia suprapúbica. A alternativa B repete o erro da sondagem cega; C inverte a sequência e instrumenta a uretra; D e E não são o padrão inicial para esse contexto.",
    source: "MEDCID AP2 2026.2 · M2 · Q15 (lista de revisão, p.39; discursiva convertida em múltipla escolha); comentário autoral de revisão.",
    caveat: "Atualização 2026: a sequência continua sendo uretrocistografia retrógrada primeiro e cistostomia suprapúbica quando o cateterismo uretral é contraindicado. Em lesão vesical intraperitoneal ou extraperitoneal complicada, o tratamento é cirúrgico; extraperitoneal simples pode ser manejada com sonda."
  },
  /* ------------------------------ M3 ------------------------------ */
  {
    id: "ap2-m3-63", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "MED42 · AP3 2024 · Q63",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Homem de 19 anos após relação sem preservativo apresenta secreção uretral purulenta, odor fétido e disúria, afebril. Melhor conduta segundo a prova?",
    options: [
      "Internar com penicilina cristalina + metronidazol.",
      "Coletar secreção e aguardar cultura antes de tratar.",
      "Solicitar HIV/VDRL e iniciar ceftriaxona + azitromicina.",
      "Itraconazol por 10 dias.",
      "Aciclovir/itraconazol."
    ],
    answer: 2,
    comment: "A banca valorizou abordagem sindrômica, rastreio de coinfecções e tratamento sem atraso. O quadro é de uretrite: secreção purulenta e disúria após relação sem preservativo. A conduta histórica correta é solicitar HIV/VDRL e iniciar ceftriaxona + azitromicina, cobrindo gonococo e clamídia. Internação com penicilina cristalina e metronidazol não é o esquema de uretrite não complicada; aguardar cultura atrasa tratamento; itraconazol e aciclovir não tratam uretrite bacteriana. O esquema antimicrobiano deve ser checado no protocolo vigente, mas a lógica da questão permanece.",
    source: "MEDCID AP2 2026.2 · M3 · Q63 — MED42 AP3 2024; comentário autoral de revisão.",
    caveat: "Atualização 2026: preserve a lógica (tratar sem atraso e rastrear coinfecções), não transforme a posologia antiga em regra universal. O PCDT-IST brasileiro publicado traz ceftriaxona 500 mg IM + azitromicina 1 g VO em dose única para gonorreia não complicada, com alternativas para clamídia."
  },
  {
    id: "ap2-m3-64", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "MED42 · AP3 2024 · Q64",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Qual exame foi cobrado como específico para diagnóstico de herpes?",
    options: [
      "Bacteriológico com corpúsculos de Gama-Migawa.",
      "VDRL.",
      "FTA-Abs.",
      "Raspado da lesão com citodiagnóstico de Tzanck.",
      "Exame direto para H. ducreyi."
    ],
    answer: 3,
    comment: "O gabarito histórico aponta o citodiagnóstico de Tzanck. Tzanck é método citológico histórico, útil para reconhecer efeito citopático viral, mas não é específico e não distingue HSV de VZV. VDRL e FTA-Abs são testes de sífilis; corpúsculos de Gama-Migawa e pesquisa de H. ducreyi pertencem a outros contextos. Em prova antiga, preserve a resposta; na leitura atual, testes moleculares/NAAT são mais específicos quando necessários.",
    source: "MEDCID AP2 2026.2 · M3 · Q64 — MED42 AP3 2024; comentário autoral de revisão.",
    caveat: "Atualização 2026: não usar “Tzanck específico” como verdade clínica atual. O método é citológico e não distingue HSV de VZV; PCR/NAAT é mais específico."
  },
  {
    id: "ap2-m3-65", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "MED42 · AP3 2024 · Q65",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "A afirmativa “o agente etiológico da donovanose é Chlamydia trachomatis” é:",
    options: ["Verdadeira.", "Falsa."],
    answer: 1,
    comment: "Falsa. A donovanose é causada por Klebsiella granulomatis, antigo Calymmatobacterium granulomatis. Chlamydia trachomatis causa uretrite, cervicite e linfogranuloma venéreo (LGV), não donovanose. A confusão entre os agentes é a pegadinha clássica. A úlcera da donovanose costuma ser crônica, indolor, de bordas elevadas e base granulosa; o diagnóstico e o tratamento devem seguir o protocolo vigente.",
    source: "MEDCID AP2 2026.2 · M3 · Q65 — MED42 AP3 2024; comentário autoral de revisão."
  },
  {
    id: "ap2-m3-66", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "MED42 · AP3 2024 · Q66",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Tratamento da uretrite por Chlamydia trachomatis pode incluir doxiciclina ou azitromicina, conforme contexto/protocolo.",
    options: ["Verdadeiro.", "Falso."],
    answer: 0,
    comment: "Verdadeiro. O ponto cobrado é a associação agente-tratamento: clamídia pode ser tratada com doxiciclina ou azitromicina, conforme contexto clínico e protocolo. A escolha e o esquema dependem de gestação, adesão, disponibilidade e diretriz local. Não se deve esquecer o rastreio de coinfecções e o tratamento de parceiros. Em uretrite, a cobertura empírica frequentemente inclui gonococo e clamídia.",
    source: "MEDCID AP2 2026.2 · M3 · Q66 — MED42 AP3 2024; comentário autoral de revisão."
  },
  {
    id: "ap2-m3-67", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "AP3 Urologia 2022.2 · Q67",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Quais são testes treponêmicos?",
    options: [
      "FTA-Abs, TRUST e ELISA.",
      "VDRL, RPR e TRUST.",
      "FTA-Abs, teste rápido e ELISA treponêmico.",
      "VDRL, TRUST e FTA-Abs.",
      "FTA-Abs, teste rápido e USR."
    ],
    answer: 2,
    comment: "Testes treponêmicos detectam anticorpos específicos contra Treponema pallidum: FTA-Abs, teste rápido treponêmico e ELISA treponêmico. TRUST, VDRL, RPR e USR são não treponêmicos. A alternativa A mistura treponêmico com não treponêmicos; B e D são conjuntos de não treponêmicos ou mistos; E inclui USR, que é não treponêmico. A distinção entre os dois grupos é o núcleo da questão.",
    source: "MEDCID AP2 2026.2 · M3 · Q67 — AP3 Urologia 2022.2; comentário autoral de revisão."
  },
  {
    id: "ap2-m3-68", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "AP3 Urologia 2022.2 · Q68",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Na abordagem sindrômica de úlceras genitais e corrimentos, quais sorologias a prova recomendou solicitar?",
    options: [
      "HIV, sífilis, hepatite B e herpes.",
      "HIV, sífilis, hepatite B e HPV.",
      "Sífilis, hepatite B e herpes.",
      "HIV, sífilis, hepatites B e C.",
      "Sífilis, hepatite B e PCR para donovanose."
    ],
    answer: 3,
    comment: "O gabarito do formulário é HIV, sífilis e hepatites B e C. A questão enfatiza o rastreio de coinfecções, não apenas o agente responsável pela síndrome atual. Herpes e HPV não são rastreados por sorologia de rotina nesse contexto; PCR para donovanose não é o painel sindrômico padrão. A abordagem sindrômica inclui testagem de HIV, sífilis e hepatites, além de orientação e tratamento de parceiros.",
    source: "MEDCID AP2 2026.2 · M3 · Q68 — AP3 Urologia 2022.2; comentário autoral de revisão."
  },
  {
    id: "ap2-m3-69", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "AP3 Urologia 2022.2 · Q69",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Quais são testes não treponêmicos?",
    options: [
      "FTA-Abs, TRUST e ELISA.",
      "VDRL, RPR e TRUST.",
      "FTA-Abs, teste rápido e ELISA.",
      "VDRL, TRUST e FTA-Abs.",
      "TRUST, teste rápido e USR."
    ],
    answer: 1,
    comment: "VDRL, RPR e TRUST formam o trio clássico de testes não treponêmicos. Eles medem anticorpos contra lipídios e são usados para avaliar atividade e resposta ao tratamento por meio dos títulos. FTA-Abs, teste rápido treponêmico e ELISA treponêmico são específicos contra T. pallidum e geralmente permanecem reagentes. A alternativa E mistura TRUST e USR (não treponêmicos) com teste rápido (treponêmico).",
    source: "MEDCID AP2 2026.2 · M3 · Q69 — AP3 Urologia 2022.2; comentário autoral de revisão."
  },
  {
    id: "ap2-m3-70", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "AP3 Urologia 2022.2 · Q70",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Homem de 26 anos com sífilis primária, sem alergias. Tratamento cobrado:",
    options: [
      "Ceftriaxona 2 g EV dose única.",
      "Penicilina cristalina EV por 4 dias.",
      "Penicilina benzatina 2,4 milhões UI IM, dose única.",
      "Doxiciclina 100 mg 12/12 h por 7 dias.",
      "Penicilina benzatina EV."
    ],
    answer: 2,
    comment: "Sífilis recente (primária, secundária ou latente recente) é tratada com penicilina benzatina 2,4 milhões UI IM, dose única. A via EV é pegadinha: benzatina é formulação intramuscular. Ceftriaxona e doxiciclina são alternativas em situações específicas, mas não o esquema cobrado para sífilis primária sem alergia. Penicilina cristalina EV por 4 dias não é o tratamento padrão de sífilis primária. A resposta histórica permanece alinhada ao protocolo brasileiro para sífilis recente.",
    source: "MEDCID AP2 2026.2 · M3 · Q70 — AP3 Urologia 2022.2; comentário autoral de revisão."
  },
  {
    id: "ap2-m3-71", ap2Module: "ap2-m3", bank: "ap2", historical: true,
    origin: "Prova final/discursiva antiga · p.90 · Q71",
    topicId: "top-inf-04", area: "inf", difficulty: 1,
    stem: "Qual o agente etiológico da donovanose?",
    options: [
      "Klebsiella/Calymmatobacterium granulomatis.",
      "Haemophilus ducreyi.",
      "Chlamydia trachomatis.",
      "Treponema pallidum.",
      "HSV-2."
    ],
    answer: 0,
    comment: "Donovanose é causada por Klebsiella granulomatis, também conhecida pela nomenclatura antiga Calymmatobacterium granulomatis. Haemophilus ducreyi causa cancro mole; Chlamydia trachomatis causa uretrite, cervicite e LGV; Treponema pallidum causa sífilis; HSV-2 causa herpes genital. A questão é direta e recorrente; o banco usa também a nomenclatura antiga para reconhecer a linguagem da prova.",
    source: "MEDCID AP2 2026.2 · M3 · Q71 — prova final/discursiva antiga; comentário autoral de revisão."
  },
  /* ------------------------------ M4 ------------------------------ */
  {
    id: "ap2-m4-54", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024 · Q54",
    topicId: "top-and-20", area: "and", difficulty: 1,
    stem: "Sobre o sinal de Prehn, assinale a correta:",
    options: [
      "Na orquiepididimite há aumento da dor ao elevar o testículo.",
      "Na torção há alívio típico da dor com elevação.",
      "Na orquiepididimite pode haver alívio da dor com elevação.",
      "Na torção sempre há aumento da dor com elevação.",
      "O sinal é patognomônico de torção."
    ],
    answer: 2,
    comment: "O sinal de Prehn é a possibilidade de alívio da dor com a elevação do testículo, historicamente descrita na orquiepididimite. É pista inespecífica e não pode excluir torção. Não há “sempre” nem “patognomônico” em escroto agudo: a decisão em suspeita alta é cirúrgica, independentemente do Prehn. A alternativa C é a formulação correta; as demais exageram ou invertem o sinal.",
    source: "MEDCID AP2 2026.2 · M4 · Q54 — MED42 AP2 2024; comentário autoral de revisão.",
    caveat: "Atualização 2026: Prehn é pista histórica e inespecífica. A EAU reforça que fluxo arterial persistente no Doppler não exclui torção; não atrase a cirurgia por achados tranquilizadores isolados."
  },
  {
    id: "ap2-m4-55", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024 · Q55",
    topicId: "top-fun-14", area: "fun", difficulty: 1,
    stem: "Homem de 65 anos, anúria há 8 h, jato fraco, intermitência, noctúria e globo vesical doloroso. Diagnóstico e urgência?",
    options: [
      "HPB; RTU imediata.",
      "Cólica; sondagem.",
      "Retenção urinária aguda; sondagem vesical.",
      "IAM; trombólise.",
      "Torção; antibiótico."
    ],
    answer: 2,
    comment: "O quadro é retenção urinária aguda: incapacidade de urinar, globo vesical doloroso e anúria. A primeira conduta é descomprimir a bexiga, classicamente com sondagem vesical, se não houver contraindicação. A causa prostática (HPB) é investigada depois; RTU imediata não é a prioridade. Não é cólica, IAM ou torção. Resolva primeiro a emergência e depois trate a etiologia.",
    source: "MEDCID AP2 2026.2 · M4 · Q55 — MED42 AP2 2024; comentário autoral de revisão."
  },
  {
    id: "ap2-m4-56", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024 · Q56",
    topicId: "top-lit-09", area: "lit", difficulty: 1,
    stem: "Mulher de 25 anos, dor lombar súbita intensa irradiando para fossa ilíaca e grandes lábios, agitada e sudorética. Diagnóstico e tratamento cobrado?",
    options: [
      "IAM; trombólise.",
      "Pielonefrite; antibiótico.",
      "Cólica biliar; cirurgia.",
      "Cólica nefrética; analgesia e desobstrução quando indicada.",
      "Cólica nefrética; antibiótico isolado."
    ],
    answer: 3,
    comment: "A irradiação para genitália e a inquietação são pistas clássicas de cólica ureteral. O tratamento inicial é analgesia; a desobstrução é indicada conforme complicações (infecção, anúria, rim único, obstrução bilateral, dor refratária). Antibiótico isolado não trata cólica não infectada. IAM e cólica biliar têm apresentações diferentes; pielonefrite costuma cursar com febre e sintomas sistêmicos. A resposta histórica é D.",
    source: "MEDCID AP2 2026.2 · M4 · Q56 — MED42 AP2 2024; comentário autoral de revisão."
  },
  {
    id: "ap2-m4-57", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q57",
    topicId: "top-and-20", area: "and", difficulty: 1,
    stem: "Jovem de 22 anos com dor testicular súbita intensa, náuseas/vômitos, testículo elevado e reflexo cremastérico abolido. Diagnóstico?",
    options: ["Orquiepididimite.", "Abscesso testicular.", "Torção testicular.", "Fournier.", "Cólica nefrética."],
    answer: 2,
    comment: "O caso é clássico de escroto agudo isquêmico: dor súbita, náuseas/vômitos, testículo elevado e reflexo cremastérico abolido. A hipótese é torção testicular, emergência cirúrgica. Orquiepididimite costuma ter início mais progressivo, febre e sintomas urinários; abscesso tem flutuação/sinais locais; Fournier é infecção necrosante com dor desproporcional e crepitação; cólica nefrética irradia para flanco/groin, mas não explica o testículo elevado e o cremastérico abolido.",
    source: "MEDCID AP2 2026.2 · M4 · Q57 — MED48 AP2; comentário autoral de revisão."
  },
  {
    id: "ap2-m4-58", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q58",
    topicId: "top-and-20", area: "and", difficulty: 1,
    stem: "No contexto de torção, qual sinal/manobra foi lembrado como auxiliar no exame físico?",
    options: ["Mattox.", "Cattell.", "Prehn.", "Courvoisier.", "Pringle."],
    answer: 2,
    comment: "Prehn é a manobra escrotal lembrada no contexto de dor testicular: elevação do testículo com possível alívio na orquiepididimite. As demais manobras pertencem a outros contextos cirúrgicos: Mattox e Cattell são manobras de exame abdominal/renal; Courvoisier é sinal de vesícula; Pringle é manobra de compressão do pedículo hepático. Prehn é auxiliar, mas não patognomônico e não exclui torção.",
    source: "MEDCID AP2 2026.2 · M4 · Q58 — MED48 AP2; comentário autoral de revisão."
  },
  {
    id: "ap2-m4-59", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q59",
    topicId: "top-and-20", area: "and", difficulty: 1,
    stem: "Após início de torção testicular, qual janela foi cobrada como ideal para alta taxa de preservação?",
    options: ["6 h.", "12 h.", "24 h.", "48 h.", "72 h."],
    answer: 0,
    comment: "A prova cobrou 6 horas como janela ideal para alta taxa de preservação. O conceito atual continua sendo intervenção o mais precoce possível; a janela crítica aproximada é de 4–6 horas. Após 12 horas, a chance de salvamento cai muito. Quanto maior o tempo de isquemia, maior o risco de necrose e orquiectomia. Na suspeita alta, não espere exames que atrasem a exploração cirúrgica.",
    source: "MEDCID AP2 2026.2 · M4 · Q59 — MED48 AP2; comentário autoral de revisão.",
    caveat: "Atualização 2026: a janela crítica de maior salvamento é aproximadamente 4–6 h. O gabarito histórico de 6 h permanece compatível, mas a conduta atual é operar o mais cedo possível."
  },
  {
    id: "ap2-m4-60", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q60",
    topicId: "top-inf-06", area: "inf", difficulty: 1,
    stem: "Jovem de 19 anos com dor testicular progressiva, disúria, polaciúria, febre baixa e secreção uretral após coito desprotegido. Diagnóstico e conduta?",
    options: [
      "Torção; cirurgia.",
      "Orquiepididimite; cirurgia.",
      "Hérnia estrangulada; cirurgia.",
      "Varicocele; cirurgia.",
      "Orquiepididimite; antibioticoterapia específica + suporte."
    ],
    answer: 4,
    comment: "Evolução progressiva + sintomas urinários + secreção uretral após relação desprotegida favorecem orquiepididimite infecciosa. O tratamento é antimicrobiano específico conforme etiologia (IST versus entérica) + suporte, além de rastreio de IST e tratamento de parceiros. Torção tem início súbito e é cirúrgica; hérnia estrangulada cursa com massa dolorosa e sinais obstrutivos; varicocele costuma ser indolor e não cursa com febre/secreção. A resposta é E.",
    source: "MEDCID AP2 2026.2 · M4 · Q60 — MED48 AP2; comentário autoral de revisão."
  },
  {
    id: "ap2-m4-61", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q61",
    topicId: "top-and-22", area: "and", difficulty: 1,
    stem: "Adolescente com anemia falciforme e ereção persistente, dolorosa > 6 h sem estímulo sexual. Diagnóstico?",
    options: [
      "Anemia falciforme; priapismo de baixo fluxo.",
      "Anemia falciforme; alto fluxo.",
      "Anemia ferropriva; baixo fluxo.",
      "Anemia ferropriva; alto fluxo.",
      "Anemia falciforme; alto fluxo com CO2 elevado."
    ],
    answer: 0,
    comment: "Dor e anemia falciforme apontam para priapismo de baixo fluxo/isquêmico, a forma emergencial. A falciforme é causa clássica por falha do esvaziamento venoso e trombose nos corpos cavernosos. Priapismo de alto fluxo costuma ser indolor e relacionado a trauma/lesão arterial. Anemia ferropriva não é o contexto. A conduta atual é aspirar/irrigar e usar fenilefrina intracavernosa precocemente, escalonando para shunt se necessário.",
    source: "MEDCID AP2 2026.2 · M4 · Q61 — MED48 AP2; comentário autoral de revisão.",
    caveat: "Atualização 2026: priapismo isquêmico > 4 h é emergência; a aula antiga usava > 6–8 h. A conduta é aspiração/irrigação + fenilefrina intracavernosa, com shunt se falhar."
  },
  {
    id: "ap2-m4-62", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED48 · AP2 · Q62",
    topicId: "top-ped-27", area: "ped", difficulty: 1,
    stem: "Criança de 10 anos, após retração do prepúcio, desenvolve anel constritivo no sulco balanoprepucial, edema e impossibilidade de reduzir o prepúcio. Diagnóstico?",
    options: ["Fimose infectada.", "Balanopostite.", "Escroto agudo.", "Parafimose.", "Priapismo."],
    answer: 3,
    comment: "Parafimose é o prepúcio retraído que fica preso atrás da glande, com anel constritivo e edema, impossibilitando a redução. Fimose é dificuldade de retrair o prepúcio; balanopostite é inflamação da glande/prepúcio; escroto agudo é dor testicular; priapismo é ereção prolongada. O tratamento inicial é reduzir o edema e reposicionar o prepúcio; se falhar, dorsal slit/cirurgia. A diferença entre fimose e parafimose é o ponto de prova.",
    source: "MEDCID AP2 2026.2 · M4 · Q62 — MED48 AP2; comentário autoral de revisão."
  },
  {
    id: "ap2-m4-63", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024.2 · lista p.27 · Q8",
    topicId: "top-and-22", area: "and", difficulty: 1,
    stem: "São características do priapismo de baixo fluxo, EXCETO:",
    options: [
      "Pode ser causado pelo uso de drogas ilícitas.",
      "Na gasometria, apresenta padrão de PO2 elevado.",
      "Tem como uma de suas causas a anemia falciforme.",
      "O tratamento deve ser realizado em até 6 horas para evitar necrose dos corpos cavernosos.",
      "O tratamento é baseado no uso de vasoconstritores intracavernosos."
    ],
    answer: 1,
    comment: "O priapismo de baixo fluxo é veno-oclusivo e cursa com hipóxia e acidose, portanto a gasometria mostra PO2 baixo (clássico < 40 mmHg), não elevado. Drogas ilícitas, anemia falciforme e outros estados de estase venosa são causas; a intervenção precoce é fundamental, e vasoconstritores intracavernosos (fenilefrina/epinefrina) fazem parte do tratamento. PO2 elevado (> 80 mmHg) orienta para priapismo de alto fluxo/arterial. A diretriz atual trata > 4 h como emergência, mas o gabarito histórico preserva a janela de 6 h.",
    source: "MEDCID AP2 2026.2 · M4 · Q8 (lista de revisão, p.27); comentário autoral de revisão.",
    caveat: "Atualização 2026: priapismo isquêmico > 4 h já é emergência; a aula antiga usa > 6–8 h. A gasometria ajuda a distinguir: PO2 < 40 mmHg = baixo fluxo; PO2 > 80 mmHg = alto fluxo."
  },
  {
    id: "ap2-m4-64", ap2Module: "ap2-m4", bank: "ap2", historical: true,
    origin: "MED42 · AP2 2024.2 · lista p.27 · Q9",
    topicId: "top-and-20", area: "and", difficulty: 1,
    stem: "Em relação à torção testicular, qual afirmativa está correta?",
    options: [
      "O diagnóstico é clínico e pode ser confirmado pela USG com Doppler.",
      "O tratamento é conservador na maioria dos casos.",
      "Ocorre por alteração vascular primária dos testículos.",
      "Tem como diagnóstico diferencial a ureterolitíase proximal.",
      "O sinal de Prehn é a horizontalização do testículo acometido."
    ],
    answer: 0,
    comment: "A torção é diagnóstico clínico e a USG com Doppler ajuda a confirmar, mostrando redução ou ausência de fluxo; porém fluxo normal ou aumentado não exclui torção e não deve atrasar a cirurgia. O tratamento é cirúrgico na maioria dos casos, com destorção e orquidopexia bilateral; não é conservador. A torção decorre de rotação inadequada do testículo/funículo, não de uma alteração vascular primária. Ureterolitíase proximal pode simular dor lombar/inguinal, mas não é o diferencial principal do escroto agudo. Prehn é a elevação do testículo com alívio na orquiepididimite; horizontalização é o sinal de Angell.",
    source: "MEDCID AP2 2026.2 · M4 · Q9 (lista de revisão, p.27); comentário autoral de revisão.",
    caveat: "Atualização 2026: o Doppler é auxiliar, não obrigatório nem definitivo. Em suspeita clínica alta, a exploração cirúrgica não deve esperar imagem."
  }
];

/* ------------------------------ Flashcards AP2 ------------------------------ */
URO.ap2Cards = [
  { id: "f-ap2-01", topicId: "top-bas-02", ap2Module: "ap2-m1", front: "Quais são as três divisões nervosas da micção e suas funções?", back: "<b>Parassimpático S2–S4</b> (nervo pélvico): contrai o detrusor/esvazia. <b>Simpático T10–L2</b> (hipogástrico): favorece armazenamento. <b>Somático S2–S4</b> (pudendo): contrai o esfíncter externo estriado.", tags: ["AP2", "neurofisiologia", "inervação"] },
  { id: "f-ap2-02", topicId: "top-bas-02", ap2Module: "ap2-m1", front: "M3, β3 e α1: quem contrai, quem relaxa e quem fecha a saída?", back: "<b>M3</b> (muscarínico): principal receptor da contração do detrusor. <b>β3</b>: relaxa o detrusor e favorece armazenamento. <b>α1</b>: aumenta o tônus da saída vesical/uretra prostática. M2/M3 é a formulação histórica da prova.", tags: ["AP2", "receptores", "detrusor"] },
  { id: "f-ap2-03", topicId: "top-fun-14", ap2Module: "ap2-m1", front: "O que é dissinergia detrusor-esfíncter e por que ela ameaça o rim?", back: "O detrusor contrai e o esfíncter <b>também contrai</b>, elevando a pressão vesical. Isso favorece refluxo, hidronefrose e lesão do trato superior. Na neurobexiga, a alta pressão é a ameaça renal central — não apenas o resíduo.", tags: ["AP2", "neurobexiga", "dissinergia"] },
  { id: "f-ap2-04", topicId: "top-tra-24", ap2Module: "ap2-m2", front: "Trauma renal: o que decide a conduta?", back: "<b>Estabilidade hemodinâmica</b> antes do grau AAST. Paciente estável com grau I–IV: conduta conservadora e monitorização. Instabilidade, hematoma expansivo ou lesão pedicular grave podem exigir intervenção. Grau V não é cirurgia automática na prática atual.", tags: ["AP2", "trauma", "rim"] },
  { id: "f-ap2-05", topicId: "top-tra-25", ap2Module: "ap2-m2", front: "Fratura pélvica + sangue no meato: qual a suspeita e o que NÃO fazer?", back: "Suspeita de <b>lesão de uretra posterior</b>. Não passar sonda vesical às cegas: risco de falso trajeto e agravamento. Fazer <b>uretrografia retrógrada</b> e, se necessário, <b>cistostomia suprapúbica</b>. Pensar também em bexiga extraperitoneal.", tags: ["AP2", "trauma", "uretra"] },
  { id: "f-ap2-06", topicId: "top-tra-24", ap2Module: "ap2-m2", front: "Lesão ureteral: qual é o contexto típico e como se manifesta?", back: "Frequentemente <b>iatrogênica</b> em cirurgia pélvica/abdominal. Pode evoluir com <b>urinoma, fístula urinária, estenose ou hidronefrose</b>. O diagnóstico pode ser tardio; TC urográfica e avaliação retrógrada/anterógrada ajudam.", tags: ["AP2", "trauma", "ureter"] },
  { id: "f-ap2-07", topicId: "top-inf-04", ap2Module: "ap2-m3", front: "Treponêmicos x não treponêmicos: quais são e para que servem?", back: "<b>Treponêmicos:</b> FTA-Abs, teste rápido e ELISA treponêmico — específicos contra T. pallidum, geralmente permanecem reagentes. <b>Não treponêmicos:</b> VDRL, RPR e TRUST — títulos avaliam atividade e resposta ao tratamento.", tags: ["AP2", "IST", "sífilis"] },
  { id: "f-ap2-08", topicId: "top-inf-04", ap2Module: "ap2-m3", front: "Qual é o tratamento da sífilis recente sem alergia?", back: "<b>Penicilina benzatina 2,4 milhões UI IM, dose única</b>. A via EV é pegadinha: benzatina é intramuscular. Sífilis tardia/latente tardia: 2,4 milhões UI IM por semana, 3 semanas. Gestante alérgica deve ser dessensibilizada.", tags: ["AP2", "IST", "sífilis", "tratamento"] },
  { id: "f-ap2-09", topicId: "top-inf-04", ap2Module: "ap2-m3", front: "Qual é o agente da donovanose e qual a confusão clássica?", back: "<b>Klebsiella granulomatis</b> (antigo Calymmatobacterium granulomatis). Não confundir com <b>Chlamydia trachomatis</b> (uretrite/LGV) nem com Haemophilus ducreyi (cancro mole). Úlcera crônica, indolor, de bordas elevadas e base granulosa.", tags: ["AP2", "IST", "donovanose"] },
  { id: "f-ap2-10", topicId: "top-and-20", ap2Module: "ap2-m4", front: "Torção x orquiepididimite: como diferenciar e qual é a prioridade?", back: "Torção: início <b>súbito</b>, náuseas, testículo alto/horizontal, cremastérico abolido; <b>exploração urgente</b>. Orquiepididimite: progressiva, febre, sintomas urinários; antibiótico. Prehn é inespecífico e Doppler normal <b>não exclui</b> torção. Janela crítica: 4–6 h.", tags: ["AP2", "urgência", "escroto agudo"] },
  { id: "f-ap2-11", topicId: "top-and-22", ap2Module: "ap2-m4", front: "Priapismo isquêmico: a partir de quanto tempo é emergência e qual a sequência?", back: "Ereção dolorosa e rígida <b>> 4 h</b> é emergência. Sequência: aspiração do sangue cavernoso ± irrigação + <b>fenilefrina intracavernosa</b>; se falhar, shunt cirúrgico. Priapismo de alto fluxo costuma ser indolor e related a trauma.", tags: ["AP2", "urgência", "priapismo"] },
  { id: "f-ap2-12", topicId: "top-ped-27", ap2Module: "ap2-m4", front: "Fimose x parafimose: qual é a diferença?", back: "<b>Fimose:</b> dificuldade de retrair o prepúcio. <b>Parafimose:</b> prepúcio retraído fica preso atrás da glande, com anel constritivo e edema; é emergência. Tratar reduzindo o edema e reposicionando; se falhar, dorsal slit/cirurgia.", tags: ["AP2", "urgência", "parafimose"] },
  { id: "f-ap2-13", topicId: "top-fun-13", ap2Module: "ap2-m1", front: "Bexiga hiperativa: qual é o tratamento em quatro linhas?", back: "<b>1.</b> Comportamental: controle de líquidos, reduzir cafeína/nicotina, treino vesical (~3 h) e fisioterapia do assoalho pélvico. <b>2.</b> Farmacológico: antimuscarínicos (bloqueiam M3) ou β3 (mirabegrona). <b>3.</b> Minimamente invasivo: toxina botulínica, neuromodulação sacral, nervo tibial posterior. <b>4.</b> Cirúrgico: ampliação vesical em casos refratários.", tags: ["AP2", "OAB", "tratamento"] },
  { id: "f-ap2-14", topicId: "top-tra-25", ap2Module: "ap2-m2", front: "Trauma de uretra: como classificar e qual a conduta?", back: "Posterior = prostática + membranosa; anterior = bulbar + peniana. <b>Tipo I</b>: estiramento sem ruptura → sonda 3–5 dias. <b>Tipo II</b>: ruptura prostatomembranosa parcial/completa. <b>Tipo III</b>: ruptura prostatomembranosa + diafragma urogenital/uretra bulbar. Tipos II/III: <b>cistostomia suprapúbica</b> e reconstrução em segundo tempo. Não sondar às cegas.", tags: ["AP2", "trauma", "uretra"] },
  { id: "f-ap2-15", topicId: "top-inf-04", ap2Module: "ap2-m3", front: "Cancro mole, LGV e donovanose: como não trocar os agentes?", back: "<b>Cancro mole:</b> <i>Haemophilus ducreyi</i>, úlcera dolorosa/purulenta, bubão unilateral. <b>LGV:</b> <i>Chlamydia trachomatis</i> L1–L3, úlcera indolor + adenopatia, sinal da calha. <b>Donovanose:</b> <i>Klebsiella granulomatis</i>, úlcera crônica indolor de bordos elevados, elefantíase.", tags: ["AP2", "IST", "úlceras"] },
  { id: "f-ap2-16", topicId: "top-and-22", ap2Module: "ap2-m4", front: "Priapismo: como a gasometria diferencia baixo e alto fluxo?", back: "<b>Baixo fluxo (isquêmico):</b> hipóxia/acidose, <b>PO2 < 40 mmHg</b>; emergência, aspirar/irrigar + fenilefrina. <b>Alto fluxo (arterial):</b> <b>PO2 > 80 mmHg</b>; frequentemente indolor/trauma, conduta expectante ou embolização. A diretriz atual trata > 4 h como emergência.", tags: ["AP2", "priapismo", "gasometria"] }
];

/* Merge no banco principal — a trilha AP2 reutiliza o mesmo motor de
   questões, erros, estatísticas, simulados e persistência. */
URO.questions = URO.questions || [];
URO.ap2Questions.forEach((q) => URO.questions.push(q));

URO.flashcards = URO.flashcards || [];
URO.ap2Cards.forEach((c) => URO.flashcards.push(c));
