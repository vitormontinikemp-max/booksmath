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


{id: 361, title: "Lógica Matemática para Ciência da Computação", author: "M. Ben-Ari", language: "pt", category: "foundations", description: "Introdução à lógica matemática com aplicações em ciência da computação, incluindo verificação formal e semântica.", rating: 4.5, pages: 320, year: 2011},
{id: 362, title: "Teoria dos Conjuntos com Aplicações", author: "Carlos A. S. L. de Almeida", language: "pt", category: "foundations", description: "Teoria dos conjuntos com ênfase em aplicações em matemática e ciência da computação.", rating: 4.4, pages: 280, year: 2016},
{id: 363, title: "Fundamentos de Matemática para Ciências", author: "João Bosco P. de Medeiros", language: "pt", category: "foundations", description: "Base matemática para estudantes de ciências exatas e engenharias.", rating: 4.3, pages: 350, year: 2018},
{id: 364, title: "Introdução aos Sistemas Formais", author: "Luiz Carlos Guimarães", language: "pt", category: "foundations", description: "Sistemas formais e sua relação com a computabilidade.", rating: 4.2, pages: 240, year: 2014},
{id: 365, title: "Teoria da Demonstração", author: "S. C. Coutinho", language: "pt", category: "foundations", description: "Fundamentos da teoria da demonstração matemática.", rating: 4.4, pages: 260, year: 2009},
{id: 366, title: "Conjuntos e Números", author: "Edgard de Alencar Filho", language: "pt", category: "foundations", description: "Introdução à teoria dos conjuntos e construção dos sistemas numéricos.", rating: 4.5, pages: 300, year: 2005},
{id: 367, title: "Lógica e Teoria dos Conjuntos para Concursos", author: "Sergio e Tambasco", language: "pt", category: "foundations", description: "Preparação para concursos públicos com foco em lógica e conjuntos.", rating: 4.6, pages: 280, year: 2019},
{id: 368, title: "Fundamentos da Matemática Superior", author: "Paulo Boulos", language: "pt", category: "foundations", description: "Base teórica para disciplinas de matemática superior.", rating: 4.4, pages: 320, year: 2008},
{id: 369, title: "Introdução à Matemática Discreta", author: "Kenneth H. Rosen", language: "pt", category: "foundations", description: "Tradução do clássico de matemática discreta.", rating: 4.7, pages: 1024, year: 2009},
{id: 370, title: "Teoria dos Conjuntos Axiomática", author: "Paulo A. F. Silva", language: "pt", category: "foundations", description: "Abordagem axiomática da teoria dos conjuntos ZFC.", rating: 4.3, pages: 340, year: 2012},
{id: 371, title: "Fundamentos de Análise Matemática", author: "Luis A. C. P. da Silva", language: "pt", category: "foundations", description: "Fundamentos para cursos de análise real.", rating: 4.5, pages: 310, year: 2017},
{id: 372, title: "Lógica para Ciências Exatas", author: "Carlos A. S. L. de Almeida", language: "pt", category: "foundations", description: "Lógica aplicada a problemas de ciências exatas.", rating: 4.4, pages: 270, year: 2015},
{id: 373, title: "Conjuntos, Relações e Funções", author: "H. P. Bueno", language: "pt", category: "foundations", description: "Tratamento rigoroso de conceitos fundamentais.", rating: 4.5, pages: 290, year: 2014},
{id: 374, title: "Fundamentos da Matemática Elementar - Volume 0", author: "Gelson Iezzi", language: "pt", category: "foundations", description: "Conceitos preliminares para a coleção Fundamentos.", rating: 4.6, pages: 240, year: 2010},
{id: 375, title: "Introdução à Lógica Formal", author: "Edgar Almeida Rodrigues", language: "pt", category: "foundations", description: "Primeiro curso em lógica formal.", rating: 4.3, pages: 260, year: 2006},
{id: 376, title: "Teoria dos Conjuntos Intuitiva", author: "Fernando Q. Gouvêa", language: "pt", category: "foundations", description: "Abordagem intuitiva da teoria dos conjuntos.", rating: 4.4, pages: 220, year: 1998},
{id: 377, title: "Fundamentos de Matemática para Economia", author: "Luiz Paulo Fávero", language: "pt", category: "foundations", description: "Base matemática para cursos de economia.", rating: 4.5, pages: 380, year: 2016},
{id: 378, title: "Lógica Matemática Aplicada", author: "Manoel P. R. de Oliveira", language: "pt", category: "foundations", description: "Aplicações da lógica matemática em diversas áreas.", rating: 4.4, pages: 310, year: 2013},
{id: 379, title: "Conjuntos e Lógica: Exercícios Resolvidos", author: "Augusto C. Morgado", language: "pt", category: "foundations", description: "Coleção de exercícios resolvidos sobre conjuntos e lógica.", rating: 4.6, pages: 280, year: 1996},
{id: 380, title: "Fundamentos para Cálculo", author: "Luiz Roberto Dante", language: "pt", category: "foundations", description: "Preparação para cursos de cálculo.", rating: 4.5, pages: 350, year: 2012}



{id: 381, title: "Álgebra Linear com Python", author: "J. D. Vieira Sobrinho", language: "pt", category: "algebra", description: "Implementações de conceitos de álgebra linear em Python.", rating: 4.7, pages: 340, year: 2021},
{id: 382, title: "Teoria de Galois", author: "Eduardo Tengan", language: "pt", category: "algebra", description: "Introdução à teoria de Galois e suas aplicações.", rating: 4.6, pages: 320, year: 2018},
{id: 383, title: "Grupos e Simetrias", author: "Arnaldo Garcia", language: "pt", category: "algebra", description: "Teoria de grupos com ênfase em simetrias e aplicações.", rating: 4.5, pages: 280, year: 2015},
{id: 384, title: "Anéis Comutativos", author: "Aron Simis", language: "pt", category: "algebra", description: "Introdução à teoria de anéis comutativos.", rating: 4.4, pages: 310, year: 2010},
{id: 385, title: "Álgebra Multilinear", author: "M. P. do Carmo", language: "pt", category: "algebra", description: "Álgebra multilinear e suas aplicações em geometria.", rating: 4.6, pages: 260, year: 2008},
{id: 386, title: "Teoria de Representações de Grupos Finitos", author: "A. Z. L. Figueiredo", language: "pt", category: "algebra", description: "Representações de grupos finitos e caracteres.", rating: 4.5, pages: 330, year: 2007},
{id: 387, title: "Álgebra para Criptografia", author: "S. C. Coutinho", language: "pt", category: "algebra", description: "Conceitos algébricos aplicados à criptografia.", rating: 4.7, pages: 290, year: 2016},
{id: 388, title: "Corpos e Teoria de Galois", author: "Abramo Hefez", language: "pt", category: "algebra", description: "Teoria de corpos e extensões de Galois.", rating: 4.6, pages: 350, year: 2009},
{id: 389, title: "Módulos e Álgebra Homológica", author: "Y. E. P. de A. Costa", language: "pt", category: "algebra", description: "Introdução à teoria de módulos e álgebra homológica.", rating: 4.4, pages: 380, year: 2013},
{id: 390, title: "Álgebra Não-Comutativa", author: "Carlos A. S. L. de Almeida", language: "pt", category: "algebra", description: "Introdução à álgebra não-comutativa.", rating: 4.3, pages: 310, year: 2011},
{id: 391, title: "Teoria de Anéis Não-Comutativos", author: "Luiz Francisco da S. Ramos", language: "pt", category: "algebra", description: "Anéis não-comutativos e suas aplicações.", rating: 4.4, pages: 300, year: 2014},
{id: 392, title: "Álgebra Comutativa Computacional", author: "Aron Simis", language: "pt", category: "algebra", description: "Métodos computacionais em álgebra comutativa.", rating: 4.5, pages: 320, year: 2019},
{id: 393, title: "Teoria de Grupos Topológicos", author: "Elon Lages Lima", language: "pt", category: "algebra", description: "Grupos topológicos e suas propriedades.", rating: 4.6, pages: 280, year: 2003},
{id: 394, title: "Álgebra Linear Numérica", author: "F. F. Campos", language: "pt", category: "algebra", description: "Métodos numéricos em álgebra linear.", rating: 4.5, pages: 340, year: 2017},
{id: 395, title: "Representações de Álgebras de Lie", author: "L. A. B. San Martin", language: "pt", category: "algebra", description: "Introdução às álgebras de Lie e suas representações.", rating: 4.4, pages: 310, year: 2005},
{id: 396, title: "Álgebra Abstrata: Exercícios Resolvidos", author: "Manoel P. R. de Oliveira", language: "pt", category: "algebra", description: "Coleção de exercícios resolvidos de álgebra abstrata.", rating: 4.6, pages: 360, year: 2016},
{id: 397, title: "Teoria de Corpos Finitos", author: "S. C. Coutinho", language: "pt", category: "algebra", description: "Corpos finitos e suas aplicações em teoria de códigos.", rating: 4.7, pages: 270, year: 2014},
{id: 398, title: "Álgebra Homológica Aplicada", author: "Y. E. P. de A. Costa", language: "pt", category: "algebra", description: "Aplicações da álgebra homológica em topologia e geometria.", rating: 4.5, pages: 330, year: 2012},
{id: 399, title: "Grupos de Lie", author: "L. A. B. San Martin", language: "pt", category: "algebra", description: "Introdução aos grupos de Lie e suas álgebras.", rating: 4.6, pages: 350, year: 2006},
{id: 400, title: "Álgebra para Físicos", author: "José Maria F. Bassalo", language: "pt", category: "algebra", description: "Conceitos algébricos com aplicações em física.", rating: 4.5, pages: 320, year: 2004},
{id: 401, title: "Teoria de Categorias", author: "Carlos A. S. L. de Almeida", language: "pt", category: "algebra", description: "Introdução à teoria de categorias.", rating: 4.4, pages: 290, year: 2018},
{id: 402, title: "Álgebra Linear com Aplicações em Machine Learning", author: "J. D. Vieira Sobrinho", language: "pt", category: "algebra", description: "Álgebra linear aplicada ao aprendizado de máquina.", rating: 4.7, pages: 380, year: 2020},
{id: 403, title: "Anéis de Polinômios", author: "Abramo Hefez", language: "pt", category: "algebra", description: "Teoria de anéis de polinômios e suas aplicações.", rating: 4.5, pages: 310, year: 2011},
{id: 404, title: "Teoria de Grupos para Física", author: "José Maria F. Bassalo", language: "pt", category: "algebra", description: "Grupos e simetrias em física teórica.", rating: 4.6, pages: 340, year: 2008},
{id: 405, title: "Álgebra Comutativa e Geometria Algébrica", author: "Aron Simis", language: "pt", category: "algebra", description: "Conexões entre álgebra comutativa e geometria algébrica.", rating: 4.5, pages: 360, year: 2015},
{id: 406, title: "Módulos Livres e Projetivos", author: "Y. E. P. de A. Costa", language: "pt", category: "algebra", description: "Teoria de módulos livres e projetivos.", rating: 4.4, pages: 280, year: 2010},
{id: 407, title: "Álgebra Linear com Aplicações em Gráficos", author: "Cláudia L. de Oliveira", language: "pt", category: "algebra", description: "Aplicações de álgebra linear em teoria dos grafos.", rating: 4.6, pages: 320, year: 2019},
{id: 408, title: "Teoria de Representações de Álgebras", author: "A. Z. L. Figueiredo", language: "pt", category: "algebra", description: "Representações de álgebras associativas.", rating: 4.5, pages: 340, year: 2009},
{id: 409, title: "Álgebra para Ciência da Computação", author: "Judith L. Gersting", language: "pt", category: "algebra", description: "Conceitos algébricos para ciência da computação.", rating: 4.7, pages: 410, year: 2012},
{id: 410, title: "Teoria de Grupos Infinitos", author: "Carlos A. S. L. de Almeida", language: "pt", category: "algebra", description: "Propriedades de grupos infinitos.", rating: 4.4, pages: 290, year: 2017}



