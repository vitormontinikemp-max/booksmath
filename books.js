// Book data with enhanced descriptions and ratings
const books = [
    // Foundations & Logic (English)
    {
        id: 1,
        title: "How to Prove It",
        author: "Daniel J. Velleman",
        language: "en",
        category: "foundations",
        description: "The definitive guide to understanding mathematical proofs and logical structure. This book teaches students how to read and write proofs, with emphasis on proof strategies and logical reasoning. It covers basic logic, set theory, relations, functions, and mathematical induction, making it ideal for transition courses to advanced mathematics.",
        rating: 4.8,
        pages: 384,
        year: 2006
    },
    {
        id: 2,
        title: "Book of Proof",
        author: "Richard Hammack",
        language: "en",
        category: "foundations",
        description: "A free, comprehensive introduction to proof techniques and set theory. This textbook is suitable for a first course in abstract mathematics, covering logic, sets, functions, relations, cardinality, and proof techniques. It includes numerous examples and exercises with solutions available online.",
        rating: 4.7,
        pages: 382,
        year: 2013
    },
    {
        id: 3,
        title: "Naive Set Theory",
        author: "Paul R. Halmos",
        language: "en",
        category: "foundations",
        description: "Classic intuitive introduction to axiomatic set theory. Written in an informal style, this book covers the fundamentals of set theory without getting bogged down in formal logic. It's perfect for self-study and provides a solid foundation for further study in mathematics.",
        rating: 4.6,
        pages: 104,
        year: 1960
    },
    {
        id: 4,
        title: "Introduction to Mathematical Logic",
        author: "Elliott Mendelson",
        language: "en",
        category: "foundations",
        description: "Standard textbook covering propositional and predicate logic. This comprehensive introduction to mathematical logic covers propositional calculus, first-order logic, computability, and Gödel's incompleteness theorems. It's widely used in undergraduate and graduate courses.",
        rating: 4.5,
        pages: 496,
        year: 1997
    },
    {
        id: 5,
        title: "A Mathematical Introduction to Logic",
        author: "Herbert B. Enderton",
        language: "en",
        category: "foundations",
        description: "Rigorous treatment of mathematical logic with a clear and precise style. This book covers first-order logic, completeness and compactness theorems, model theory, and computability theory. It's known for its careful exposition and thorough coverage of fundamental concepts.",
        rating: 4.7,
        pages: 317,
        year: 2001
    },
    {
        id: 6,
        title: "Logic for Mathematicians",
        author: "A. G. Hamilton",
        language: "en",
        category: "foundations",
        description: "Clear introduction to logic with mathematical applications. This book presents mathematical logic in a way that is accessible to mathematics students, covering propositional and predicate logic, formal systems, and their applications to mathematics.",
        rating: 4.3,
        pages: 228,
        year: 1988
    },
    {
        id: 7,
        title: "Introduction to Axiomatic Set Theory",
        author: "G. Takeuti & W. M. Zaring",
        language: "en",
        category: "foundations",
        description: "Formal development of ZFC set theory. This textbook provides a rigorous introduction to axiomatic set theory, covering the Zermelo-Fraenkel axioms with choice, ordinal and cardinal numbers, and the axiom of regularity.",
        rating: 4.4,
        pages: 250,
        year: 1971
    },
    {
        id: 8,
        title: "Basic Concepts of Mathematics",
        author: "Elias Zakon",
        language: "en",
        category: "foundations",
        description: "Foundational mathematics from logic to real numbers. This free textbook covers the basics of mathematical reasoning, sets, relations, functions, and the construction of number systems, providing a solid foundation for advanced study.",
        rating: 4.2,
        pages: 190,
        year: 2001
    },
    {
        id: 9,
        title: "The Foundations of Mathematics",
        author: "Ian Stewart & David Tall",
        language: "en",
        category: "foundations",
        description: "Transition from computation to proof-based mathematics. This book helps students make the transition from elementary mathematics to more abstract, proof-based mathematics, covering logic, sets, and basic proof techniques.",
        rating: 4.5,
        pages: 400,
        year: 2015
    },
    {
        id: 10,
        title: "Mathematical Reasoning: Writing and Proof",
        author: "Ted Sundstrom",
        language: "en",
        category: "foundations",
        description: "Focus on writing and communicating mathematical ideas. This textbook emphasizes the development of students' ability to write and communicate mathematical proofs effectively, with numerous examples and exercises.",
        rating: 4.4,
        pages: 430,
        year: 2016
    },
    {
        id: 11,
        title: "A Transition to Advanced Mathematics",
        author: "Douglas Smith, Maurice Eggen & Richard St. Andre",
        language: "en",
        category: "foundations",
        description: "Comprehensive introduction to proof and mathematical reasoning. This widely-used textbook helps students transition from calculus to more abstract mathematics, covering logic, proofs, sets, functions, and relations.",
        rating: 4.5,
        pages: 384,
        year: 2010
    },
    {
        id: 12,
        title: "An Introduction to Mathematical Reasoning",
        author: "Peter J. Eccles",
        language: "en",
        category: "foundations",
        description: "Gentle introduction to mathematical proof and reasoning. This book provides a careful development of the basic concepts of mathematical proof, with emphasis on understanding why proofs are constructed as they are.",
        rating: 4.4,
        pages: 350,
        year: 1997
    },
    {
        id: 13,
        title: "Proofs and Fundamentals",
        author: "Ethan D. Bloch",
        language: "en",
        category: "foundations",
        description: "First course in abstract mathematics. This textbook introduces students to the basic concepts of proofs, sets, functions, and relations, preparing them for more advanced courses in mathematics.",
        rating: 4.3,
        pages: 434,
        year: 2011
    },
    {
        id: 14,
        title: "A Concise Introduction to Pure Mathematics",
        author: "Martin Liebeck",
        language: "en",
        category: "foundations",
        description: "Accessible introduction to fundamental mathematical concepts. This book covers sets, proofs, real numbers, complex numbers, and other basic topics in a clear and concise manner suitable for beginning students.",
        rating: 4.6,
        pages: 320,
        year: 2011
    },
    {
        id: 15,
        title: "Mathematical Thinking: Problem-Solving and Proofs",
        author: "John P. D'Angelo & Douglas B. West",
        language: "en",
        category: "foundations",
        description: "Development of mathematical thinking and problem-solving skills. This textbook emphasizes the process of mathematical discovery and proof construction through carefully chosen problems and examples.",
        rating: 4.4,
        pages: 400,
        year: 1997
    },

    // Foundations & Logic (Portuguese)
    {
        id: 101,
        title: "Fundamentos de Matemática Elementar (11 Volumes)",
        author: "Gelson Iezzi",
        language: "pt",
        category: "foundations",
        description: "Coleção completa que cobre toda a matemática do ensino médio. Esta é a coleção mais utilizada no Brasil para o ensino médio, cobrindo desde aritmética básica até trigonometria e análise combinatória. Cada volume aborda um tópico específico com teoria detalhada e exercícios graduados.",
        rating: 5.0,
        pages: 5500,
        year: 1974
    },
    {
        id: 102,
        title: "Tópicos de Matemática Elementar (6 Volumes)",
        author: "Antonio Caminha Muniz Neto",
        language: "pt",
        category: "foundations",
        description: "Profundidade teórica para ensino médio e olímpico. Esta coleção vai além do conteúdo básico, abordando tópicos com profundidade teórica incomum para livros de ensino médio. Ideal para estudantes que desejam aprofundar seus conhecimentos ou se preparar para olimpíadas científicas.",
        rating: 4.8,
        pages: 2200,
        year: 2013
    },
    {
        id: 103,
        title: "Introdução à Lógica Matemática",
        author: "Edgar Almeida Rodrigues",
        language: "pt",
        category: "foundations",
        description: "Texto introdutório à lógica formal, abordando cálculo proposicional e de predicados. Este livro apresenta os fundamentos da lógica matemática de forma acessível, com exemplos e exercícios que facilitam o aprendizado dos conceitos básicos.",
        rating: 4.3,
        pages: 280,
        year: 2004
    },
    {
        id: 104,
        title: "Teoria dos Conjuntos",
        author: "Fernando Q. Gouvêa",
        language: "pt",
        category: "foundations",
        description: "Introdução à teoria axiomática dos conjuntos. Este livro apresenta os fundamentos da teoria dos conjuntos de forma rigorosa mas acessível, cobrindo as operações básicas, relações e funções.",
        rating: 4.2,
        pages: 200,
        year: 1995
    },
    {
        id: 105,
        title: "Lógica e Teoria dos Conjuntos",
        author: "João Carlos V. S. B. de Oliveira",
        language: "pt",
        category: "foundations",
        description: "Manual unificado de lógica e conjuntos. Este livro integra o estudo da lógica matemática com a teoria dos conjuntos, proporcionando uma base sólida para o estudo de matemática avançada.",
        rating: 4.4,
        pages: 320,
        year: 2008
    },
    {
        id: 106,
        title: "Fundamentos da Matemática",
        author: "Luiz Adauto J. Medeiros",
        language: "pt",
        category: "foundations",
        description: "Base teórica para matemática superior. Este livro aborda os fundamentos lógicos da matemática, incluindo teoria dos conjuntos, relações e funções, com aplicações em diversas áreas da matemática.",
        rating: 4.3,
        pages: 350,
        year: 2002
    },
    {
        id: 107,
        title: "Noções de Lógica Matemática",
        author: "Carlos A. S. L. de Almeida",
        language: "pt",
        category: "foundations",
        description: "Primeiro contato com lógica formal. Este livro apresenta os conceitos básicos da lógica matemática de forma gradual, com ênfase na aplicação em demonstrações matemáticas.",
        rating: 4.2,
        pages: 180,
        year: 1998
    },
    {
        id: 108,
        title: "Conjuntos e Funções",
        author: "Djairo G. de Figueiredo",
        language: "pt",
        category: "foundations",
        description: "Abordagem rigorosa de teoria dos conjuntos. Este livro apresenta a teoria dos conjuntos de forma sistemática, com ênfase no rigor matemático e na clareza conceitual.",
        rating: 4.5,
        pages: 240,
        year: 1974
    },
    {
        id: 109,
        title: "Matemática Básica para Concursos",
        author: "Sergio e Tambasco",
        language: "pt",
        category: "foundations",
        description: "Revisão completa dos fundamentos matemáticos para concursos. Este livro cobre toda a matemática do ensino fundamental e médio, com foco em resolução de problemas típicos de concursos públicos.",
        rating: 4.6,
        pages: 600,
        year: 2018
    },
    {
        id: 110,
        title: "Pré-Cálculo",
        author: "Luiz Roberto Dante",
        language: "pt",
        category: "foundations",
        description: "Preparação para cálculo universitário. Este livro revisa os conceitos matemáticos essenciais para o estudo do cálculo, incluindo funções, trigonometria e números complexos.",
        rating: 4.4,
        pages: 450,
        year: 2011
    },
    {
        id: 111,
        title: "Matemática: Conceitos e Fundamentos",
        author: "Osvaldo Dolce & José Nicolau Pompeo",
        language: "pt",
        category: "foundations",
        description: "Abordagem completa dos fundamentos da matemática. Este livro cobre desde os conceitos básicos até tópicos avançados, com ênfase no desenvolvimento do raciocínio lógico-matemático.",
        rating: 4.5,
        pages: 520,
        year: 2005
    },
    {
        id: 112,
        title: "Introdução ao Raciocínio Matemático",
        author: "Edna A. Maura & Sérgio L. P. Silva",
        language: "pt",
        category: "foundations",
        description: "Desenvolvimento do pensamento matemático. Este livro foca no desenvolvimento da capacidade de raciocínio e demonstração matemática, com exemplos e exercícios progressivos.",
        rating: 4.3,
        pages: 300,
        year: 2010
    },
    {
        id: 113,
        title: "Fundamentos de Matemática: Uma Abordagem Introdutória",
        author: "Paulo Boulos",
        language: "pt",
        category: "foundations",
        description: "Introdução aos conceitos fundamentais da matemática superior. Este livro apresenta os tópicos essenciais para a transição do ensino médio para a universidade, com ênfase no rigor conceitual.",
        rating: 4.4,
        pages: 380,
        year: 2007
    },
    {
        id: 114,
        title: "Matemática Elementar: Teoria e Aplicações",
        author: "Héctor J. R. Acosta",
        language: "pt",
        category: "foundations",
        description: "Teoria e aplicações da matemática elementar. Este livro aborda os tópicos do ensino médio com profundidade teórica, incluindo aplicações práticas e problemas desafiadores.",
        rating: 4.3,
        pages: 420,
        year: 2015
    },
    {
        id: 115,
        title: "Lógica Matemática para Iniciantes",
        author: "Manoel P. R. de Oliveira",
        language: "pt",
        category: "foundations",
        description: "Introdução acessível à lógica matemática. Este livro apresenta os conceitos básicos da lógica de forma gradual, com muitos exemplos e exercícios resolvidos.",
        rating: 4.2,
        pages: 250,
        year: 2012
    },

    // Algebra (English)
    {
        id: 16,
        title: "Algebra",
        author: "Michael Artin",
        language: "en",
        category: "algebra",
        description: "Modern approach emphasizing linear algebra and symmetry. This influential textbook introduces abstract algebra through a geometric perspective, highlighting connections with linear algebra and symmetry. It covers groups, rings, fields, modules, and representation theory with numerous examples and applications.",
        rating: 4.7,
        pages: 556,
        year: 1991
    },
    {
        id: 17,
        title: "Abstract Algebra",
        author: "David S. Dummit & Richard M. Foote",
        language: "en",
        category: "algebra",
        description: "Comprehensive graduate-level reference with extensive coverage of algebraic structures. This massive textbook covers group theory, ring theory, field theory, Galois theory, module theory, and advanced topics like homological algebra and representation theory. It's known for its clarity and wealth of exercises.",
        rating: 4.8,
        pages: 932,
        year: 2003
    },
    {
        id: 18,
        title: "A Book of Abstract Algebra",
        author: "Charles C. Pinter",
        language: "en",
        category: "algebra",
        description: "Accessible first course with excellent exercises. This highly readable introduction to abstract algebra covers groups, rings, fields, and vector spaces with an emphasis on intuition and understanding rather than formalism.",
        rating: 4.7,
        pages: 384,
        year: 2010
    },
    {
        id: 19,
        title: "Algebra: Chapter 0",
        author: "Paolo Aluffi",
        language: "en",
        category: "algebra",
        description: "Category-theoretic approach to abstract algebra. This advanced textbook introduces algebra through the lens of category theory, providing a modern perspective on traditional algebraic structures.",
        rating: 4.6,
        pages: 728,
        year: 2009
    },
    {
        id: 20,
        title: "Contemporary Abstract Algebra",
        author: "Joseph A. Gallian",
        language: "en",
        category: "algebra",
        description: "Popular undergraduate textbook with historical notes. This widely-used textbook covers groups, rings, and fields with numerous applications and historical context, making abstract concepts more accessible.",
        rating: 4.5,
        pages: 656,
        year: 2016
    },
    {
        id: 21,
        title: "Basic Algebra I & II",
        author: "Nathan Jacobson",
        language: "en",
        category: "algebra",
        description: "Classic two-volume comprehensive treatment. These volumes provide a thorough treatment of abstract algebra, covering groups, rings, fields, modules, and advanced topics with exceptional clarity and depth.",
        rating: 4.7,
        pages: 499,
        year: 1985
    },
    {
        id: 22,
        title: "Advanced Modern Algebra",
        author: "Joseph J. Rotman",
        language: "en",
        category: "algebra",
        description: "Graduate-level coverage of advanced topics. This comprehensive textbook covers advanced topics in algebra including homological algebra, commutative algebra, and representation theory.",
        rating: 4.6,
        pages: 1016,
        year: 2010
    },
    {
        id: 23,
        title: "Introduction to Commutative Algebra",
        author: "Michael Atiyah & I. G. Macdonald",
        language: "en",
        category: "algebra",
        description: "Concise classic on commutative algebra. This influential book provides a concise introduction to commutative algebra, covering rings, modules, localization, and Noetherian rings.",
        rating: 4.5,
        pages: 128,
        year: 1969
    },
    {
        id: 24,
        title: "Commutative Algebra",
        author: "Oscar Zariski & Pierre Samuel",
        language: "en",
        category: "algebra",
        description: "Two-volume foundational work. These volumes provide a comprehensive treatment of commutative algebra, establishing foundations for algebraic geometry.",
        rating: 4.4,
        pages: 654,
        year: 1958
    },
    {
        id: 25,
        title: "Algebraic Geometry",
        author: "Robin Hartshorne",
        language: "en",
        category: "algebra",
        description: "Standard graduate textbook on scheme theory. This classic textbook introduces modern algebraic geometry through the theory of schemes, requiring substantial background in algebra.",
        rating: 4.3,
        pages: 496,
        year: 1977
    },
    {
        id: 26,
        title: "A First Course in Abstract Algebra",
        author: "John B. Fraleigh",
        language: "en",
        category: "algebra",
        description: "Classic introduction to abstract algebra. This widely-used textbook provides a gentle introduction to groups, rings, and fields with numerous examples and applications.",
        rating: 4.5,
        pages: 432,
        year: 2002
    },
    {
        id: 27,
        title: "Algebra",
        author: "Serge Lang",
        language: "en",
        category: "algebra",
        description: "Comprehensive graduate-level algebra textbook. This massive work covers virtually all aspects of algebra, from basic groups to advanced homological algebra.",
        rating: 4.4,
        pages: 914,
        year: 2002
    },
    {
        id: 28,
        title: "Undergraduate Algebra",
        author: "Serge Lang",
        language: "en",
        category: "algebra",
        description: "More accessible version of Lang's Algebra. This textbook provides a thorough introduction to algebra at the undergraduate level, covering groups, rings, fields, and modules.",
        rating: 4.3,
        pages: 389,
        year: 2005
    },
    {
        id: 29,
        title: "Algebraic Structures",
        author: "George R. Kempf",
        language: "en",
        category: "algebra",
        description: "Introduction to algebraic structures with geometric motivation. This book presents algebra through its connections with geometry, making abstract concepts more concrete.",
        rating: 4.2,
        pages: 280,
        year: 1995
    },
    {
        id: 30,
        title: "Algebra: A Graduate Course",
        author: "I. Martin Isaacs",
        language: "en",
        category: "algebra",
        description: "Graduate-level algebra with emphasis on finite groups. This textbook covers group theory, ring theory, and field theory with particular attention to finite groups and their representations.",
        rating: 4.6,
        pages: 516,
        year: 1994
    },

    // Algebra (Portuguese)
    {
        id: 116,
        title: "Álgebra",
        author: "Arnaldo Garcia & Yves Lequain",
        language: "pt",
        category: "algebra",
        description: "Texto abrangente de álgebra para graduação, cobrindo desde conceitos básicos até tópicos avançados. Este livro é amplamente utilizado em cursos de graduação no Brasil, apresentando uma abordagem moderna e rigorosa da álgebra abstrata com ênfase em teoria de grupos e anéis.",
        rating: 4.6,
        pages: 480,
        year: 2002
    },
    {
        id: 117,
        title: "Álgebra Moderna",
        author: "Hygino H. Domingues",
        language: "pt",
        category: "algebra",
        description: "Introdução à álgebra abstrata. Este livro apresenta os conceitos fundamentais da álgebra moderna, incluindo grupos, anéis, corpos e espaços vetoriais, com exemplos e aplicações.",
        rating: 4.5,
        pages: 350,
        year: 1979
    },
    {
        id: 118,
        title: "Introdução à Álgebra",
        author: "Adilson Gonçalves",
        language: "pt",
        category: "algebra",
        description: "Primeiro curso em álgebra abstrata. Este livro introduz os conceitos básicos da álgebra abstrata de forma gradual, com ênfase na compreensão conceitual e na resolução de problemas.",
        rating: 4.4,
        pages: 300,
        year: 2000
    },
    {
        id: 119,
        title: "Álgebra I e II",
        author: "José Plínio de O. Santos",
        language: "pt",
        category: "algebra",
        description: "Dois volumes cobrindo álgebra básica e avançada. Esta obra completa cobre desde os fundamentos da álgebra até tópicos avançados como teoria de Galois e módulos.",
        rating: 4.6,
        pages: 850,
        year: 2004
    },
    {
        id: 120,
        title: "Grupos: Um Primeiro Curso",
        author: "João Carlos V. S. B. de Oliveira",
        language: "pt",
        category: "algebra",
        description: "Introdução à teoria de grupos. Este livro apresenta a teoria dos grupos de forma acessível, cobrindo subgrupos, homomorfismos, ações de grupos e teoremas de Sylow.",
        rating: 4.5,
        pages: 280,
        year: 2010
    },
    {
        id: 121,
        title: "Anéis e Corpos",
        author: "Y. E. P. de A. Costa",
        language: "pt",
        category: "algebra",
        description: "Teoria de anéis para graduação. Este livro aborda a teoria dos anéis e corpos, incluindo anéis de polinômios, extensões de corpos e aplicações em teoria de códigos.",
        rating: 4.3,
        pages: 320,
        year: 2005
    },
    {
        id: 122,
        title: "Álgebra Linear e Geometria Analítica",
        author: "Alfredo Steinbruch",
        language: "pt",
        category: "algebra",
        description: "Integração entre álgebra e geometria. Este livro clássico integra o estudo da álgebra linear com a geometria analítica, proporcionando uma visão unificada dessas áreas.",
        rating: 4.7,
        pages: 580,
        year: 1987
    },
    {
        id: 123,
        title: "Matrizes e Transformações Lineares",
        author: "H. P. Bueno",
        language: "pt",
        category: "algebra",
        description: "Foco em transformações lineares. Este livro aborda as transformações lineares e suas representações matriciais, com aplicações em diversas áreas da matemática.",
        rating: 4.4,
        pages: 300,
        year: 2009
    },
    {
        id: 124,
        title: "Álgebra: Teoria e Aplicações",
        author: "Carlos A. S. L. de Almeida",
        language: "pt",
        category: "algebra",
        description: "Teoria e aplicações da álgebra abstrata. Este livro apresenta os conceitos da álgebra moderna junto com suas aplicações em ciência da computação, criptografia e outras áreas.",
        rating: 4.5,
        pages: 420,
        year: 2012
    },
    {
        id: 125,
        title: "Elementos de Álgebra",
        author: "Arnaldo Garcia",
        language: "pt",
        category: "algebra",
        description: "Introdução aos elementos básicos da álgebra. Este livro aborda os conceitos fundamentais da álgebra de forma clara e sistemática, ideal para um primeiro curso na área.",
        rating: 4.4,
        pages: 280,
        year: 1998
    },
    {
        id: 126,
        title: "Álgebra Abstrata: Uma Introdução",
        author: "Manoel P. R. de Oliveira",
        language: "pt",
        category: "algebra",
        description: "Introdução à álgebra abstrata. Este livro apresenta os conceitos básicos de grupos, anéis e corpos de forma acessível, com muitos exemplos e exercícios.",
        rating: 4.3,
        pages: 320,
        year: 2014
    },
    {
        id: 127,
        title: "Teoria de Grupos Finitos",
        author: "J. D. Dixon",
        language: "pt",
        category: "algebra",
        description: "Teoria avançada de grupos finitos. Esta tradução apresenta a teoria dos grupos finitos com profundidade, incluindo teoremas de Sylow, grupos solúveis e teoria de representações.",
        rating: 4.6,
        pages: 450,
        year: 2001
    },
    {
        id: 128,
        title: "Álgebra Comutativa",
        author: "M. F. Atiyah & I. G. Macdonald",
        language: "pt",
        category: "algebra",
        description: "Tradução do clássico de álgebra comutativa. Esta tradução do famoso livro de Atiyah e Macdonald apresenta a álgebra comutativa de forma concisa e rigorosa.",
        rating: 4.5,
        pages: 130,
        year: 2003
    },
    {
        id: 129,
        title: "Introdução à Teoria de Anéis",
        author: "Sérgio L. P. Silva",
        language: "pt",
        category: "algebra",
        description: "Introdução à teoria dos anéis. Este livro aborda os conceitos básicos da teoria dos anéis, incluindo ideais, homomorfismos e anéis de polinômios.",
        rating: 4.3,
        pages: 280,
        year: 2008
    },
    {
        id: 130,
        title: "Álgebra para Ciência da Computação",
        author: "Judith L. Gersting",
        language: "pt",
        category: "algebra",
        description: "Álgebra aplicada à ciência da computação. Esta tradução apresenta conceitos algébricos com aplicações específicas em ciência da computação, incluindo criptografia e teoria de códigos.",
        rating: 4.4,
        pages: 400,
        year: 2010
    },

    // Linear Algebra (English)
    {
        id: 31,
        title: "Linear Algebra Done Right",
        author: "Sheldon Axler",
        language: "en",
        category: "algebra",
        description: "Approach emphasizing linear transformations over determinants. This innovative textbook presents linear algebra from a conceptual perspective, focusing on linear transformations and vector spaces rather than matrix computations. It's known for its clean proofs and geometric insight.",
        rating: 4.7,
        pages: 340,
        year: 2015
    },
    {
        id: 32,
        title: "Introduction to Linear Algebra",
        author: "Gilbert Strang",
        language: "en",
        category: "algebra",
        description: "Application-focused textbook with excellent video lectures available online. This bestselling textbook introduces linear algebra through applications in engineering, data science, and physics. Strang's clear explanations and focus on intuition make complex concepts accessible to beginners.",
        rating: 4.8,
        pages: 584,
        year: 2016
    },
    {
        id: 33,
        title: "Linear Algebra",
        author: "Georgi E. Shilov",
        language: "en",
        category: "algebra",
        description: "Classic rigorous treatment from vector spaces to tensors. This comprehensive textbook covers linear algebra in depth, including multilinear algebra and tensor products, with a traditional, proof-oriented approach.",
        rating: 4.5,
        pages: 387,
        year: 1977
    },
    {
        id: 34,
        title: "Finite-Dimensional Vector Spaces",
        author: "Paul R. Halmos",
        language: "en",
        category: "algebra",
        description: "Geometric approach to linear algebra. This classic book presents linear algebra from a geometric perspective, emphasizing the structure of vector spaces and linear transformations.",
        rating: 4.6,
        pages: 200,
        year: 1974
    },
    {
        id: 35,
        title: "Matrix Analysis",
        author: "Roger A. Horn & Charles R. Johnson",
        language: "en",
        category: "algebra",
        description: "Comprehensive reference on matrix theory. This authoritative reference covers eigenvalues, singular values, matrix inequalities, and other advanced topics in matrix analysis.",
        rating: 4.7,
        pages: 643,
        year: 2012
    },
    {
        id: 36,
        title: "Linear Algebra and Its Applications",
        author: "David C. Lay",
        language: "en",
        category: "algebra",
        description: "Popular undergraduate textbook with applications. This widely-used textbook emphasizes applications of linear algebra to other fields while maintaining mathematical rigor.",
        rating: 4.5,
        pages: 576,
        year: 2015
    },
    {
        id: 37,
        title: "Advanced Linear Algebra",
        author: "Steven Roman",
        language: "en",
        category: "algebra",
        description: "Graduate-level treatment including modules. This textbook covers advanced topics in linear algebra including module theory, multilinear algebra, and canonical forms.",
        rating: 4.6,
        pages: 525,
        year: 2007
    },
    {
        id: 38,
        title: "Linear Algebra",
        author: "Kenneth M. Hoffman & Ray Kunze",
        language: "en",
        category: "algebra",
        description: "Classic proof-oriented textbook. This influential textbook presents linear algebra with emphasis on abstract vector spaces and rigorous proofs.",
        rating: 4.5,
        pages: 407,
        year: 1971
    },
    {
        id: 39,
        title: "A Concise Introduction to Linear Algebra",
        author: "Géza Schay",
        language: "en",
        category: "algebra",
        description: "Clear, direct approach to core concepts. This textbook presents linear algebra in a concise yet thorough manner, covering all essential topics without unnecessary digressions.",
        rating: 4.4,
        pages: 368,
        year: 2012
    },
    {
        id: 40,
        title: "Numerical Linear Algebra",
        author: "Lloyd N. Trefethen & David Bau III",
        language: "en",
        category: "algebra",
        description: "Algorithms and matrix computations. This textbook focuses on the computational aspects of linear algebra, covering numerical algorithms for matrix computations with analysis of their stability and efficiency.",
        rating: 4.7,
        pages: 361,
        year: 1997
    },
    {
        id: 41,
        title: "Linear Algebra with Applications",
        author: "Otto Bretscher",
        language: "en",
        category: "algebra",
        description: "Applications-oriented linear algebra. This textbook emphasizes the connections between linear algebra and other fields through numerous real-world applications.",
        rating: 4.4,
        pages: 504,
        year: 2012
    },
    {
        id: 42,
        title: "Linear Algebra: A Modern Introduction",
        author: "David Poole",
        language: "en",
        category: "algebra",
        description: "Modern introduction with computational focus. This textbook blends theory and computation, with emphasis on understanding concepts through computation and visualization.",
        rating: 4.5,
        pages: 726,
        year: 2014
    },
    {
        id: 43,
        title: "Linear Algebra and Learning from Data",
        author: "Gilbert Strang",
        language: "en",
        category: "algebra",
        description: "Linear algebra applications in data science. This book explores how linear algebra concepts apply to machine learning and data analysis, bridging theory and practice.",
        rating: 4.6,
        pages: 432,
        year: 2019
    },
    {
        id: 44,
        title: "Linear Algebra Done Wrong",
        author: "Sergei Treil",
        language: "en",
        category: "algebra",
        description: "Alternative approach to linear algebra. This free textbook presents linear algebra from a different perspective, challenging conventional teaching methods.",
        rating: 4.4,
        pages: 276,
        year: 2017
    },
    {
        id: 45,
        title: "Linear Algebra: Theory and Applications",
        author: "Ward Cheney & David Kincaid",
        language: "en",
        category: "algebra",
        description: "Comprehensive treatment with applications. This textbook covers both theoretical aspects and practical applications of linear algebra across various fields.",
        rating: 4.3,
        pages: 493,
        year: 2008
    },

    // Linear Algebra (Portuguese)
    {
        id: 131,
        title: "Álgebra Linear",
        author: "Elon Lages Lima",
        language: "pt",
        category: "algebra",
        description: "Abordagem geométrica e conceitual da álgebra linear. Este clássico da matemática brasileira apresenta álgebra linear com ênfase na intuição geométrica e nos conceitos fundamentais. É conhecido por seu estilo claro e por conter muitos exemplos e aplicações interessantes.",
        rating: 4.7,
        pages: 357,
        year: 1995
    },
    {
        id: 132,
        title: "Álgebra Linear com Aplicações",
        author: "Steven Leon",
        language: "pt",
        category: "algebra",
        description: "Tradução do clássico livro de álgebra linear aplicada. Esta tradução mantém a abordagem prática do original, com ênfase em aplicações em engenharia, ciência da computação e matemática aplicada.",
        rating: 4.6,
        pages: 520,
        year: 1999
    },
    {
        id: 133,
        title: "Álgebra Linear e Suas Aplicações",
        author: "David C. Lay",
        language: "pt",
        category: "algebra",
        description: "Tradução do popular livro de álgebra linear. Esta tradução apresenta a álgebra linear de forma acessível, com muitos exemplos e aplicações práticas.",
        rating: 4.5,
        pages: 580,
        year: 2013
    },
    {
        id: 134,
        title: "Introdução à Álgebra Linear",
        author: "Gilbert Strang",
        language: "pt",
        category: "algebra",
        description: "Tradução do clássico de Strang. Esta tradução traz a famosa abordagem intuitiva de Strang para o público brasileiro, incluindo aplicações em diversas áreas.",
        rating: 4.7,
        pages: 590,
        year: 2010
    },
    {
        id: 135,
        title: "Álgebra Linear: Teoria e Exercícios",
        author: "Paulo Boulos",
        language: "pt",
        category: "algebra",
        description: "Teoria e exercícios de álgebra linear. Este livro combina uma apresentação clara da teoria com uma grande quantidade de exercícios resolvidos e propostos.",
        rating: 4.6,
        pages: 450,
        year: 2003
    },
    {
        id: 136,
        title: "Álgebra Linear e Geometria Analítica",
        author: "Regina Célia B. Q. S. de Albuquerque",
        language: "pt",
        category: "algebra",
        description: "Integração entre álgebra linear e geometria. Este livro apresenta os conceitos de álgebra linear juntamente com a geometria analítica, mostrando as conexões entre essas áreas.",
        rating: 4.4,
        pages: 380,
        year: 2011
    },
    {
        id: 137,
        title: "Fundamentos de Álgebra Linear",
        author: "J. L. Boldrini",
        language: "pt",
        category: "algebra",
        description: "Fundamentos da álgebra linear. Este livro apresenta os conceitos básicos da álgebra linear de forma rigorosa mas acessível, ideal para um primeiro curso na área.",
        rating: 4.5,
        pages: 320,
        year: 1980
    },
    {
        id: 138,
        title: "Álgebra Linear: Uma Introdução Moderna",
        author: "David Poole",
        language: "pt",
        category: "algebra",
        description: "Tradução da introdução moderna à álgebra linear. Esta tradução mantém a abordagem computacional e visual do original, com ênfase na compreensão conceitual.",
        rating: 4.6,
        pages: 730,
        year: 2016
    },
    {
        id: 139,
        title: "Matrizes, Vetores e Geometria Analítica",
        author: "Luiz Francisco da S. Ramos",
        language: "pt",
        category: "algebra",
        description: "Integração completa entre matrizes, vetores e geometria. Este livro apresenta uma abordagem unificada desses tópicos, mostrando suas interconexões.",
        rating: 4.4,
        pages: 420,
        year: 2008
    },
    {
        id: 140,
        title: "Álgebra Linear para Computação",
        author: "Judith L. Gersting",
        language: "pt",
        category: "algebra",
        description: "Álgebra linear aplicada à computação. Este livro aborda os conceitos de álgebra linear com foco em aplicações em ciência da computação e engenharia.",
        rating: 4.5,
        pages: 380,
        year: 2009
    },
    {
        id: 141,
        title: "Introdução à Álgebra Linear com Aplicações",
        author: "Bernard Kolman",
        language: "pt",
        category: "algebra",
        description: "Tradução do clássico livro de álgebra linear aplicada. Esta tradução mantém a abordagem prática do original, com ênfase em aplicações reais.",
        rating: 4.4,
        pages: 480,
        year: 2006
    },
    {
        id: 142,
        title: "Álgebra Linear e Aplicações",
        author: "G. Strang",
        language: "pt",
        category: "algebra",
        description: "Outra tradução das obras de Strang. Esta tradução foca nas aplicações da álgebra linear em problemas do mundo real.",
        rating: 4.6,
        pages: 520,
        year: 2012
    },
    {
        id: 143,
        title: "Álgebra Linear: Curso Completo",
        author: "Abramo Hefez",
        language: "pt",
        category: "algebra",
        description: "Curso completo de álgebra linear. Este livro cobre todos os tópicos essenciais da álgebra linear, desde conceitos básicos até tópicos avançados.",
        rating: 4.5,
        pages: 550,
        year: 2018
    },
    {
        id: 144,
        title: "Geometria Analítica e Álgebra Linear",
        author: "Marco Cabral & Paulo Goldfeld",
        language: "pt",
        category: "algebra",
        description: "Abordagem integrada de geometria analítica e álgebra linear. Este livro apresenta essas duas áreas de forma integrada, mostrando suas conexões naturais.",
        rating: 4.6,
        pages: 470,
        year: 2014
    },
    {
        id: 145,
        title: "Álgebra Linear com Python",
        author: "J. D. Vieira Sobrinho",
        language: "pt",
        category: "algebra",
        description: "Álgebra linear com implementações em Python. Este livro combina a teoria da álgebra linear com implementações práticas em Python, ideal para estudantes de computação.",
        rating: 4.5,
        pages: 320,
        year: 2020
    },

    // Calculus & Analysis (English)
    {
        id: 46,
        title: "Calculus",
        author: "Michael Spivak",
        language: "en",
        category: "calculus",
        description: "Rigorous, beautiful introduction to analysis that emphasizes theory and proof. This classic text presents calculus as a coherent body of mathematical knowledge, with careful attention to foundations and logical structure. It's challenging but rewarding for serious mathematics students.",
        rating: 4.9,
        pages: 680,
        year: 2008
    },
    {
        id: 47,
        title: "Principles of Mathematical Analysis",
        author: "Walter Rudin",
        language: "en",
        category: "calculus",
        description: "'Baby Rudin' - concise analysis classic known for its elegant proofs and challenging exercises. This influential textbook covers real and complex analysis at an advanced undergraduate level. Its terse style and difficult problems have made it both feared and respected by mathematics students worldwide.",
        rating: 4.6,
        pages: 342,
        year: 1976
    },
    {
        id: 48,
        title: "Advanced Calculus",
        author: "Patrick M. Fitzpatrick",
        language: "en",
        category: "calculus",
        description: "Bridge between calculus and real analysis. This textbook helps students transition from computational calculus to theoretical analysis, covering limits, continuity, differentiation, and integration rigorously.",
        rating: 4.5,
        pages: 610,
        year: 2005
    },
    {
        id: 49,
        title: "Calculus: Early Transcendentals",
        author: "James Stewart",
        language: "en",
        category: "calculus",
        description: "Most widely used calculus textbook. This comprehensive textbook covers single and multivariable calculus with clear explanations, numerous examples, and extensive exercise sets. It's known for its accessibility and thorough coverage.",
        rating: 4.7,
        pages: 1368,
        year: 2015
    },
    {
        id: 50,
        title: "Multivariable Mathematics",
        author: "Theodore Shifrin",
        language: "en",
        category: "calculus",
        description: "Linear algebra and multivariable calculus combined. This textbook integrates linear algebra with multivariable calculus, showing their deep connections and providing a unified treatment of both subjects.",
        rating: 4.6,
        pages: 520,
        year: 2005
    },
    {
        id: 51,
        title: "Vector Calculus, Linear Algebra, and Differential Forms",
        author: "John H. Hubbard & Barbara Burke Hubbard",
        language: "en",
        category: "calculus",
        description: "Unified approach to multivariable calculus and linear algebra. This innovative textbook presents vector calculus, linear algebra, and differential forms in an integrated manner, emphasizing geometric understanding.",
        rating: 4.5,
        pages: 785,
        year: 2015
    },
    {
        id: 52,
        title: "Analysis I & II",
        author: "Terence Tao",
        language: "en",
        category: "calculus",
        description: "Clear, rigorous treatment from foundations. These textbooks present real analysis with exceptional clarity, building carefully from the foundations to advanced topics. Tao's expository style makes difficult concepts accessible.",
        rating: 4.8,
        pages: 368,
        year: 2016
    },
    {
        id: 53,
        title: "Real Mathematical Analysis",
        author: "Charles Chapman Pugh",
        language: "en",
        category: "calculus",
        description: "Geometric approach to analysis. This textbook emphasizes geometric intuition in real analysis, with numerous illustrations and a conversational style that makes abstract concepts more concrete.",
        rating: 4.7,
        pages: 440,
        year: 2002
    },
    {
        id: 54,
        title: "Complex Analysis",
        author: "Lars Ahlfors",
        language: "en",
        category: "calculus",
        description: "Elegant classic on complex variables. This influential textbook presents complex analysis with mathematical elegance and depth, covering conformal mapping, analytic continuation, and Riemann surfaces.",
        rating: 4.8,
        pages: 331,
        year: 1979
    },
    {
        id: 55,
        title: "Functions of One Complex Variable",
        author: "John B. Conway",
        language: "en",
        category: "calculus",
        description: "Comprehensive complex analysis textbook. This graduate-level textbook covers complex analysis in depth, including advanced topics like Riemann mapping theorem and analytic continuation.",
        rating: 4.6,
        pages: 340,
        year: 1978
    },
    {
        id: 56,
        title: "Calculus on Manifolds",
        author: "Michael Spivak",
        language: "en",
        category: "calculus",
        description: "Concise introduction to multivariable calculus and differential forms. This brief but dense book covers the generalized Stokes' theorem and provides a bridge to differential geometry.",
        rating: 4.5,
        pages: 160,
        year: 1965
    },
    {
        id: 57,
        title: "Advanced Calculus of Several Variables",
        author: "C. H. Edwards",
        language: "en",
        category: "calculus",
        description: "Comprehensive treatment of multivariable calculus. This textbook covers differentiation and integration in multiple dimensions with applications to differential equations and optimization.",
        rating: 4.4,
        pages: 480,
        year: 1994
    },
    {
        id: 58,
        title: "Introduction to Real Analysis",
        author: "Robert G. Bartle & Donald R. Sherbert",
        language: "en",
        category: "calculus",
        description: "Accessible introduction to real analysis. This widely-used textbook presents real analysis with clear explanations and carefully graded exercises, making it suitable for a first course.",
        rating: 4.5,
        pages: 402,
        year: 2011
    },
    {
        id: 59,
        title: "Real Analysis: Modern Techniques and Their Applications",
        author: "Gerald B. Folland",
        language: "en",
        category: "calculus",
        description: "Graduate-level real analysis with applications. This comprehensive textbook covers measure theory, functional analysis, and Fourier analysis with applications to partial differential equations.",
        rating: 4.7,
        pages: 416,
        year: 1999
    },
    {
        id: 60,
        title: "Calculus Made Easy",
        author: "Silvanus P. Thompson",
        language: "en",
        category: "calculus",
        description: "Classic intuitive introduction to calculus. Originally published in 1910, this book presents calculus concepts in an informal, conversational style that makes them accessible to beginners.",
        rating: 4.6,
        pages: 336,
        year: 1998
    },

    // Calculus & Analysis (Portuguese)
    {
        id: 146,
        title: "Um Curso de Cálculo (4 Volumes)",
        author: "Hamilton L. Guidorizzi",
        language: "pt",
        category: "calculus",
        description: "Coleção completa e didática de cálculo, amplamente utilizada em cursos de engenharia e ciências exatas no Brasil. Os volumes cobrem limites, derivadas, integrais, séries e equações diferenciais com muitos exemplos e exercícios aplicados.",
        rating: 4.8,
        pages: 2000,
        year: 2001
    },
    {
        id: 147,
        title: "Curso de Análise (2 Volumes)",
        author: "Elon Lages Lima",
        language: "pt",
        category: "calculus",
        description: "Padrão brasileiro para análise real, com rigor matemático e clareza expositiva. Esta obra é referência obrigatória para estudantes de matemática no Brasil, cobrindo teoria dos números reais, sequências, continuidade, derivadas e integração de forma rigorosa.",
        rating: 4.7,
        pages: 850,
        year: 1989
    },
    {
        id: 148,
        title: "Introdução à Análise Real",
        author: "Elon Lages Lima",
        language: "pt",
        category: "calculus",
        description: "Versão mais acessível da análise real. Este livro apresenta os conceitos fundamentais da análise real de forma mais gradual, ideal para um primeiro contato com o tema.",
        rating: 4.6,
        pages: 280,
        year: 2004
    },
    {
        id: 149,
        title: "Cálculo Diferencial e Integral",
        author: "Djairo G. de Figueiredo",
        language: "pt",
        category: "calculus",
        description: "Abordagem rigorosa do cálculo. Este livro apresenta o cálculo diferencial e integral com ênfase no rigor matemático, cobrindo tanto o cálculo de uma variável quanto o multivariável.",
        rating: 4.7,
        pages: 650,
        year: 1996
    },
    {
        id: 150,
        title: "Cálculo com Geometria Analítica",
        author: "Louis Leithold",
        language: "pt",
        category: "calculus",
        description: "Tradução do clássico livro de cálculo. Esta tradução mantém a abordagem clara e didática do original, com ênfase em aplicações e exercícios variados.",
        rating: 4.6,
        pages: 920,
        year: 1994
    },
    {
        id: 151,
        title: "Análise Real",
        author: "C. S. R. C. da Silva",
        language: "pt",
        category: "calculus",
        description: "Tratamento completo da análise real. Este livro aborda a análise real com profundidade, cobrindo desde os fundamentos até tópicos avançados como medida e integração.",
        rating: 4.5,
        pages: 420,
        year: 2008
    },
    {
        id: 152,
        title: "Cálculo Avançado",
        author: "H. P. Bueno",
        language: "pt",
        category: "calculus",
        description: "Tópicos avançados de cálculo. Este livro aborda tópicos avançados do cálculo, incluindo análise multivariável, formas diferenciais e teorema de Stokes.",
        rating: 4.6,
        pages: 380,
        year: 2012
    },
    {
        id: 153,
        title: "Variáveis Complexas e Aplicações",
        author: "Ruel V. Churchill",
        language: "pt",
        category: "calculus",
        description: "Tradução do clássico de análise complexa. Esta tradução apresenta a análise complexa de forma acessível, com ênfase em aplicações em engenharia e física.",
        rating: 4.7,
        pages: 480,
        year: 2003
    },
    {
        id: 154,
        title: "Análise de Fourier",
        author: "Djairo G. de Figueiredo",
        language: "pt",
        category: "calculus",
        description: "Séries e transformadas de Fourier. Este livro aborda a análise de Fourier com rigor matemático, incluindo aplicações em equações diferenciais e processamento de sinais.",
        rating: 4.6,
        pages: 320,
        year: 1997
    },
    {
        id: 155,
        title: "Equações Diferenciais",
        author: "Djairo G. de Figueiredo",
        language: "pt",
        category: "calculus",
        description: "Teoria e aplicações de EDOs. Este livro apresenta a teoria das equações diferenciais ordinárias com profundidade, incluindo existência, unicidade e métodos de resolução.",
        rating: 4.7,
        pages: 450,
        year: 2005
    },
    {
        id: 156,
        title: "Cálculo: Conceitos e Contextos",
        author: "James Stewart",
        language: "pt",
        category: "calculus",
        description: "Tradução do popular livro de cálculo. Esta tradução mantém a abordagem clara e aplicada do original, com muitos exemplos e exercícios contextualizados.",
        rating: 4.8,
        pages: 1400,
        year: 2013
    },
    {
        id: 157,
        title: "Introdução ao Cálculo Diferencial",
        author: "M. P. do Carmo",
        language: "pt",
        category: "calculus",
        description: "Introdução ao cálculo diferencial. Este livro apresenta o cálculo diferencial de forma rigorosa mas acessível, ideal para um primeiro curso universitário.",
        rating: 4.5,
        pages: 280,
        year: 2009
    },
    {
        id: 158,
        title: "Cálculo Integral",
        author: "Hamilton L. Guidorizzi",
        language: "pt",
        category: "calculus",
        description: "Volume dedicado ao cálculo integral. Este volume da coleção de Guidorizzi aborda a integração de forma completa, incluindo técnicas de integração e aplicações.",
        rating: 4.7,
        pages: 480,
        year: 2001
    },
    {
        id: 159,
        title: "Análise Complexa",
        author: "Elias M. Stein & Rami Shakarchi",
        language: "pt",
        category: "calculus",
        description: "Tradução do clássico de análise complexa. Esta tradução apresenta a análise complexa com clareza e profundidade, incluindo tópicos avançados como funções harmônicas.",
        rating: 4.6,
        pages: 400,
        year: 2014
    },
    {
        id: 160,
        title: "Cálculo Numérico: Teoria e Prática",
        author: "M. A. G. Ruggiero & V. L. R. Lopes",
        language: "pt",
        category: "calculus",
        description: "Cálculo numérico aplicado. Este livro aborda métodos numéricos para resolução de problemas de cálculo, com implementações práticas e análise de erros.",
        rating: 4.5,
        pages: 420,
        year: 1996
    },

    // Geometry (English)
    {
        id: 61,
        title: "Geometry: Euclid and Beyond",
        author: "Robin Hartshorne",
        language: "en",
        category: "geometry",
        description: "Modern approach to Euclidean and non-Euclidean geometries that connects classical geometry with modern mathematics. This unique textbook begins with Euclid's Elements and progresses to hyperbolic geometry, projective geometry, and transformational geometry, emphasizing axiomatic development.",
        rating: 4.5,
        pages: 526,
        year: 2000
    },
    {
        id: 62,
        title: "Euclidean and Non-Euclidean Geometries",
        author: "Marvin Jay Greenberg",
        language: "en",
        category: "geometry",
        description: "Historical development of geometries. This textbook presents Euclidean, hyperbolic, and elliptic geometries from both historical and axiomatic perspectives, showing their logical relationships.",
        rating: 4.6,
        pages: 512,
        year: 2007
    },
    {
        id: 63,
        title: "Elementary Geometry from an Advanced Standpoint",
        author: "Edwin E. Moise",
        language: "en",
        category: "geometry",
        description: "Deep understanding of school geometry. This book revisits elementary geometry with the sophistication of modern mathematics, providing deeper insights into familiar topics.",
        rating: 4.4,
        pages: 450,
        year: 1990
    },
    {
        id: 64,
        title: "Geometry",
        author: "David A. Brannan et al.",
        language: "en",
        category: "geometry",
        description: "Comprehensive modern geometry textbook. This textbook covers Euclidean geometry, transformations, and non-Euclidean geometries with a modern, rigorous approach.",
        rating: 4.5,
        pages: 474,
        year: 2012
    },
    {
        id: 65,
        title: "Differential Geometry of Curves and Surfaces",
        author: "Manfredo P. do Carmo",
        language: "en",
        category: "geometry",
        description: "Beautiful introduction to differential geometry. This classic textbook covers the differential geometry of curves and surfaces with clarity and geometric intuition.",
        rating: 4.8,
        pages: 503,
        year: 2016
    },
    {
        id: 66,
        title: "Introduction to Riemannian Manifolds",
        author: "John M. Lee",
        language: "en",
        category: "geometry",
        description: "Graduate-level Riemannian geometry. This textbook provides a comprehensive introduction to Riemannian geometry, building carefully from basic concepts to advanced topics.",
        rating: 4.7,
        pages: 437,
        year: 2018
    },
    {
        id: 67,
        title: "Geometry of Surfaces",
        author: "John Stillwell",
        language: "en",
        category: "geometry",
        description: "Accessible introduction to hyperbolic geometry. This book explores the geometry of surfaces with emphasis on hyperbolic geometry and its connections to other areas of mathematics.",
        rating: 4.5,
        pages: 216,
        year: 1992
    },
    {
        id: 68,
        title: "Projective Geometry",
        author: "H. S. M. Coxeter",
        language: "en",
        category: "geometry",
        description: "Classic work on projective geometry. This influential book presents projective geometry with Coxeter's characteristic clarity and geometric insight.",
        rating: 4.6,
        pages: 176,
        year: 2003
    },
    {
        id: 69,
        title: "Algebraic Geometry",
        author: "Joe Harris",
        language: "en",
        category: "geometry",
        description: "Introduction to varieties and schemes. This textbook provides a geometric introduction to algebraic geometry, emphasizing examples and intuition before formalism.",
        rating: 4.5,
        pages: 328,
        year: 1995
    },
    {
        id: 70,
        title: "Geometry and the Imagination",
        author: "David Hilbert & Stefan Cohn-Vossen",
        language: "en",
        category: "geometry",
        description: "Visual approach to geometry. This classic book explores geometric concepts through visualization and intuition, making abstract ideas concrete through pictures and examples.",
        rating: 4.7,
        pages: 357,
        year: 1999
    },
    {
        id: 71,
        title: "A Comprehensive Introduction to Differential Geometry",
        author: "Michael Spivak",
        language: "en",
        category: "geometry",
        description: "Multi-volume treatise on differential geometry. This monumental work covers differential geometry comprehensively, with historical notes and thorough development of concepts.",
        rating: 4.8,
        pages: 2490,
        year: 1999
    },
    {
        id: 72,
        title: "Elementary Differential Geometry",
        author: "Andrew Pressley",
        language: "en",
        category: "geometry",
        description: "Accessible introduction to differential geometry. This textbook presents the differential geometry of curves and surfaces with minimal prerequisites, emphasizing computation and examples.",
        rating: 4.5,
        pages: 474,
        year: 2010
    },
    {
        id: 73,
        title: "Geometry: A Metric Approach with Models",
        author: "Richard S. Millman & George D. Parker",
        language: "en",
        category: "geometry",
        description: "Metric approach to geometry. This textbook develops geometry through the concept of metric spaces, providing a modern foundation for both Euclidean and non-Euclidean geometries.",
        rating: 4.4,
        pages: 368,
        year: 1991
    },
    {
        id: 74,
        title: "Visual Complex Analysis",
        author: "Tristan Needham",
        language: "en",
        category: "geometry",
        description: "Geometric approach to complex analysis. This innovative book presents complex analysis through geometric visualization, making abstract concepts visually intuitive.",
        rating: 4.9,
        pages: 616,
        year: 1997
    },
    {
        id: 75,
        title: "The Four Pillars of Geometry",
        author: "John Stillwell",
        language: "en",
        category: "geometry",
        description: "Four approaches to geometry. This book presents geometry through four different perspectives: Euclidean, analytic, transformational, and projective, showing their interconnections.",
        rating: 4.6,
        pages: 240,
        year: 2005
    },

    // Geometry (Portuguese)
    {
        id: 161,
        title: "Geometria Analítica",
        author: "Paulo Boulos & Ivan de Camargo",
        language: "pt",
        category: "geometry",
        description: "Referência completa em geometria analítica, cobrindo desde conceitos básicos até tópicos avançados. Este livro é amplamente utilizado em cursos de graduação no Brasil, com ênfase em aplicações e resolução de problemas.",
        rating: 4.6,
        pages: 420,
        year: 1999
    },
    {
        id: 162,
        title: "Geometria Euclidiana Plana",
        author: "João Lucas M. Barbosa",
        language: "pt",
        category: "geometry",
        description: "Tratamento moderno da geometria euclidiana. Este livro apresenta a geometria euclidiana plana com rigor matemático, seguindo uma abordagem axiomática moderna.",
        rating: 4.7,
        pages: 280,
        year: 1995
    },
    {
        id: 163,
        title: "Geometria",
        author: "Paulo Ventura Araújo",
        language: "pt",
        category: "geometry",
        description: "Geometria euclidiana plana e espacial. Este livro aborda tanto a geometria plana quanto a espacial, com ênfase na intuição geométrica e na resolução de problemas.",
        rating: 4.5,
        pages: 350,
        year: 2004
    },
    {
        id: 164,
        title: "Geometria Diferencial de Curvas e Superfícies",
        author: "Manfredo P. do Carmo",
        language: "pt",
        category: "geometry",
        description: "Introdução à geometria diferencial. Este clássico da matemática brasileira apresenta a geometria diferencial de curvas e superfícies com clareza e rigor.",
        rating: 4.8,
        pages: 510,
        year: 2005
    },
    {
        id: 165,
        title: "Geometria Projetiva",
        author: "Eduardo Wagner",
        language: "pt",
        category: "geometry",
        description: "Geometria projetiva com aplicações. Este livro apresenta os conceitos básicos da geometria projetiva, com aplicações em problemas de geometria euclidiana.",
        rating: 4.6,
        pages: 240,
        year: 2008
    },
    {
        id: 166,
        title: "Geometria Hiperbólica",
        author: "Luciana L. de M. Salviatto",
        language: "pt",
        category: "geometry",
        description: "Introdução às geometrias não-euclidianas. Este livro apresenta a geometria hiperbólica de forma acessível, mostrando suas propriedades fundamentais e modelos concretos.",
        rating: 4.5,
        pages: 200,
        year: 2011
    },
    {
        id: 167,
        title: "Geometria Métrica",
        author: "Elon Lages Lima",
        language: "pt",
        category: "geometry",
        description: "Geometria com ênfase métrica. Este livro aborda a geometria a partir do conceito de distância, desenvolvendo tanto a geometria euclidiana quanto aspectos de geometrias mais gerais.",
        rating: 4.7,
        pages: 320,
        year: 1991
    },
    {
        id: 168,
        title: "Geometria Descritiva",
        author: "Jorge A. A. de Castro",
        language: "pt",
        category: "geometry",
        description: "Fundamentos de geometria descritiva. Este livro apresenta os métodos da geometria descritiva para representação de objetos tridimensionais em planos bidimensionais.",
        rating: 4.4,
        pages: 380,
        year: 2006
    },
    {
        id: 169,
        title: "Geometria e Desenho Geométrico",
        author: "Antônio dos S. Machado",
        language: "pt",
        category: "geometry",
        description: "Integração entre teoria e construção geométrica. Este livro combina a teoria da geometria com a prática do desenho geométrico, mostrando as aplicações práticas dos conceitos teóricos.",
        rating: 4.5,
        pages: 420,
        year: 2009
    },
    {
        id: 170,
        title: "Geometria Analítica: Um Tratamento Vetorial",
        author: "Paulo Boulos",
        language: "pt",
        category: "geometry",
        description: "Abordagem vetorial da geometria analítica. Este livro apresenta a geometria analítica usando uma abordagem vetorial moderna, com aplicações em física e engenharia.",
        rating: 4.6,
        pages: 450,
        year: 2005
    },
    {
        id: 171,
        title: "Introdução à Geometria Euclidiana",
        author: "Eduardo Wagner",
        language: "pt",
        category: "geometry",
        description: "Introdução à geometria euclidiana. Este livro apresenta os fundamentos da geometria euclidiana de forma clara e sistemática, ideal para um primeiro curso universitário.",
        rating: 4.5,
        pages: 280,
        year: 2009
    },
    {
        id: 172,
        title: "Geometria: Teoria e Aplicações",
        author: "Luiz Francisco da S. Ramos",
        language: "pt",
        category: "geometry",
        description: "Teoria e aplicações da geometria. Este livro aborda os conceitos geométricos junto com suas aplicações em problemas reais, mostrando a relevância prática da geometria.",
        rating: 4.4,
        pages: 380,
        year: 2012
    },
    {
        id: 173,
        title: "Geometria Diferencial de Superfícies",
        author: "M. P. do Carmo",
        language: "pt",
        category: "geometry",
        description: "Aprofundamento em geometria diferencial de superfícies. Este livro aborda tópicos avançados da geometria diferencial de superfícies, inclu curvatura e teorema de Gauss-Bonnet.",
        rating: 4.7,
        pages: 350,
        year: 2008
    },
    {
        id: 174,
        title: "Geometria Projetiva Plana",
        author: "Carlos A. S. L. de Almeida",
        language: "pt",
        category: "geometry",
        description: "Geometria projetiva no plano. Este livro aborda a geometria projetiva no plano com rigor matemático, incluindo dualidade e teoremas clássicos.",
        rating: 4.5,
        pages: 280,
        year: 2010
    },
    {
        id: 175,
        title: "Elementos de Geometria",
        author: "Osvaldo Dolce & José Nicolau Pompeo",
        language: "pt",
        category: "geometry",
        description: "Elementos básicos de geometria. Este livro apresenta os conceitos fundamentais da geometria plana e espacial, com muitos exercícios e aplicações.",
        rating: 4.6,
        pages: 520,
        year: 2005
    },

    // Combinatorics & Discrete Math (English)
    {
        id: 76,
        title: "Concrete Mathematics",
        author: "Ronald Graham, Donald Knuth, Oren Patashnik",
        language: "en",
        category: "combinatorics",
        description: "Foundational discrete mathematics that bridges the gap between continuous and discrete mathematics. This unique textbook covers sums, recurrences, integer functions, elementary number theory, binomial coefficients, generating functions, discrete probability, and asymptotic methods with a problem-solving focus.",
        rating: 4.8,
        pages: 657,
        year: 1994
    },
    {
        id: 77,
        title: "Enumerative Combinatorics, Volumes 1 & 2",
        author: "Richard P. Stanley",
        language: "en",
        category: "combinatorics",
        description: "Comprehensive combinatorics reference. These two volumes provide an encyclopedic coverage of enumerative combinatorics, from basic counting principles to advanced topics like symmetric functions and combinatorial species.",
        rating: 4.7,
        pages: 1264,
        year: 2011
    },
    {
        id: 78,
        title: "Introduction to Graph Theory",
        author: "Douglas B. West",
        language: "en",
        category: "combinatorics",
        description: "Complete textbook on graph theory. This comprehensive textbook covers all major topics in graph theory with numerous examples, exercises, and applications to computer science and optimization.",
        rating: 4.8,
        pages: 588,
        year: 2000
    },
    {
        id: 79,
        title: "Combinatorics and Graph Theory",
        author: "John Harris et al.",
        language: "en",
        category: "combinatorics",
        description: "Undergraduate introduction to combinatorics. This accessible textbook covers basic counting techniques, graph theory, and combinatorial designs with an emphasis on problem-solving.",
        rating: 4.5,
        pages: 381,
        year: 2008
    },
    {
        id: 80,
        title: "A Walk Through Combinatorics",
        author: "Miklós Bóna",
        language: "en",
        category: "combinatorics",
        description: "Engaging introduction to combinatorial thinking. This textbook presents combinatorics through interesting problems and examples, emphasizing combinatorial reasoning and proof techniques.",
        rating: 4.6,
        pages: 568,
        year: 2016
    },
    {
        id: 81,
        title: "Generatingfunctionology",
        author: "Herbert S. Wilf",
        language: "en",
        category: "combinatorics",
        description: "Free classic on generating functions. This influential book presents generating functions as a powerful tool for solving combinatorial problems, with numerous examples and applications.",
        rating: 4.7,
        pages: 184,
        year: 2005
    },
    {
        id: 82,
        title: "Combinatorial Problems and Exercises",
        author: "László Lovász",
        language: "en",
        category: "combinatorics",
        description: "Problem-driven approach to combinatorics. This collection of combinatorial problems with solutions helps develop problem-solving skills and deep understanding of combinatorial concepts.",
        rating: 4.6,
        pages: 636,
        year: 1993
    },
    {
        id: 83,
        title: "Discrete Mathematics",
        author: "Norman L. Biggs",
        language: "en",
        category: "combinatorics",
        description: "Comprehensive discrete mathematics textbook. This textbook covers logic, sets, relations, functions, combinatorics, graph theory, and algebraic structures with a unified approach.",
        rating: 4.5,
        pages: 425,
        year: 2002
    },
    {
        id: 84,
        title: "Applied Combinatorics",
        author: "Alan Tucker",
        language: "en",
        category: "combinatorics",
        description: "Applications-oriented combinatorics textbook. This textbook emphasizes applications of combinatorics to computer science, operations research, and other practical fields.",
        rating: 4.6,
        pages: 608,
        year: 2012
    },
    {
        id: 85,
        title: "Extremal Combinatorics",
        author: "Stasys Jukna",
        language: "en",
        category: "combinatorics",
        description: "Advanced topics in combinatorics. This graduate-level textbook covers extremal combinatorics, Ramsey theory, and probabilistic methods with rigorous proofs.",
        rating: 4.5,
        pages: 412,
        year: 2011
    },
    {
        id: 86,
        title: "Combinatorial Optimization",
        author: "William J. Cook et al.",
        language: "en",
        category: "combinatorics",
        description: "Comprehensive treatment of combinatorial optimization. This textbook covers network flows, integer programming, matching, and other optimization problems with algorithms and complexity analysis.",
        rating: 4.7,
        pages: 357,
        year: 1998
    },
    {
        id: 87,
        title: "Discrete Mathematics and Its Applications",
        author: "Kenneth H. Rosen",
        language: "en",
        category: "combinatorics",
        description: "Widely-used discrete mathematics textbook. This comprehensive textbook covers logic, sets, algorithms, number theory, combinatorics, and graph theory with applications to computer science.",
        rating: 4.6,
        pages: 1072,
        year: 2018
    },
    {
        id: 88,
        title: "Proofs that Really Count",
        author: "Arthur T. Benjamin & Jennifer J. Quinn",
        language: "en",
        category: "combinatorics",
        description: "Combinatorial proofs of mathematical identities. This book shows how to prove identities using combinatorial arguments rather than algebraic manipulation.",
        rating: 4.5,
        pages: 220,
        year: 2003
    },
    {
        id: 89,
        title: "Introduction to Combinatorial Designs",
        author: "W. D. Wallis",
        language: "en",
        category: "combinatorics",
        description: "Introduction to combinatorial design theory. This textbook covers Latin squares, balanced incomplete block designs, and other combinatorial structures with applications.",
        rating: 4.4,
        pages: 312,
        year: 2007
    },
    {
        id: 90,
        title: "Combinatorics Through Guided Discovery",
        author: "Kenneth P. Bogart",
        language: "en",
        category: "combinatorics",
        description: "Inquiry-based approach to combinatorics. This free textbook uses guided discovery to help students develop combinatorial reasoning through problem-solving.",
        rating: 4.5,
        pages: 396,
        year: 2004
    },

    // Combinatorics & Discrete Math (Portuguese)
    {
        id: 176,
        title: "Matemática Discreta",
        author: "Sebastião Firmo",
        language: "pt",
        category: "combinatorics",
        description: "Introdução abrangente à matemática discreta, cobrindo lógica, teoria dos conjuntos, combinatória, grafos e relações. Este livro é adequado para cursos introdutórios de matemática discreta em ciência da computação e matemática.",
        rating: 4.5,
        pages: 380,
        year: 2008
    },
    {
        id: 177,
        title: "Combinatória",
        author: "José Plínio de O. Santos",
        language: "pt",
        category: "combinatorics",
        description: "Técnicas e problemas combinatórios. Este livro aborda as principais técnicas de contagem, incluindo permutações, combinações, princípio da inclusão-exclusão e funções geradoras.",
        rating: 4.6,
        pages: 320,
        year: 2004
    },
    {
        id: 178,
        title: "Introdução à Combinatória",
        author: "Paulo A. M. Fernandez",
        language: "pt",
        category: "combinatorics",
        description: "Primeiro curso em combinatória. Este livro apresenta os conceitos básicos da combinatória de forma acessível, com muitos exemplos e exercícios resolvidos.",
        rating: 4.5,
        pages: 280,
        year: 2002
    },
    {
        id: 179,
        title: "Teoria dos Grafos",
        author: "Célia Picinin de Mello",
        language: "pt",
        category: "combinatorics",
        description: "Introdução moderna à teoria dos grafos. Este livro aborda os conceitos fundamentais da teoria dos grafos, incluindo caminhos, ciclos, árvores, planaridade e coloração.",
        rating: 4.6,
        pages: 350,
        year: 2010
    },
    {
        id: 180,
        title: "Grafos e Algoritmos",
        author: "Cláudia L. de Oliveira",
        language: "pt",
        category: "combinatorics",
        description: "Aplicações algorítmicas em grafos. Este livro aborda a teoria dos grafos com foco em algoritmos, incluindo algoritmos de busca, caminhos mínimos e fluxo em redes.",
        rating: 4.5,
        pages: 380,
        year: 2012
    },
    {
        id: 181,
        title: "Combinatória Enumerativa",
        author: "H. P. Bueno",
        language: "pt",
        category: "combinatorics",
        description: "Métodos enumerativos em combinatória. Este livro aborda técnicas avançadas de contagem, incluindo funções geradoras e relações de recorrência.",
        rating: 4.6,
        pages: 300,
        year: 2015
    },
    {
        id: 182,
        title: "Matemática Discreta para Computação",
        author: "Paulo Feofiloff",
        language: "pt",
        category: "combinatorics",
        description: "Matemática discreta aplicada à computação. Este livro aborda os conceitos da matemática discreta com foco em aplicações em ciência da computação e algoritmos.",
        rating: 4.7,
        pages: 420,
        year: 2011
    },
    {
        id: 183,
        title: "Problemas de Combinatória",
        author: "Augusto C. Morgado et al.",
        language: "pt",
        category: "combinatorics",
        description: "Problemas desafiadores de combinatória. Este livro apresenta uma coleção de problemas combinatórios com soluções detalhadas, ideal para preparação para olimpíadas.",
        rating: 4.8,
        pages: 280,
        year: 1991
    },
    {
        id: 184,
        title: "Análise Combinatória e Probabilidade",
        author: "Augusto C. Morgado",
        language: "pt",
        category: "combinatorics",
        description: "Integração entre combinatória e probabilidade. Este livro aborda as técnicas de contagem e suas aplicações em probabilidade, com muitos exemplos e exercícios.",
        rating: 4.7,
        pages: 350,
        year: 1991
    },
    {
        id: 185,
        title: "Introdução à Teoria dos Grafos",
        author: "Wilson R. de Oliveira",
        language: "pt",
        category: "combinatorics",
        description: "Introdução à teoria dos grafos. Este livro apresenta os conceitos básicos da teoria dos grafos de forma acessível, com aplicações em diversas áreas.",
        rating: 4.5,
        pages: 300,
        year: 2009
    },
    {
        id: 186,
        title: "Combinatória: Teoria e Aplicações",
        author: "Carlos A. S. L. de Almeida",
        language: "pt",
        category: "combinatorics",
        description: "Teoria e aplicações da combinatória. Este livro aborda os conceitos combinatórios junto com suas aplicações em criptografia, teoria dos códigos e otimização.",
        rating: 4.6,
        pages: 380,
        year: 2014
    },
    {
        id: 187,
        title: "Matemática Discreta: Fundamentos e Aplicações",
        author: "Kenneth H. Rosen",
        language: "pt",
        category: "combinatorics",
        description: "Tradução do clássico de matemática discreta. Esta tradução mantém a abordagem abrangente e aplicada do original, com muitos exemplos e exercícios.",
        rating: 4.7,
        pages: 1100,
        year: 2010
    },
    {
        id: 188,
        title: "Grafos: Teoria e Algoritmos",
        author: "N. Deo",
        language: "pt",
        category: "combinatorics",
        description: "Tradução do clássico sobre grafos e algoritmos. Esta tradução aborda tanto a teoria dos grafos quanto os algoritmos relacionados, com implementações práticas.",
        rating: 4.6,
        pages: 480,
        year: 2006
    },
    {
        id: 189,
        title: "Combinatória Aplicada",
        author: "Alan Tucker",
        language: "pt",
        category: "combinatorics",
        description: "Tradução do livro de combinatória aplicada. Esta tradução mantém o foco em aplicações práticas da combinatória em diversas áreas.",
        rating: 4.5,
        pages: 610,
        year: 2008
    },
    {
        id: 190,
        title: "Elementos de Combinatória",
        author: "M. P. do Carmo",
        language: "pt",
        category: "combinatorics",
        description: "Elementos básicos de combinatória. Este livro apresenta os conceitos fundamentais da combinatória de forma clara e sistemática.",
        rating: 4.5,
        pages: 250,
        year: 2007
    },

    // Number Theory (English)
    {
        id: 91,
        title: "An Introduction to the Theory of Numbers",
        author: "G. H. Hardy & E. M. Wright",
        language: "en",
        category: "number-theory",
        description: "Classic number theory text known for its elegance and depth. This influential book covers divisibility, primes, congruences, quadratic residues, Diophantine equations, continued fractions, and analytic number theory. Its timeless exposition makes it valuable for both beginners and experts.",
        rating: 4.7,
        pages: 656,
        year: 2008
    },
    {
        id: 92,
        title: "A Classical Introduction to Modern Number Theory",
        author: "Kenneth Ireland & Michael Rosen",
        language: "en",
        category: "number-theory",
        description: "Bridge between classical and modern number theory. This textbook connects elementary number theory with more advanced topics like algebraic number theory and elliptic curves.",
        rating: 4.6,
        pages: 389,
        year: 1990
    },
    {
        id: 93,
        title: "Number Theory",
        author: "George E. Andrews",
        language: "en",
        category: "number-theory",
        description: "Accessible introductory textbook. This book presents number theory through interesting problems and examples, emphasizing combinatorial and analytic methods.",
        rating: 4.5,
        pages: 292,
        year: 1994
    },
    {
        id: 94,
        title: "Algebraic Number Theory",
        author: "Jürgen Neukirch",
        language: "en",
        category: "number-theory",
        description: "Graduate-level algebraic number theory. This comprehensive textbook covers class field theory, local fields, and other advanced topics in algebraic number theory.",
        rating: 4.7,
        pages: 571,
        year: 1999
    },
    {
        id: 95,
        title: "A Course in Arithmetic",
        author: "Jean-Pierre Serre",
        language: "en",
        category: "number-theory",
        description: "Concise introduction to analytic and algebraic number theory. This influential book covers both analytic methods (Dirichlet series, prime number theorem) and algebraic methods (quadratic forms, p-adic numbers).",
        rating: 4.6,
        pages: 115,
        year: 1996
    },
    {
        id: 96,
        title: "Elementary Number Theory",
        author: "David M. Burton",
        language: "en",
        category: "number-theory",
        description: "Popular undergraduate textbook. This accessible textbook covers divisibility, primes, congruences, quadratic reciprocity, and Diophantine equations with historical notes.",
        rating: 4.5,
        pages: 448,
        year: 2010
    },
    {
        id: 97,
        title: "Introduction to Analytic Number Theory",
        author: "Tom M. Apostol",
        language: "en",
        category: "number-theory",
        description: "Classic introduction to analytic methods. This textbook covers Dirichlet series, the prime number theorem, and other analytic techniques in number theory.",
        rating: 4.7,
        pages: 352,
        year: 1998
    },
    {
        id: 98,
        title: "Multiplicative Number Theory",
        author: "Harold Davenport",
        language: "en",
        category: "number-theory",
        description: "Classic work on analytic number theory. This book focuses on the distribution of primes and Dirichlet's theorem on primes in arithmetic progressions.",
        rating: 4.6,
        pages: 182,
        year: 2000
    },
    {
        id: 99,
        title: "Number Theory for Computing",
        author: "Song Y. Yan",
        language: "en",
        category: "number-theory",
        description: "Applications in computer science. This book covers number theory topics relevant to computer science, including primality testing, factorization, and cryptographic applications.",
        rating: 4.5,
        pages: 453,
        year: 2002
    },
    {
        id: 100,
        title: "Primality Testing and Integer Factorization",
        author: "R. Crandall & C. Pomerance",
        language: "en",
        category: "number-theory",
        description: "Computational number theory. This book covers algorithms for primality testing and integer factorization with applications to cryptography.",
        rating: 4.6,
        pages: 284,
        year: 2005
    },
    {
        id: 191,
        title: "Number Theory: An Approach Through History",
        author: "André Weil",
        language: "en",
        category: "number-theory",
        description: "Historical approach to number theory. This book presents number theory through its historical development, showing how concepts evolved over time.",
        rating: 4.5,
        pages: 375,
        year: 1987
    },
    {
        id: 192,
        title: "A Friendly Introduction to Number Theory",
        author: "Joseph H. Silverman",
        language: "en",
        category: "number-theory",
        description: "Accessible introduction to number theory. This textbook presents number theory through interesting problems and applications, with minimal prerequisites.",
        rating: 4.6,
        pages: 432,
        year: 2012
    },
    {
        id: 193,
        title: "Number Theory: Concepts and Problems",
        author: "Titu Andreescu & Dorin Andrica",
        language: "en",
        category: "number-theory",
        description: "Problem-based approach to number theory. This book covers number theory through carefully chosen problems, ideal for olympiad preparation.",
        rating: 4.7,
        pages: 384,
        year: 2017
    },
    {
        id: 194,
        title: "The Higher Arithmetic",
        author: "H. Davenport",
        language: "en",
        category: "number-theory",
        description: "Classic introduction to number theory. This accessible book covers elementary number theory with clarity and mathematical insight.",
        rating: 4.6,
        pages: 241,
        year: 2008
    },
    {
        id: 195,
        title: "Number Theory in Science and Communication",
        author: "Manfred R. Schroeder",
        language: "en",
        category: "number-theory",
        description: "Applications of number theory. This book shows how number theory applies to physics, engineering, and communication theory.",
        rating: 4.5,
        pages: 374,
        year: 2006
    },

    // Number Theory (Portuguese)
    {
        id: 196,
        title: "Teoria dos Números",
        author: "Plácido Z. Táboas",
        language: "pt",
        category: "number-theory",
        description: "Livro-texto para graduação em teoria dos números, com abordagem acessível e muitos exemplos. Cobre divisibilidade, números primos, congruências, equações diofantinas e introdução à teoria analítica dos números.",
        rating: 4.4,
        pages: 320,
        year: 2006
    },
    {
        id: 197,
        title: "Números Inteiros e Criptografia RSA",
        author: "S. C. Coutinho",
        language: "pt",
        category: "number-theory",
        description: "Aplicações em criptografia. Este livro aborda a teoria dos números inteiros com foco em aplicações em criptografia, incluindo o sistema RSA.",
        rating: 4.6,
        pages: 280,
        year: 2010
    },
    {
        id: 198,
        title: "Introdução à Teoria Algébrica dos Números",
        author: "Abramo Hefez",
        language: "pt",
        category: "number-theory",
        description: "Primeiros passos em teoria algébrica dos números. Este livro apresenta os conceitos básicos da teoria algébrica dos números, incluindo corpos numéricos e inteiros algébricos.",
        rating: 4.5,
        pages: 350,
        year: 2007
    },
    {
        id: 199,
        title: "Elementos de Aritmética",
        author: "A. Hefez",
        language: "pt",
        category: "number-theory",
        description: "Fundamentos da aritmética teórica. Este livro aborda os conceitos fundamentais da aritmética com rigor matemático, incluindo divisibilidade e números primos.",
        rating: 4.5,
        pages: 300,
        year: 2005
    },
    {
        id: 200,
        title: "Teoria dos Números para Olímpiadas",
        author: "S. B. Feitosa & B. Holanda",
        language: "pt",
        category: "number-theory",
        description: "Preparação olímpica em teoria dos números. Este livro aborda os tópicos de teoria dos números relevantes para olimpíadas de matemática, com muitos problemas resolvidos.",
        rating: 4.7,
        pages: 280,
        year: 2014
    },
    {
        id: 201,
        title: "Problemas de Teoria dos Números",
        author: "E. Carneiro et al.",
        language: "pt",
        category: "number-theory",
        description: "Problemas resolvidos e propostos de teoria dos números. Este livro apresenta uma coleção de problemas desafiadores de teoria dos números com soluções detalhadas.",
        rating: 4.6,
        pages: 320,
        year: 2012
    },
    {
        id: 202,
        title: "Aritmética",
        author: "Carlos A. S. L. de Almeida",
        language: "pt",
        category: "number-theory",
        description: "Tratamento formal da aritmética. Este livro aborda a aritmética dos números inteiros com rigor matemático, incluindo teoremas fundamentais e aplicações.",
        rating: 4.4,
        pages: 280,
        year: 2009
    },
    {
        id: 203,
        title: "Números: Uma Introdução à Matemática",
        author: "C. Milies & S. P. Coelho",
        language: "pt",
        category: "number-theory",
        description: "Construção dos sistemas numéricos. Este livro apresenta a construção dos sistemas numéricos (naturais, inteiros, racionais, reais) a partir de fundamentos lógicos.",
        rating: 4.5,
        pages: 350,
        year: 2000
    },
    {
        id: 204,
        title: "Teorema dos Números Primos",
        author: "S. C. Coutinho",
        language: "pt",
        category: "number-theory",
        description: "Introdução à distribuição dos primos. Este livro aborda o teorema dos números primos e métodos analíticos em teoria dos números.",
        rating: 4.6,
        pages: 240,
        year: 2012
    },
    {
        id: 205,
        title: "Congruências e Aplicações",
        author: "A. C. M. Neto",
        language: "pt",
        category: "number-theory",
        description: "Teoria das congruências e aplicações. Este livro aborda a teoria das congruências com aplicações em critérios de divisibilidade, criptografia e outros problemas.",
        rating: 4.5,
        pages: 280,
        year: 2016
    },
    {
        id: 206,
        title: "Introdução à Teoria dos Números",
        author: "José Plínio de O. Santos",
        language: "pt",
        category: "number-theory",
        description: "Introdução à teoria dos números elementar. Este livro aborda os conceitos básicos da teoria dos números de forma acessível, ideal para um primeiro curso.",
        rating: 4.6,
        pages: 320,
        year: 2003
    },
    {
        id: 207,
        title: "Teoria dos Números: Uma Abordagem Computacional",
        author: "J. D. Vieira Sobrinho",
        language: "pt",
        category: "number-theory",
        description: "Teoria dos números com implementações computacionais. Este livro aborda os conceitos de teoria dos números junto com implementações em linguagem de programação.",
        rating: 4.5,
        pages: 380,
        year: 2018
    },
    {
        id: 208,
        title: "Elementos de Teoria dos Números",
        author: "Eduardo Tengan",
        language: "pt",
        category: "number-theory",
        description: "Elementos básicos de teoria dos números. Este livro apresenta os conceitos fundamentais da teoria dos números de forma clara e sistemática.",
        rating: 4.5,
        pages: 300,
        year: 2011
    },
    {
        id: 209,
        title: "Teoria dos Números para Concursos",
        author: "Sergio e Tambasco",
        language: "pt",
        category: "number-theory",
        description: "Teoria dos números para concursos públicos. Este livro aborda os tópicos de teoria dos números relevantes para concursos, com muitos exercícios resolvidos.",
        rating: 4.6,
        pages: 280,
        year: 2019
    },
    {
        id: 210,
        title: "Aritmética Superior",
        author: "Edgard de Alencar Filho",
        language: "pt",
        category: "number-theory",
        description: "Aritmética em nível superior. Este livro aborda a aritmética dos números inteiros com profundidade, incluindo tópicos avançados e aplicações.",
        rating: 4.5,
        pages: 350,
        year: 1998
    },

    // Probability & Statistics (English)
    {
        id: 211,
        title: "Probability and Measure",
        author: "Patrick Billingsley",
        language: "en",
        category: "probability",
        description: "Measure-theoretic probability that provides rigorous foundations for probability theory. This advanced textbook covers probability spaces, random variables, expectation, convergence concepts, martingales, and stochastic processes, with applications to mathematical statistics and analysis.",
        rating: 4.6,
        pages: 608,
        year: 1995
    },
    {
        id: 212,
        title: "An Introduction to Probability Theory and Its Applications",
        author: "William Feller",
        language: "en",
        category: "probability",
        description: "Classic two-volume work on probability theory. These volumes cover discrete probability, random variables, limit theorems, and stochastic processes with Feller's characteristic clarity and depth.",
        rating: 4.8,
        pages: 1100,
        year: 1968
    },
    {
        id: 213,
        title: "A First Course in Probability",
        author: "Sheldon Ross",
        language: "en",
        category: "probability",
        description: "Popular undergraduate textbook. This accessible textbook covers basic probability concepts, random variables, expectation, and limit theorems with numerous examples and exercises.",
        rating: 4.7,
        pages: 528,
        year: 2018
    },
    {
        id: 214,
        title: "Probability: Theory and Examples",
        author: "Rick Durrett",
        language: "en",
        category: "probability",
        description: "Graduate-level probability theory. This comprehensive textbook covers measure theory, laws of large numbers, central limit theorem, martingales, and Markov chains.",
        rating: 4.6,
        pages: 428,
        year: 2019
    },
    {
        id: 215,
        title: "All of Statistics",
        author: "Larry Wasserman",
        language: "en",
        category: "probability",
        description: "Concise statistical theory overview. This book covers both probability theory and statistical inference in a compact format, emphasizing conceptual understanding.",
        rating: 4.5,
        pages: 461,
        year: 2004
    },
    {
        id: 216,
        title: "Statistical Inference",
        author: "George Casella & Roger L. Berger",
        language: "en",
        category: "probability",
        description: "Comprehensive statistical theory. This textbook covers probability theory, point estimation, hypothesis testing, and Bayesian inference with mathematical rigor.",
        rating: 4.7,
        pages: 660,
        year: 2001
    },
    {
        id: 217,
        title: "The Elements of Statistical Learning",
        author: "Trevor Hastie et al.",
        language: "en",
        category: "probability",
        description: "Machine learning and statistics. This influential book covers statistical learning methods including linear regression, classification, clustering, and neural networks.",
        rating: 4.8,
        pages: 764,
        year: 2009
    },
    {
        id: 218,
        title: "Introduction to Probability Models",
        author: "Sheldon Ross",
        language: "en",
        category: "probability",
        description: "Applied probability models. This textbook covers stochastic processes, queueing theory, reliability theory, and other applied probability models.",
        rating: 4.6,
        pages: 784,
        year: 2014
    },
    {
        id: 219,
        title: "Stochastic Processes",
        author: "Sheldon Ross",
        language: "en",
        category: "probability",
        description: "Introduction to stochastic processes. This textbook covers Poisson processes, renewal theory, Markov chains, Brownian motion, and stationary processes.",
        rating: 4.5,
        pages: 654,
        year: 1995
    },
    {
        id: 220,
        title: "Markov Chains",
        author: "J. R. Norris",
        language: "en",
        category: "probability",
        description: "Rigorous treatment of Markov chains. This book covers discrete-time and continuous-time Markov chains with applications to various fields.",
        rating: 4.6,
        pages: 237,
        year: 1997
    },
    {
        id: 221,
        title: "Probability with Martingales",
        author: "David Williams",
        language: "en",
        category: "probability",
        description: "Introduction to martingale theory. This concise book covers measure-theoretic probability with emphasis on martingales and their applications.",
        rating: 4.7,
        pages: 265,
        year: 1991
    },
    {
        id: 222,
        title: "Theory of Probability",
        author: "Harold Jeffreys",
        language: "en",
        category: "probability",
        description: "Classic Bayesian probability theory. This influential book presents probability from a Bayesian perspective with philosophical and mathematical depth.",
        rating: 4.5,
        pages: 459,
        year: 1998
    },
    {
        id: 223,
        title: "Introduction to Probability",
        author: "Dimitri P. Bertsekas & John N. Tsitsiklis",
        language: "en",
        category: "probability",
        description: "Comprehensive introduction to probability. This textbook covers both discrete and continuous probability with applications to engineering and science.",
        rating: 4.6,
        pages: 544,
        year: 2008
    },
    {
        id: 224,
        title: "Probability and Random Processes",
        author: "Geoffrey Grimmett & David Stirzaker",
        language: "en",
        category: "probability",
        description: "Comprehensive coverage of probability and stochastic processes. This textbook covers probability theory, random variables, and stochastic processes with numerous examples.",
        rating: 4.7,
        pages: 596,
        year: 2001
    },
    {
        id: 225,
        title: "Statistical Theory: A Concise Introduction",
        author: "Felix Abramovich & Ya'acov Ritov",
        language: "en",
        category: "probability",
        description: "Concise introduction to statistical theory. This book covers the mathematical foundations of statistics in a compact but rigorous format.",
        rating: 4.5,
        pages: 223,
        year: 2013
    },

    // Probability & Statistics (Portuguese)
    {
        id: 226,
        title: "Probabilidade: Um Curso Intermediário",
        author: "Barry James",
        language: "pt",
        category: "probability",
        description: "Tradução do livro de probabilidade intermediária. Esta tradução apresenta a teoria da probabilidade de forma acessível, cobrindo desde conceitos básicos até tópicos avançados.",
        rating: 4.6,
        pages: 380,
        year: 2004
    },
    {
        id: 227,
        title: "Estatística Básica",
        author: "Wilton O. Bussab & Pedro A. Morettin",
        language: "pt",
        category: "probability",
        description: "Referência em estatística básica, amplamente utilizada em cursos de graduação no Brasil. Aborda probabilidade, inferência estatística, testes de hipóteses e análise de regressão com muitos exemplos aplicados.",
        rating: 4.7,
        pages: 540,
        year: 2017
    },
    {
        id: 228,
        title: "Introdução à Probabilidade e Estatística",
        author: "William Navidi",
        language: "pt",
        category: "probability",
        description: "Tradução do texto abrangente e aplicado. Esta tradução apresenta probabilidade e estatística de forma integrada, com ênfase em aplicações práticas.",
        rating: 4.6,
        pages: 880,
        year: 2012
    },
    {
        id: 229,
        title: "Probabilidade e Variáveis Aleatórias",
        author: "Marcos N. Magalhães",
        language: "pt",
        category: "probability",
        description: "Teoria da probabilidade rigorosa. Este livro aborda a teoria da probabilidade com rigor matemático, incluindo medida e integração.",
        rating: 4.7,
        pages: 450,
        year: 2006
    },
    {
        id: 230,
        title: "Análise Estatística Multivariada",
        author: "A. C. Pedroso de Lima",
        language: "pt",
        category: "probability",
        description: "Métodos estatísticos multivariados. Este livro aborda técnicas estatísticas para análise de dados multivariados, incluindo análise fatorial e de clusters.",
        rating: 4.5,
        pages: 420,
        year: 2010
    },
    {
        id: 231,
        title: "Inferência Estatística",
        author: "Heleno Bolfarine & M. C. Sandoval",
        language: "pt",
        category: "probability",
        description: "Teoria da inferência estatística. Este livro aborda os fundamentos da inferência estatística, incluindo estimação, testes de hipóteses e intervalos de confiança.",
        rating: 4.6,
        pages: 380,
        year: 2005
    },
    {
        id: 232,
        title: "Processos Estocásticos",
        author: "Paulo R. C. Ruffino",
        language: "pt",
        category: "probability",
        description: "Introdução aos processos estocásticos. Este livro aborda cadeias de Markov, processos de Poisson e outros processos estocásticos com aplicações.",
        rating: 4.5,
        pages: 320,
        year: 2009
    },
    {
        id: 233,
        title: "Estatística Aplicada",
        author: "Sonia Vieira",
        language: "pt",
        category: "probability",
        description: "Estatística para áreas aplicadas. Este livro aborda técnicas estatísticas com aplicações em diversas áreas como saúde, educação e ciências sociais.",
        rating: 4.6,
        pages: 280,
        year: 2011
    },
    {
        id: 234,
        title: "Probabilidade e Estatística para Engenharia",
        author: "Ronald E. Walpole",
        language: "pt",
        category: "probability",
        description: "Tradução do clássico de probabilidade para engenharia. Esta tradução apresenta probabilidade e estatística com foco em aplicações em engenharia.",
        rating: 4.7,
        pages: 680,
        year: 2009
    },
    {
        id: 235,
        title: "Métodos Estatísticos",
        author: "George W. Snedecor",
        language: "pt",
        category: "probability",
        description: "Tradução do clássico da estatística aplicada. Esta tradução mantém a abordagem prática do original, com ênfase em aplicações em pesquisa científica.",
        rating: 4.6,
        pages: 540,
        year: 1989
    },
    {
        id: 236,
        title: "Introdução à Probabilidade",
        author: "Sheldon Ross",
        language: "pt",
        category: "probability",
        description: "Tradução do primeiro curso em probabilidade. Esta tradução mantém a abordagem clara e acessível do original, com muitos exemplos e exercícios.",
        rating: 4.7,
        pages: 530,
        year: 2010
    },
    {
        id: 237,
        title: "Estatística: Teoria e Aplicações",
        author: "Luiz Gonzaga Morettin",
        language: "pt",
        category: "probability",
        description: "Teoria e aplicações da estatística. Este livro aborda tanto a teoria estatística quanto suas aplicações práticas, com muitos exemplos reais.",
        rating: 4.6,
        pages: 580,
        year: 2017
    },
    {
        id: 238,
        title: "Probabilidade e Estatística para Ciências Exatas",
        author: "Paulo Afonso Lopes",
        language: "pt",
        category: "probability",
        description: "Probabilidade e estatística para ciências exatas. Este livro aborda técnicas estatísticas com aplicações específicas em matemática, física e engenharia.",
        rating: 4.5,
        pages: 420,
        year: 2014
    },
    {
        id: 239,
        title: "Análise de Dados com R",
        author: "Paulo Justiniano Ribeiro Jr.",
        language: "pt",
        category: "probability",
        description: "Análise estatística com o software R. Este livro aborda técnicas estatísticas junto com implementações práticas no ambiente R.",
        rating: 4.6,
        pages: 380,
        year: 2019
    },
    {
        id: 240,
        title: "Modelos Lineares Generalizados",
        author: "Paulo H. Ferreira",
        language: "pt",
        category: "probability",
        description: "Modelos lineares generalizados. Este livro aborda uma classe importante de modelos estatísticos com aplicações em diversas áreas.",
        rating: 4.5,
        pages: 320,
        year: 2015
    },

    // Advanced Topics (English)
    {
        id: 241,
        title: "Algebraic Topology",
        author: "Allen Hatcher",
        language: "en",
        category: "advanced",
        description: "Free, geometrically intuitive textbook that emphasizes visualization and intuition. This popular graduate textbook covers fundamental group, covering spaces, homology, cohomology, and homotopy theory with numerous diagrams and examples. Its informal style makes abstract concepts accessible.",
        rating: 4.8,
        pages: 556,
        year: 2002
    },
    {
        id: 242,
        title: "Differential Forms in Algebraic Topology",
        author: "Raoul Bott & Loring W. Tu",
        language: "en",
        category: "advanced",
        description: "Introduction to differential forms and de Rham cohomology. This book connects differential geometry with algebraic topology through the theory of differential forms.",
        rating: 4.7,
        pages: 331,
        year: 1982
    },
    {
        id: 243,
        title: "Partial Differential Equations",
        author: "Lawrence C. Evans",
        language: "en",
        category: "advanced",
        description: "Graduate-level PDE textbook. This comprehensive textbook covers the theory of partial differential equations including existence, uniqueness, and regularity results.",
        rating: 4.8,
        pages: 749,
        year: 2010
    },
    {
        id: 244,
        title: "Functional Analysis",
        author: "Walter Rudin",
        language: "en",
        category: "advanced",
        description: "'Big Rudin' - comprehensive functional analysis. This classic textbook covers Banach spaces, Hilbert spaces, spectral theory, and distributions with Rudin's characteristic rigor.",
        rating: 4.7,
        pages: 424,
        year: 1991
    },
    {
        id: 245,
        title: "Real and Complex Analysis",
        author: "Walter Rudin",
        language: "en",
        category: "advanced",
        description: "Classic analysis textbook. This book covers real analysis (measure theory, integration) and complex analysis in a unified, rigorous treatment.",
        rating: 4.8,
        pages: 416,
        year: 1986
    },
    {
        id: 246,
        title: "Ordinary Differential Equations",
        author: "Vladimir I. Arnold",
        language: "en",
        category: "advanced",
        description: "Geometric approach to ODEs. This influential book presents ordinary differential equations from a geometric perspective, emphasizing qualitative behavior and phase portraits.",
        rating: 4.7,
        pages: 334,
        year: 1992
    },
    {
        id: 247,
        title: "Theory of Ordinary Differential Equations",
        author: "Earl A. Coddington & Norman Levinson",
        language: "en",
        category: "advanced",
        description: "Classic ODE reference. This comprehensive textbook covers existence and uniqueness theorems, linear systems, and boundary value problems in depth.",
        rating: 4.6,
        pages: 429,
        year: 1955
    },
    {
        id: 248,
        title: "Representation Theory",
        author: "William Fulton & Joe Harris",
        language: "en",
        category: "advanced",
        description: "Introduction to representation theory. This textbook covers representation theory of finite groups, Lie groups, and Lie algebras with geometric motivation.",
        rating: 4.7,
        pages: 551,
        year: 1991
    },
    {
        id: 249,
        title: "Lie Groups, Lie Algebras, and Representations",
        author: "Brian C. Hall",
        language: "en",
        category: "advanced",
        description: "Accessible introduction to Lie theory. This book presents Lie groups and Lie algebras with minimal prerequisites, emphasizing examples and applications.",
        rating: 4.8,
        pages: 351,
        year: 2015
    },
    {
        id: 250,
        title: "Galois Theory",
        author: "Ian Stewart",
        language: "en",
        category: "advanced",
        description: "Introduction to Galois theory. This accessible textbook covers field extensions, Galois groups, and applications to polynomial equations and ruler-and-compass constructions.",
        rating: 4.6,
        pages: 348,
        year: 2015
    },
    {
        id: 251,
        title: "Categories for the Working Mathematician",
        author: "Saunders Mac Lane",
        language: "en",
        category: "advanced",
        description: "Classic introduction to category theory. This book presents category theory with applications to algebra, topology, and logic.",
        rating: 4.7,
        pages: 317,
        year: 1998
    },
    {
        id: 252,
        title: "Introduction to Smooth Manifolds",
        author: "John M. Lee",
        language: "en",
        category: "advanced",
        description: "Comprehensive introduction to smooth manifolds. This textbook covers manifolds, tangent spaces, differential forms, and integration on manifolds.",
        rating: 4.8,
        pages: 708,
        year: 2012
    },
    {
        id: 253,
        title: "Fourier Analysis and Its Applications",
        author: "Gerald B. Folland",
        language: "en",
        category: "advanced",
        description: "Comprehensive treatment of Fourier analysis. This book covers Fourier series, Fourier transforms, and applications to partial differential equations.",
        rating: 4.6,
        pages: 520,
        year: 1992
    },
    {
        id: 254,
        title: "Complex Analysis",
        author: "Elias M. Stein & Rami Shakarchi",
        language: "en",
        category: "advanced",
        description: "Modern approach to complex analysis. This textbook covers complex analysis with emphasis on harmonic functions, conformal mapping, and elliptic functions.",
        rating: 4.7,
        pages: 400,
        year: 2003
    },
    {
        id: 255,
        title: "Algebraic Geometry",
        author: "Robin Hartshorne",
        language: "en",
        category: "advanced",
        description: "Standard graduate textbook on scheme theory. This classic textbook introduces modern algebraic geometry through the theory of schemes, requiring substantial background in algebra.",
        rating: 4.3,
        pages: 496,
        year: 1977
    },

    // Advanced Topics (Portuguese)
    {
        id: 256,
        title: "Equações Diferenciais Parciais",
        author: "Djairo G. de Figueiredo",
        language: "pt",
        category: "advanced",
        description: "Teoria de EDPs. Este livro aborda a teoria das equações diferenciais parciais, incluindo equações elípticas, parabólicas e hiperbólicas.",
        rating: 4.7,
        pages: 450,
        year: 2007
    },
    {
        id: 257,
        title: "Variedades Diferenciáveis",
        author: "Djairo G. de Figueiredo",
        language: "pt",
        category: "advanced",
        description: "Introdução à geometria diferencial. Este livro aborda variedades diferenciáveis, campos vetoriais, formas diferenciais e integração em variedades.",
        rating: 4.6,
        pages: 380,
        year: 2009
    },
    {
        id: 258,
        title: "Topologia",
        author: "Elon Lages Lima",
        language: "pt",
        category: "advanced",
        description: "Introdução à topologia geral. Este livro é referência fundamental para estudantes de graduação e pós-graduação no Brasil, apresentando conceitos de topologia de forma clara e rigorosa.",
        rating: 4.6,
        pages: 300,
        year: 1993
    },
    {
        id: 259,
        title: "Análise Funcional",
        author: "Haim Brezis",
        language: "pt",
        category: "advanced",
        description: "Tradução do clássico de análise funcional. Esta tradução apresenta a teoria de espaços de Banach e Hilbert com aplicações em equações diferenciais.",
        rating: 4.7,
        pages: 520,
        year: 2010
    },
    {
        id: 260,
        title: "Teoria Ergódica",
        author: "Ricardo Mañé",
        language: "pt",
        category: "advanced",
        description: "Introdução à teoria ergódica. Este livro aborda sistemas dinâmicos preservando medida, incluindo teoremas de recorrência e ergodicidade.",
        rating: 4.6,
        pages: 320,
        year: 1995
    },
    {
        id: 261,
        title: "Geometria Algébrica",
        author: "Aron Simis",
        language: "pt",
        category: "advanced",
        description: "Primeiros passos em geometria algébrica. Este livro apresenta os conceitos básicos da geometria algébrica, incluindo variedades afins e projetivas.",
        rating: 4.5,
        pages: 350,
        year: 2009
    },
    {
        id: 262,
        title: "Teoria de Representações",
        author: "A. Z. L. Figueiredo",
        language: "pt",
        category: "advanced",
        description: "Introdução à teoria de representações. Este livro aborda representações de grupos finitos, incluindo caracteres e teorema de Maschke.",
        rating: 4.6,
        pages: 280,
        year: 2006
    },
    {
        id: 263,
        title: "Sistemas Dinâmicos",
        author: "Jacob Palis & Welington de Melo",
        language: "pt",
        category: "advanced",
        description: "Teoria qualitativa de sistemas dinâmicos. Este livro aborda sistemas dinâmicos contínuos e discretos, incluindo estabilidade e bifurcações.",
        rating: 4.7,
        pages: 400,
        year: 1982
    },
    {
        id: 264,
        title: "Teoria da Medida",
        author: "Carlos A. S. L. de Almeida",
        language: "pt",
        category: "advanced",
        description: "Fundamentos da teoria da medida. Este livro aborda medida e integração de forma rigorosa, incluindo teoremas de convergência e espaços Lp.",
        rating: 4.5,
        pages: 320,
        year: 2011
    },
    {
        id: 265,
        title: "Análise no Rn",
        author: "Elon Lages Lima",
        language: "pt",
        category: "advanced",
        description: "Análise multivariada. Este livro aborda análise no espaço euclidiano n-dimensional, incluindo diferenciabilidade e integração múltipla.",
        rating: 4.7,
        pages: 350,
        year: 2001
    },
    {
        id: 266,
        title: "Introdução à Topologia Algébrica",
        author: "M. P. do Carmo",
        language: "pt",
        category: "advanced",
        description: "Introdução à topologia algébrica. Este livro aborda grupo fundamental, homologia e cohomologia de forma acessível.",
        rating: 4.6,
        pages: 300,
        year: 2013
    },
    {
        id: 267,
        title: "Teoria de Galois",
        author: "Eduardo Tengan",
        language: "pt",
        category: "advanced",
        description: "Introdução à teoria de Galois. Este livro aborda extensões de corpos, grupos de Galois e aplicações à resolução de equações.",
        rating: 4.6,
        pages: 280,
        year: 2012
    },
    {
        id: 268,
        title: "Análise de Fourier e Equações Diferenciais Parciais",
        author: "Djairo G. de Figueiredo",
        language: "pt",
        category: "advanced",
        description: "Análise de Fourier aplicada a EDPs. Este livro aborda séries e transformadas de Fourier com aplicações na resolução de equações diferenciais parciais.",
        rating: 4.7,
        pages: 420,
        year: 2009
    },
    {
        id: 269,
        title: "Variedades Riemannianas",
        author: "M. P. do Carmo",
        language: "pt",
        category: "advanced",
        description: "Introdução à geometria Riemanniana. Este livro aborda variedades Riemannianas, conexões, curvatura e geodésicas.",
        rating: 4.7,
        pages: 350,
        year: 2011
    },
    {
        id: 270,
        title: "Introdução à Teoria dos Operadores",
        author: "Haim Brezis",
        language: "pt",
        category: "advanced",
        description: "Tradução da introdução à teoria dos operadores. Esta tradução apresenta operadores lineares em espaços de Banach e Hilbert.",
        rating: 4.6,
        pages: 380,
        year: 2012
    },

    // Computational Mathematics (English)
    {
        id: 271,
        title: "The Art of Computer Programming",
        author: "Donald E. Knuth",
        language: "en",
        category: "computational",
        description: "Multi-volume algorithms masterpiece that covers fundamental algorithms and data structures. This monumental work combines mathematical analysis with practical implementation details, establishing rigorous foundations for computer science. Each volume is a treasure trove of algorithms and their mathematical analysis.",
        rating: 4.9,
        pages: 3168,
        year: 2011
    },
    {
        id: 272,
        title: "Introduction to the Theory of Computation",
        author: "Michael Sipser",
        language: "en",
        category: "computational",
        description: "Computability and complexity theory. This textbook covers automata theory, computability theory, and complexity theory with clarity and mathematical rigor.",
        rating: 4.8,
        pages: 504,
        year: 2012
    },
    {
        id: 273,
        title: "Computational Complexity",
        author: "Christos Papadimitriou",
        language: "en",
        category: "computational",
        description: "Comprehensive complexity theory. This textbook covers computational complexity theory including P, NP, completeness, and advanced complexity classes.",
        rating: 4.7,
        pages: 523,
        year: 1993
    },
    {
        id: 274,
        title: "Numerical Recipes",
        author: "William H. Press et al.",
        language: "en",
        category: "computational",
        description: "Practical numerical algorithms. This book provides implementations of numerical algorithms for scientific computing with analysis of their properties.",
        rating: 4.6,
        pages: 1235,
        year: 2007
    },
    {
        id: 275,
        title: "Matrix Computations",
        author: "Gene H. Golub & Charles F. Van Loan",
        language: "en",
        category: "computational",
        description: "Numerical linear algebra algorithms. This comprehensive reference covers algorithms for matrix computations with analysis of stability and efficiency.",
        rating: 4.8,
        pages: 756,
        year: 2013
    },
    {
        id: 276,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen et al.",
        language: "en",
        category: "computational",
        description: "'CLRS' - comprehensive algorithms textbook. This massive textbook covers algorithms and data structures with mathematical analysis of their complexity.",
        rating: 4.8,
        pages: 1312,
        year: 2009
    },
    {
        id: 277,
        title: "Computational Mathematics",
        author: "John C. Butcher",
        language: "en",
        category: "computational",
        description: "Numerical methods for differential equations. This book covers numerical methods for solving ordinary and partial differential equations.",
        rating: 4.5,
        pages: 480,
        year: 2008
    },
    {
        id: 278,
        title: "Approximation Theory and Approximation Practice",
        author: "Lloyd N. Trefethen",
        language: "en",
        category: "computational",
        description: "Practical approximation methods. This book covers approximation theory with emphasis on practical implementation and numerical examples.",
        rating: 4.6,
        pages: 305,
        year: 2013
    },
    {
        id: 279,
        title: "Numerical Analysis",
        author: "Richard L. Burden & J. Douglas Faires",
        language: "en",
        category: "computational",
        description: "Standard numerical analysis textbook. This widely-used textbook covers numerical methods for solving mathematical problems with error analysis.",
        rating: 4.7,
        pages: 896,
        year: 2010
    },
    {
        id: 280,
        title: "Computational Science and Engineering",
        author: "Gilbert Strang",
        language: "en",
        category: "computational",
        description: "Applied mathematics for computation. This book covers mathematical methods for computational science and engineering with emphasis on applications.",
        rating: 4.6,
        pages: 730,
        year: 2007
    },
    {
        id: 281,
        title: "Convex Optimization",
        author: "Stephen Boyd & Lieven Vandenberghe",
        language: "en",
        category: "computational",
        description: "Comprehensive treatment of convex optimization. This book covers convex sets, convex functions, and convex optimization algorithms with applications.",
        rating: 4.8,
        pages: 730,
        year: 2004
    },
    {
        id: 282,
        title: "Scientific Computing",
        author: "Michael T. Heath",
        language: "en",
        category: "computational",
        description: "Introduction to scientific computing. This textbook covers numerical methods for linear algebra, optimization, differential equations, and other problems.",
        rating: 4.7,
        pages: 563,
        year: 2018
    },
    {
        id: 283,
        title: "Numerical Linear Algebra",
        author: "Lloyd N. Trefethen & David Bau III",
        language: "en",
        category: "computational",
        description: "Algorithms for numerical linear algebra. This book covers iterative methods, eigenvalue problems, and other numerical linear algebra topics.",
        rating: 4.7,
        pages: 361,
        year: 1997
    },
    {
        id: 284,
        title: "Introduction to Numerical Analysis",
        author: "J. Stoer & R. Bulirsch",
        language: "en",
        category: "computational",
        description: "Comprehensive numerical analysis. This textbook covers numerical methods with rigorous mathematical analysis of error and convergence.",
        rating: 4.6,
        pages: 744,
        year: 2002
    },
    {
        id: 285,
        title: "Algorithms",
        author: "Robert Sedgewick & Kevin Wayne",
        language: "en",
        category: "computational",
        description: "Comprehensive algorithms textbook. This book covers algorithms and data structures with implementations in Java and mathematical analysis.",
        rating: 4.7,
        pages: 976,
        year: 2011
    },

    // Computational Mathematics (Portuguese)
    {
        id: 286,
        title: "Cálculo Numérico",
        author: "Neide M. B. Franco",
        language: "pt",
        category: "computational",
        description: "Métodos numéricos fundamentais para resolução de problemas matemáticos computacionais. Este livro aborda erros numéricos, soluções de equações, interpolação, integração numérica e resolução de equações diferenciais com implementações práticas.",
        rating: 4.5,
        pages: 480,
        year: 2006
    },
    {
        id: 287,
        title: "Introdução à Computação Científica",
        author: "M. A. G. Ruggiero & V. L. R. Lopes",
        language: "pt",
        category: "computational",
        description: "Fundamentos da computação científica. Este livro aborda métodos numéricos básicos e sua implementação computacional, com exemplos práticos.",
        rating: 4.6,
        pages: 380,
        year: 1997
    },
    {
        id: 288,
        title: "Métodos Numéricos para Engenharia",
        author: "Steven C. Chapra",
        language: "pt",
        category: "computational",
        description: "Tradução do clássico de métodos numéricos para engenharia. Esta tradução mantém a abordagem aplicada do original, com ênfase em problemas de engenharia.",
        rating: 4.7,
        pages: 720,
        year: 2013
    },
    {
        id: 289,
        title: "Algoritmos Numéricos",
        author: "F. F. Campos & E. G. Birgin",
        language: "pt",
        category: "computational",
        description: "Implementação de algoritmos numéricos. Este livro aborda algoritmos numéricos com implementações em linguagem de programação e análise de desempenho.",
        rating: 4.6,
        pages: 420,
        year: 2015
    },
    {
        id: 290,
        title: "Matemática para Ciência da Computação",
        author: "Judith L. Gersting",
        language: "pt",
        category: "computational",
        description: "Tradução do livro de matemática discreta para computação. Esta tradução apresenta conceitos matemáticos com aplicações em ciência da computação.",
        rating: 4.5,
        pages: 680,
        year: 2016
    },
    {
        id: 291,
        title: "Otimização",
        author: "Adriana F. S. D. Rocha",
        language: "pt",
        category: "computational",
        description: "Métodos de otimização matemática. Este livro aborda técnicas de otimização contínua e discreta, com aplicações em diversas áreas.",
        rating: 4.6,
        pages: 350,
        year: 2012
    },
    {
        id: 292,
        title: "Pesquisa Operacional",
        author: "Adriana F. S. D. Rocha",
        language: "pt",
        category: "computational",
        description: "Técnicas de PO aplicadas. Este livro aborda métodos de pesquisa operacional, incluindo programação linear, inteira e não-linear.",
        rating: 4.5,
        pages: 380,
        year: 2014
    },
    {
        id: 293,
        title: "Computação Científica com Python",
        author: "L. M. Barreira & C. da S. Fernandes",
        language: "pt",
        category: "computational",
        description: "Programação científica com Python. Este livro aborda métodos numéricos com implementações em Python, usando bibliotecas como NumPy e SciPy.",
        rating: 4.7,
        pages: 320,
        year: 2018
    },
    {
        id: 294,
        title: "Análise de Algoritmos",
        author: "R. C. S. Schouery & F. K. Miyazawa",
        language: "pt",
        category: "computational",
        description: "Complexidade de algoritmos. Este livro aborda análise assintótica, notação O, e técnicas para análise de eficiência de algoritmos.",
        rating: 4.6,
        pages: 280,
        year: 2016
    },
    {
        id: 295,
        title: "Matemática Financeira Computacional",
        author: "J. D. Vieira Sobrinho",
        language: "pt",
        category: "computational",
        description: "Aplicações financeiras computacionais. Este livro aborda modelos matemáticos para finanças com implementações computacionais.",
        rating: 4.5,
        pages: 350,
        year: 2017
    },
    {
        id: 296,
        title: "Introdução à Análise Numérica",
        author: "J. Stoer & R. Bulirsch",
        language: "pt",
        category: "computational",
        description: "Tradução da introdução à análise numérica. Esta tradução mantém o rigor matemático do original, com análise detalhada dos métodos numéricos.",
        rating: 4.6,
        pages: 750,
        year: 2010
    },
    {
        id: 297,
        title: "Métodos Computacionais em Álgebra Linear",
        author: "R. C. S. Schouery",
        language: "pt",
        category: "computational",
        description: "Métodos computacionais para álgebra linear. Este livro aborda algoritmos para problemas de álgebra linear, com análise numérica e implementações.",
        rating: 4.5,
        pages: 320,
        year: 2019
    },
    {
        id: 298,
        title: "Programação Matemática",
        author: "Paulo A. Fernandes",
        language: "pt",
        category: "computational",
        description: "Otimização matemática. Este livro aborda programação linear, inteira e não-linear, com algoritmos e aplicações.",
        rating: 4.6,
        pages: 380,
        year: 2011
    },
    {
        id: 299,
        title: "Computação Gráfica: Fundamentos Matemáticos",
        author: "Jonas Gomes & Luiz Velho",
        language: "pt",
        category: "computational",
        description: "Fundamentos matemáticos da computação gráfica. Este livro aborda geometria computacional, transformações e outros tópicos matemáticos para computação gráfica.",
        rating: 4.7,
        pages: 420,
        year: 2009
    },
    {
        id: 300,
        title: "Análise de Dados com MATLAB",
        author: "Paulo Justiniano Ribeiro Jr.",
        language: "pt",
        category: "computational",
        description: "Análise de dados com MATLAB. Este livro aborda técnicas estatísticas e numéricas com implementações no ambiente MATLAB.",
        rating: 4.6,
        pages: 380,
        year: 2015
    },

    // Olympiads & Problems (Portuguese)
    {
        id: 301,
        title: "Olimpíadas Brasileiras de Matemática",
        author: "SBM (coleção)",
        language: "pt",
        category: "olympiads",
        description: "Problemas das OBM por ano, essencial para preparação para competições matemáticas. Esta coleção reúne os problemas das Olimpíadas Brasileiras de Matemática com soluções detalhadas, sendo indispensável para estudantes que desejam participar de competições.",
        rating: 4.8,
        pages: 1200,
        year: 2021
    },
    {
        id: 302,
        title: "Problemas Selecionados de Matemática",
        author: "Marcel Rufino",
language: "pt",
category: "olympiads",
description: "Preparação olímpica avançada. Esta coleção reúne problemas desafiadores de várias áreas da matemática, com soluções criativas e técnicas avançadas de resolução.",
rating: 4.8,
pages: 480,
year: 2015
},
{
id: 303,
title: "Técnicas em Olimpíadas de Matemática",
author: "A. C. M. Neto",
language: "pt",
category: "olympiads",
description: "Estratégias para competições matemáticas. Este livro aborda técnicas específicas para resolução de problemas olímpicos, incluindo invariantes, coloração e princípio das casas de pombos.",
rating: 4.7,
pages: 350,
year: 2018
},
{
id: 304,
title: "Manual de Olimpíadas de Matemática",
author: "SBM",
language: "pt",
category: "olympiads",
description: "Guia completo para competições. Este manual cobre todas as áreas da matemática olímpica, com teoria, exemplos resolvidos e problemas propostos.",
rating: 4.8,
pages: 600,
year: 2020
},
{
id: 305,
title: "Problemas de Matemática Elementar",
author: "V. M. G. Lima",
language: "pt",
category: "olympiads",
description: "Problemas desafiadores do ensino básico. Esta coleção reúne problemas interessantes de aritmética, álgebra, geometria e combinatória para estudantes do ensino fundamental e médio.",
rating: 4.6,
pages: 420,
year: 2009
},
{
id: 306,
title: "Treinamento para Olimpíadas",
author: "E. Carneiro et al.",
language: "pt",
category: "olympiads",
description: "Material de treinamento intensivo. Este livro fornece um programa estruturado de preparação para olimpíadas, com teoria, problemas resolvidos e simulados.",
rating: 4.7,
pages: 520,
year: 2016
},
{
id: 307,
title: "Matemática Olímpica",
author: "C. Y. Shine",
language: "pt",
category: "olympiads",
description: "Técnicas específicas para olimpíadas. Este livro aborda tópicos avançados frequentemente encontrados em competições matemáticas internacionais.",
rating: 4.6,
pages: 380,
year: 2012
},
{
id: 308,
title: "Problemas Resolvidos de Matemática",
author: "J. L. M. Barbosa",
language: "pt",
category: "olympiads",
description: "Soluções detalhadas de problemas. Este livro apresenta problemas desafiadores com soluções completas e explicações passo a passo.",
rating: 4.7,
pages: 450,
year: 2005
},
{
id: 309,
title: "Desafios Matemáticos",
author: "I. M. G. de Oliveira",
language: "pt",
category: "olympiads",
description: "Problemas interessantes e soluções criativas. Esta coleção reúne problemas de diversas fontes, com ênfase em soluções elegantes e insights matemáticos.",
rating: 4.6,
pages: 320,
year: 2010
},
{
id: 310,
title: "Matemática: Problemas e Soluções",
author: "Augusto C. Morgado",
language: "pt",
category: "olympiads",
description: "Coletânea de problemas clássicos. Este livro reúne problemas tradicionais da matemática elementar com soluções detalhadas e comentários.",
rating: 4.8,
pages: 480,
year: 1995
},
{
id: 311,
title: "Olimpíadas Internacionais de Matemática",
author: "IMO Compendium",
language: "pt",
category: "olympiads",
description: "Problemas das IMO com soluções. Esta coleção reúne problemas das Olimpíadas Internacionais de Matemática desde sua criação, com soluções detalhadas.",
rating: 4.9,
pages: 1200,
year: 2019
},
{
id: 312,
title: "Geometria Olímpica",
author: "Carlos Y. Shine",
language: "pt",
category: "olympiads",
description: "Geometria para competições. Este livro aborda tópicos de geometria frequentemente encontrados em olimpíadas, incluindo geometria projetiva e transformações geométricas.",
rating: 4.7,
pages: 400,
year: 2014
},
{
id: 313,
title: "Combinatória Olímpica",
author: "S. B. Feitosa",
language: "pt",
category: "olympiads",
description: "Combinatória para competições. Este livro aborda técnicas combinatórias avançadas com aplicação em problemas de olimpíada.",
rating: 4.7,
pages: 350,
year: 2017
},
{
id: 314,
title: "Teoria dos Números Olímpica",
author: "B. Holanda",
language: "pt",
category: "olympiads",
description: "Teoria dos números para competições. Este livro aborda tópicos de teoria dos números relevantes para olimpíadas, com muitos problemas resolvidos.",
rating: 4.8,
pages: 380,
year: 2018
},
{
id: 315,
title: "Álgebra para Olimpíadas",
author: "A. C. M. Neto",
language: "pt",
category: "olympiads",
description: "Álgebra para competições. Este livro aborda tópicos algébricos frequentemente encontrados em olimpíadas, incluindo polinômios, desigualdades e equações funcionais.",
rating: 4.7,
pages: 420,
year: 2019
},


{
    id: 316,
    title: "The Art of Problem Solving",
    author: "Richard Rusczyk & Sandor Lehoczky",
    language: "en",
    category: "olympiads",
    description: "Comprehensive problem-solving guide. This two-volume set covers mathematical problem-solving techniques with emphasis on competition mathematics.",
    rating: 4.8,
    pages: 720,
    year: 2006
},
{
    id: 317,
    title: "Problem-Solving Strategies",
    author: "Arthur Engel",
    language: "en",
    category: "olympiads",
    description: "Classic problem-solving strategies. This book covers 13 fundamental problem-solving strategies with numerous examples from mathematical competitions.",
    rating: 4.9,
    pages: 403,
    year: 1998
},
{
    id: 318,
    title: "The IMO Compendium",
    author: "Dušan Djukić et al.",
    language: "en",
    category: "olympiads",
    description: "Complete collection of IMO problems. This book contains all problems from the International Mathematical Olympiad with solutions.",
    rating: 4.9,
    pages: 823,
    year: 2011
},
{
    id: 319,
    title: "Mathematical Olympiad Challenges",
    author: "Titu Andreescu & Razvan Gelca",
    language: "en",
    category: "olympiads",
    description: "Collection of olympiad problems. This book presents carefully selected problems from mathematical competitions with solutions and comments.",
    rating: 4.7,
    pages: 283,
    year: 2000
},
{
    id: 320,
    title: "Putnam and Beyond",
    author: "Răzvan Gelca & Titu Andreescu",
    language: "en",
    category: "olympiads",
    description: "Preparation for the Putnam exam. This book covers problems and techniques from the William Lowell Putnam Mathematical Competition.",
    rating: 4.8,
    pages: 798,
    year: 2007
},
{
    id: 321,
    title: "Geometry Revisited",
    author: "H. S. M. Coxeter & S. L. Greitzer",
    language: "en",
    category: "olympiads",
    description: "Advanced geometry for competitions. This classic book covers advanced geometric concepts frequently appearing in mathematical competitions.",
    rating: 4.7,
    pages: 193,
    year: 1967
},
{
    id: 322,
    title: "103 Trigonometry Problems",
    author: "Titu Andreescu & Zuming Feng",
    language: "en",
    category: "olympiads",
    description: "Trigonometry for competitions. This book presents trigonometric problems from mathematical competitions with detailed solutions.",
    rating: 4.6,
    pages: 214,
    year: 2004
},
{
    id: 323,
    title: "102 Combinatorial Problems",
    author: "Titu Andreescu & Zuming Feng",
    language: "en",
    category: "olympiads",
    description: "Combinatorial problems for competitions. This book presents combinatorial problems with detailed solutions and comments.",
    rating: 4.7,
    pages: 125,
    year: 2003
},
{
    id: 324,
    title: "Mathematical Olympiad Treasures",
    author: "Titu Andreescu & Bogdan Enescu",
    language: "en",
    category: "olympiads",
    description: "Treasure trove of olympiad problems. This book collects beautiful problems from mathematical competitions with elegant solutions.",
    rating: 4.7,
    pages: 234,
    year: 2003
},
{
    id: 325,
    title: "Problems from the Book",
    author: "Titu Andreescu & Gabriel Dospinescu",
    language: "en",
    category: "olympiads",
    description: "Advanced problem collection. This book presents challenging problems from various mathematical competitions with creative solutions.",
    rating: 4.8,
    pages: 463,
    year: 2008
},
{
    id: 326,
    title: "Straight from the Book",
    author: "Titu Andreescu & Gabriel Dospinescu",
    language: "en",
    category: "olympiads",
    description: "Sequel to 'Problems from the Book'. This volume continues the collection of beautiful mathematical problems with elegant solutions.",
    rating: 4.7,
    pages: 307,
    year: 2012
},
{
    id: 327,
    title: "Number Theory: Structures, Examples, and Problems",
    author: "Titu Andreescu & Dorin Andrica",
    language: "en",
    category: "olympiads",
    description: "Number theory for competitions. This comprehensive book covers number theory concepts with numerous competition problems.",
    rating: 4.8,
    pages: 384,
    year: 2009
},
{
    id: 328,
    title: "Complex Numbers from A to ... Z",
    author: "Titu Andreescu & Dorin Andrica",
    language: "en",
    category: "olympiads",
    description: "Complex numbers for competitions. This book covers complex numbers with applications to geometry and algebra problems.",
    rating: 4.7,
    pages: 321,
    year: 2005
},
{
    id: 329,
    title: "Mathematical Contests 1995-1996",
    author: "Andy Liu",
    language: "en",
    category: "olympiads",
    description: "Collection of contest problems. This book compiles problems from various mathematical competitions with solutions.",
    rating: 4.6,
    pages: 160,
    year: 1997
},
{
    id: 330,
    title: "The William Lowell Putnam Mathematical Competition",
    author: "Problems Committee",
    language: "en",
    category: "olympiads",
    description: "Official Putnam problem collections. These volumes compile problems and solutions from the Putnam exam over the years.",
    rating: 4.8,
    pages: 650,
    year: 1985
},

// Additional English Books to reach 100+
{
    id: 331,
    title: "Graph Theory",
    author: "Reinhard Diestel",
    language: "en",
    category: "combinatorics",
    description: "Modern introduction to graph theory. This textbook covers both basic concepts and advanced topics with a focus on current research directions.",
    rating: 4.7,
    pages: 428,
    year: 2017
},
{
    id: 332,
    title: "Introduction to Algorithms",
    author: "Udi Manber",
    language: "en",
    category: "computational",
    description: "Creative approach to algorithms. This book emphasizes mathematical analysis and design of algorithms through induction and recursion.",
    rating: 4.6,
    pages: 478,
    year: 1989
},
{
    id: 333,
    title: "Real Analysis",
    author: "H. L. Royden & P. M. Fitzpatrick",
    language: "en",
    category: "calculus",
    description: "Comprehensive real analysis. This classic textbook covers measure theory, integration, and functional analysis with numerous exercises.",
    rating: 4.7,
    pages: 444,
    year: 2010
},
{
    id: 334,
    title: "Topology",
    author: "James R. Munkres",
    language: "en",
    category: "advanced",
    description: "Classic introduction to topology. This textbook covers point-set topology and algebraic topology with clarity and rigor.",
    rating: 4.8,
    pages: 537,
    year: 2000
},
{
    id: 335,
    title: "Abstract Algebra",
    author: "John A. Beachy & William D. Blair",
    language: "en",
    category: "algebra",
    description: "Accessible abstract algebra. This textbook presents groups, rings, and fields with numerous examples and applications.",
    rating: 4.5,
    pages: 340,
    year: 2006
},
{
    id: 336,
    title: "Calculus of Variations",
    author: "I. M. Gelfand & S. V. Fomin",
    language: "en",
    category: "advanced",
    description: "Introduction to calculus of variations. This classic book covers variational problems with applications to physics and geometry.",
    rating: 4.6,
    pages: 232,
    year: 2000
},
{
    id: 337,
    title: "Mathematical Statistics",
    author: "Jun Shao",
    language: "en",
    category: "probability",
    description: "Rigorous mathematical statistics. This textbook covers statistical theory with measure-theoretic foundations.",
    rating: 4.6,
    pages: 591,
    year: 2003
},
{
    id: 338,
    title: "Computability and Logic",
    author: "George S. Boolos et al.",
    language: "en",
    category: "foundations",
    description: "Introduction to computability and logic. This book covers Gödel's incompleteness theorems and computability theory.",
    rating: 4.7,
    pages: 350,
    year: 2007
},
{
    id: 339,
    title: "Algebraic Curves",
    author: "William Fulton",
    language: "en",
    category: "advanced",
    description: "Introduction to algebraic curves. This book covers the theory of algebraic curves with geometric intuition.",
    rating: 4.7,
    pages: 226,
    year: 2008
},
{
    id: 340,
    title: "Mathematical Physics",
    author: "Robert Geroch",
    language: "en",
    category: "advanced",
    description: "Mathematical methods for physics. This book covers differential geometry, topology, and analysis for physics applications.",
    rating: 4.6,
    pages: 358,
    year: 1985
},
{
    id: 341,
    title: "Combinatorial Game Theory",
    author: "Aaron N. Siegel",
    language: "en",
    category: "combinatorics",
    description: "Advanced combinatorial game theory. This comprehensive book covers impartial and partisan games with mathematical analysis.",
    rating: 4.7,
    pages: 554,
    year: 2013
},
{
    id: 342,
    title: "Analytic Number Theory",
    author: "Donald J. Newman",
    language: "en",
    category: "number-theory",
    description: "Short course in analytic number theory. This concise book covers prime number theorem and Dirichlet series.",
    rating: 4.6,
    pages: 76,
    year: 1998
},
{
    id: 343,
    title: "Elliptic Curves",
    author: "Dale Husemöller",
    language: "en",
    category: "advanced",
    description: "Introduction to elliptic curves. This book covers the theory of elliptic curves with applications to number theory.",
    rating: 4.6,
    pages: 487,
    year: 2004
},
{
    id: 344,
    title: "Mathematical Biology",
    author: "James D. Murray",
    language: "en",
    category: "advanced",
    description: "Mathematical modeling in biology. This comprehensive book covers differential equations and other mathematical methods in biology.",
    rating: 4.8,
    pages: 811,
    year: 2002
},
{
    id: 345,
    title: "Quantum Computation and Quantum Information",
    author: "Michael A. Nielsen & Isaac L. Chuang",
    language: "en",
    category: "computational",
    description: "Introduction to quantum computing. This comprehensive textbook covers quantum algorithms and information theory.",
    rating: 4.9,
    pages: 702,
    year: 2010
},

// Additional Portuguese Books to reach 100+
{
    id: 346,
    title: "Matemática Financeira",
    author: "Humberto Lima",
    language: "pt",
    category: "probability",
    description: "Matemática financeira aplicada. Este livro aborda juros, amortização, sistemas de financiamento e outros tópicos de matemática financeira.",
    rating: 4.6,
    pages: 320,
    year: 2018
},
{
    id: 347,
    title: "Cálculo Integral Avançado",
    author: "Hamilton L. Guidorizzi",
    language: "pt",
    category: "calculus",
    description: "Avançado em cálculo integral. Este livro aborda integrais impróprias, integrais múltiplas e aplicações avançadas do cálculo integral.",
    rating: 4.7,
    pages: 480,
    year: 2003
},
{
    id: 348,
    title: "Álgebra Linear Aplicada à Computação",
    author: "J. D. Vieira Sobrinho",
    language: "pt",
    category: "algebra",
    description: "Álgebra linear para computação. Este livro aborda os conceitos de álgebra linear com aplicações específicas em ciência da computação.",
    rating: 4.5,
    pages: 350,
    year: 2020
},
{
    id: 349,
    title: "Estatística Descritiva",
    author: "Sonia Vieira",
    language: "pt",
    category: "probability",
    description: "Estatística descritiva completa. Este livro aborda técnicas de descrição e resumo de dados, com muitos exemplos práticos.",
    rating: 4.6,
    pages: 280,
    year: 2012
},
{
    id: 350,
    title: "Geometria Analítica Espacial",
    author: "Paulo Boulos",
    language: "pt",
    category: "geometry",
    description: "Geometria analítica no espaço. Este livro aborda retas, planos e superfícies no espaço tridimensional, com aplicações.",
    rating: 4.7,
    pages: 450,
    year: 2008
},
{
    id: 351,
    title: "Introdução à Teoria da Probabilidade",
    author: "Paulo R. C. Ruffino",
    language: "pt",
    category: "probability",
    description: "Fundamentos da teoria da probabilidade. Este livro aborda espaços de probabilidade, variáveis aleatórias e teoremas limite.",
    rating: 4.6,
    pages: 320,
    year: 2011
},
{
    id: 352,
    title: "Cálculo Diferencial",
    author: "Hamilton L. Guidorizzi",
    language: "pt",
    category: "calculus",
    description: "Volume dedicado ao cálculo diferencial. Este livro aborda limites, derivadas e aplicações do cálculo diferencial.",
    rating: 4.8,
    pages: 520,
    year: 2001
},
{
    id: 353,
    title: "Álgebra para Engenharia",
    author: "Steven Leon",
    language: "pt",
    category: "algebra",
    description: "Tradução da álgebra para engenharia. Esta tradução apresenta álgebra linear com foco em aplicações em engenharia.",
    rating: 4.6,
    pages: 580,
    year: 2011
},
{
    id: 354,
    title: "Matemática Discreta e Lógica",
    author: "Norman L. Biggs",
    language: "pt",
    category: "combinatorics",
    description: "Tradução da matemática discreta e lógica. Esta tradução aborda lógica matemática, teoria dos conjuntos e combinatória.",
    rating: 4.7,
    pages: 430,
    year: 2005
},
{
    id: 355,
    title: "Análise Real Avançada",
    author: "Elon Lages Lima",
    language: "pt",
    category: "calculus",
    description: "Análise real em nível avançado. Este livro aborda tópicos avançados da análise real, incluindo medida e integração.",
    rating: 4.8,
    pages: 380,
    year: 2002
},
{
    id: 356,
    title: "Geometria para Olimpíadas",
    author: "Eduardo Wagner",
    language: "pt",
    category: "olympiads",
    description: "Geometria elementar para competições. Este livro aborda tópicos de geometria plana frequentemente encontrados em olimpíadas.",
    rating: 4.7,
    pages: 280,
    year: 2016
},
{
    id: 357,
    title: "Probabilidade e Estatística para Economia",
    author: "Paulo Afonso Lopes",
    language: "pt",
    category: "probability",
    description: "Probabilidade e estatística aplicadas à economia. Este livro aborda técnicas estatísticas com exemplos da área econômica.",
    rating: 4.6,
    pages: 420,
    year: 2015
},
{
    id: 358,
    title: "Cálculo com Aplicações",
    author: "James Stewart",
    language: "pt",
    category: "calculus",
    description: "Tradução do cálculo com aplicações. Esta tradução mantém a abordagem aplicada do original, com muitos exemplos práticos.",
    rating: 4.8,
    pages: 1360,
    year: 2014
},
{
    id: 359,
    title: "Álgebra Abstrata: Teoria e Prática",
    author: "John B. Fraleigh",
    language: "pt",
    category: "algebra",
    description: "Tradução da álgebra abstrata. Esta tradução apresenta grupos, anéis e corpos de forma acessível, com muitos exemplos.",
    rating: 4.7,
    pages: 440,
    year: 2003
},
{
    id: 360,
    title: "Matemática para Ensino Médio",
    author: "Gelson Iezzi",
    language: "pt",
    category: "foundations",
    description: "Coleção completa para ensino médio. Esta coleção abrange toda a matemática do ensino médio com teoria e exercícios.",
    rating: 4.9,
    pages: 1800,
    year: 2013
}
];

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// DOM Elements
const booksContainer = document.getElementById('booksContainer');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');
const ratingFilter = document.getElementById('ratingFilter');
const totalBooksEl = document.getElementById('totalBooks');
const filteredBooksEl = document.getElementById('filteredBooks');
const copyAllBtn = document.getElementById('copyAllBtn');
const noResultsEl = document.getElementById('noResults');
const copyNotification = document.getElementById('copyNotification');

