import { createContext, useContext } from "react"
import cardio1 from '../Assets/cardio.jpg'
import obesidade from '../Assets/obesidade.jpg'
import card1 from "../Assets/card1.png"
import card2 from "../Assets/card2.png"
import card3 from "../Assets/card3.png"
import cardio from "../Assets/cardiopatia.png"
import gestante from "../Assets/gestante.png"
import idoso from "../Assets/Idoso.png"
import hiper from "../Assets/hipertensao.png"
import infantil from "../Assets/infantil.png"
import vegan from "../Assets/vegan.png"
import med from "../Assets/mediterraneo.png"
import esportivo from "../Assets/esportivo.png"
import nefropatia from '../Assets/nefro.jpg'
import gravida from '../Assets/gravida.jpg'
import idoso1 from '../Assets/idoso.jpg'
import hipertensao from '../Assets/hipertensão1.jpg'

import infantil1 from '../Assets/infantil.jpg'

import mediterraneo1 from '../Assets/mediterraneo.jpg'

import esportivo1 from '../Assets/esportivo.jpg'
const ServicesContext = createContext()

export function ServicesProvider({ children }) {
  const services = [
    {
      id: 1,
      title: "Diabetes",
      description: "Controle Glicêmico especializado",
      image: card1,
      link: "/services/1",
      articleImage: "https://img.freepik.com/free-photo/flat-lay-health-still-life-with-copy-space_23-2148854045.jpg?t=st=1738280681~exp=1738284281~hmac=4c88f9db86e153640d874be1920e3f021c92ef2ee94a3f350ae0e45b0d64153f&w=1060",
      articleText: `O controle glicêmico é fundamental para uma boa qualidade de vida em pessoas com diabetes. Uma alimentação adequada desempenha um papel crucial nesse processo, ajudando a regular os níveis de açúcar no sangue de forma eficaz.

      Um plano alimentar personalizado, elaborado por um nutricionista especializado, pode fazer toda a diferença. Ele leva em consideração não apenas as necessidades nutricionais individuais, mas também preferências alimentares e estilo de vida.

      Além disso, o acompanhamento nutricional regular permite ajustes no plano alimentar conforme necessário, garantindo um controle glicêmico otimizado ao longo do tempo. Isso não só ajuda a prevenir complicações relacionadas ao diabetes, mas também promove uma sensação geral de bem-estar.

      Lembre-se, uma dieta para diabetes não significa privação. Com orientação adequada, é possível desfrutar de uma variedade de alimentos saborosos e nutritivos, mantendo o diabetes sob controle.`,
    },
    {
      id: 2,
      title: "Nefropatia",
      description: "Cuidado renal através da alimentação",
      image: card2,
      link: "/services/2",
      articleImage: nefropatia,
      articleText: `A nefropatia, ou doença renal, requer uma atenção especial à alimentação para manter a saúde dos rins e prevenir a progressão da doença. Uma dieta adequada pode ajudar a controlar os sintomas e melhorar a qualidade de vida.

      Um plano nutricional para nefropatia geralmente envolve o controle da ingestão de proteínas, sódio, potássio e fósforo. A quantidade exata dependerá do estágio da doença renal e das necessidades individuais de cada pessoa.

      É importante trabalhar em estreita colaboração com um nutricionista especializado em doenças renais. Ele pode criar um plano alimentar personalizado que atenda às suas necessidades nutricionais específicas, ajudando a manter os níveis adequados de eletrólitos e minimizar a carga de trabalho dos rins.

      Além disso, manter-se bem hidratado (conforme orientação médica) e limitar o consumo de alimentos processados pode trazer benefícios significativos. Com o acompanhamento adequado, é possível desfrutar de refeições saborosas e nutritivas, mesmo com as restrições da dieta renal.`,
    },
    {
      id: 3,
      title: "Obesidade",
      description: "Emagrecimento saudável e duradouro",
      image: card3,
      link: "/services/3",
      articleImage: obesidade,
      articleText: `A obesidade é uma condição complexa que requer uma abordagem multifacetada para um tratamento eficaz. Um dos pilares fundamentais para o emagrecimento saudável e duradouro é uma alimentação equilibrada e personalizada.

      O objetivo não é apenas perder peso rapidamente, mas sim adotar hábitos alimentares sustentáveis que promovam a saúde a longo prazo. Isso envolve aprender a fazer escolhas alimentares conscientes, entender as necessidades nutricionais do corpo e desenvolver uma relação saudável com a comida.

      Um nutricionista especializado pode criar um plano alimentar que não só promova a perda de peso, mas também forneça todos os nutrientes necessários para o bom funcionamento do corpo. Este plano levará em consideração suas preferências alimentares, estilo de vida e quaisquer condições de saúde existentes.

      Além da dieta, a prática regular de exercícios físicos e o apoio psicológico podem ser fundamentais para o sucesso do tratamento da obesidade. Lembre-se, o objetivo é a saúde geral, não apenas um número na balança.`,
    },
    {
      id: 4,
      title: "Cardiopatia",
      description: "Nutrição para saúde do coração",
      image: cardio,
      link: "/services/4",
      articleImage:cardio1,
      articleText: `A nutrição desempenha um papel crucial na saúde cardiovascular. Uma dieta adequada pode ajudar a prevenir doenças cardíacas, controlar fatores de risco como hipertensão e colesterol alto, e melhorar a qualidade de vida de pessoas com cardiopatias existentes.

      Uma alimentação saudável para o coração geralmente inclui uma variedade de frutas e vegetais, grãos integrais, proteínas magras e gorduras saudáveis. É importante limitar o consumo de alimentos ricos em gorduras saturadas, gorduras trans, sódio e açúcares adicionados.

      Um nutricionista especializado em saúde cardiovascular pode desenvolver um plano alimentar personalizado que atenda às suas necessidades específicas. Isso pode incluir estratégias para controlar o peso, reduzir a pressão arterial, melhorar os níveis de colesterol e gerenciar o diabetes, todos fatores que afetam a saúde do coração.

      Lembre-se, pequenas mudanças na dieta podem fazer uma grande diferença na saúde do seu coração ao longo do tempo. Com orientação adequada, é possível adotar uma alimentação saborosa e variada que promova a saúde cardiovascular.`,
    },
    {
      id: 5,
      title: "Gestante",
      description: "Nutrição para você e seu bebê",
      image: gestante,
      link: "/services/5",
      articleImage: gravida,
      articleText: `A nutrição durante a gravidez desempenha um papel fundamental no desenvolvimento saudável do bebê e no bem-estar da gestante. Uma alimentação adequada não só fornece os nutrientes necessários para o crescimento do feto, mas também ajuda a mãe a manter sua própria saúde durante este período importante.

      Durante a gravidez, as necessidades nutricionais aumentam significativamente. É essencial consumir uma variedade de alimentos ricos em proteínas, cálcio, ferro, ácido fólico e outros nutrientes essenciais. Um nutricionista especializado em nutrição pré-natal pode criar um plano alimentar personalizado que atenda a essas necessidades aumentadas.

      Além disso, uma dieta equilibrada pode ajudar a gerenciar o ganho de peso durante a gravidez, reduzir o risco de complicações como diabetes gestacional e pré-eclâmpsia, e preparar o corpo para a amamentação.

      Lembre-se, cada gravidez é única, e as necessidades nutricionais podem variar. Consultar um nutricionista pode ajudar a garantir que você e seu bebê recebam a nutrição ideal durante esta fase especial.`,
    },
    {
      id: 6,
      title: "Idoso",
      description: "Alimentação na terceira idade",
      image: idoso,
      link: "/services/6",
      articleImage: idoso1,
      articleText: `A nutrição adequada na terceira idade é essencial para manter a saúde, a independência e a qualidade de vida. À medida que envelhecemos, nossas necessidades nutricionais mudam, e uma dieta bem planejada pode ajudar a prevenir ou gerenciar condições de saúde comuns em idosos.

      Um dos desafios da nutrição geriátrica é garantir uma ingestão adequada de nutrientes em menos calorias, já que o metabolismo tende a diminuir com a idade. É importante focar em alimentos ricos em nutrientes, como frutas, vegetais, grãos integrais, proteínas magras e gorduras saudáveis.

      Além disso, a hidratação adequada, a ingestão suficiente de cálcio e vitamina D para a saúde óssea, e a atenção à ingestão de vitamina B12 são aspectos importantes da nutrição na terceira idade.

      Um nutricionista especializado em geriatria pode desenvolver um plano alimentar que leve em consideração não apenas as necessidades nutricionais, mas também quaisquer condições de saúde existentes, medicamentos em uso e possíveis limitações físicas ou cognitivas.

      Lembre-se, uma boa nutrição pode ajudar a manter a força muscular, a função cognitiva e o sistema imunológico, contribuindo para um envelhecimento mais saudável e ativo.`,
    },
    {
      id: 7,
      title: "Hipertensão",
      description: "Controle natural da pressão arterial através de uma alimentação equilibrada",
      image: hiper,
      link: "/services/7",
      articleImage: hipertensao,
      articleText: `A hipertensão, ou pressão alta, é uma condição que pode ser significativamente influenciada pela dieta. Uma alimentação equilibrada e adequada pode ajudar a controlar a pressão arterial de forma natural, reduzindo a necessidade de medicamentos ou complementando o tratamento médico.

      A Dieta DASH (Dietary Approaches to Stop Hypertension) é uma abordagem nutricional comprovada para reduzir a pressão arterial. Ela enfatiza o consumo de frutas, vegetais, grãos integrais, proteínas magras e laticínios com baixo teor de gordura, enquanto limita a ingestão de sódio, gorduras saturadas e açúcares adicionados.

      Reduzir o consumo de sódio é particularmente importante para o controle da pressão arterial. Isso não significa apenas reduzir o sal de mesa, mas também estar atento ao sódio oculto em alimentos processados e refeições prontas.

      Além disso, certos nutrientes, como potássio, magnésio e cálcio, desempenham um papel importante na regulação da pressão arterial. Um nutricionista especializado pode ajudar a incorporar fontes adequadas desses nutrientes em sua dieta.

      Lembre-se, mudanças na dieta devem ser acompanhadas por outras modificações no estilo de vida, como prática regular de exercícios físicos, controle do estresse e manutenção de um peso saudável, para um controle eficaz da hipertensão.`,
    },
    {
      id: 8,
      title: "Infantil",
      description: "Nutrição especializada para promover o desenvolvimento saudável",
      image: infantil,
      link: "/services/8",
      articleImage: infantil1,
      articleText: `A nutrição infantil desempenha um papel crucial no crescimento, desenvolvimento e estabelecimento de hábitos alimentares saudáveis para toda a vida. Uma alimentação adequada durante a infância não só promove o desenvolvimento físico e cognitivo, mas também ajuda a prevenir problemas de saúde futuros.

      É importante oferecer uma variedade de alimentos nutritivos desde cedo, incluindo frutas, vegetais, grãos integrais, proteínas magras e gorduras saudáveis. Isso ajuda a garantir que a criança receba todos os nutrientes necessários para um crescimento saudável.

      A introdução alimentar é uma fase crucial que requer atenção especial. Um nutricionista pediátrico pode orientar sobre o momento certo e a forma adequada de introduzir novos alimentos, respeitando o desenvolvimento e as necessidades individuais de cada criança.

      Além disso, é fundamental criar um ambiente alimentar positivo, evitando pressões e restrições excessivas, que podem levar a uma relação negativa com a comida. Incentivar a participação da criança nas escolhas e no preparo dos alimentos pode promover hábitos alimentares saudáveis.

      Lembre-se, cada criança é única, e as necessidades nutricionais podem variar de acordo com a idade, o nível de atividade física e outros fatores individuais. Um acompanhamento nutricional personalizado pode ajudar a garantir que seu filho receba a nutrição adequada para um desenvolvimento saudável e pleno.`,
    },
    {
      id: 9,
      title: "Vegano + Vegetar.",
      description: "Planejamento nutricional completo e balanceado para dietas 100% vegetais",
      image: vegan,
      link: "/services/9",
      articleImage: "https://img.freepik.com/free-photo/preparing-plant-based-recipe-idea_53876-124361.jpg?t=st=1738280542~exp=1738284142~hmac=f950da48d813e3bb0dabcf4639f177afcee0515bb679ddb9e814abdc632d2507&w=996",
      articleText: `As dietas veganas e vegetarianas, quando bem planejadas, podem fornecer todos os nutrientes necessários para uma saúde ótima em todas as fases da vida. No entanto, é importante ter um planejamento cuidadoso para garantir que todas as necessidades nutricionais sejam atendidas.

      Uma dieta baseada em plantas pode ser rica em fibras, vitaminas, minerais e antioxidantes, oferecendo benefícios à saúde como redução do risco de doenças cardíacas, certos tipos de câncer e diabetes tipo 2. No entanto, é crucial prestar atenção a certos nutrientes que podem exigir um planejamento mais cuidadoso em dietas veganas, como vitamina B12, ferro, zinco, cálcio e ômega-3.

      Um nutricionista especializado em dietas vegetarianas e veganas pode ajudar a criar um plano alimentar que não só atenda a todas as necessidades nutricionais, mas também seja saboroso e satisfatório. Isso pode incluir a incorporação de uma variedade de grãos integrais, leguminosas, nozes, sementes, frutas e vegetais, além de orientações sobre suplementação quando necessário.

      Além disso, um profissional pode oferecer dicas práticas para a transição para uma dieta baseada em plantas, sugestões de substituições para pratos favoritos e orientações sobre como ler rótulos de alimentos.para pratos favoritos e orientações sobre como ler rótulos de alimentos.

Lembre-se, uma dieta vegana ou vegetariana bem planejada pode ser adequada para pessoas de todas as idades, incluindo crianças, adolescentes, gestantes e idosos. No entanto, é sempre recomendável buscar orientação profissional para garantir que todas as necessidades nutricionais sejam atendidas de forma adequada.`,
    },
    {
      id: 10,
      title: "Dieta do Mediterrâneo",
      description: "Sabor e saúde mediterrânea",
      image: med,
      link: "/services/10",
      articleImage: mediterraneo1,
      articleText: `A Dieta do Mediterrâneo é mais do que apenas um plano alimentar - é um estilo de vida que tem sido associado a numerosos benefícios à saúde. Originária dos países ao redor do Mar Mediterrâneo, esta abordagem alimentar é conhecida por sua ênfase em alimentos vegetais, azeite de oliva, peixes e consumo moderado de vinho.

      Os principais componentes da Dieta do Mediterrâneo incluem:
      - Abundância de frutas, vegetais, grãos integrais, legumes, nozes e sementes
      - Azeite de oliva como principal fonte de gordura
      - Consumo moderado de peixes, aves, ovos e laticínios
      - Consumo limitado de carnes vermelhas
      - Consumo moderado de vinho tinto (opcional)

      Estudos têm mostrado que seguir a Dieta do Mediterrâneo pode reduzir o risco de doenças cardíacas, certos tipos de câncer, diabetes tipo 2 e doenças neurodegenerativas. Além disso, esta dieta tem sido associada a uma maior longevidade e melhor qualidade de vida.

      Um nutricionista especializado pode ajudar a adaptar os princípios da Dieta do Mediterrâneo às suas preferências pessoais e necessidades nutricionais individuais, garantindo que você obtenha todos os benefícios deste padrão alimentar saudável e saboroso.

      Lembre-se, a Dieta do Mediterrâneo não é apenas sobre o que você come, mas também sobre como você come - enfatizando refeições compartilhadas, apreciação dos alimentos e um estilo de vida ativo.`,
    },
    {
      id: 11,
      title: "Esportivo",
      description: "Nutrição personalizada para atletas e praticantes de atividades físicas",
      image: esportivo,
      link: "/services/11",
      articleImage: esportivo1,
      articleText: `A nutrição esportiva é um componente crucial para o desempenho atlético, recuperação e saúde geral de atletas e praticantes de atividades físicas. Uma dieta adequadamente planejada pode melhorar o desempenho, reduzir o risco de lesões e promover uma recuperação mais rápida após o exercício.

      As necessidades nutricionais de um atleta variam dependendo do tipo de esporte, intensidade do treinamento, fase da temporada e objetivos individuais. Um plano nutricional para esportistas geralmente foca em:

      1. Carboidratos: Para fornecer energia e manter os níveis de glicogênio muscular.
      2. Proteínas: Para reparação e crescimento muscular.
      3. Gorduras saudáveis: Para funções hormonais e absorção de vitaminas.
      4. Hidratação: Fundamental para o desempenho e recuperação.
      5. Micronutrientes: Vitaminas e minerais essenciais para várias funções corporais.

      Além disso, o timing nutricional - quando comer em relação ao exercício - é crucial para otimizar o desempenho e a recuperação.

      Um nutricionista esportivo pode desenvolver um plano alimentar personalizado que leva em consideração suas necessidades energéticas, objetivos de composição corporal, preferências alimentares e cronograma de treinamento/competição.

      Lembre-se, a nutrição esportiva não se trata apenas de suplementação, mas principalmente de uma alimentação balanceada e adequada às demandas do seu corpo. Com orientação profissional, você pode maximizar seu potencial atlético e manter uma saúde ótima.`,
    },
  ]

  return <ServicesContext.Provider value={{ services }}>{children}</ServicesContext.Provider>
}

export function useServices() {
  const context = useContext(ServicesContext)
  if (!context) {
    throw new Error("useServices must be used within a ServicesProvider")
  }
  return context
}