{id: 411, title: "Cálculo de Funções de Várias Variáveis", author: "Hamilton L. Guidorizzi", language: "pt", category: "calculus", description: "Tratamento completo de cálculo multivariável.", rating: 4.8, pages: 520, year: 2003},
{id: 412, title: "Análise Complexa com Aplicações", author: "Djairo G. de Figueiredo", language: "pt", category: "calculus", description: "Aplicações da análise complexa em problemas reais.", rating: 4.7, pages: 380, year: 2009},
{id: 413, title: "Equações Diferenciais Parciais: Métodos de Separação", author: "Djairo G. de Figueiredo", language: "pt", category: "calculus", description: "Métodos de separação de variáveis para EDPs.", rating: 4.6, pages: 340, year: 2007},
{id: 414, title: "Análise de Fourier e Wavelets", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "calculus", description: "Análise de Fourier e teoria de wavelets.", rating: 4.7, pages: 420, year: 2018},
{id: 415, title: "Cálculo Vetorial e Geometria Diferencial", author: "M. P. do Carmo", language: "pt", category: "calculus", description: "Cálculo vetorial aplicado à geometria diferencial.", rating: 4.8, pages: 360, year: 2005},
{id: 416, title: "Análise Real Avançada", author: "Elon Lages Lima", language: "pt", category: "calculus", description: "Tópicos avançados de análise real.", rating: 4.7, pages: 400, year: 2004},
{id: 417, title: "Equações Diferenciais Ordinárias Não-Lineares", author: "Jacob Palis", language: "pt", category: "calculus", description: "Teoria qualitativa de EDOs não-lineares.", rating: 4.6, pages: 380, year: 1985},
{id: 418, title: "Análise Funcional em Espaços de Dimensão Finita", author: "Elon Lages Lima", language: "pt", category: "calculus", description: "Análise funcional em contextos de dimensão finita.", rating: 4.5, pages: 320, year: 2001},
{id: 419, title: "Cálculo com Aplicações à Economia", author: "Luiz Paulo Fávero", language: "pt", category: "calculus", description: "Cálculo aplicado a problemas econômicos.", rating: 4.6, pages: 450, year: 2017},
{id: 420, title: "Análise Harmônica", author: "Djairo G. de Figueiredo", language: "pt", category: "calculus", description: "Introdução à análise harmônica.", rating: 4.7, pages: 360, year: 1999},
{id: 421, title: "Equações Diferenciais com Atraso", author: "Luis A. C. P. da Silva", language: "pt", category: "calculus", description: "Teoria de equações diferenciais com retardo.", rating: 4.5, pages: 310, year: 2016},
{id: 422, title: "Cálculo Fracionário", author: "J. D. Vieira Sobrinho", language: "pt", category: "calculus", description: "Introdução ao cálculo fracionário.", rating: 4.4, pages: 280, year: 2019},
{id: 423, title: "Análise no R^n", author: "Elon Lages Lima", language: "pt", category: "calculus", description: "Análise multivariada no espaço euclidiano.", rating: 4.8, pages: 380, year: 2002},
{id: 424, title: "Equações Diferenciais Estocásticas", author: "Paulo R. C. Ruffino", language: "pt", category: "calculus", description: "Introdução às equações diferenciais estocásticas.", rating: 4.6, pages: 330, year: 2011},
{id: 425, title: "Análise Convexa", author: "H. P. Bueno", language: "pt", category: "calculus", description: "Análise de funções convexas e conjuntos convexos.", rating: 4.5, pages: 300, year: 2014},
{id: 426, title: "Cálculo das Variações", author: "M. P. do Carmo", language: "pt", category: "calculus", description: "Introdução ao cálculo das variações.", rating: 4.6, pages: 290, year: 2007},
{id: 427, title: "Análise Não-Standard", author: "Carlos A. S. L. de Almeida", language: "pt", category: "calculus", description: "Introdução à análise não-standard.", rating: 4.3, pages: 270, year: 2015},
{id: 428, title: "Equações Integrais", author: "Djairo G. de Figueiredo", language: "pt", category: "calculus", description: "Teoria de equações integrais.", rating: 4.6, pages: 320, year: 1998},
{id: 429, title: "Análise Assintótica", author: "H. P. Bueno", language: "pt", category: "calculus", description: "Métodos assintóticos em análise.", rating: 4.5, pages: 310, year: 2013},
{id: 430, title: "Cálculo com Aplicações à Biologia", author: "Luis A. C. P. da Silva", language: "pt", category: "calculus", description: "Cálculo aplicado a modelos biológicos.", rating: 4.6, pages: 340, year: 2018},
{id: 431, title: "Análise de Sinais e Sistemas", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "calculus", description: "Análise matemática de sinais e sistemas.", rating: 4.7, pages: 380, year: 2015},
{id: 432, title: "Equações Diferenciais Parciais Não-Lineares", author: "Djairo G. de Figueiredo", language: "pt", category: "calculus", description: "Teoria básica de EDPs não-lineares.", rating: 4.6, pages: 360, year: 2006},
{id: 433, title: "Análise de Estabilidade", author: "Jacob Palis", language: "pt", category: "calculus", description: "Análise de estabilidade de sistemas dinâmicos.", rating: 4.7, pages: 350, year: 1992},
{id: 434, title: "Cálculo Tensorial", author: "M. P. do Carmo", language: "pt", category: "calculus", description: "Introdução ao cálculo tensorial.", rating: 4.6, pages: 280, year: 2004},
{id: 435, title: "Análise Funcional Não-Linear", author: "Djairo G. de Figueiredo", language: "pt", category: "calculus", description: "Introdução à análise funcional não-linear.", rating: 4.7, pages: 400, year: 2003},
{id: 436, title: "Equações Diferenciais com Aplicações à Física", author: "José Maria F. Bassalo", language: "pt", category: "calculus", description: "EDOs aplicadas a problemas físicos.", rating: 4.6, pages: 370, year: 2009},
{id: 437, title: "Análise P-adica", author: "Abramo Hefez", language: "pt", category: "calculus", description: "Introdução à análise p-ádica.", rating: 4.5, pages: 290, year: 2012},
{id: 438, title: "Cálculo de Variações e Controle Ótimo", author: "H. P. Bueno", language: "pt", category: "calculus", description: "Cálculo das variações e teoria de controle.", rating: 4.6, pages: 330, year: 2017},
{id: 439, title: "Análise Complexa Geométrica", author: "M. P. do Carmo", language: "pt", category: "calculus", description: "Abordagem geométrica da análise complexa.", rating: 4.7, pages: 310, year: 2008},
{id: 440, title: "Equações Diferenciais Parciais Hiperbólicas", author: "Djairo G. de Figueiredo", language: "pt", category: "calculus", description: "Teoria de EDPs hiperbólicas.", rating: 4.6, pages: 350, year: 2005}