// Initialize
let filteredBooks = [...books];

// Display books
function displayBooks(booksToDisplay) {
    booksContainer.innerHTML = '';
    
    if (booksToDisplay.length === 0) {
        noResultsEl.style.display = 'block';
        return;
    }
    
    noResultsEl.style.display = 'none';
    
    booksToDisplay.forEach(book => {
        const bookCard = createBookCard(book);
        booksContainer.appendChild(bookCard);
    });
}

// Create book card element
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    // Create star rating
    const stars = createStarRating(book.rating);
    
    // Category mapping
    const categoryNames = {
        'foundations': 'Foundations & Logic',
        'algebra': 'Algebra',
        'geometry': 'Geometry',
        'calculus': 'Calculus & Analysis',
        'combinatorics': 'Combinatorics & Discrete Math',
        'number-theory': 'Number Theory',
        'probability': 'Probability & Statistics',
        'advanced': 'Advanced Topics',
        'computational': 'Computational Mathematics',
        'olympiads': 'Olympiads & Problems'
    };
    
    // Language text
    const languageText = book.language === 'pt' ? 'Portuguese' : 'English';
    
    card.innerHTML = `
        <div class="book-header">
            <h3 class="book-title" data-id="${book.id}">
                <i class="fas fa-book"></i>${book.title}
            </h3>
            <button class="copy-title-btn" data-title="${book.title}">
                <i class="fas fa-copy"></i>
            </button>
            <p class="book-author">${book.author}</p>
            <span class="book-language language-${book.language}">${languageText}</span>
        </div>
        <div class="book-body">
            <span class="book-category">${categoryNames[book.category] || book.category}</span>
            <p class="book-description">${book.description}</p>
        </div>
        <div class="book-footer">
            <div class="rating">
                ${stars}
                <span class="rating-value">${book.rating.toFixed(1)}</span>
            </div>
            <div class="book-pages">
                <i class="fas fa-file-alt"></i>
                <span>${book.pages} pages</span>
            </div>
        </div>
    `;
    
    // Add click event to book title
    const titleElement = card.querySelector('.book-title');
    titleElement.addEventListener('click', () => copyToClipboard(book.title));
    
    // Add click event to copy button
    const copyBtn = card.querySelector('.copy-title-btn');
    copyBtn.addEventListener('click', () => copyToClipboard(book.title));
    
    return card;
}

