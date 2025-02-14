import { createContext, useContext, useState } from 'react'
import obesidade from '../Assets/obesidade1.jpg'
import idoso1 from '../Assets/idoso1.jpg'
import contagem from '../Assets/contagem.jpg'
import hipertensao from '../Assets/hipertensao.jpg'
import mulher from '../Assets/mulher.jpg'
import endometriose from '../Assets/endometriose.jpg'
import gastrite from '../Assets/gastrite.jpg'
const BlogPostsContext = createContext()

export function BlogPostsProvider({ children }) {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "A Importância da Orientação Nutricional para Pacientes com Refluxo Gastroesofágico e Gastrite",
      author: "Dra. Érica Bastos",
      date: "10 de junho de 2023",
      readTime: 8,
      excerpt: "O refluxo gastroesofágico (DRGE) e a gastrite são condições gastrointestinais comuns que afetam milhões de pessoas no mundo inteiro. Ambas as doenças podem causar desconforto significativo e, se não tratadas adequadamente, podem levar a complicações graves.",
      content: `O refluxo gastroesofágico (DRGE) e a gastrite são condições gastrointestinais comuns que afetam milhões de pessoas no mundo inteiro. Ambas as doenças podem causar desconforto significativo e, se não tratadas adequadamente, podem levar a complicações graves. Embora o tratamento médico, como o uso de medicamentos, seja essencial para controlar os sintomas, a orientação nutricional desempenha um papel crucial na prevenção e no manejo desses distúrbios.

      1. Entendendo o Refluxo Gastroesofágico e a Gastrite
      O refluxo gastroesofágico ocorre quando o conteúdo do estômago, incluindo ácidos, retorna ao esôfago, causando sensação de queimação (azia), regurgitação e até mesmo danos ao tecido esofágico. Já a gastrite é uma inflamação da mucosa gástrica, que pode ser provocada por diversos fatores, como infecções bacterianas, uso excessivo de medicamentos anti-inflamatórios, estresse ou dietas inadequadas.

      2. Benefícios da Orientação Nutricional no Tratamento do Refluxo e da Gastrite
      A intervenção nutricional é uma das abordagens mais eficazes para controlar os sintomas dessas condições e prevenir recaídas. Estudos científicos e práticas clínicas reforçam a importância da alimentação equilibrada e da modulação da dieta para aliviar os sintomas e melhorar a qualidade de vida dos pacientes.

      a. Redução da Acidificação Gástrica e da Irritação
      A escolha correta de alimentos pode ajudar a reduzir a produção de ácido no estômago e a prevenir episódios de refluxo. Alimentos como frutas não cítricas, vegetais, grãos integrais e proteínas magras são recomendados para manter o pH gástrico mais equilibrado e reduzir a irritação da mucosa esofágica e gástrica.

      b. Controle de Sintomas com Alterações Dietéticas
      O acompanhamento nutricional possibilita que o paciente aprenda a identificar e evitar os alimentos desencadeantes. Alguns alimentos, como alimentos picantes, cafeína, chocolate, bebidas alcoólicas e alimentos fritos, são conhecidos por agravar os sintomas de refluxo e gastrite. O nutricionista pode personalizar uma dieta que minimize esses riscos e forneça alternativas nutritivas que não promovam a acidificação do estômago.

      c. Melhora da Digestão e do Funcionamento Intestinal
      Certos alimentos, como fibras solúveis, probióticos e alimentos ricos em antioxidantes, ajudam na digestão e na proteção da mucosa gástrica. A inclusão de fibras, por exemplo, melhora o trânsito intestinal e evita a constipação, que pode agravar o refluxo devido ao aumento da pressão intra-abdominal. Além disso, probióticos presentes em alimentos como iogurtes e kefir podem melhorar a saúde intestinal e reduzir a inflamação gástrica.

      d. Redução do Estresse Oxidativo e Inflamação
      O controle nutricional eficaz também pode ajudar a reduzir o estresse oxidativo e a inflamação, que são fatores associados ao desenvolvimento e agravamento da gastrite e refluxo. Nutrientes como ácidos graxos ômega-3, presentes em peixes como salmão, e flavonoides, encontrados em frutas e vegetais coloridos, têm propriedades anti-inflamatórias que auxiliam na recuperação da mucosa gástrica e esofágica.

      e. Promoção do Equilíbrio Nutricional e da Saúde Geral
      Além de controlar os sintomas específicos, o acompanhamento nutricional garante que o paciente mantenha um equilíbrio nutricional adequado, prevenindo deficiências alimentares que podem surgir com dietas restritivas. O nutricionista também orienta sobre a distribuição adequada de macronutrientes e micronutrientes, fundamentais para o bem-estar geral e para a manutenção da saúde digestiva a longo prazo.

      3. Conclusão
      A orientação nutricional oferece uma ferramenta poderosa no tratamento do refluxo gastroesofágico e da gastrite, promovendo o alívio dos sintomas e a prevenção de complicações. Com uma dieta equilibrada e adaptada às necessidades individuais, o paciente pode alcançar uma melhoria significativa na qualidade de vida e no controle das condições digestivas. O acompanhamento de um nutricionista especializado é, portanto, essencial para garantir que o tratamento seja não apenas eficaz, mas também seguro e sustentável a longo prazo.`,
      image: gastrite
    },
    {
      id: 2,
      title: "A Importância do Acompanhamento Nutricional no Contexto da Endometriose e a Saúde da Mulher",
      author: "Dra. Érica Bastos",
      date: "15 de junho de 2023",
      readTime: 7,
      excerpt: "A endometriose é uma condição ginecológica crônica que afeta uma em cada 10 mulheres em idade reprodutiva. Caracteriza-se pelo crescimento do tecido endometrial fora do útero, em locais como ovários, trompas de falópio e outras partes da pelve.",
      content: `A endometriose é uma condição ginecológica crônica que afeta uma em cada 10 mulheres em idade reprodutiva. Caracteriza-se pelo crescimento do tecido endometrial fora do útero, em locais como ovários, trompas de falópio e outras partes da pelve. A condição pode causar dor intensa, sangramentos irregulares e até mesmo infertilidade. Embora o tratamento convencional, que inclui medicamentos e cirurgia, seja essencial, a orientação nutricional se tornou um componente fundamental no manejo da endometriose, trazendo benefícios significativos tanto no alívio dos sintomas quanto na melhora da qualidade de vida das mulheres afetadas.

      1. A Endometriose e Seus Impactos na Saúde da Mulher
      A endometriose afeta diretamente a qualidade de vida das mulheres, gerando sintomas como dor pélvica crônica, dismenorreia (menstruação dolorosa), dor durante a relação sexual, cansaço extremo e dificuldades para engravidar. Além disso, o impacto emocional da doença, muitas vezes minimizada, pode agravar ainda mais a situação de mulheres que enfrentam não apenas os sintomas físicos, mas também o estigma social e as dificuldades no diagnóstico, que pode levar anos.

      O manejo da endometriose envolve uma abordagem multidisciplinar, que inclui ginecologistas, fisioterapeutas, psicólogos e nutricionistas. A nutrição é um pilar importante nesse processo, pois pode influenciar a inflamação, os níveis hormonais, a dor e o bem-estar geral da paciente.

      2. O Papel Crucial da Nutrição no Manejo da Endometriose
      Pesquisas científicas publicadas em revistas de renome, como o Journal of Endometriosis and Pelvic Pain e o American Journal of Obstetrics and Gynecology, demonstram que uma alimentação adequada pode ajudar a reduzir a intensidade dos sintomas da endometriose, além de melhorar o equilíbrio hormonal, reduzir a inflamação e apoiar a saúde reprodutiva.

      a. Redução da Inflamação
      A endometriose está associada a um estado inflamatório crônico no corpo, e essa inflamação contribui para o agravamento dos sintomas. A dieta pode desempenhar um papel crucial no controle dessa inflamação. Alimentos anti-inflamatórios, como ômega-3, presente em peixes gordurosos (como salmão e sardinha), frutas vermelhas (ricos em antioxidantes) e vegetais crucíferos (como brócolis e couve), têm propriedades que podem ajudar a reduzir os marcadores inflamatórios no corpo.

      Além disso, o consumo de alimentos ricos em fibras (como grãos integrais, legumes e sementes) pode melhorar a digestão e ajudar na eliminação de toxinas, reduzindo a carga inflamatória e promovendo o equilíbrio hormonal.`,
      image: endometriose
    },
    {
      id: 3,
      title: "A Importância da Nutrição na Saúde da Mulher",
      author: "Dra. Érica Bastos",
      date: "20 de junho de 2023",
      readTime: 6,
      excerpt: "A alimentação desempenha um papel fundamental na saúde da mulher, sendo um pilar essencial para o bem-estar físico e emocional. Desde a adolescência até a menopausa, as necessidades nutricionais da mulher variam consideravelmente, e uma dieta balanceada é crucial para promover a saúde hormonal, fortalecer o sistema e prevenir doenças imunológicas.",
      content: `A alimentação desempenha um papel fundamental na saúde da mulher, sendo um pilar essencial para o bem-estar físico e emocional. Desde a adolescência até a menopausa, as necessidades nutricionais da mulher variam consideravelmente, e uma dieta balanceada é crucial para promover a saúde hormonal, fortalecer o sistema e prevenir doenças imunológicas.

      Uma alimentação adequada pode ajudar a regular o ciclo menstrual, aliviar os sintomas da TPM e da menopausa, além de contribuir para a saúde óssea, reduzindo os riscos da osteoporose. Nutrientes como cálcio, ferro, fibra e antioxidantes são especialmente importantes, e sua ingestão deve ser cuidadosamente planejada.

      A orientação de um nutricionista é vital nesse contexto. Esse profissional não apenas fornece um conhecimento aprofundado sobre as necessidades nutricionais específicas em cada fase da vida da mulher, mas também oferece suporte personalizado. Através de avaliações individuais, um nutricionista pode criar planos alimentares que atendam às demandas do corpo, levando em conta fatores como condições de saúde pré-existentes, estilo de vida e preferências alimentares.

      Além disso, uma nutrição adequada impacta diretamente na saúde mental, promovendo um equilíbrio emocional e melhorando a qualidade de vida. Uma alimentação consciente, aliada à orientação de um especialista, pode capacitar as mulheres a tomarem decisões informadas sobre sua saúde, promovendo uma relação mais harmoniosa com a comida e com o próprio corpo.

      Portanto, investir em uma alimentação saudável, com o acompanhamento de um nutricionista, não é apenas uma escolha, mas uma necessidade para garantir que as mulheres alcancem todo o seu potencial, vivendo vidas plenas, saudáveis ​​e vibrantes. É um compromisso com a saúde que reverbera em todas as esferas da vida feminina, proporcionando força, vitalidade e bem-estar.`,
      image: mulher
    },
    {
      id: 4,
      title: "A Importância da Nutricionista no Controle da Hipertensão: A Reeducação Alimentar como aliada",
      author: "Dra. Renata Sanches",
      date: "25 de junho de 2023",
      readTime: 7,
      excerpt: "A hipertensão arterial é uma condição de saúde que afeta milhões de pessoas em todo o mundo e está associada a sérias complicações, como doenças cardíacas, derrames e problemas renais. Um dos aspectos mais eficazes para controlar a pressão arterial é a adoção de uma alimentação saudável e equilibrada.",
      content: `A hipertensão arterial é uma condição de saúde que afeta milhões de pessoas em todo o mundo e está associada a sérias complicações, como doenças cardíacas, derrames e problemas renais. Um dos aspectos mais eficazes para controlar a pressão arterial é a adoção de uma alimentação saudável e equilibrada. Nesse contexto, o papel da nutricionista se torna fundamental.

      Contribuições da Nutricionista no Controle da Hipertensão

      1. Avaliação Individualizada: A nutricionista realiza uma avaliação detalhada do estado nutricional do paciente, considerando hábitos alimentares, estilo de vida e comorbidades. Isso permite desenvolver um plano alimentar personalizado que atenda às necessidades específicas de cada indivíduo.

      2. Reeducação Alimentar: A reeducação alimentar é uma estratégia crucial para o controle da hipertensão. A nutricionista ensina como fazer escolhas alimentares saudáveis, reduzindo a ingestão de sódio, açúcares e gorduras saturadas, ao mesmo tempo em que aumenta o consumo de frutas, verduras, grãos integrais e proteínas magras. Essa mudança não apenas ajuda a controlar a pressão arterial, mas também promove a saúde geral.

      3. Orientação sobre Nutrientes Essenciais: Nutrientes como potássio, magnésio e fibras são importantes para a saúde cardiovascular. A nutricionista pode orientar sobre os alimentos ricos nesses nutrientes, ajudando a equilibrar a dieta e contribuir para a redução da pressão arterial.

      4. Promoção de Hábitos Saudáveis: Além de ajustar a alimentação, a nutricionista incentiva a adoção de um estilo de vida saudável que inclui a prática regular de atividades físicas, controle do estresse e a manutenção de um peso saudável. Esses fatores são fundamentais para o gerenciamento eficaz da hipertensão.

      5. Educação e Suporte Contínuo: O acompanhamento regular com a nutricionista oferece suporte emocional e motivacional, permitindo que os pacientes façam mudanças sustentáveis em seus hábitos alimentares e mantenham o controle da pressão arterial ao longo do tempo.

      A Reeducação Alimentar como Ferramenta de Controle
      A reeducação alimentar, quando realizada com o auxílio de uma nutricionista, proporciona uma abordagem prática e eficaz para o controle da hipertensão. Ao promover uma alimentação equilibrada e consciente, os pacientes podem observar melhorias significativas nos níveis de pressão arterial, contribuindo para a redução de riscos associados à condição.

      Transforme Sua Saúde com o Apoio de uma Nutricionista
      Investir na orientação de uma nutricionista é um passo essencial para quem busca controlar a hipertensão. Com um plano alimentar personalizado e suporte contínuo, você pode alcançar resultados duradouros e melhorar sua qualidade de vida. Não deixe que a hipertensão dite suas escolhas; busque a ajuda profissional e comece sua jornada rumo a uma vida mais saudável e equilibrada!`,
      image: hipertensao
    },
    {
      id: 5,
      title: "Contagem de Carboidratos: Um Aliado no Controle do Diabetes Tipo 1",
      author: "Dra. Renata Sanches",
      date: "30 de junho de 2023",
      readTime: 8,
      excerpt: "Para pessoas com diabetes tipo 1 que dependem de uso contínuo de insulina, o controle da glicemia é crucial para garantir uma vida saudável e prevenir complicações. Uma das estratégias mais eficazes para alcançar esse objetivo é o método de contagem de carboidratos.",
      content: `Para pessoas com diabetes tipo 1 que dependem de uso contínuo de insulina, o controle da glicemia é crucial para garantir uma vida saudável e prevenir complicações. Uma das estratégias mais eficazes para alcançar esse objetivo é o método de contagem de carboidratos. Essa abordagem não apenas possibilita um gerenciamento mais preciso da alimentação e da dosagem de insulina, mas também oferece uma maior autonomia e qualidade de vida.

      O Que É a Contagem de Carboidratos?
      A contagem de carboidratos envolve calcular a quantidade de carboidratos em cada refeição e lanche. Como esses nutrientes têm um impacto direto nos níveis de glicose no sangue, saber exatamente quantos carboidratos você está consumindo ajuda a ajustar a dose de insulina de forma mais eficaz. Essa prática é especialmente importante para quem vive com diabetes tipo 1, que não produz insulina suficiente naturalmente.

      A Importância da Nutricionista Especializada
      Ter uma nutricionista especializada em diabetes tipo 1 é fundamental para implementar a contagem de carboidratos de maneira eficaz. Este profissional traz conhecimento específico que pode transformar a forma como você lida com sua alimentação e o controle glicêmico. Aqui estão algumas das razões pelas quais a assistência de uma nutricionista é tão valiosa:

      1. Orientação Personalizada: A nutricionista pode criar um plano alimentar individualizado, considerando suas preferências, estilo de vida e necessidades nutricionais. Isso ajuda a garantir que a contagem de carboidratos seja feita de forma eficaz e adequada.

      2. Educação e Treinamento: Uma nutricionista fornece educação sobre como contar carboidratos, ler rótulos de alimentos e fazer escolhas saudáveis, capacitando você a gerenciar melhor sua condição.

      3. Ajustes Dinâmicos: Com a orientação profissional, você pode fazer ajustes na sua dieta e na dosagem de insulina conforme necessário, levando em conta fatores como atividade física, estresse e variações diárias na glicemia.

      4. Suporte Emocional e Motivacional: O acompanhamento de um nutricionista oferece um suporte emocional importante, ajudando a manter a motivação e a confiança em seu gerenciamento do diabetes.

      5. Promoção de Hábitos Saudáveis: A nutricionista incentiva a escolha de carboidratos complexos e nutritivos, promovendo uma alimentação equilibrada que beneficia não apenas o controle da glicemia, mas a saúde como um todo.

      Transforme Sua Vida com a Contagem de Carboidratos
      Adotar o método de contagem de carboidratos pode ser um divisor de águas para quem vive com diabetes tipo 1. Com o suporte de uma nutricionista especializada, você poderá alcançar um controle glicêmico mais eficaz, aumentar sua qualidade de vida e viver com mais liberdade e confiança. Não hesite em buscar a orientação de um profissional capacitado e comece sua jornada rumo a um gerenciamento mais eficaz e saudável da sua condição!`,
      image: contagem
    },
    {
      id: 6,
      title: "A Importância do Acompanhamento Nutricional para Idosos",
      author: "Dra. Renata Sanches",
      date: "5 de julho de 2023",
      readTime: 9,
      excerpt: "À medida que envelhecemos, ocorrem varias alterações metabólicas, fisiológicas e de composição corporal. O envelhecimento aumenta o risco de desnutrição, obesidade, doenças ósseas e articulares, desidratação, além do aparecimento de doenças crônicas (diabetes, hipertensão artéria, doença coronariana) e sarcopenia.",
      content: `À medida que envelhecemos, ocorrem varias alterações metabólicas, fisiológicas e de composição corporal. O envelhecimento aumenta o risco de desnutrição, obesidade, doenças ósseas e articulares, desidratação, além do aparecimento de doenças crônicas (diabetes, hipertensão artéria, doença coronariana) e sarcopenia (caracterizada pela acelerada perda de massa e força muscular com redução do desempenho físico nos indivíduos).

      A nutrição desempenha um papel crucial na manutenção e recuperação da saúde e bem-estar. Um acompanhamento nutricional adequado para idosos é necessário para transformar e melhorando de forma progressiva a qualidade de vida.

      Benefícios do Acompanhamento Nutricional

      1. Saúde Geral
      Um (a) nutricionista vai adequar a alimentação considerando as necessidades específicas do individuo na terceira idade, pois compreende como o processo do envelhecimento afeta todo metabolismo, digestão e absorção de nutrientes. A nutrição especializada para o idoso vai atuar prevenindo e tratando doenças como desnutrição, sarcopenia, diabetes, hipertensão, osteoporose...

      2. Energia, Força e Vitalidade
      Uma alimentação individualizada balanceada proporcionará mais energia, força e disposição para as atividades do dia a dia. Além de melhorar a qualidade e duração do sono. Isso significa mais prazer em realizar tarefas simples e, claro, mais momentos de felicidade.

      3. Sistema Imunológico
      A "imunossenescência", processo de envelhecimento do sistema imunológico com degradação das suas funções, surge e com isso ocorre um risco aumentado de infecções, malignidade e doenças autoimunes. A desnutrição é relativamente comum entre adultos mais velhos e também pode contribuir para o declínio da função imunológica.

      Nutrientes essenciais e específicos favorecem o fortalecimento e recuperação do sistema imunológico, tornando o corpo mais resistente a infecções e doenças.

      4. Peso Ideal
      A obesidade e desnutrição são eventos comuns relacionados ao processo do envelhecimento.

      Dietas com elevado valor energético, ricas em gorduras de origem animal, açúcares, carboidratos refinados e com reduzido teor de proteínas, frutas, verduras e fibras, comuns aos hábitos alimentares dos idosos, sugerem contribuição favorável à ocorrência da obesidade e perda de massa muscular.

      O acompanhamento nutricional atua sobre estas questões metabólicas tratando ou prevenindo o surgimento de complicações relacionadas ao excesso ou baixo peso, comuns nessa fase da vida.

      5. Saúde Mental
      Uma dieta equilibrada está relacionada à saúde mental. Nutriente como ômega-3, triptofano, colina, ácido fólico e antioxidante estão associados à redução de sintomas de depressão e ansiedade, contribuindo para melhora na qualidade do sono e para um envelhecimento mais saudável.

      6. Saúde intestinal
      As mudanças do hábito intestinal que surgem com o envelhecimento, podem dizer muito sobre a saúde do indivíduo, auxilia no diagnóstico de eventuais doenças e condições anormais. A atrofia da mucosa intestinal compromete a abasorção de nutrientes e leva à constipação. A constipação intestinal é uma condição comum à população idosa (1/4 dos idosos), prejudicando sua qualidade de vida e bem estar. A nutrição adequada, baseada em hidratação, aliada a uma ingestão adequada de fibras é uma maneira de prevenção e tratamento da constipação intestinal.

      7. Necessidades Específicas
      Cada indivíduo tem necessidades nutricionais únicas. Um nutricionista além de compreender as alterações metabólicas e fisiológicas que surgem com o envelhecimento pode identificar intolerâncias e preferências alimentares, alergias ou condições de saúde que exigem uma alimentação especial, proporcionando um plano alimentar personalizado.

      8. Educação Alimentar
      O acompanhamento nutricional vai além da prescrição de dietas. Atua no processo de reeducação sobre escolhas alimentares saudáveis, ajudando os idosos a compreender a necessidade de cada nutriente e desenvolverem autonomia e confiança em suas escolhas alimentares.

      Invista na Sua Saúde
      Cuidar da alimentação na terceira idade é um ato de amor próprio. Com um acompanhamento nutricional adequado, os idosos podem desfrutar de uma vida mais longa, saudável e cheia de vitalidade e bem estar. Não deixe para amanhã! Invista na sua saúde hoje mesmo. Agende uma consulta e descubra como podemos ajudar você ou um ente querido a viver com mais qualidade de vida!`,
      image: idoso1
    },
    {
      id: 7,
      title: "A Gravidade da Obesidade e a Importância da Nutrição Especializada",
      author: "Dra. Renata Sanches",
      date: "10 de julho de 2023",
      readTime: 7,
      excerpt: "A obesidade vem sendo uma das maiores preocupações de saúde pública do século XXI. Seus riscos são inúmeros. Além da estética, comprometendo a harmonia corporal, é um fator predisponente para diversas patologias que podem afetar sua qualidade de vida a curto e longo prazo.",
      content: `A obesidade vem sendo uma das maiores preocupações de saúde pública do século XXI. Seus riscos são inúmeros. Além da estética, comprometendo a harmonia corporal, é um fator predisponente para diversas patologias que podem afetar sua qualidade de vida a curto e longo prazo. Entre as condições associadas à obesidade estão diabetes tipo 2, hipertensão, doenças cardíacas, apneia do sono, problemas articulares e até certos tipos de câncer. A cada dia que passa, mais pessoas se veem diante dos impactos negativos que a obesidade traz, tanto física quanto emocionalmente.

      Diante desse cenário alarmante, é fundamental buscar orientação adequada. O acompanhamento de uma nutricionista especializada em obesidade é essencial para quem deseja reverter essa situação. Um profissional qualificado vai oferecer um plano de reeducação alimentar personalizado, levando em consideração suas necessidades individuais, preferências e estilo de vida, promovendo perda de peso e adoção de hábitos saudáveis que possam ser mantidos a longo prazo.

      Benefícios de uma Reeducação Alimentar Personalizada:

      1. Perda de Peso Sustentável: Ao contrário de dietas da moda ou restritivas, que na maioria das vezes levam ao efeito sanfona, a reeducação alimentar foca na moderação e no equilíbrio, resultando em uma perda de peso saudável e duradoura.

      2. Prevenção de Doenças: Com a redução do peso corporal, muitos dos riscos associados à obesidade (hipertensão arterial, pré-diabetes, resistência à insulina, diabetes e doenças cardiovasculares) diminuem significativamente.

      3. Melhora da Qualidade de Vida: Perder peso vai trazer benefícios emocionais, no sono e físicos, como aumento da autoestima, disposição e energia, além de uma maior capacidade para realizar atividades do dia a dia.

      4. Mudança de Estilo de Vida: Uma abordagem integral envolve não apenas a alimentação, mas também mudanças no estilo de vida, que incluem a prática regular de atividades físicas, boa qualidade de sono e acompanhamento médico. O trabalho conjunto de nutricionistas, médicos e educadores físicos maximiza os resultados e garante um suporte completo.

      5. Educação Nutricional: Aprender sobre a composição dos alimentos, combinação de nutrientes e como fazer escolhas mais saudáveis é fundamental para garantir que as mudanças se mantenham a longo prazo.

      A luta contra a obesidade não precisa ser solitária. Com o suporte de uma equipe multidisciplinar, você pode traçar um caminho rumo à saúde e ao bem-estar. Não deixe que a obesidade controle sua vida. Invista em você mesmo e na sua saúde. Consulte um nutricionista especializado e dê o primeiro passo em direção a uma vida mais saudável e equilibrada.

      Transforme sua vida com a nutrição!`,
      image: obesidade
    }
  ])

  return (
    <BlogPostsContext.Provider value={{ blogPosts }}>
      {children}
    </BlogPostsContext.Provider>
  )
}

export function useBlogPosts() {
  return useContext(BlogPostsContext)
}