{id: 441, title: "Geometria Diferencial de Superfícies Mínimas", author: "M. P. do Carmo", language: "pt", category: "geometry", description: "Teoria de superfícies mínimas e suas propriedades.", rating: 4.7, pages: 320, year: 2010},
{id: 442, title: "Geometria Projetiva Computacional", author: "Jonas Gomes", language: "pt", category: "geometry", description: "Geometria projetiva aplicada à computação gráfica.", rating: 4.6, pages: 340, year: 2011},
{id: 443, title: "Geometria Algébrica Computacional", author: "Aron Simis", language: "pt", category: "geometry", description: "Métodos computacionais em geometria algébrica.", rating: 4.5, pages: 360, year: 2014},
{id: 444, title: "Geometria Não-Euclidiana Aplicada", author: "João Lucas M. Barbosa", language: "pt", category: "geometry", description: "Aplicações das geometrias não-euclidianas.", rating: 4.6, pages: 280, year: 2001},
{id: 445, title: "Geometria Riemanniana para Físicos", author: "José Maria F. Bassalo", language: "pt", category: "geometry", description: "Geometria Riemanniana aplicada à física teórica.", rating: 4.7, pages: 350, year: 2007},
{id: 446, title: "Geometria Algébrica sobre Corpos Finitos", author: "Aron Simis", language: "pt", category: "geometry", description: "Geometria algébrica sobre corpos finitos.", rating: 4.5, pages: 310, year: 2012},
{id: 447, title: "Geometria Diferencial Global", author: "M. P. do Carmo", language: "pt", category: "geometry", description: "Geometria diferencial em variedades.", rating: 4.8, pages: 380, year: 2009},
{id: 448, title: "Geometria de Incidência", author: "Eduardo Wagner", language: "pt", category: "geometry", description: "Geometria baseada em relações de incidência.", rating: 4.6, pages: 260, year: 2016},
{id: 449, title: "Geometria Simplética", author: "L. A. B. San Martin", language: "pt", category: "geometry", description: "Introdução à geometria simplética.", rating: 4.5, pages: 300, year: 2005},
{id: 450, title: "Geometria Algébrica Complexa", author: "Aron Simis", language: "pt", category: "geometry", description: "Variedades algébricas complexas.", rating: 4.6, pages: 340, year: 2013},
{id: 451, title: "Geometria Fracionária", author: "J. D. Vieira Sobrinho", language: "pt", category: "geometry", description: "Geometria com dimensões fracionárias.", rating: 4.4, pages: 270, year: 2020},
{id: 452, title: "Geometria Computacional", author: "Jonas Gomes", language: "pt", category: "geometry", description: "Algoritmos de geometria computacional.", rating: 4.7, pages: 420, year: 2009},
{id: 453, title: "Geometria de Grupos de Lie", author: "L. A. B. San Martin", language: "pt", category: "geometry", description: "Geometria associada a grupos de Lie.", rating: 4.6, pages: 330, year: 2008},
{id: 454, title: "Geometria Algébrica Real", author: "Aron Simis", language: "pt", category: "geometry", description: "Variedades algébricas reais.", rating: 4.5, pages: 290, year: 2011},
{id: 455, title: "Geometria Diferencial de Variedades Complexas", author: "M. P. do Carmo", language: "pt", category: "geometry", description: "Variedades complexas e suas propriedades.", rating: 4.7, pages: 310, year: 2006},
{id: 456, title: "Geometria de Controle", author: "H. P. Bueno", language: "pt", category: "geometry", description: "Geometria aplicada à teoria de controle.", rating: 4.6, pages: 280, year: 2015},
{id: 457, title: "Geometria Algébrica Aritmética", author: "Abramo Hefez", language: "pt", category: "geometry", description: "Conexões entre geometria algébrica e teoria dos números.", rating: 4.5, pages: 320, year: 2010},
{id: 458, title: "Geometria Informacional", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "geometry", description: "Geometria aplicada à teoria da informação.", rating: 4.6, pages: 300, year: 2019},
{id: 459, title: "Geometria de Subvariedades", author: "M. P. do Carmo", language: "pt", category: "geometry", description: "Teoria de subvariedades em espaços Riemannianos.", rating: 4.7, pages: 340, year: 2004},
{id: 460, title: "Geometria Algébrica para Criptografia", author: "Aron Simis", language: "pt", category: "geometry", description: "Aplicações da geometria algébrica em criptografia.", rating: 4.5, pages: 310, year: 2018}



{id: 461, title: "Teoria dos Grafos Extremais", author: "Cláudia L. de Oliveira", language: "pt", category: "combinatorics", description: "Teoria extremal de grafos e teoremas de Turán.", rating: 4.6, pages: 320, year: 2014},
{id: 462, title: "Combinatória Aditiva", author: "H. P. Bueno", language: "pt", category: "combinatorics", description: "Combinatória aditiva e teoria de Ramsey.", rating: 4.5, pages: 290, year: 2016},
{id: 463, title: "Teoria dos Matróides", author: "Carlos A. S. L. de Almeida", language: "pt", category: "combinatorics", description: "Introdução à teoria dos matróides.", rating: 4.4, pages: 310, year: 2012},
{id: 464, title: "Combinatória Probabilística", author: "Augusto C. Morgado", language: "pt", category: "combinatorics", description: "Métodos probabilísticos em combinatória.", rating: 4.7, pages: 340, year: 1998},
{id: 465, title: "Teoria dos Códigos Corretores", author: "S. C. Coutinho", language: "pt", category: "combinatorics", description: "Códigos corretores de erros e suas propriedades.", rating: 4.6, pages: 280, year: 2015},
{id: 466, title: "Combinatória Algébrica", author: "Aron Simis", language: "pt", category: "combinatorics", description: "Métodos algébricos em combinatória.", rating: 4.5, pages: 330, year: 2013},
{id: 467, title: "Teoria dos Designs Combinatórios", author: "Cláudia L. de Oliveira", language: "pt", category: "combinatorics", description: "Designs combinatórios e suas aplicações.", rating: 4.6, pages: 300, year: 2017},
{id: 468, title: "Combinatória Enumerativa com Funções Geradoras", author: "H. P. Bueno", language: "pt", category: "combinatorics", description: "Uso de funções geradoras em combinatória enumerativa.", rating: 4.7, pages: 320, year: 2019},
{id: 469, title: "Teoria dos Hipergrafos", author: "Carlos A. S. L. de Almeida", language: "pt", category: "combinatorics", description: "Hipergrafos e suas propriedades.", rating: 4.4, pages: 290, year: 2011},
{id: 470, title: "Combinatória para Ciência da Computação", author: "Judith L. Gersting", language: "pt", category: "combinatorics", description: "Conceitos combinatórios para computação.", rating: 4.7, pages: 410, year: 2014},
{id: 471, title: "Teoria dos Jogos Combinatórios", author: "Carlos A. S. L. de Almeida", language: "pt", category: "combinatorics", description: "Jogos combinatórios e teoria de Sprague-Grundy.", rating: 4.5, pages: 280, year: 2018},
{id: 472, title: "Combinatória Extrema", author: "H. P. Bueno", language: "pt", category: "combinatorics", description: "Problemas extremos em combinatória.", rating: 4.6, pages: 310, year: 2015}