// Create star rating HTML
function createStarRating(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHtml;
}

// Filter books based on search and filters
function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedLanguage = languageFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedRating = ratingFilter.value;
    
    filteredBooks = books.filter(book => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm) ||
            (book.language === 'pt' ? 'portuguese' : 'english').includes(searchTerm);
        
        // Language filter
        const matchesLanguage = selectedLanguage === 'all' || book.language === selectedLanguage;
        
        // Category filter
        const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
        
        // Rating filter
        let matchesRating = true;
        if (selectedRating !== 'all') {
            const minRating = parseInt(selectedRating);
            matchesRating = book.rating >= minRating;
        }
        
        return matchesSearch && matchesLanguage && matchesCategory && matchesRating;
    });
    
    updateStats();
    displayBooks(filteredBooks);
}

// Update statistics
function updateStats() {
    totalBooksEl.textContent = `${books.length} books`;
    filteredBooksEl.textContent = `${filteredBooks.length} displayed`;
    
    // Show/hide clear search button
    if (searchInput.value.trim() !== '') {
        clearSearchBtn.style.display = 'block';
    } else {
        clearSearchBtn.style.display = 'none';
    }
}

// Copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showNotification();
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification();
        });
}

// Show copy notification
function showNotification() {
    copyNotification.classList.add('show');
    
    setTimeout(() => {
        copyNotification.classList.remove('show');
    }, 3000);
}

// Copy all book titles
function copyAllBookTitles() {
    const titles = filteredBooks.map(book => book.title).join('\n');
    copyToClipboard(titles);
}

// Event Listeners
searchInput.addEventListener('input', filterBooks);
clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterBooks();
});

languageFilter.addEventListener('change', filterBooks);
categoryFilter.addEventListener('change', filterBooks);
ratingFilter.addEventListener('change', filterBooks);
copyAllBtn.addEventListener('click', copyAllBookTitles);

// Initialize display
updateStats();

displayBooks(filteredBooks);

