// Bioinformatics Quiz Questions Pool
const allQuestions = [
  {
    "question": "Which of the following is not a form of RNA?",
    "options": [
      "tRNA",
      "qRNA",
      "mRNA",
      "rRNA"
    ],
    "correct_index": 1
  },
  {
    "question": "In addition to RNA polymerase, there are also a number of DNA-binding proteins that facilitate the process of transcription",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "When the two domains are located in two different proteins, to preserve the same functionality, their close proximity and interaction have to be conserved as well",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "TATA box is often used as an indicator of the presence of a promoter",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Marker 3D position cannot be precisely reconstructed using triangulation (see video)",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "ML vs DL requires more data but reduces user dependency, requires more computational power and it is less interpretable",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "DL vs ML requires much more data but improves generalization capability, requires more computational power and it is less interpretable",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Chronic patients should always be treated at home",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "The SANGER method can be used to discover the amminoacid sequence of a protein (X)",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "In the analysis of microarray data –If replicated datasets are available–, rigorous statistical tests as t-tests and analysis of variance (ANOVA) can be performed to test the null hypothesis that a given data point is not significantly different from the mean of the data distribution",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Shotgun approach ______ sequences clones from ______ of cloned DNA",
    "options": [
      "specifically, both ends",
      "randomly, both ends",
      "randomly, one end",
      "specifically, one end"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is not the objective to perform sequence comparison",
    "options": [
      "find the common motifs in both seq",
      "observe patterns of conservation",
      "study the physical properties of molecules",
      "study evolutionary relationships"
    ],
    "correct_index": 2
  },
  {
    "question": "The shotgun approach does not require knowledge of physical mapping of the clone fragments, but rather a robust computer assembly to join the pieces of random fragments into a single, whole genome sequence",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Dissociated sleep means",
    "options": [
      "lack of eye muscle atonia during REM",
      "excessive skeletal muscle atonia during REM stage",
      "lack of smooth muscle atonia during REM",
      "lack of skeletal muscle atonia during REM"
    ],
    "correct_index": 3
  },
  {
    "question": "The length of the reads is one of the biggest obstacles in sequencing genomes",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "During Data Cleaning, outliers should be always removed from datasets",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "Reverse engineering using a top-down approach",
    "options": [
      "allows to identify relationships between the parts of the system",
      "is the methodology used by most of life science researchers",
      "is best for linear systems",
      "is a sequencing technique"
    ],
    "correct_index": 0
  },
  {
    "question": "Machine Learning algorithms are always extremely efficient when dealing biological data",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "The level of complexity of a system should NOT influence the methodology used to reverse engineer it",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is UNTRUE about distance based methods",
    "options": [
      "based on the pairwise distance scores in the matrix, phylogenetic tree can be constructed for all the taxa involved",
      "clustering-type algorithms compute a tree based on a distance matrix starting from the most similar sequence pairs",
      "clustering is the only method among the algorithms for distance-based tree-building method",
      "The computed evolutionary distances can be used to construct a matrix of distances between all individual pairs of taxa"
    ],
    "correct_index": 2
  },
  {
    "question": "Which of the following is incorrect about Hierarchical Clustering?",
    "options": [
      "in the tree leaves, similar gene expression profiles are placed more closely together then dissimilar gene expression profiles",
      "the tree-branching pattern illustrates a higher degree of relationship between related gene groups",
      "it is not similar to the distance phylogenetic tree building method",
      "it produces a treelike structure that represents a hierarchy or relative relatedness of data groups"
    ],
    "correct_index": 2
  },
  {
    "question": "Which of the following is incorrect about self-organizing maps?",
    "options": [
      "clustering by SOMs is in principle similar to the k-means method",
      "it starts by defining a number of nodes",
      "it doesn’t involve neural networks",
      "the data points are initially assigned to the nodes at random"
    ],
    "correct_index": 2
  },
  {
    "question": "Voice can support clinicians in the objective assessment of many neurodegenerative conditions",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "The ______ refers to a structure with two end of a single-stranded region (loop) connecting a base-paired region (stem)",
    "options": [
      "bulge loop",
      "helical junctions",
      "hairpin loop",
      "interior loop"
    ],
    "correct_index": 2
  },
  {
    "question": "If the two sequences share significant similarity, it is extremely ______ that the extensive similarity between the two sequences has been acquired randomly, meaning that the two sequences have derived from a common evolutionary origin",
    "options": [
      "unlikely",
      "likely",
      "possible",
      "relevant"
    ],
    "correct_index": 0
  },
  {
    "question": "The promoter sequence may determine the expression of one gene or a number of linked genes downstream",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "The specific DNA sequences to which the transcription factors bind are referred to as ______",
    "options": [
      "regulatory elements",
      "transcription factors",
      "replication elements",
      "blocking factors"
    ],
    "correct_index": 0
  },
  {
    "question": "Hand tracking poses is less challenging than body tracking (SEE VIDEO)",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "A good estimation metric for balanced dataset is F score",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "A complete diagnostic process automatization is not generally feasible at present",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Which of these sentences on cross-individual transfer learning is correct?",
    "options": [
      "it means to train the network on Patient 1 and partially reuse on patient 2",
      "it means to train the network on Patient 1 and totally reuse on patient 2",
      "it impairs the performance of most algorithms",
      "it is not feasible at all, merely an abstract concept"
    ],
    "correct_index": 0
  },
  {
    "question": "The gene is a union of genomic sequences encoding a coherent set of potentially overlapping functional products",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Which of the following is INCORRECT about oligonucleotide design in a microarray?",
    "options": [
      "the oligonucleotides don't react with cDNA samples",
      "DNA microarrays are generated by fixing oligonucleotides onto a solid support",
      "the oligonucleotide array slide represents thousands of pre-selected genes from an organism",
      "the length of oligonucleotide is typically in the range of twenty-five to seventy bases long"
    ],
    "correct_index": 0
  },
  {
    "question": "Despite the multiple coverage, sometimes certain genomic regions remain unsequenced, mainly owing to cloning difficulties",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Deep learning in sleep disorder classification (see video)",
    "options": [
      "is validated by numerous controlled trials",
      "is always to be preferred to machine learning methods",
      "is infeasible because polysomnographic data are scarce",
      "lacks interpretability, which is a key issue in the clinical practice"
    ],
    "correct_index": 3
  },
  {
    "question": "The shape of a protein is encoded into its amminoacid sequence",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "An Attractor",
    "options": [
      "is a stable state in a protein-to-protein interaction network",
      "is an unstable state in a complex system",
      "is the process that makes two cells move toward each other",
      "is a stable state of a boolean network"
    ],
    "correct_index": 3
  },
  {
    "question": "Petri Nets (????)",
    "options": [
      "do not allow to model stochasticity",
      "can simulate the dynamics of a system",
      "have been defined to represent biological data",
      "have been created in the late 90'"
    ],
    "correct_index": 1
  },
  {
    "question": "Phylogenetic relationship can be shown by",
    "options": [
      "data search tool",
      "genbank",
      "data retrieving tool",
      "dendrogram"
    ],
    "correct_index": 3
  },
  {
    "question": "Which of the following is untrue regarding prediction with NN?",
    "options": [
      "it as to be first trained with known structures",
      "between input and output are mani connected hidden layers",
      "between the connected hidden layers the machine learning takes place to adjust the mathematical weights of internal connections",
      "it doesn’t have to be first trained by sequences with known structures"
    ],
    "correct_index": 3
  },
  {
    "question": "Which of the following is not a base of RNA?",
    "options": [
      "thymine",
      "adenine",
      "cytosine",
      "guanine"
    ],
    "correct_index": 0
  },
  {
    "question": "Structures are not much important when it comes to the study of the functions",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "Unlike DNA, which is mainly double stranded, RNA is single stranded, although an RNA molecule can self-hybridize at certain regions to form partial double stranded structures",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "For many eukaryotic proteins, newly synthesized protein precursors have to be transported to specific membrane-bound compartments and be proteolytically processed to become functional",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Threshold processing of inertial data for fall prevention (see video)",
    "options": [
      "is feasible and simple but yields many false negatives",
      "is feasible and simple but yields many false positives",
      "always outperforms statistical methods",
      "is unfeasible"
    ],
    "correct_index": 1
  },
  {
    "question": "A good estimation metric for balanced dataset is accuracy",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "The degree of sequence variation in the alignment reveals evolutionary relatedness of different sequences, whereas the conservation between sequences reflects the changes that have occurred during evolution in the form of substitutions, insertions and deletions",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "Automated sleep stage classification",
    "options": [
      "is not very useful because manual screening is little time consuming",
      "achieves high performance especially for N1 stage detection",
      "is commonly used in the clinical practice, and manual screening is now obsolete",
      "is difficult because the data set is very unbalanced"
    ],
    "correct_index": 3
  },
  {
    "question": "The central dogma says that a protein can be translate back to mRNA",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "The cost of data cleaning is negligible when compared to the cost of running lab experiments",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "In a linear system some functionalities emerge from the interactions of its parts",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is INCORRECT about k-means clustering",
    "options": [
      "it classifies data through a single step partition",
      "k-means clustering produces a dendrogram",
      "in this method, data are partitioned into k-clusters which are prespecified at the outset",
      "it is a divisive approach"
    ],
    "correct_index": 1
  },
  {
    "question": "Voice can represent an early marker of neurodegeneration",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Sometimes, it is also possible that the two sequences have derived from a common ancestor, but may have diverged to such an extent that the common ancestral relationship s are not recognizable at the sequence level",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "In DNA sequencing fluorescent traces of the DNA sequences are read by a computer program that assigns bases for each peak in a chromatogram",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Motor complications in Parkinson’s disease include:",
    "options": [
      "Freezing of gait, tremor",
      "Dyskinesia, freezing of gait",
      "OFF periods, bradykinesia",
      "Bradykinesia, postural instability"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is INCORRECT about a microarray?",
    "options": [
      "Each oligomer is spotted on the slide and serves as approved for binding to a unique complementary cDNA",
      "Array of immobilized DNA oligomers cannot be cDNA",
      "It is a slide attached with a high density array of immobilized DNA oligomers representing the entire genome of the species under study",
      "It is the most commonly used global gene expression profiling method"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is an incorrect statement about the terminologies related to protein sorting?",
    "options": [
      "All the proteins exhibit functions after being transported to certain compartments of the cell",
      "Protein sorting is also known as protein targeting",
      "Many proteins exhibit functions only after being transported to certain compartments of the cell",
      "Subcellular localization is an integral part of protein functionality"
    ],
    "correct_index": 0
  },
  {
    "question": "In eukaryotes, gene expression is not regulated by a protein complex formed between transcription factors and RNA polymerase",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "Many deep learning solutions are possible for 2D and 3D body tracking/pose (see video)",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Reverse engineering is the process of extracting knowledge from something and reproducing it based on the information extracted",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "In motion capture systems, markers can be either passive or active",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "The REM sleep is characterized by frequent limb movements",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "In Protein-Protein interactions the physical contacts between domains are crucial for the functioning of the cellular machinery",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0
  },
  {
    "question": "Which of the following is incorrect regarding pairwise sequence alignment?",
    "options": [
      "the most fundamental process in this type of comparison is sequence alignment",
      "this is the process by which sequences are compared by searching for common character",
      "it is the process of aligning multiple sequences",
      "it is an important first step toward structural and functional analysis of newly determined sequences"
    ],
    "correct_index": 2
  },
  {
    "question": "Base pairing, in RNA, is A–G and U–C",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1
  },
  {
    "question": "Machine Learning vs Deep Learning requires more data but reduces user dependency, requires much computational power, and is less interpretable.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 1
  },
  {
    "question": "In DNA sequencing, fluorescent traces of the DNA sequences are read by a computer program that assigns bases for each peak in a chromatogram.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 0
  },
  {
    "question": "In a linear system, some functionalities emerge from the interaction of its parts.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is incorrect about k-Means Clustering?",
    "options": [
      "It is a deep learning method",
      "k-means clustering produces a dendrogram",
      "It is a divisive approach",
      "In this method, data are partitioned into k-clusters, which are prespecified at the outset"
    ],
    "correct_index": 0
  },
  {
    "question": "Motor complications in Parkinson's disease include:",
    "options": [
      "Freezing of gait, tremor",
      "Dyskinesia, freezing of gait",
      "OFF periods, bradykinesia",
      "Bradykinesia, postural instability"
    ],
    "correct_index": 1
  },
  {
    "question": "The 'central dogma' says that a mRNA molecule can be translated back to DNA.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is untrue regarding Prediction with Neural Networks?",
    "options": [
      "Between input and output are many connected hidden layers",
      "Between the connected hidden layers, the machine learning takes place to adjust the mathematical weights of internal connections",
      "It doesn’t have to be first trained by sequences with known structures",
      "It has to be first trained by sequences with known structures"
    ],
    "correct_index": 2
  },
  {
    "question": "The SANGER method can be used to discover the amino acid sequence of a protein.",
    "options": [
      "True",
      "False  (Note: Sanger method is for DNA sequencing, not direct amino acid sequencing. Protein sequencing uses Edman degradation or mass spectrometry.)"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is untrue about distance-based methods?",
    "options": [
      "The clustering-type algorithms compute a tree based on a distance matrix starting from the most similar sequence pairs",
      "Clustering is the only method among the algorithms for the distance-based tree- building method  (Other methods include UPGMA, Neighbor-Joining.)",
      "Based on the pairwise distance scores in the matrix, a phylogenetic tree can be constructed for all the taxa involved",
      "The computed evolutionary distances can be used to construct a matrix of distances between all individual pairs of taxa"
    ],
    "correct_index": 1
  },
  {
    "question": "Which of the following is untrue regarding prediction with NN?",
    "options": [
      "A neural network is trained by a single sequence",
      "a neural network is trained by a sequence profile derived from the multiple sequence alignment",
      "When multiple sequence alignments and neural networks are combined, the result is further improved accuracy",
      "when the sufficiently trained network processes an unknown sequence, it applies the rules learned in training to recognize particular structural patterns"
    ],
    "correct_index": 0
  }
];