{id: 473, title: "Teoria dos Grafos Aleatórios", author: "Paulo R. C. Ruffino", language: "pt", category: "combinatorics", description: "Grafos aleatórios e suas propriedades.", rating: 4.5, pages: 270, year: 2012},
{id: 474, title: "Combinatória Aritmética", author: "Abramo Hefez", language: "pt", category: "combinatorics", description: "Conexões entre combinatória e teoria dos números.", rating: 4.6, pages: 300, year: 2010},
{id: 475, title: "Teoria dos Poliedros Combinatórios", author: "Aron Simis", language: "pt", category: "combinatorics", description: "Poliedros e combinatória poliedral.", rating: 4.5, pages: 330, year: 2016},
{id: 476, title: "Combinatória Topológica", author: "M. P. do Carmo", language: "pt", category: "combinatorics", description: "Métodos topológicos em combinatória.", rating: 4.6, pages: 290, year: 2009},
{id: 477, title: "Teoria dos Códigos Lineares", author: "S. C. Coutinho", language: "pt", category: "combinatorics", description: "Códigos lineares e suas propriedades algébricas.", rating: 4.7, pages: 310, year: 2017},
{id: 478, title: "Combinatória de Partições", author: "H. P. Bueno", language: "pt", category: "combinatorics", description: "Teoria das partições de inteiros.", rating: 4.6, pages: 280, year: 2014},
{id: 479, title: "Teoria dos Grafos Perfeitos", author: "Cláudia L. de Oliveira", language: "pt", category: "combinatorics", description: "Grafos perfeitos e teoria dos grafos de Berge.", rating: 4.5, pages: 320, year: 2013},
{id: 480, title: "Combinatória com Python", author: "J. D. Vieira Sobrinho", language: "pt", category: "combinatorics", description: "Implementações de algoritmos combinatórios em Python.", rating: 4.7, pages: 340, year: 2020}



{id: 481, title: "Teoria Analítica dos Números Avançada", author: "S. C. Coutinho", language: "pt", category: "number-theory", description: "Tópicos avançados em teoria analítica dos números.", rating: 4.7, pages: 350, year: 2016},
{id: 482, title: "Números Transcendentes", author: "Abramo Hefez", language: "pt", category: "number-theory", description: "Teoria dos números transcendentes.", rating: 4.6, pages: 290, year: 2011},
{id: 483, title: "Teoria dos Números p-ádicos", author: "Abramo Hefez", language: "pt", category: "number-theory", description: "Números p-ádicos e suas propriedades.", rating: 4.5, pages: 310, year: 2013},
{id: 484, title: "Curvas Elípticas e Aplicações", author: "S. C. Coutinho", language: "pt", category: "number-theory", description: "Curvas elípticas e suas aplicações em teoria dos números.", rating: 4.7, pages: 330, year: 2018},
{id: 485, title: "Teoria dos Números Algébricos Computacional", author: "J. D. Vieira Sobrinho", language: "pt", category: "number-theory", description: "Métodos computacionais em teoria algébrica dos números.", rating: 4.6, pages: 300, year: 2019},
{id: 486, title: "Funções Zeta e L", author: "Abramo Hefez", language: "pt", category: "number-theory", description: "Funções zeta e L em teoria dos números.", rating: 4.5, pages: 280, year: 2014},
{id: 487, title: "Teoria dos Números para Criptografia", author: "S. C. Coutinho", language: "pt", category: "number-theory", description: "Aplicações da teoria dos números em criptografia moderna.", rating: 4.8, pages: 360, year: 2017},
{id: 488, title: "Formas Modulares", author: "Abramo Hefez", language: "pt", category: "number-theory", description: "Introdução à teoria das formas modulares.", rating: 4.6, pages: 320, year: 2012},
{id: 489, title: "Teoria dos Números Aditiva", author: "H. P. Bueno", language: "pt", category: "number-theory", description: "Problemas aditivos em teoria dos números.", rating: 4.5, pages: 290, year: 2015},
{id: 490, title: "Números de Fibonacci e Lucas", author: "Augusto C. Morgado", language: "pt", category: "number-theory", description: "Propriedades dos números de Fibonacci e Lucas.", rating: 4.7, pages: 260, year: 1999}



{id: 491, title: "Processos de Poisson", author: "Paulo R. C. Ruffino", language: "pt", category: "probability", description: "Teoria dos processos de Poisson.", rating: 4.6, pages: 280, year: 2010},
{id: 492, title: "Estatística Bayesiana", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "probability", description: "Estatística bayesiana e inferência.", rating: 4.7, pages: 350, year: 2015},
{id: 493, title: "Cadeias de Markov em Tempo Contínuo", author: "Paulo R. C. Ruffino", language: "pt", category: "probability", description: "Cadeias de Markov em tempo contínuo e processos de nascimento e morte.", rating: 4.6, pages: 310, year: 2013},
{id: 494, title: "Análise de Sobrevivência", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "probability", description: "Métodos estatísticos para análise de sobrevivência.", rating: 4.7, pages: 320, year: 2018},
{id: 495, title: "Processos de Difusão", author: "Paulo R. C. Ruffino", language: "pt", category: "probability", description: "Processos de difusão e equações de Fokker-Planck.", rating: 4.6, pages: 290, year: 2011},
{id: 496, title: "Estatística Espacial", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "probability", description: "Métodos estatísticos para dados espaciais.", rating: 4.7, pages: 340, year: 2019},
{id: 497, title: "Martingales em Tempo Contínuo", author: "Paulo R. C. Ruffino", language: "pt", category: "probability", description: "Teoria de martingales em tempo contínuo.", rating: 4.5, pages: 300, year: 2014},
{id: 498, title: "Modelos Lineares Generalizados", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "probability", description: "Modelos lineares generalizados e extensões.", rating: 4.6, pages: 330, year: 2016},
{id: 499, title: "Processos de Levy", author: "Paulo R. C. Ruffino", language: "pt", category: "probability", description: "Introdução aos processos de Lévy.", rating: 4.5, pages: 280, year: 2017},
{id: 500, title: "Estatística Multivariada Avançada", author: "Paulo Justiniano Ribeiro Jr.", language: "pt", category: "probability", description: "Técnicas avançadas de estatística multivariada.", rating: 4.7, pages: 380, year: 2020}



{id: 501, title: "Topologia Diferencial", author: "M. P. do Carmo", language: "pt", category: "advanced", description: "Introdução à topologia diferencial.", rating: 4.7, pages: 340, year: 2011},
{id: 502, title: "Teoria Ergódica Aplicada", author: "Ricardo Mañé", language: "pt", category: "advanced", description: "Aplicações da teoria ergódica.", rating: 4.6, pages: 320, year: 1997},
{id: 503, title: "Análise Funcional Não-Linear Avançada", author: "Djairo G. de Figueiredo", language: "pt", category: "advanced", description: "Tópicos avançados em análise funcional não-linear.", rating: 4.7, pages: 400, year: 2004},
{id: 504, title: "Sistemas Dinâmicos Hiperbólicos", author: "Jacob Palis", language: "pt", category: "advanced", description: "Sistemas dinâmicos hiperbólicos e teoria do caos.", rating: 4.8, pages: 360, year: 1989},
{id: 505, title: "Teoria de Hodge", author: "M. P. do Carmo", language: "pt", category: "advanced", description: "Introdução à teoria de Hodge.", rating: 4.6, pages: 300, year: 2008},
{id: 506, title: "Teoria de Medida e Integração Avançada", author: "Carlos A. S. L. de Almeida", language: "pt", category: "advanced", description: "Tópicos avançados em teoria da medida.", rating: 4.5, pages: 350, year: 2014},
{id: 507, title: "Geometria Algébrica Aritmética Avançada", author: "Abramo Hefez", language: "pt", category: "advanced", description: "Tópicos avançados em geometria algébrica aritmética.", rating: 4.6, pages: 380, year: 2017},
{id: 508, title: "Teoria de Singularidades", author: "Aron Simis", language: "pt", category: "advanced", description: "Teoria das singularidades de variedades algébricas.", rating: 4.5, pages: 320, year: 2015},
{id: 509, title: "Sistemas Integráveis", author: "L. A. B. San Martin", language: "pt", category: "advanced", description: "Teoria dos sistemas integráveis.", rating: 4.6, pages: 310, year: 2006},
{id: 510, title: "Teoria de Deformações", author: "Aron Simis", language: "pt", category: "advanced", description: "Teoria de deformações em geometria algébrica.", rating: 4.5, pages: 290, year: 2013}


{id: 511, title: "Model Theory", author: "C. C. Chang & H. J. Keisler", language: "en", category: "foundations", description: "Classic introduction to model theory and its applications.", rating: 4.6, pages: 650, year: 2012},
{id: 512, title: "Recursion Theory", author: "Joseph R. Shoenfield", language: "en", category: "foundations", description: "Comprehensive treatment of recursion theory and computability.", rating: 4.5, pages: 280, year: 1993},
{id: 513, title: "Proof Theory and Logical Complexity", author: "Jean-Yves Girard", language: "en", category: "foundations", description: "Advanced proof theory with focus on logical complexity.", rating: 4.4, pages: 560, year: 1987},
{id: 514, title: "Forcing in Set Theory", author: "J. Thomas", language: "en", category: "foundations", description: "Introduction to forcing and independence proofs in set theory.", rating: 4.5, pages: 320, year: 2005},
{id: 515, title: "Constructive Mathematics", author: "Douglas Bridges", language: "en", category: "foundations", description: "Introduction to constructive mathematics and its foundations.", rating: 4.4, pages: 290, year: 1997},
{id: 516, title: "Large Cardinals in Set Theory", author: "Akihiro Kanamori", language: "en", category: "foundations", description: "Comprehensive treatment of large cardinal axioms.", rating: 4.7, pages: 536, year: 2009},
{id: 517, title: "Reverse Mathematics", author: "Stephen G. Simpson", language: "en", category: "foundations", description: "Study of the logical strength of mathematical theorems.", rating: 4.6, pages: 444, year: 2009},
{id: 518, title: "Computability Theory", author: "S. Barry Cooper", language: "en", category: "foundations", description: "Modern introduction to computability theory.", rating: 4.5, pages: 424, year: 2004},
{id: 519, title: "Descriptive Set Theory", author: "Yiannis N. Moschovakis", language: "en", category: "foundations", description: "Classic text on descriptive set theory.", rating: 4.7, pages: 502, year: 2009},
{id: 520, title: "Philosophy of Mathematics", author: "Stewart Shapiro", language: "en", category: "foundations", description: "Philosophical foundations of mathematics.", rating: 4.4, pages: 328, year: 2000},
{id: 521, title: "Mathematical Logic for Computer Science", author: "Mordechai Ben-Ari", language: "en", category: "foundations", description: "Logic with applications to computer science.", rating: 4.5, pages: 346, year: 2012},
{id: 522, title: "Set Theory: An Introduction to Independence Proofs", author: "Kenneth Kunen", language: "en", category: "foundations", description: "Introduction to independence proofs via forcing.", rating: 4.6, pages: 332, year: 2014},
{id: 523, title: "Proofs, Computability, Undecidability", author: "Robert I. Soare", language: "en", category: "foundations", description: "Connections between proofs, computability, and undecidability.", rating: 4.5, pages: 280, year: 1987},
{id: 524, title: "Logic for Mathematics and Computer Science", author: "Stanley N. Burris", language: "en", category: "foundations", description: "Logic tailored for mathematics and computer science students.", rating: 4.4, pages: 425, year: 1998},
{id: 525, title: "Computability and Unsolvability", author: "Martin Davis", language: "en", category: "foundations", description: "Classic text on computability and unsolvable problems.", rating: 4.6, pages: 248, year: 1985},
{id: 526, title: "Mathematical Logic: A Course with Exercises", author: "René Cori & Daniel Lascar", language: "en", category: "foundations", description: "Comprehensive logic course with extensive exercises.", rating: 4.5, pages: 336, year: 2000},
{id: 527, title: "The Foundations of Mathematics", author: "Kenneth Kunen", language: "en", category: "foundations", description: "Foundations from set theory to advanced topics.", rating: 4.6, pages: 251, year: 2009},
{id: 528, title: "Modal Logic", author: "Patrick Blackburn & Johan van Benthem", language: "en", category: "foundations", description: "Introduction to modal logic and its applications.", rating: 4.5, pages: 576, year: 2006},
{id: 529, title: "Lambda Calculus and Combinators", author: "J. Roger Hindley", language: "en", category: "foundations", description: "Introduction to lambda calculus and combinatory logic.", rating: 4.4, pages: 348, year: 2008},
{id: 530, title: "Turing's Legacy: Developments from Turing's Ideas", author: "Rod Downey", language: "en", category: "foundations", description: "Developments stemming from Turing's foundational work.", rating: 4.5, pages: 458, year: 2014}



{id: 531, title: "Representation Theory of Finite Groups", author: "Benjamin Steinberg", language: "en", category: "algebra", description: "Modern treatment of finite group representations.", rating: 4.6, pages: 272, year: 2012},
{id: 532, title: "Algebraic Groups and Lie Groups", author: "James E. Humphreys", language: "en", category: "algebra", description: "Connection between algebraic groups and Lie groups.", rating: 4.7, pages: 374, year: 1975},
{id: 533, title: "Commutative Ring Theory", author: "Hideyuki Matsumura", language: "en", category: "algebra", description: "Comprehensive treatment of commutative ring theory.", rating: 4.6, pages: 320, year: 1989},
{id: 534, title: "Field and Galois Theory", author: "Patrick Morandi", language: "en", category: "algebra", description: "Modern approach to field and Galois theory.", rating: 4.5, pages: 281, year: 1996},
{id: 535, title: "Lie Algebras and Representation Theory", author: "J. E. Humphreys", language: "en", category: "algebra", description: "Introduction to Lie algebras and their representations.", rating: 4.7, pages: 160, year: 1972},
{id: 536, title: "Homological Algebra", author: "Charles A. Weibel", language: "en", category: "algebra", description: "Comprehensive introduction to homological algebra.", rating: 4.6, pages: 450, year: 1994},
{id: 537, title: "Noncommutative Algebra", author: "M. F. Atiyah", language: "en", category: "algebra", description: "Introduction to noncommutative algebra.", rating: 4.5, pages: 210, year: 1969},
{id: 538, title: "Algebraic K-Theory", author: "Jonathan Rosenberg", language: "en", category: "algebra", description: "Introduction to algebraic K-theory.", rating: 4.4, pages: 394, year: 1994},
{id: 539, title: "Quadratic Forms and Algebraic Groups", author: "T. Y. Lam", language: "en", category: "algebra", description: "Quadratic forms and their connection to algebraic groups.", rating: 4.6, pages: 410, year: 1973},
{id: 540, title: "Universal Algebra", author: "George Grätzer", language: "en", category: "algebra", description: "Classic text on universal algebra.", rating: 4.5, pages: 368, year: 2008},
{id: 541, title: "Algebraic Geometry and Commutative Algebra", author: "Siegfried Bosch", language: "en", category: "algebra", description: "Connection between algebraic geometry and commutative algebra.", rating: 4.7, pages: 504, year: 2013},
{id: 542, title: "Group Theory in Physics", author: "Wu-Ki Tung", language: "en", category: "algebra", description: "Group theory with applications to physics.", rating: 4.6, pages: 340, year: 1985},
{id: 543, title: "Algebraic Number Theory for Beginners", author: "John Stillwell", language: "en", category: "algebra", description: "Accessible introduction to algebraic number theory.", rating: 4.5, pages: 244, year: 2003},
{id: 544, title: "Finite Group Theory", author: "M. Aschbacher", language: "en", category: "algebra", description: "Advanced treatment of finite group theory.", rating: 4.7, pages: 274, year: 2000},
{id: 545, title: "Algebraic Combinatorics", author: "Richard P. Stanley", language: "en", category: "algebra", description: "Combinatorial methods in algebra.", rating: 4.8, pages: 200, year: 1996},
{id: 546, title: "Module Theory", author: "Carl Faith", language: "en", category: "algebra", description: "Comprehensive treatment of module theory.", rating: 4.5, pages: 560, year: 1973},
{id: 547, title: "Algebraic Curves and Riemann Surfaces", author: "Rick Miranda", language: "en", category: "algebra", description: "Algebraic curves from the viewpoint of Riemann surfaces.", rating: 4.6, pages: 390, year: 1995},
{id: 548, title: "Group Representations and Harmonic Analysis", author: "Audrey Terras", language: "en", category: "algebra", description: "Connections between group representations and harmonic analysis.", rating: 4.5, pages: 432, year: 1999},
{id: 549, title: "Algebraic Topology and Homotopy Theory", author: "Paul G. Goerss", language: "en", category: "algebra", description: "Algebraic methods in topology and homotopy theory.", rating: 4.6, pages: 480, year: 2009},
{id: 550, title: "Computational Algebra", author: "Gregory Bard", language: "en", category: "algebra", description: "Computational methods in algebra.", rating: 4.5, pages: 364, year: 2014},
{id: 551, title: "Algebraic Geometry for Scientists and Engineers", author: "Shreeram S. Abhyankar", language: "en", category: "algebra", description: "Algebraic geometry for applied scientists.", rating: 4.4, pages: 310, year: 1990},
{id: 552, title: "Group Theory and Quantum Mechanics", author: "Michael Tinkham", language: "en", category: "algebra", description: "Applications of group theory in quantum mechanics.", rating: 4.7, pages: 340, year: 2003},
{id: 553, title: "Algebraic Methods in Statistics", author: "R. A. Bailey", language: "en", category: "algebra", description: "Algebraic methods applied to statistical design.", rating: 4.5, pages: 290, year: 2008},
{id: 554, title: "Finite Fields and Applications", author: "Rudolf Lidl", language: "en", category: "algebra", description: "Theory of finite fields and their applications.", rating: 4.6, pages: 416, year: 1997},
{id: 555, title: "Algebraic Graph Theory", author: "Chris Godsil", language: "en", category: "algebra", description: "Algebraic methods in graph theory.", rating: 4.5, pages: 439, year: 2001},
{id: 556, title: "Representation Theory of Symmetric Groups", author: "Bruce E. Sagan", language: "en", category: "algebra", description: "Representations of symmetric groups.", rating: 4.6, pages: 220, year: 2001},
{id: 557, title: "Algebraic Coding Theory", author: "Elwyn R. Berlekamp", language: "en", category: "algebra", description: "Algebraic methods in coding theory.", rating: 4.7, pages: 480, year: 1984},
{id: 558, title: "Algebraic Methods in Functional Analysis", author: "I. Gohberg", language: "en", category: "algebra", description: "Algebraic techniques in functional analysis.", rating: 4.5, pages: 360, year: 1974},
{id: 559, title: "Group Theory and Cryptography", author: "Mikhail M. Kapranov", language: "en", category: "algebra", description: "Applications of group theory in cryptography.", rating: 4.6, pages: 280, year: 2012},
{id: 560, title: "Algebraic Foundations of Geometry", author: "E. Artin", language: "en", category: "algebra", description: "Algebraic foundations of geometric structures.", rating: 4.7, pages: 214, year: 1957}



{id: 561, title: "Complex Analysis in One Variable", author: "Raghavan Narasimhan", language: "en", category: "calculus", description: "Advanced complex analysis in one variable.", rating: 4.7, pages: 380, year: 2001},
{id: 562, title: "Real Analysis: Modern Techniques", author: "G. B. Folland", language: "en", category: "calculus", description: "Modern techniques in real analysis.", rating: 4.8, pages: 416, year: 1999},
{id: 563, title: "Partial Differential Equations: Methods and Applications", author: "Robert C. McOwen", language: "en", category: "calculus", description: "Methods for solving partial differential equations.", rating: 4.6, pages: 448, year: 2003},
{id: 564, title: "Functional Analysis, Sobolev Spaces and PDEs", author: "Haim Brezis", language: "en", category: "calculus", description: "Functional analysis applied to PDEs.", rating: 4.9, pages: 600, year: 2010},
{id: 565, title: "Measure Theory and Integration", author: "Michael E. Taylor", language: "en", category: "calculus", description: "Modern treatment of measure theory.", rating: 4.7, pages: 450, year: 2006},
{id: 566, title: "Harmonic Analysis: Real-Variable Methods", author: "Elias M. Stein", language: "en", category: "calculus", description: "Real-variable methods in harmonic analysis.", rating: 4.8, pages: 695, year: 1993},
{id: 567, title: "Differential Equations and Dynamical Systems", author: "Lawrence Perko", language: "en", category: "calculus", description: "Geometric theory of differential equations.", rating: 4.6, pages: 532, year: 2001},
{id: 568, title: "Complex Geometry", author: "Daniel Huybrechts", language: "en", category: "calculus", description: "Introduction to complex geometry.", rating: 4.7, pages: 320, year: 2005},
{id: 569, title: "Fourier Analysis on Groups", author: "Walter Rudin", language: "en", category: "calculus", description: "Fourier analysis on locally compact abelian groups.", rating: 4.6, pages: 296, year: 1990},
{id: 570, title: "Calculus of Variations and PDEs", author: "Lawrence C. Evans", language: "en", category: "calculus", description: "Calculus of variations applied to PDEs.", rating: 4.8, pages: 310, year: 2010},
{id: 571, title: "Several Complex Variables", author: "Lars Hörmander", language: "en", category: "calculus", description: "Introduction to several complex variables.", rating: 4.7, pages: 254, year: 1990},
{id: 572, title: "Geometric Measure Theory", author: "Herbert Federer", language: "en", category: "calculus", description: "Classic text on geometric measure theory.", rating: 4.8, pages: 676, year: 1996},
{id: 573, title: "Nonlinear Functional Analysis", author: "Klaus Deimling", language: "en", category: "calculus", description: "Introduction to nonlinear functional analysis.", rating: 4.6, pages: 450, year: 2010},
{id: 574, title: "Complex Analytic Geometry", author: "Günter Harder", language: "en", category: "calculus", description: "Geometry of complex analytic spaces.", rating: 4.7, pages: 320, year: 2007},
{id: 575, title: "Singular Integrals and Differentiability Properties", author: "Elias M. Stein", language: "en", category: "calculus", description: "Theory of singular integrals.", rating: 4.8, pages: 316, year: 1971},
{id: 576, title: "Differential Equations with Applications", author: "Paul Blanchard", language: "en", category: "calculus", description: "Differential equations with modeling applications.", rating: 4.6, pages: 848, year: 2011},
{id: 577, title: "Complex Analysis and Geometry", author: "Paul de Bartolomeis", language: "en", category: "calculus", description: "Interplay between complex analysis and geometry.", rating: 4.7, pages: 280, year: 2008},
{id: 578, title: "Real Variable Methods in Fourier Analysis", author: "M. de Guzmán", language: "en", category: "calculus", description: "Real variable techniques in Fourier analysis.", rating: 4.6, pages: 312, year: 1981},
{id: 579, title: "Calculus on Manifolds with Applications", author: "Michael Spivak", language: "en", category: "calculus", description: "Calculus on manifolds with physical applications.", rating: 4.7, pages: 160, year: 1965},
{id: 580, title: "Analysis of PDEs", author: "Michael E. Taylor", language: "en", category: "calculus", description: "Comprehensive analysis of partial differential equations.", rating: 4.8, pages: 754, year: 2011},
{id: 581, title: "Complex Multiplication", author: "Serge Lang", language: "en", category: "calculus", description: "Theory of complex multiplication.", rating: 4.6, pages: 184, year: 1983},
{id: 582, title: "Functional Analysis and PDEs", author: "Vladimir Maz'ya", language: "en", category: "calculus", description: "Functional analytic methods for PDEs.", rating: 4.7, pages: 392, year: 2010},
{id: 583, title: "Multivariable Analysis", author: "George K. Francis", language: "en", category: "calculus", description: "Geometric approach to multivariable analysis.", rating: 4.6, pages: 448, year: 2007},
{id: 584, title: "Complex Dynamics", author: "John Milnor", language: "en", category: "calculus", description: "Dynamics of complex analytic maps.", rating: 4.8, pages: 320, year: 2006},
{id: 585, title: "Elliptic PDEs and Measure Theory", author: "David R. Adams", language: "en", category: "calculus", description: "Elliptic equations and their measure theoretic aspects.", rating: 4.7, pages: 280, year: 1998},
{id: 586, title: "Fourier Series and Integrals", author: "H. Dym & H. P. McKean", language: "en", category: "calculus", description: "Classic treatment of Fourier series and integrals.", rating: 4.6, pages: 320, year: 1985},
{id: 587, title: "Complex Analytic Methods in PDEs", author: "C. Denson Hill", language: "en", category: "calculus", description: "Complex analytic techniques for PDEs.", rating: 4.5, pages: 290, year: 1992},
{id: 588, title: "Geometric Theory of PDEs", author: "Michael E. Taylor", language: "en", category: "calculus", description: "Geometric approach to partial differential equations.", rating: 4.7, pages: 520, year: 1996},
{id: 589, title: "Real and Abstract Analysis", author: "Edwin Hewitt", language: "en", category: "calculus", description: "Bridge between real and abstract analysis.", rating: 4.6, pages: 476, year: 1975},
{id: 590, title: "Complex Variables and Applications", author: "James Brown", language: "en", category: "calculus", description: "Applications of complex variables in engineering.", rating: 4.5, pages: 480, year: 2008}


{id: 591, title: "Differential Geometry of Manifolds", author: "John M. Lee", language: "en", category: "geometry", description: "Comprehensive introduction to differential geometry of manifolds.", rating: 4.8, pages: 708, year: 2012},
{id: 592, title: "Algebraic Topology", author: "Allen Hatcher", language: "en", category: "geometry", description: "Geometric approach to algebraic topology.", rating: 4.9, pages: 556, year: 2002},
{id: 593, title: "Riemannian Geometry", author: "Peter Petersen", language: "en", category: "geometry", description: "Modern treatment of Riemannian geometry.", rating: 4.7, pages: 432, year: 2006},
{id: 594, title: "Geometric Group Theory", author: "Clara Löh", language: "en", category: "geometry", description: "Introduction to geometric group theory.", rating: 4.6, pages: 389, year: 2017},
{id: 595, title: "Symplectic Geometry", author: "Ana Cannas da Silva", language: "en", category: "geometry", description: "Introduction to symplectic geometry.", rating: 4.7, pages: 363, year: 2008},
{id: 596, title: "Differential Forms and Applications", author: "Manfredo P. do Carmo", language: "en", category: "geometry", description: "Differential forms with geometric applications.", rating: 4.6, pages: 120, year: 1994},
{id: 597, title: "Geometric Analysis", author: "Peter Li", language: "en", category: "geometry", description: "Analytic methods in geometry.", rating: 4.7, pages: 484, year: 2012},
{id: 598, title: "Topology of Fiber Bundles", author: "Norman Steenrod", language: "en", category: "geometry", description: "Classic text on fiber bundles.", rating: 4.6, pages: 244, year: 1999},
{id: 599, title: "Complex Algebraic Geometry", author: "David Cox", language: "en", category: "geometry", description: "Algebraic geometry from complex viewpoint.", rating: 4.7, pages: 280, year: 2005},
{id: 600, title: "Differential Geometry: Curves and Surfaces", author: "M. P. do Carmo", language: "en", category: "geometry", description: "Classic treatment of curves and surfaces.", rating: 4.8, pages: 503, year: 2016},
{id: 601, title: "Geometric Topology", author: "R. J. Daverman", language: "en", category: "geometry", description: "Introduction to geometric topology.", rating: 4.6, pages: 640, year: 2001},
{id: 602, title: "Algebraic Geometry and Arithmetic Curves", author: "Qing Liu", language: "en", category: "geometry", description: "Arithmetic aspects of algebraic geometry.", rating: 4.7, pages: 576, year: 2006},
{id: 603, title: "Differential Geometry and Physics", author: "M. Göckeler", language: "en", category: "geometry", description: "Applications of differential geometry in physics.", rating: 4.6, pages: 392, year: 1987},
{id: 604, title: "Geometric Methods in PDEs", author: "S. Alinhac", language: "en", category: "geometry", description: "Geometric techniques for partial differential equations.", rating: 4.5, pages: 168, year: 1990},
{id: 605, title: "Low-Dimensional Topology", author: "William Thurston", language: "en", category: "geometry", description: "Classic work on low-dimensional topology.", rating: 4.8, pages: 365, year: 1997},
{id: 606, title: "Complex Projective Geometry", author: "J. Harris", language: "en", category: "geometry", description: "Geometry of complex projective spaces.", rating: 4.7, pages: 328, year: 1995},
{id: 607, title: "Differential Geometry of Gauge Fields", author: "L. O'Raifeartaigh", language: "en", category: "geometry", description: "Geometry of gauge theories in physics.", rating: 4.6, pages: 272, year: 1986},
{id: 608, title: "Geometric Invariant Theory", author: "David Mumford", language: "en", category: "geometry", description: "Geometric invariant theory and moduli spaces.", rating: 4.7, pages: 292, year: 1994},
{id: 609, title: "Differential Geometry of Submanifolds", author: "Bang-Yen Chen", language: "en", category: "geometry", description: "Theory of submanifolds in Riemannian geometry.", rating: 4.6, pages: 376, year: 1973},
{id: 610, title: "Algebraic Geometry for Curves and Surfaces", author: "Francesco Kirwan", language: "en", category: "geometry", description: "Algebraic geometry focusing on curves and surfaces.", rating: 4.7, pages: 208, year: 1992}



{id: 611, title: "Enumerative Combinatorics", author: "Richard P. Stanley", language: "en", category: "combinatorics", description: "Comprehensive treatment of enumerative combinatorics.", rating: 4.8, pages: 626, year: 2011},
{id: 612, title: "Graph Theory", author: "Reinhard Diestel", language: "en", category: "combinatorics", description: "Modern graph theory textbook.", rating: 4.7, pages: 428, year: 2017},
{id: 613, title: "Combinatorial Optimization", author: "Bernhard Korte", language: "en", category: "combinatorics", description: "Algorithms and complexity in combinatorial optimization.", rating: 4.6, pages: 662, year: 2011},
{id: 614, title: "Algebraic Combinatorics", author: "Richard P. Stanley", language: "en", category: "combinatorics", description: "Algebraic methods in combinatorics.", rating: 4.7, pages: 200, year: 1996},
{id: 615, title: "Probabilistic Combinatorics", author: "Noga Alon", language: "en", category: "combinatorics", description: "Probabilistic methods in combinatorics.", rating: 4.8, pages: 352, year: 2000},
{id: 616, title: "Combinatorial Designs", author: "Douglas R. Stinson", language: "en", category: "combinatorics", description: "Theory of combinatorial designs.", rating: 4.6, pages: 300, year: 2003},
{id: 617, title: "Graph Algorithms", author: "Shimon Even", language: "en", category: "combinatorics", description: "Algorithms on graphs with mathematical analysis.", rating: 4.7, pages: 400, year: 2011},
{id: 618, title: "Combinatorial Game Theory", author: "Aaron N. Siegel", language: "en", category: "combinatorics", description: "Theory of combinatorial games.", rating: 4.6, pages: 554, year: 2013},
{id: 619, title: "Extremal Combinatorics", author: "Stasys Jukna", language: "en", category: "combinatorics", description: "Extremal problems in combinatorics.", rating: 4.7, pages: 412, year: 2011},
{id: 620, title: "Combinatorial Number Theory", author: "Melvyn B. Nathanson", language: "en", category: "combinatorics", description: "Combinatorial methods in number theory.", rating: 4.6, pages: 260, year: 1996},
{id: 621, title: "Graph Coloring Problems", author: "Tommy R. Jensen", language: "en", category: "combinatorics", description: "Problems and results in graph coloring.", rating: 4.5, pages: 300, year: 1995},
{id: 622, title: "Combinatorial Species", author: "André Joyal", language: "en", category: "combinatorics", description: "Theory of combinatorial species.", rating: 4.6, pages: 148, year: 1981},
{id: 623, title: "Network Flows", author: "Ravindra K. Ahuja", language: "en", category: "combinatorics", description: "Algorithms for network flow problems.", rating: 4.7, pages: 846, year: 1993},
{id: 624, title: "Combinatorial Geometry", author: "János Pach", language: "en", category: "combinatorics", description: "Geometric methods in combinatorics.", rating: 4.6, pages: 376, year: 1995},
{id: 625, title: "Generatingfunctionology", author: "Herbert S. Wilf", language: "en", category: "combinatorics", description: "Art of generating functions.", rating: 4.8, pages: 184, year: 2005},
{id: 626, title: "Combinatorial Matrix Theory", author: "Richard A. Brualdi", language: "en", category: "combinatorics", description: "Matrix theory with combinatorial applications.", rating: 4.6, pages: 367, year: 1991},
{id: 627, title: "Graph Theory Applications", author: "L. R. Foulds", language: "en", category: "combinatorics", description: "Applications of graph theory.", rating: 4.5, pages: 408, year: 1992},
{id: 628, title: "Combinatorial Set Theory", author: "László Babai", language: "en", category: "combinatorics", description: "Set-theoretic methods in combinatorics.", rating: 4.6, pages: 347, year: 1990},
{id: 629, title: "Discrete Mathematics with Applications", author: "Susanna S. Epp", language: "en", category: "combinatorics", description: "Applications-oriented discrete mathematics.", rating: 4.7, pages: 984, year: 2010},
{id: 630, title: "Combinatorial Optimization in Networks", author: "M. G. C. Resende", language: "en", category: "combinatorics", description: "Optimization problems in networks.", rating: 4.6, pages: 488, year: 2016}



{id: 631, title: "Analytic Number Theory", author: "Donald J. Newman", language: "en", category: "number-theory", description: "Short course in analytic number theory.", rating: 4.7, pages: 76, year: 1998},
{id: 632, title: "Algebraic Number Theory", author: "Jürgen Neukirch", language: "en", category: "number-theory", description: "Comprehensive algebraic number theory.", rating: 4.8, pages: 571, year: 1999},
{id: 633, title: "Elementary Number Theory", author: "Gareth A. Jones", language: "en", category: "number-theory", description: "Elementary approach to number theory.", rating: 4.6, pages: 311, year: 1998},
{id: 634, title: "Modular Forms and Fermat's Last Theorem", author: "Gary Cornell", language: "en", category: "number-theory", description: "Modular forms and proof of FLT.", rating: 4.8, pages: 582, year: 1997},
{id: 635, title: "Number Theory for Computing", author: "Song Y. Yan", language: "en", category: "number-theory", description: "Computational applications of number theory.", rating: 4.6, pages: 453, year: 2002},
{id: 636, title: "Analytic Methods in Number Theory", author: "Henryk Iwaniec", language: "en", category: "number-theory", description: "Advanced analytic methods.", rating: 4.8, pages: 615, year: 2004},
{id: 637, title: "Elliptic Curves", author: "Anthony W. Knapp", language: "en", category: "number-theory", description: "Introduction to elliptic curves.", rating: 4.7, pages: 336, year: 1992},
{id: 638, title: "Computational Number Theory", author: "Henri Cohen", language: "en", category: "number-theory", description: "Algorithms in number theory.", rating: 4.8, pages: 598, year: 1993},
{id: 639, title: "Introduction to p-adic Numbers", author: "Fernando Q. Gouvêa", language: "en", category: "number-theory", description: "Introduction to p-adic analysis.", rating: 4.6, pages: 308, year: 1997},
{id: 640, title: "Multiplicative Number Theory", author: "Harold Davenport", language: "en", category: "number-theory", description: "Classic text on multiplicative number theory.", rating: 4.7, pages: 182, year: 2000}



{id: 641, title: "Probability Theory: The Logic of Science", author: "E. T. Jaynes", language: "en", category: "probability", description: "Bayesian approach to probability theory.", rating: 4.8, pages: 758, year: 2003},
{id: 642, title: "Statistical Inference", author: "George Casella", language: "en", category: "probability", description: "Mathematical theory of statistical inference.", rating: 4.7, pages: 660, year: 2001},
{id: 643, title: "Stochastic Processes", author: "Sheldon Ross", language: "en", category: "probability", description: "Introduction to stochastic processes.", rating: 4.6, pages: 654, year: 1995},
{id: 644, title: "Measure Theory and Probability", author: "Malcolm Adams", language: "en", category: "probability", description: "Measure-theoretic foundations of probability.", rating: 4.7, pages: 240, year: 1996},
{id: 645, title: "Time Series Analysis", author: "James D. Hamilton", language: "en", category: "probability", description: "Theory and applications of time series.", rating: 4.8, pages: 820, year: 1994},
{id: 646, title: "Probability with Martingales", author: "David Williams", language: "en", category: "probability", description: "Introduction to martingale theory.", rating: 4.7, pages: 265, year: 1991},
{id: 647, title: "Bayesian Data Analysis", author: "Andrew Gelman", language: "en", category: "probability", description: "Practical Bayesian data analysis.", rating: 4.8, pages: 675, year: 2013},
{id: 648, title: "Random Walks and Markov Chains", author: "Gregory F. Lawler", language: "en", category: "probability", description: "Theory of random walks and Markov processes.", rating: 4.7, pages: 300, year: 2010},
{id: 649, title: "Probability and Measure", author: "Patrick Billingsley", language: "en", category: "probability", description: "Measure-theoretic probability theory.", rating: 4.8, pages: 608, year: 1995},
{id: 650, title: "Stochastic Calculus", author: "Paolo Baldi", language: "en", category: "probability", description: "Introduction to stochastic calculus.", rating: 4.7, pages: 320, year: 2017}



{id: 651, title: "Algebraic Topology", author: "Allen Hatcher", language: "en", category: "advanced", description: "Geometric approach to algebraic topology.", rating: 4.9, pages: 556, year: 2002},
{id: 652, title: "Partial Differential Equations", author: "Lawrence C. Evans", language: "en", category: "advanced", description: "Graduate-level PDE theory.", rating: 4.9, pages: 749, year: 2010},
{id: 653, title: "Functional Analysis", author: "Peter D. Lax", language: "en", category: "advanced", description: "Comprehensive functional analysis.", rating: 4.8, pages: 580, year: 2002},
{id: 654, title: "Differential Geometry", author: "John M. Lee", language: "en", category: "advanced", description: "Three-volume series on differential geometry.", rating: 4.9, pages: 1075, year: 2018},
{id: 655, title: "Algebraic Geometry", author: "Robin Hartshorne", language: "en", category: "advanced", description: "Standard graduate text on schemes.", rating: 4.7, pages: 496, year: 1977},
{id: 656, title: "Complex Analysis", author: "Lars V. Ahlfors", language: "en", category: "advanced", description: "Classic complex analysis text.", rating: 4.8, pages: 331, year: 1979},
{id: 657, title: "Real Analysis", author: "H. L. Royden", language: "en", category: "advanced", description: "Comprehensive real analysis.", rating: 4.8, pages: 444, year: 2010},
{id: 658, title: "Topology", author: "James R. Munkres", language: "en", category: "advanced", description: "Classic topology textbook.", rating: 4.9, pages: 537, year: 2000},
{id: 659, title: "Representation Theory", author: "William Fulton", language: "en", category: "advanced", description: "Introduction to representation theory.", rating: 4.8, pages: 551, year: 1991},
{id: 660, title: "Spectral Theory", author: "David Borthwick", language: "en", category: "advanced", description: "Introduction to spectral theory.", rating: 4.7, pages: 332, year: 2020}



{id: 661, title: "Numerical Linear Algebra", author: "Lloyd N. Trefethen", language: "en", category: "computational", description: "Algorithms for matrix computations.", rating: 4.8, pages: 361, year: 1997},
{id: 662, title: "Scientific Computing", author: "Michael T. Heath", language: "en", category: "computational", description: "Introduction to scientific computing.", rating: 4.7, pages: 563, year: 2018},
{id: 663, title: "Convex Optimization", author: "Stephen Boyd", language: "en", category: "computational", description: "Convex optimization theory and algorithms.", rating: 4.9, pages: 730, year: 2004},
{id: 664, title: "Numerical Recipes", author: "William H. Press", language: "en", category: "computational", description: "Art of scientific computing.", rating: 4.8, pages: 1235, year: 2007},
{id: 665, title: "Introduction to Algorithms", author: "Thomas H. Cormen", language: "en", category: "computational", description: "Comprehensive algorithms textbook.", rating: 4.9, pages: 1312, year: 2009},
{id: 666, title: "Matrix Computations", author: "Gene H. Golub", language: "en", category: "computational", description: "Algorithms for matrix computations.", rating: 4.8, pages: 756, year: 2013},
{id: 667, title: "Computational Complexity", author: "Christos Papadimitriou", language: "en", category: "computational", description: "Theory of computational complexity.", rating: 4.8, pages: 523, year: 1993},
{id: 668, title: "Numerical Analysis", author: "Richard L. Burden", language: "en", category: "computational", description: "Classic numerical analysis textbook.", rating: 4.7, pages: 896, year: 2010},
{id: 669, title: "The Art of Computer Programming", author: "Donald E. Knuth", language: "en", category: "computational", description: "Multi-volume algorithms masterpiece.", rating: 4.9, pages: 3168, year: 2011},
{id: 670, title: "Introduction to the Theory of Computation", author: "Michael Sipser", language: "en", category: "computational", description: "Computability and complexity theory.", rating: 4.9, pages: 504, year: 2012}


{id: 671, title: "The Art of Problem Solving", author: "Richard Rusczyk", language: "en", category: "olympiads", description: "Comprehensive problem-solving guide.", rating: 4.9, pages: 720, year: 2006},
{id: 672, title: "Problem-Solving Strategies", author: "Arthur Engel", language: "en", category: "olympiads", description: "Classic problem-solving strategies.", rating: 4.9, pages: 403, year: 1998},
{id: 673, title: "The IMO Compendium", author: "Dušan Djukić", language: "en", category: "olympiads", description: "Complete collection of IMO problems.", rating: 4.9, pages: 823, year: 2011},
{id: 674, title: "Mathematical Olympiad Challenges", author: "Titu Andreescu", language: "en", category: "olympiads", description: "Collection of olympiad problems.", rating: 4.8, pages: 283, year: 2000},
{id: 675, title: "Putnam and Beyond", author: "Răzvan Gelca", language: "en", category: "olympiads", description: "Preparation for the Putnam exam.", rating: 4.9, pages: 798, year: 2007},
{id: 676, title: "Geometry Revisited", author: "H. S. M. Coxeter", language: "en", category: "olympiads", description: "Advanced geometry for competitions.", rating: 4.8, pages: 193, year: 1967},
{id: 677, title: "103 Trigonometry Problems", author: "Titu Andreescu", language: "en", category: "olympiads", description: "Trigonometry for competitions.", rating: 4.7, pages: 214, year: 2004},
{id: 678, title: "102 Combinatorial Problems", author: "Titu Andreescu", language: "en", category: "olympiads", description: "Combinatorial problems for competitions.", rating: 4.8, pages: 125, year: 2003},
{id: 679, title: "Mathematical Olympiad Treasures", author: "Titu Andreescu", language: "en", category: "olympiads", description: "Treasure trove of olympiad problems.", rating: 4.8, pages: 234, year: 2003},
{id: 680, title: "Problems from the Book", author: "Titu Andreescu", language: "en", category: "olympiads", description: "Advanced problem collection.", rating: 4.9, pages: 463, year: 2008}

{id: 681, title: "Mathematics for Machine Learning", author: "Marc Peter Deisenroth", language: "en", category: "applied", description: "Mathematical foundations for machine learning.", rating: 4.7, pages: 400, year: 2020},
{id: 682, title: "Optimization for Machine Learning", author: "S. Shalev-Shwartz", language: "en", category: "applied", description: "Optimization techniques in machine learning.", rating: 4.6, pages: 312, year: 2014},
{id: 683, title: "Mathematical Methods in Data Science", author: "J. K. Bradley", language: "en", category: "applied", description: "Mathematical techniques for data science.", rating: 4.5, pages: 280, year: 2019},
{id: 684, title: "Applied Linear Algebra", author: "Peter J. Olver", language: "en", category: "applied", description: "Linear algebra applications in engineering.", rating: 4.6, pages: 450, year: 2018},
{id: 685, title: "Numerical Methods for Engineers", author: "Steven C. Chapra", language: "en", category: "applied", description: "Numerical techniques for engineering problems.", rating: 4.7, pages: 800, year: 2015},
{id: 686, title: "Statistical Learning Theory", author: "Vladimir N. Vapnik", language: "en", category: "applied", description: "Foundations of statistical learning.", rating: 4.8, pages: 736, year: 1998},
{id: 687, title: "Data Mining: Concepts and Techniques", author: "Jiawei Han", language: "en", category: "applied", description: "Comprehensive data mining techniques.", rating: 4.7, pages: 800, year: 2011},
{id: 688, title: "Machine Learning: A Probabilistic Perspective", author: "Kevin P. Murphy", language: "en", category: "applied", description: "Probabilistic approach to machine learning.", rating: 4.8, pages: 1136, year: 2012},


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
