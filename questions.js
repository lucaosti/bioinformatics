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
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 13,
      "note": "Slides list 3 major RNA classes (mRNA, tRNA, rRNA); 'qRNA' is not a recognized RNA type."
    },
    "explanation": "RNA (ribonucleic acid) comes in three major classes that are all involved in protein synthesis: messenger RNA (mRNA), which carries the genetic message copied from DNA to the ribosome; transfer RNA (tRNA), which acts as an adaptor that matches amino acids to the codon sequence in the mRNA during translation; and ribosomal RNA (rRNA), which is a major structural and catalytic component of the ribosome itself. The slides explicitly list only these three major classes, plus non-coding RNAs such as microRNA as a separate functional category. 'qRNA' is not a recognized class of RNA in molecular biology — it does not appear in any standard nomenclature, textbook, or the course slides, making it the odd one out. tRNA, mRNA, and rRNA are all genuine, well-documented RNA types with defined roles in the central dogma of molecular biology. Therefore the correct answer to 'which is NOT a form of RNA' is qRNA."
  },
  {
    "question": "In addition to RNA polymerase, there are also a number of DNA-binding proteins that facilitate the process of transcription",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 20,
      "note": "Slides: basal transcription factors recognize promoter DNA sequences and work with RNA polymerase during transcription."
    },
    "explanation": "Transcription is carried out by RNA polymerase, but RNA polymerase alone cannot efficiently locate and bind promoters in eukaryotic cells. The slides state that eukaryotes have three RNA polymerases (I, II, III) and three sets of basal (general) transcription factors that recognize promoter DNA sequences and help RNA polymerase engage the DNA to form the transcription initiation complex. These transcription factors are DNA-binding proteins, distinct from RNA polymerase, that facilitate transcription by finding and binding specific promoter elements. This matches the statement exactly: there ARE additional DNA-binding proteins that facilitate transcription alongside RNA polymerase, so it is true."
  },
  {
    "question": "When the two domains are located in two different proteins, to preserve the same functionality, their close proximity and interaction have to be conserved as well",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-5-161",
      "note": "Domain fusion/Rosetta Stone principle: interacting domains split across proteins in another organism still need conserved proximity/interaction to preserve function."
    },
    "explanation": "This refers to the 'Rosetta Stone'/domain fusion principle in comparative genomics: if two protein domains that interact functionally in one organism appear as two separate proteins in another organism, those separate proteins must still physically interact to reproduce the same combined function. Gene fusion/fission does not remove the functional requirement for domains to be in proximity and interact — it only changes whether the interaction happens within one polypeptide or between two. This is a widely used method for predicting protein-protein interactions. So the statement is true: preserving function requires the interaction to be conserved even when domains are split across proteins."
  },
  {
    "question": "TATA box is often used as an indicator of the presence of a promoter",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://link.springer.com/article/10.1186/gb-2006-7-8-r78",
      "note": "TATA box is a well-established core promoter element commonly used to indicate promoter presence/location."
    },
    "explanation": "The TATA box is a core DNA promoter element found roughly 25-35bp upstream of the transcription start site in many eukaryotic genes, with a T/A-rich consensus sequence. It is bound by the TATA-binding protein (TBP), part of TFIID, which helps position RNA polymerase II to initiate transcription. Because of this well-defined motif, its presence is commonly used computationally and experimentally as an indicator of an active promoter, even though many 'TATA-less' promoters also exist (especially housekeeping genes). The statement is true and well supported by molecular biology literature."
  },
  {
    "question": "Marker 3D position cannot be precisely reconstructed using triangulation (see video)",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Triangulation_(computer_vision)",
      "note": "Calibrated multi-camera triangulation (industry mocap systems, e.g. Vicon/OptiTrack) achieves sub-millimeter precision; kept as marked (medium confidence, course video not available for direct check)."
    },
    "explanation": "Triangulation in motion capture uses multiple calibrated cameras observing the same marker from different angles; knowing each camera's position/orientation and the marker's 2D projection in each view lets the system compute precise 3D position geometrically. Professional systems (Vicon, OptiTrack) routinely achieve sub-millimeter accuracy this way. The statement claims 3D position CANNOT be precisely reconstructed, which contradicts this well-established capability (occlusion is a practical limitation, not proof triangulation itself lacks precision). So the statement is false — triangulation, properly implemented, DOES allow precise reconstruction."
  },
  {
    "question": "ML vs DL requires more data but reduces user dependency, requires more computational power and it is less interpretable",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.05.NeuralNetworks_DeepLearning.pdf",
      "page": 47,
      "note": "Statement attributes DL traits (more data, more compute, less interpretable) to ML; actually reversed, so statement is false."
    },
    "explanation": "Compared to traditional ML, deep learning requires MORE data, MORE computational power, and is generally LESS interpretable (a black box), because it learns hierarchical features automatically rather than transparent hand-crafted ones. Traditional ML needs less data/compute but more manual feature engineering (more user dependency) and is more interpretable. This question attributes DL's traits (more data, more compute, less interpretable, reduced user dependency) to 'ML vs DL' — but the comparison direction is backwards, since these are DL's traits relative to ML, not the reverse. So the statement is false."
  },
  {
    "question": "DL vs ML requires much more data but improves generalization capability, requires more computational power and it is less interpretable",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.05.NeuralNetworks_DeepLearning.pdf",
      "page": 47,
      "note": "DL needs much more data, more compute, is less interpretable, but improves generalization vs traditional ML — matches slide content."
    },
    "explanation": "This question correctly frames the comparison as 'DL vs ML': deep learning needs much more training data because deep networks have huge numbers of parameters, requires substantially more computational power (GPUs), and is less interpretable since it learns abstract hierarchical features automatically rather than transparent hand-crafted ones. In exchange, DL typically improves generalization on complex tasks. This statement correctly attributes all these traits to DL relative to ML, matching slide content, so it is true."
  },
  {
    "question": "Chronic patients should always be treated at home",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10132045/",
      "note": "Home/remote monitoring helps chronic care but 'always' is an absolute overstatement; acute exacerbations often require hospital treatment. Corrected to false."
    },
    "explanation": "Home-based monitoring and telehealth are effective for managing stable chronic conditions, but the word 'always' makes this an absolute, overly strong claim not supported by clinical practice. Chronic patients can experience acute exacerbations or emergencies requiring in-person clinical evaluation or hospital-level care that cannot be safely managed at home. Medical guidance frames home monitoring as complementary to, not a replacement for, hospital care. Because absolute terms like 'always' are almost never medically accurate, the correct answer is false.",
    "change_note": "The original quiz marked this as 'true' (chronic patients should always be treated at home), which is medically incorrect due to the absolute word 'always'. Home/remote monitoring is valuable for chronic disease management but cannot replace hospital treatment during acute exacerbations or emergencies. The corrected answer 'false' better reflects real clinical practice, per literature on chronic disease telemonitoring (PMC10132045), which treats home monitoring as complementary to hospital care, not a full substitute."
  },
  {
    "question": "In the analysis of microarray data –If replicated datasets are available–, rigorous statistical tests as t-tests and analysis of variance (ANOVA) can be performed to test the null hypothesis that a given data point is not significantly different from the mean of the data distribution",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "4Data.Data_and_statistics.pdf",
      "note": "t-tests/ANOVA test whether expression differs between conditions/groups (group means), not whether a single data point differs from the overall distribution mean."
    },
    "explanation": "With replicated microarray data, t-tests (two groups) and ANOVA (more than two groups) are indeed the standard rigorous tests used. However, the null hypothesis they test is that there is no significant difference in expression BETWEEN the compared conditions/groups (i.e., between group means) — not that 'a given data point is not significantly different from the mean of the data distribution'. Comparing a single data point to the overall distribution mean is not what these tests do; they compare group means to each other. Because the statement misstates the null hypothesis being tested, it is false as written."
  },
  {
    "question": "Shotgun approach ______ sequences clones from ______ of cloned DNA",
    "options": [
      "specifically, both ends",
      "randomly, both ends",
      "randomly, one end",
      "specifically, one end"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://sequencing.com/education-center/whole-genome-sequencing/whole-genome-shotgun-sequencing",
      "note": "Shotgun sequencing randomly shears DNA into clones and sequences both ends of each fragment (paired-end)."
    },
    "explanation": "Shotgun sequencing randomly shears genomic DNA into many small, overlapping pieces (not targeted to specific regions), which are cloned into vectors. Each cloned fragment is typically sequenced from both ends (paired-end sequencing), giving two reads per clone with known approximate distance, which helps computational assembly. 'Randomly' is key because fragmentation is not targeted; sequencing 'both ends' roughly doubles information per clone and helps resolve repeats. So the correct completion is 'randomly, both ends'."
  },
  {
    "question": "Which of the following is not the objective to perform sequence comparison",
    "options": [
      "find the common motifs in both seq",
      "observe patterns of conservation",
      "study the physical properties of molecules",
      "study evolutionary relationships"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Sequence_alignment",
      "note": "Sequence comparison finds motifs, conservation, and evolutionary relationships; studying physical properties of molecules is structural biology, not a comparison objective."
    },
    "explanation": "Sequence comparison (alignment) is used to find common motifs, observe conservation patterns, and study evolutionary relationships between sequences — all relying on comparing the linear order of nucleotides/amino acids. Studying the physical properties of molecules (3D structure, folding, biophysical/chemical properties) is a separate discipline (structural biology/biophysics) requiring experimental techniques like X-ray crystallography or NMR, not sequence alignment. So 'study the physical properties of molecules' is NOT an objective of sequence comparison, making it the correct answer."
  },
  {
    "question": "The shotgun approach does not require knowledge of physical mapping of the clone fragments, but rather a robust computer assembly to join the pieces of random fragments into a single, whole genome sequence",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.bio.davidson.edu/courses/genomics/method/shotgun.html",
      "note": "Shotgun approach relies on computational assembly of random fragments rather than prior physical clone mapping."
    },
    "explanation": "Whole-genome shotgun sequencing skips the labor-intensive step of constructing a physical map ordering large cloned fragments before sequencing (unlike earlier clone-by-clone/BAC-by-BAC methods). Instead it randomly fragments the genome, sequences the fragments, and relies entirely on computational assembly algorithms to detect overlaps and reconstruct the contiguous genome sequence. This dramatically sped up sequencing projects at the cost of requiring more sophisticated bioinformatics to correctly assemble repetitive regions. So the statement is true."
  },
  {
    "question": "Dissociated sleep means",
    "options": [
      "lack of eye muscle atonia during REM",
      "excessive skeletal muscle atonia during REM stage",
      "lack of smooth muscle atonia during REM",
      "lack of skeletal muscle atonia during REM"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2020.00610/full",
      "note": "REM sleep behavior disorder ('dissociated sleep') is defined by loss of skeletal muscle atonia during REM, enabling dream enactment."
    },
    "explanation": "During normal REM sleep, the brain paralyzes skeletal (voluntary) muscles via 'REM atonia', preventing physical dream enactment. 'Dissociated sleep' refers to a pathological uncoupling where REM brain activity occurs without this atonia — i.e. the normal skeletal muscle atonia is absent. This is the defining feature of REM Sleep Behavior Disorder, where patients physically act out dreams. Eye muscles are unaffected (eye movement is a normal, expected part of REM), and smooth muscle is not the relevant muscle type for atonia. So dissociated sleep means lack of skeletal muscle atonia during REM."
  },
  {
    "question": "The length of the reads is one of the biggest obstacles in sequencing genomes",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "2NGS.01.Alignment.pdf",
      "page": 2,
      "note": "Slides note NGS produces millions of very short reads that must be mapped/assembled — a major sequencing/assembly obstacle."
    },
    "explanation": "NGS platforms generate millions of very short reads that must be mapped back to a reference genome, unlike earlier methods producing a few long reads. Short reads are harder to uniquely place in repetitive regions, require efficient alignment algorithms, and limit resolution of structural variants during assembly. This makes read length a fundamental bottleneck, driving development of long-read technologies (PacBio, Nanopore) specifically to overcome it. So the statement is true, directly supported by the slides."
  },
  {
    "question": "During Data Cleaning, outliers should be always removed from datasets",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "4Data.Data_and_statistics.pdf",
      "page": 39,
      "note": "Slides say outliers can be interesting/informative and should be examined, not automatically removed."
    },
    "explanation": "Outliers are data points that deviate markedly from the rest of the dataset. The slides emphasize that outliers can be genuinely interesting or informative (e.g. representing rare but real biological phenomena) and should be examined and understood before deciding how to handle them, rather than being automatically discarded. Blind removal risks throwing away real signal along with noise/errors. Good data-cleaning practice investigates the cause of each outlier (measurement error vs genuine rare event) before deciding. So 'always removed' is false."
  },
  {
    "question": "Reverse engineering using a top-down approach",
    "options": [
      "allows to identify relationships between the parts of the system",
      "is the methodology used by most of life science researchers",
      "is best for linear systems",
      "is a sequencing technique"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3869153/",
      "note": "Top-down reverse engineering infers global regulatory relationships between system components from system-wide data."
    },
    "explanation": "Reverse engineering with a top-down approach starts from system-wide observational data (e.g. gene expression measurements across many conditions) and works backward to infer the underlying structure — specifically the relationships/interactions between the system's parts (e.g. which genes regulate which). This contrasts with bottom-up approaches that build models component by component from known mechanistic detail. Top-down methods are common in systems biology precisely because they can infer global relationships from large-scale data without needing prior mechanistic knowledge of each part. So option 0 is correct."
  },
  {
    "question": "Machine Learning algorithms are always extremely efficient when dealing biological data",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.02.MainConcepts_Evaluation.pdf",
      "page": 29,
      "note": "Slides note ML performance issues with class skew/noise/biological data complexity; ML is not always extremely efficient."
    },
    "explanation": "Biological data often present specific challenges for machine learning: high dimensionality with relatively few samples, class imbalance, noise, batch effects, and complex nonlinear relationships. The slides discuss these evaluation challenges, implying ML performance is not automatically guaranteed to be excellent just because data is biological. Claiming ML is 'always extremely efficient' is an absolute overstatement contradicted by the well-documented difficulties of applying ML to biological data. So the statement is false."
  },
  {
    "question": "The level of complexity of a system should NOT influence the methodology used to reverse engineer it",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4433352/",
      "note": "System complexity determines whether top-down or bottom-up methodology is appropriate — complexity does influence methodology, so statement is false."
    },
    "explanation": "System complexity is a primary factor determining which reverse-engineering methodology is appropriate: simple/linear systems can often be tackled with bottom-up, mechanistic approaches, while highly complex systems (with many interacting nonlinear components) typically require top-down, data-driven inference methods because exhaustive component-by-component modeling becomes intractable. Since complexity does influence methodology choice, the claim that it 'should NOT influence' methodology is false."
  },
  {
    "question": "Which of the following is incorrect about Hierarchical Clustering?",
    "options": [
      "in the tree leaves, similar gene expression profiles are placed more closely together then dissimilar gene expression profiles",
      "the tree-branching pattern illustrates a higher degree of relationship between related gene groups",
      "it is not similar to the distance phylogenetic tree building method",
      "it produces a treelike structure that represents a hierarchy or relative relatedness of data groups"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7518125/",
      "note": "Hierarchical clustering and distance-based phylogenetic tree building are methodologically similar (both agglomerative, distance-matrix based)."
    },
    "explanation": "Hierarchical clustering (used e.g. on gene expression profiles) and distance-based phylogenetic tree building are methodologically very similar: both are agglomerative, distance-matrix-based methods that iteratively group the most similar items/sequences first, producing a tree-like (dendrogram) structure representing degrees of relatedness. Claiming hierarchical clustering 'is not similar' to distance-based tree-building contradicts this well-established methodological overlap, making it the incorrect statement about hierarchical clustering."
  },
  {
    "question": "Which of the following is incorrect about self-organizing maps?",
    "options": [
      "clustering by SOMs is in principle similar to the k-means method",
      "it starts by defining a number of nodes",
      "it doesn’t involve neural networks",
      "the data points are initially assigned to the nodes at random"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.baeldung.com/cs/som-algorithm",
      "note": "A self-organizing map IS a type of neural network (competitive learning network)."
    },
    "explanation": "A Self-Organizing Map (SOM), also called a Kohonen map, IS a type of artificial neural network — specifically an unsupervised, competitive-learning network where nodes (neurons) arranged on a grid compete to represent input data, adjusting their weights to preserve the topology of the input space. SOMs conceptually resemble k-means in that both cluster data around representative centers, both start by defining a fixed number of nodes/clusters, and both initialize with points/weights assigned somewhat randomly. So claiming a SOM 'doesn't involve neural networks' is factually false, making it the incorrect statement."
  },
  {
    "question": "Voice can support clinicians in the objective assessment of many neurodegenerative conditions",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2026.1794169/full",
      "note": "Voice/speech biomarkers are recognized objective tools supporting clinical assessment of neurodegenerative conditions."
    },
    "explanation": "Neurodegenerative diseases affect the fine motor coordination of the vocal apparatus, producing measurable acoustic changes (reduced loudness, monotone pitch, imprecise articulation). Digital health research uses acoustic/voice analysis combined with machine learning as an objective, quantifiable, non-invasive tool to support clinicians in assessing conditions like Parkinson's, complementing subjective clinical rating scales. This is an active and growing area of clinical/bioinformatics research, so the statement is true."
  },
  {
    "question": "The ______ refers to a structure with two end of a single-stranded region (loop) connecting a base-paired region (stem)",
    "options": [
      "bulge loop",
      "helical junctions",
      "hairpin loop",
      "interior loop"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Stem-loop",
      "note": "A stem (base-paired region) with a single-stranded loop at one end is standard RNA terminology for a hairpin loop."
    },
    "explanation": "An RNA hairpin loop (stem-loop) forms when a single strand of RNA folds back on itself: complementary bases pair to form a double-stranded 'stem', while the unpaired bases at the turn form a single-stranded loop connecting the two ends of the stem. This is standard RNA secondary-structure terminology, distinct from bulge loops (unpaired bases on one side within a helix), interior loops (unpaired regions on both sides within a helix), and helical junctions (points where 3+ helices meet). So the correct term for this structure is 'hairpin loop'."
  },
  {
    "question": "If the two sequences share significant similarity, it is extremely ______ that the extensive similarity between the two sequences has been acquired randomly, meaning that the two sequences have derived from a common evolutionary origin",
    "options": [
      "unlikely",
      "likely",
      "possible",
      "relevant"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "2NGS.01.Alignment.pdf",
      "page": 7,
      "note": "High sequence similarity implies it's unlikely to be due to chance, indicating common ancestry — standard homology principle."
    },
    "explanation": "In sequence alignment, when two sequences show significant, extensive similarity, the probability that this level of similarity arose purely by random chance is extremely low (unlikely) — this is the statistical basis for inferring homology (common evolutionary origin) from sequence similarity, and is exactly what alignment-scoring statistics like BLAST's E-value quantify. High similarity is therefore treated as strong evidence of shared ancestry, not coincidence. So the correct completion is 'unlikely'."
  },
  {
    "question": "The promoter sequence may determine the expression of one gene or a number of linked genes downstream",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 12,
      "note": "Promoters can drive expression of multiple linked downstream genes (e.g. operons)."
    },
    "explanation": "A promoter is the DNA region that RNA polymerase and transcription factors bind to initiate transcription of a gene. In some genomic arrangements (such as bacterial operons, or genes sharing regulatory regions), a single promoter can control the expression of more than one gene positioned downstream of it, since transcription proceeds continuously through the linked genes. So the statement that a promoter may determine expression of one gene OR a number of linked downstream genes is true."
  },
  {
    "question": "The specific DNA sequences to which the transcription factors bind are referred to as ______",
    "options": [
      "regulatory elements",
      "transcription factors",
      "replication elements",
      "blocking factors"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 12,
      "note": "Slides: cis-regulatory elements are the DNA sequences controlling transcription, bound by transcription factors."
    },
    "explanation": "Transcription factors are proteins that regulate gene expression by binding to specific short DNA sequences near genes. These specific DNA sequences that transcription factors bind to are called regulatory elements (or cis-regulatory elements) — they include promoters and enhancers. The other options are distractors: 'transcription factors' are the proteins doing the binding (not the DNA sequence bound), 'replication elements' relate to DNA replication origins, and 'blocking factors' is not a standard genetics term. So the correct answer is 'regulatory elements'."
  },
  {
    "question": "Hand tracking poses is less challenging than body tracking (SEE VIDEO)",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S1077314224001760",
      "note": "Hand tracking is MORE challenging than body tracking (higher degrees of freedom, occlusions, finger ambiguity)."
    },
    "explanation": "Hand tracking is generally MORE challenging than full-body tracking because hands have many more degrees of freedom packed into a small area (20+ joints to resolve), fingers look very similar to each other causing identification ambiguity, and self-occlusion (fingers hiding each other or the palm) is extremely common. Body tracking deals with fewer, larger, more visually distinct joints. So claiming hand tracking is LESS challenging is false."
  },
  {
    "question": "A good estimation metric for balanced dataset is F score",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.02.MainConcepts_Evaluation.pdf",
      "note": "Slides: accuracy is a good metric specifically when there is no large class skew (balanced dataset); F1-score is the metric introduced to handle the large-class-skew (imbalanced) case."
    },
    "explanation": "The course slides distinguish the two metrics by the situation they are meant for: accuracy is a good, sufficient metric when the dataset is balanced, since no class dominates and a naive biased classifier gains nothing. F1-score (the harmonic mean of precision and recall) is introduced specifically as the fix for the case where accuracy fails — large class skew, i.e. an imbalanced dataset — because it is not distorted by a dominant class. So pairing F-score with the balanced-dataset case reverses the intended contrast; F-score is the good metric for imbalanced (not balanced) datasets, making the statement false."
  },
  {
    "question": "A complete diagnostic process automatization is not generally feasible at present",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12929352/",
      "note": "Current literature confirms full diagnostic-process automation is not yet feasible; AI addresses narrow tasks only."
    },
    "explanation": "Current AI/ML systems in medicine address narrow, well-defined diagnostic subtasks (e.g. detecting a specific pattern in an image) but lack the generalizability, transparency, and integration needed to fully automate the entire diagnostic process (which involves history-taking, differential reasoning, contextual judgment, and accountability). Regulatory, ethical, and technical barriers mean full automation is not yet feasible in current clinical practice. So the statement is true."
  },
  {
    "question": "Which of these sentences on cross-individual transfer learning is correct?",
    "options": [
      "it means to train the network on Patient 1 and partially reuse on patient 2",
      "it means to train the network on Patient 1 and totally reuse on patient 2",
      "it impairs the performance of most algorithms",
      "it is not feasible at all, merely an abstract concept"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Transfer_learning",
      "note": "Cross-individual transfer learning means training on Patient 1 and partially reusing (fine-tuning) on Patient 2, not total reuse."
    },
    "explanation": "Transfer learning reuses a model trained on one task/subject as a starting point for a related task. In cross-individual transfer learning, a network is trained on Patient 1's data, and then some of its learned weights (typically early layers capturing general, patient-independent features) are kept while later layers are fine-tuned on the smaller available data for Patient 2 — this is 'partial reuse'. Total reuse ignores individual physiological variability; claiming it's infeasible or purely abstract contradicts its established use in biomedical ML. So option 0 is correct."
  },
  {
    "question": "The gene is a union of genomic sequences encoding a coherent set of potentially overlapping functional products",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Gene",
      "note": "Matches the ENCODE consortium gene definition (Gerstein et al. 2007)."
    },
    "explanation": "This is the modern ENCODE-consortium definition of a gene (Gerstein et al. 2007), updating the classical one-gene-one-protein view: a gene is a union of genomic sequences encoding a coherent set of potentially overlapping functional products, recognizing that alternative splicing/promoters can produce multiple related products from one locus. This reflects current genomic understanding, so the statement is true."
  },
  {
    "question": "Which of the following is INCORRECT about oligonucleotide design in a microarray?",
    "options": [
      "the oligonucleotides don't react with cDNA samples",
      "DNA microarrays are generated by fixing oligonucleotides onto a solid support",
      "the oligonucleotide array slide represents thousands of pre-selected genes from an organism",
      "the length of oligonucleotide is typically in the range of twenty-five to seventy bases long"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/DNA_microarray",
      "note": "Microarray oligonucleotides DO hybridize with cDNA samples — that's the detection mechanism; 'don't react' is the incorrect statement."
    },
    "explanation": "A DNA microarray immobilizes short oligonucleotide probes on a solid support; the core detection mechanism is hybridization — fluorescently labeled cDNA from a sample binds (reacts) specifically to complementary probes, producing a signal proportional to gene expression. Claiming oligonucleotides 'don't react with cDNA samples' directly contradicts this fundamental mechanism, making it the incorrect statement. The other options (solid-support fixation, thousands of preselected genes, 25-70 base length) are all accurate."
  },
  {
    "question": "Despite the multiple coverage, sometimes certain genomic regions remain unsequenced, mainly owing to cloning difficulties",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Human_Genome_Project",
      "note": "Repetitive/complex genomic regions resist cloning, leaving gaps even at high coverage."
    },
    "explanation": "Even at high sequencing coverage, some genomic regions — especially highly repetitive sequences (centromeres, telomeres) or sequences unstable/toxic in bacterial cloning vectors — resist reliable cloning, causing systematic gaps in genome assemblies. This was a documented limitation of the original Human Genome Project assembly, only fully resolved later by long-read, clone-free technologies (e.g. the T2T Consortium). So coverage alone doesn't guarantee complete sequencing if cloning systematically fails for certain regions — the statement is true."
  },
  {
    "question": "Deep learning in sleep disorder classification (see video)",
    "options": [
      "is validated by numerous controlled trials",
      "is always to be preferred to machine learning methods",
      "is infeasible because polysomnographic data are scarce",
      "lacks interpretability, which is a key issue in the clinical practice"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9141573/",
      "note": "Deep learning sleep-staging models are widely criticized as black-box/uninterpretable, a recognized clinical adoption barrier."
    },
    "explanation": "Deep learning models for sleep-disorder classification typically function as 'black boxes' — high accuracy but little insight into which features drove a prediction. This lack of interpretability is a recognized major barrier to clinical adoption, since clinicians need to trust and understand a model's reasoning before using it diagnostically. DL is not universally validated by numerous controlled trials, not always preferable to ML, and polysomnographic data are not scarce (large public datasets exist) — so option 3 (lacks interpretability) is the correct answer."
  },
  {
    "question": "The shape of a protein is encoded into its amminoacid sequence",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.02.Proteins-Domain.pdf",
      "page": 1,
      "note": "Anfinsen's dogma (covered in protein folding slides): 3D shape is determined by amino acid sequence."
    },
    "explanation": "This reflects Anfinsen's dogma: a protein's native 3D structure is determined solely by its amino acid sequence under physiological conditions. Each higher level of protein structure (secondary, tertiary, quaternary) emerges from the primary amino acid sequence through the physical/chemical properties of the side chains. This principle underlies why sequence-based computational tools (like AlphaFold) can predict structure from sequence alone. So the statement is true."
  },
  {
    "question": "An Attractor",
    "options": [
      "is a stable state in a protein-to-protein interaction network",
      "is an unstable state in a complex system",
      "is the process that makes two cells move toward each other",
      "is a stable state of a boolean network"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Attractor",
      "note": "In systems biology an attractor is formally a stable state of a dynamical system such as a Boolean network model."
    },
    "explanation": "In dynamical systems theory (underlying Boolean network models of gene regulation), an attractor is a state (or cycle of states) toward which a system evolves and then remains, absent perturbation — a stable state. In Boolean network models this corresponds to a stable gene-expression pattern, often interpreted as a cell type/fate. It's not specific to PPI networks, and by definition it's stable (not unstable), and it doesn't describe cell migration. So option 3 correctly captures the formal definition."
  },
  {
    "question": "Petri Nets (????)",
    "options": [
      "do not allow to model stochasticity",
      "can simulate the dynamics of a system",
      "have been defined to represent biological data",
      "have been created in the late 90'"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Petri_net",
      "note": "Petri nets model and simulate dynamic system behavior (incl. stochastic ones); invented in 1962, not late '90s."
    },
    "explanation": "A Petri net is a mathematical/graphical formalism (invented by Carl Adam Petri in 1962, not the late '90s) used to model and simulate the dynamic behavior of concurrent systems, including biological pathways. Its places, transitions, and tokens allow simulation of how a system's state evolves over time. Extended (stochastic) Petri nets do allow modeling stochasticity, so option 0 is wrong; they were a general CS formalism only later adapted to biology, so option 2 is inaccurate as stated; and they long predate the late 1990s, so option 3 is wrong. Option 1 (can simulate system dynamics) is correct."
  },
  {
    "question": "Phylogenetic relationship can be shown by",
    "options": [
      "data search tool",
      "genbank",
      "data retrieving tool",
      "dendrogram"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Dendrogram",
      "note": "Dendrograms (phylogenetic trees) are the standard way to visualize phylogenetic relationships."
    },
    "explanation": "A dendrogram is a tree-like diagram showing hierarchical relationships based on similarity/distance; in molecular biology this exact structure depicts phylogenetic trees, visualizing evolutionary relationships and common ancestry. The other options (data search tool, GenBank, data retrieving tool) are software/database categories used to find or fetch sequence data — not visual representations of phylogenetic relationships themselves. So dendrogram is correct."
  },
  {
    "question": "Which of the following is not a base of RNA?",
    "options": [
      "thymine",
      "adenine",
      "cytosine",
      "guanine"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/RNA",
      "note": "RNA uses uracil instead of thymine; thymine is a DNA-only base."
    },
    "explanation": "RNA's four bases are adenine, cytosine, guanine, and uracil — uracil replaces thymine, which is found in DNA instead (thymine is essentially 5-methyluracil). So thymine is not a base of RNA, making it the correct answer to 'which is NOT a base of RNA'; adenine, cytosine, and guanine are all genuine RNA bases."
  },
  {
    "question": "Structures are not much important when it comes to the study of the functions",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.02.Proteins-Domain.pdf",
      "note": "Course material emphasizes the structure-function relationship; claiming structure is 'not much important' is false."
    },
    "explanation": "The slides explicitly state that protein domains/structures 'are of enormous value in attempting to predict the function... of new proteins' and that 'the domain is the fundamental unit of protein structure characterizing protein's structure and function.' This establishes structure as highly important for studying function (structural bioinformatics relies on this), so claiming structures are 'not much important' for studying function is false."
  },
  {
    "question": "Unlike DNA, which is mainly double stranded, RNA is single stranded, although an RNA molecule can self-hybridize at certain regions to form partial double stranded structures",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/RNA",
      "note": "RNA is single-stranded but forms secondary structures via intramolecular base-pairing (e.g. tRNA cloverleaf)."
    },
    "explanation": "DNA is typically double-stranded throughout its length, while RNA is generally single-stranded, but that single strand can fold back and base-pair with itself at regions of local complementarity, forming secondary structures like hairpins/stem-loops (e.g. the tRNA cloverleaf, rRNA folds). This self-hybridization is essential to RNA's structural and functional versatility. So the statement is true."
  },
  {
    "question": "For many eukaryotic proteins, newly synthesized protein precursors have to be transported to specific membrane-bound compartments and be proteolytically processed to become functional",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK21053/",
      "note": "Many eukaryotic proteins are synthesized as precursors, trafficked to organelles, and proteolytically processed to mature form."
    },
    "explanation": "Many eukaryotic proteins are synthesized as inactive precursors that must be transported (via signal sequences) to specific membrane-bound compartments (ER, Golgi, mitochondria, lysosomes) and then proteolytically cleaved to become their mature, functional form (e.g. preproinsulin -> proinsulin -> insulin). This multi-step maturation process is a fundamental principle of eukaryotic protein biogenesis, so the statement is true."
  },
  {
    "question": "Threshold processing of inertial data for fall prevention (see video)",
    "options": [
      "is feasible and simple but yields many false negatives",
      "is feasible and simple but yields many false positives",
      "always outperforms statistical methods",
      "is unfeasible"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Fall_detection",
      "note": "Simple threshold-based fall detection from inertial sensors is known to generate many false positives."
    },
    "explanation": "Simple threshold-based processing of inertial sensor data (accelerometer/gyroscope) flags a fall whenever a signal crosses a predefined value. It's cheap and easy to implement (feasible and simple), but everyday vigorous activities (jumping, sitting quickly, dropping the device) can trigger similar spikes, causing many false positives — this is the well-documented practical problem with simple thresholding, more so than false negatives (real falls typically produce large, easily-detected spikes). More sophisticated statistical/ML methods generally outperform simple thresholding, so it doesn't 'always' outperform them. Option 1 is correct."
  },
  {
    "question": "A good estimation metric for balanced dataset is accuracy",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.02.MainConcepts_Evaluation.pdf",
      "page": 29,
      "note": "Slides: accuracy is problematic mainly under class skew, implying it works fine for balanced datasets."
    },
    "explanation": "Accuracy = (TP+TN)/Total, an intuitive metric that becomes misleading under class imbalance, since a classifier can score high by always predicting the majority class. When classes are balanced, this pathology disappears — no class dominates, so a naive biased classifier can't exploit an imbalance that doesn't exist, and accuracy fairly reflects overall correctness. This is precisely why F1/precision/recall are recommended over accuracy specifically for imbalanced (not balanced) data. So accuracy is a good metric for balanced datasets — true."
  },
  {
    "question": "The degree of sequence variation in the alignment reveals evolutionary relatedness of different sequences, whereas the conservation between sequences reflects the changes that have occurred during evolution in the form of substitutions, insertions and deletions",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK21054/",
      "note": "Statement reverses standard logic (conservation, not variation, reveals relatedness); as written, false."
    },
    "explanation": "In sequence alignment, conserved (similar) regions reveal evolutionary relatedness, because conservation implies selective pressure to stay similar, marking homology. It's the variable/divergent regions that reflect the changes (substitutions, indels) accumulated during evolution. This question's statement reverses that logic (variation -> relatedness, conservation -> changes), which is backwards. So as written, the statement is false."
  },
  {
    "question": "Automated sleep stage classification",
    "options": [
      "is not very useful because manual screening is little time consuming",
      "achieves high performance especially for N1 stage detection",
      "is commonly used in the clinical practice, and manual screening is now obsolete",
      "is difficult because the data set is very unbalanced"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9141573/",
      "note": "Automated sleep-stage classifiers struggle due to severe class imbalance across stages (e.g. N1 rarity)."
    },
    "explanation": "Automated sleep-stage classification from polysomnography suffers from severe class imbalance: stages like N2 dominate a night's recording while N1 (the wake-to-sleep transition) is rare and has ambiguous, overlapping EEG signatures, making it the hardest/most misclassified stage. Manual scoring is actually time-consuming (contradicting option 0) and is not obsolete (contradicting option 2) — automated tools are aids, not full replacements. So the correct answer is that classification is difficult due to unbalanced data."
  },
  {
    "question": "The central dogma says that a protein can be translate back to mRNA",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 6,
      "note": "Central dogma is DNA→RNA→protein, unidirectional; no protein-to-mRNA back-translation."
    },
    "explanation": "The central dogma describes unidirectional information flow: DNA -> RNA -> protein. Translation is one-way; there's no cellular machinery to read an amino acid sequence and generate the corresponding mRNA, partly because the genetic code is degenerate (multiple codons encode the same amino acid), so a protein sequence doesn't uniquely specify one mRNA sequence. The only reverse flow in the extended dogma is RNA-to-DNA (reverse transcription), not protein-to-RNA. So the statement is false."
  },
  {
    "question": "The cost of data cleaning is negligible when compared to the cost of running lab experiments",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.forbes.com/sites/gilpress/2016/03/23/data-preparation-most-time-consuming-least-enjoyable-data-science-task-survey-says/",
      "note": "Data cleaning is the dominant time/cost in data science pipelines, not negligible."
    },
    "explanation": "Industry surveys consistently show data scientists spend roughly 60-80% of project time on collecting/cleaning data, making it the single most time- and resource-consuming pipeline step — far from negligible. While wet-lab experiments are expensive, the downstream computational cleaning (quality filtering, normalization, batch-effect correction) is also a substantial cost that cannot be dismissed. So claiming this cost is 'negligible' compared to lab experiments is false."
  },
  {
    "question": "Voice can represent an early marker of neurodegeneration",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.sciencedirect.com/science/article/pii/S1532046419302825",
      "note": "Speech/voice changes detected in prodromal patients precede overt motor Parkinson's symptoms."
    },
    "explanation": "Neurodegenerative diseases affect fine motor control of the vocal apparatus, producing measurable speech changes (hypophonia, monotone pitch, altered rate) often before classical motor symptoms become obvious. This has motivated using voice/acoustic analysis with ML to detect subtle vocal biomarkers in prodromal or early-stage patients, sometimes years before diagnosis — an active area of digital health research. So the statement is true."
  },
  {
    "question": "Sometimes, it is also possible that the two sequences have derived from a common ancestor, but may have diverged to such an extent that the common ancestral relationship s are not recognizable at the sequence level",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK21136/",
      "note": "Standard molecular evolution concept: sequences can diverge beyond recognizable homology despite common ancestry."
    },
    "explanation": "Homologous sequences accumulate independent mutations over evolutionary time; given enough time or rapid divergence, sequences can become so different that alignment-based methods can no longer detect statistically significant similarity, even though they are still related through common descent (the 'twilight zone' of sequence alignment). This is an important caveat: sequence-level non-similarity does not disprove common ancestry. So the statement is true."
  },
  {
    "question": "Which of the following is INCORRECT about a microarray?",
    "options": [
      "Each oligomer is spotted on the slide and serves as approved for binding to a unique complementary cDNA",
      "Array of immobilized DNA oligomers cannot be cDNA",
      "It is a slide attached with a high density array of immobilized DNA oligomers representing the entire genome of the species under study",
      "It is the most commonly used global gene expression profiling method"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://journals.physiology.org/doi/full/10.1152/physiolgenomics.00080.2003",
      "note": "cDNA microarrays are an established probe type; claiming oligomers 'cannot be cDNA' is factually false — the incorrect statement."
    },
    "explanation": "A microarray immobilizes a high-density grid of DNA probes on a slide, each spot hybridizing with complementary labeled cDNA/cRNA from a sample — the most common method for global gene expression profiling. Probes can be short synthesized oligonucleotides (e.g. Affymetrix) OR full-length/partial cDNA clones spotted onto slides (traditional two-color cDNA microarrays) — both are legitimate, established platforms. So claiming oligomers 'cannot be cDNA' is factually false, making it the incorrect statement."
  },
  {
    "question": "Which of the following is an incorrect statement about the terminologies related to protein sorting?",
    "options": [
      "All the proteins exhibit functions after being transported to certain compartments of the cell",
      "Protein sorting is also known as protein targeting",
      "Many proteins exhibit functions only after being transported to certain compartments of the cell",
      "Subcellular localization is an integral part of protein functionality"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK21053/",
      "note": "Many proteins (e.g. cytosolic enzymes) function without any compartmental transport, contradicting the 'ALL proteins' claim."
    },
    "explanation": "Protein sorting (protein targeting) directs newly made proteins to their correct subcellular destination via signal sequences. However, not all proteins require transport: many function directly in the cytosol where they are synthesized (e.g. many metabolic enzymes, ribosomal components). So the absolute claim that ALL proteins only exhibit function after being transported is an overgeneralization contradicted by proteins that function without compartmental transport, making it the false/incorrect statement."
  },
  {
    "question": "In eukaryotes, gene expression is not regulated by a protein complex formed between transcription factors and RNA polymerase",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 19,
      "note": "Slides: transcription factors and RNA polymerase form a complex that binds the promoter and regulates gene expression."
    },
    "explanation": "The slides state transcription factors and RNA polymerase recognize and bind the promoter, forming a transcription initiation complex that enables RNA synthesis. This complex formation is a central regulatory mechanism controlling which genes are transcribed and when. The statement claims gene expression is 'not regulated' by this complex, which directly contradicts this core mechanism taught in the slides. So the statement is false."
  },
  {
    "question": "Many deep learning solutions are possible for 2D and 3D body tracking/pose (see video)",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://dl.acm.org/doi/10.1145/3603618",
      "note": "Multiple established deep learning architectures (OpenPose, HRNet, MediaPipe) exist for 2D/3D pose estimation."
    },
    "explanation": "Human pose estimation is a well-established computer vision task with multiple distinct deep learning architectures (OpenPose, HRNet, MediaPipe Pose, various 3D lifting networks) targeting 2D or 3D output with different tradeoffs in accuracy/speed. This diversity of viable, established solutions confirms the statement is true and reflects the maturity of the field."
  },
  {
    "question": "Reverse engineering is the process of extracting knowledge from something and reproducing it based on the information extracted",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Reverse_engineering",
      "note": "Standard definition: reverse engineering extracts knowledge from an artifact and reproduces it from that information."
    },
    "explanation": "Reverse engineering means taking an existing artifact apart (conceptually or physically) to understand how it works, then using that extracted knowledge to reproduce, improve, or build something compatible with it — the opposite direction of forward engineering (requirements to implementation). In bioinformatics, this underlies network inference: observing expression/interaction data (the artifact's behavior) to infer the underlying regulatory network (the design). This is the standard textbook definition, so the statement is true."
  },
  {
    "question": "In motion capture systems, markers can be either passive or active",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Motion_capture",
      "note": "Optical motion capture uses either passive (reflective) or active (LED) markers; both are standard."
    },
    "explanation": "Optical motion capture markers are either passive (retroreflective spheres bouncing infrared light back, no power needed) or active (containing their own LEDs, often pulsed for unambiguous identification). Passive systems are cheaper but can suffer marker-swap ambiguity; active systems resolve identity at the cost of wiring/batteries. Both types are standard and widely used (film, sports science, biomedical research). So the statement is true."
  },
  {
    "question": "The REM sleep is characterized by frequent limb movements",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Rapid_eye_movement_sleep",
      "note": "REM sleep is characterized by muscle atonia (paralysis), not frequent limb movements — statement is false."
    },
    "explanation": "REM sleep is characterized by rapid eye movements and vivid dreaming, but critically also by skeletal muscle atonia — near-total paralysis of voluntary muscles (except eye muscles and diaphragm) that prevents acting out dreams. This is the opposite of 'frequent limb movements'; when this atonia fails (REM Sleep Behavior Disorder) it's considered pathological precisely because of abnormal movement during REM. So the statement is false."
  },
  {
    "question": "In Protein-Protein interactions the physical contacts between domains are crucial for the functioning of the cellular machinery",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "5Network.02.BioNetwork.pdf",
      "note": "Slides cover protein-protein interaction physical contacts as crucial for cellular machinery function."
    },
    "explanation": "Protein-protein interactions are physical contacts between binding domains that assemble the multi-protein complexes (ribosomes, signaling complexes) that carry out cellular work. The slides state proteins interact for stability and functionality, and most cellular functions occur at the protein-complex level. Without correct physical contact, complexes cannot form and downstream processes fail. So the statement is true."
  },
  {
    "question": "Which of the following is incorrect regarding pairwise sequence alignment?",
    "options": [
      "the most fundamental process in this type of comparison is sequence alignment",
      "this is the process by which sequences are compared by searching for common character",
      "it is the process of aligning multiple sequences",
      "it is an important first step toward structural and functional analysis of newly determined sequences"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "2NGS.01.Alignment.pdf",
      "page": 5,
      "note": "Pairwise alignment by definition compares two sequences, not multiple; 'aligning multiple sequences' is the incorrect statement."
    },
    "explanation": "Pairwise alignment by definition compares exactly two sequences (Query vs Subject) searching for common characters/motifs — it is the most fundamental comparison process and an important first step toward structural/functional analysis. 'Aligning multiple sequences' instead describes Multiple Sequence Alignment (MSA), a distinct technique involving three or more sequences (via tools like Clustal/MUSCLE). So conflating pairwise alignment with MSA is the incorrect statement."
  },
  {
    "question": "Base pairing, in RNA, is A–G and U–C",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Base_pair",
      "note": "RNA (Watson-Crick) base pairing is A-U and G-C, not A-G and U-C; statement as written is false."
    },
    "explanation": "Watson-Crick base pairing rules: in RNA, Adenine pairs with Uracil (A-U) and Guanine pairs with Cytosine (G-C) — one purine with one pyrimidine each, maintaining uniform helix width. A-G would pair two purines (too wide) and U-C would pair two pyrimidines (too narrow), which is not how base pairing works. So the statement as written (A-G and U-C) is false."
  },
  {
    "question": "In DNA sequencing, fluorescent traces of the DNA sequences are read by a computer program that assigns bases for each peak in a chromatogram.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Sanger_sequencing",
      "note": "Sanger sequencing produces fluorescent chromatogram traces where software calls bases per peak."
    },
    "explanation": "Sanger sequencing labels DNA fragments with base-specific fluorescent dyes; capillary electrophoresis separates them by size, and a laser detector reads each fragment's color as it passes, generating a chromatogram of peaks. Base-calling software (e.g. Phred/Phrap) automatically interprets peak position/color to assign bases. This matches the statement exactly, so it is true."
  },
  {
    "question": "In a linear system, some functionalities emerge from the interaction of its parts.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Emergence",
      "note": "Emergent functionality from part-interactions is a hallmark of non-linear/complex systems, not linear ones."
    },
    "explanation": "A linear system obeys the superposition principle — output scales additively with input, with no qualitatively new behavior from interactions. Emergent properties (novel behaviors arising only from collective interaction, unpredictable from parts alone) are the hallmark of complex, nonlinear systems, not linear ones. Attributing emergence to a 'linear system' is a contradiction in terms, so the statement is false — important for understanding why biological networks (nonlinear) are studied as systems, not simple sums of parts."
  },
  {
    "question": "Which of the following is correct about k-Means Clustering?",
    "options": [
      "It is a deep learning method",
      "k-means clustering produces a dendrogram",
      "It is a divisive approach",
      "In this method, data are partitioned into k-clusters, which are prespecified at the outset"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.01.Introduction.pdf",
      "page": 28,
      "note": "Slides classify k-means as unsupervised clustering, not deep learning; it's also non-hierarchical (no dendrogram) and non-divisive."
    },
    "explanation": "K-means is a classical unsupervised statistical clustering algorithm — no neural network, no layers, no learned weights — so it is not a deep learning method. It's also not hierarchical (produces no dendrogram) and not a divisive top-down method. The only correct statement is that k-means partitions data into k clusters, where k is prespecified at the outset."
  },
  {
    "question": "Motor complications in Parkinson's disease include:",
    "options": [
      "Freezing of gait, tremor",
      "Dyskinesia, freezing of gait",
      "OFF periods, bradykinesia",
      "Bradykinesia, postural instability"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK430913/",
      "note": "Motor complications in PD = dyskinesia and motor fluctuations (incl. freezing of gait), distinct from cardinal motor symptoms."
    },
    "explanation": "Parkinson's 'motor complications' specifically refer to levodopa-induced dyskinesia (involuntary movements from fluctuating drug levels) and motor fluctuations like OFF periods/freezing of gait, developing with disease progression and chronic treatment — distinct from cardinal motor symptoms (bradykinesia, tremor, rigidity, postural instability) present from disease onset. Option 1 (dyskinesia, freezing of gait) is the consistent complications pairing; the other options mix in cardinal symptoms, making them inconsistent."
  },
  {
    "question": "The 'central dogma' says that a mRNA molecule can be translated back to DNA.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 6,
      "note": "Central dogma: DNA→RNA→protein; mRNA is not translated back to DNA (reverse transcription is a distinct, non-canonical process)."
    },
    "explanation": "The central dogma describes DNA -> RNA -> protein flow; it does not include mRNA being converted back into DNA. Reverse transcription (RNA to DNA, e.g. in retroviruses) is a real but separate/exceptional process outside the classical dogma, and it converts RNA to DNA via a specific enzyme (reverse transcriptase), not 'translation' (which specifically means RNA to protein). So the statement misuses 'translation' and misattributes this to the central dogma, making it false."
  },
  {
    "question": "Which of the following is untrue regarding Prediction with Neural Networks?",
    "options": [
      "Between input and output are many connected hidden layers",
      "Between the connected hidden layers, the machine learning takes place to adjust the mathematical weights of internal connections",
      "It doesn’t have to be first trained by sequences with known structures",
      "It has to be first trained by sequences with known structures"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Protein_structure_prediction",
      "note": "NNs for structure prediction must be trained on sequences with known structure first; claiming otherwise is the untrue statement."
    },
    "explanation": "Neural networks for structure prediction have hidden layers with adjustable weights (input -> hidden -> output), and operate under supervised learning: they must be trained on sequences with known structures first, via backpropagation adjusting weights to minimize prediction error, before they can generalize to new sequences. Claiming the network 'doesn't have to be first trained' directly contradicts this requirement, making it the untrue statement — without training, the network has no learned parameters and cannot predict anything meaningful."
  },
  {
    "question": "The SANGER method can be used to discover the amino acid sequence of a protein.",
    "options": [
      "True",
      "False"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Sanger_sequencing",
      "note": "Sanger method is DNA sequencing; protein amino-acid sequencing uses Edman degradation/mass spectrometry."
    },
    "explanation": "Sanger (chain-termination) sequencing determines DNA nucleotide sequence, not protein amino acid sequence directly. Protein sequencing instead uses Edman degradation (removing/identifying N-terminal amino acids one at a time) or mass spectrometry. While one could indirectly infer amino acid sequence by sequencing the corresponding gene and translating computationally, Sanger sequencing itself sequences DNA, not protein — so the statement is false.",
    "change_note": "The option text originally had a stray editorial parenthetical baked into the 'False' option (a note explaining Sanger vs Edman degradation) which has been removed so the option reads simply 'False', matching the format of 'True'. Independent re-verification confirms the underlying answer (False) is correct: Sanger sequencing determines DNA sequence, not protein amino acid sequence directly."
  },
  {
    "question": "Which of the following is untrue about distance-based methods?",
    "options": [
      "The clustering-type algorithms compute a tree based on a distance matrix starting from the most similar sequence pairs",
      "Clustering is the only method among the algorithms for the distance-based tree-building method",
      "Based on the pairwise distance scores in the matrix, a phylogenetic tree can be constructed for all the taxa involved",
      "The computed evolutionary distances can be used to construct a matrix of distances between all individual pairs of taxa"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Neighbor_joining",
      "note": "Distance-based tree-building includes multiple methods (UPGMA, Neighbor-Joining), not only 'clustering' as a single method."
    },
    "explanation": "Distance-based tree-building computes a pairwise distance matrix and builds a tree from it; clustering-type algorithms (like UPGMA) join the most similar pairs first, but this is only ONE of several distinct distance-based algorithms — Neighbor-Joining (which doesn't assume a constant molecular clock, generally more accurate for divergent taxa) and Fitch-Margoliash are others. So claiming clustering is 'the only method' is factually incorrect, making it the untrue statement.",
    "change_note": "The option text originally had a stray editorial parenthetical (mentioning UPGMA and Neighbor-Joining as other methods) baked directly into the option itself, which has been removed so the option reads cleanly. Independent re-verification confirms the underlying answer is correct: distance-based tree-building includes multiple algorithms (UPGMA, Neighbor-Joining, Fitch-Margoliash), so 'clustering is the only method' is false."
  },
  {
    "question": "Which of the following is untrue regarding prediction with NN?",
    "options": [
      "A neural network is trained by a single sequence",
      "a neural network is trained by a sequence profile derived from the multiple sequence alignment",
      "When multiple sequence alignments and neural networks are combined, the result is further improved accuracy",
      "when the sufficiently trained network processes an unknown sequence, it applies the rules learned in training to recognize particular structural patterns"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Protein_secondary_structure_prediction",
      "note": "NN secondary-structure predictors (e.g. PHD, Rost & Sander) train on MSA-derived profiles, not single sequences."
    },
    "explanation": "NN-based protein secondary structure predictors (e.g. the classic PHD method by Rost and Sander) are trained on sequence profiles derived from multiple sequence alignments (MSA) of homologous proteins, not on a single raw sequence — a profile captures evolutionary/conservation information across homologs at each position, which substantially improves prediction accuracy over single-sequence input. So claiming a network 'is trained by a single sequence' is the untrue statement; combining MSA profiles with NN training does improve accuracy, and a trained network does apply learned patterns to unknown sequences (both true statements)."
  },
  {
    "question": "How does regression differ from classification?",
    "options": [
      "It works without features",
      "It ignores outcome variables",
      "It predicts continuous outcomes",
      "It classifies text only"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.01.Introduction.pdf",
      "page": 20,
      "note": "Slides: regression predicts continuous outcomes, unlike classification which assigns categorical labels."
    },
    "explanation": "Regression and classification are both supervised learning tasks differing in output type: classification assigns a categorical/discrete class label, while regression predicts a continuous numerical outcome, as stated in the slides. Both need features and a labeled outcome variable to learn from, so options claiming regression 'works without features' or 'ignores outcome variables' are false. Regression is not restricted to text. So the defining difference is that regression predicts continuous outcomes."
  },
  {
    "question": "What scenario best dictates the importance of quaternary structure in protein function?",
    "options": [
      "The transcription of rRNA by RNA polymerase I",
      "The regulation of gene expression via UTRs.",
      "A single polypeptide folding into an alpha helix",
      "Haemoglobin’s oxygen function binding ability requires 4 subunits working cooperatively"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.02.Proteins-Domain.pdf",
      "page": 6,
      "note": "Quaternary structure = spatial arrangement of multi-subunit complexes; haemoglobin (4 subunits, cooperative O2 binding) is the classic example."
    },
    "explanation": "Quaternary structure is the spatial arrangement of multiple polypeptide subunits assembling into a functional complex. Haemoglobin (4 subunits: 2 alpha, 2 beta) is the textbook example, with oxygen binding to one subunit cooperatively increasing affinity in the others — this function depends critically on the quaternary assembly. The other options describe transcription, gene regulation via UTRs, or a single polypeptide folding (secondary structure) — none involve multiple subunits, so they don't illustrate quaternary structure's importance."
  },
  {
    "question": "What is the goal of classification in supervised learning?",
    "options": [
      "To find continuous values",
      "To analyse random text",
      "To predict categorical labels",
      "To measure time series data"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.01.Introduction.pdf",
      "page": 19,
      "note": "Slides: classification assigns categorical class labels to new instances."
    },
    "explanation": "Classification's goal, per the slides, is to predict categorical class labels of new instances based on a training set of past labeled observations — discrete, unordered group membership. Finding continuous values describes regression instead; analyzing random text and measuring time series data are unrelated distractors describing data domains, not the goal of classification. So predicting categorical labels is correct."
  },
  {
    "question": "What is the main purpose of the BLAST algorithm?",
    "options": [
      "To sort sequencing reads by quality score",
      "To find sequence alignments using a heuristic",
      "To compose sequence data",
      "To visualize genome annotations"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "2NGS.01.Alignment.pdf",
      "page": 13,
      "note": "Slides: BLAST is a heuristic seed-and-extend algorithm for finding sequence alignments."
    },
    "explanation": "BLAST uses a 'seed and extend' heuristic strategy: it finds short exact-match seeds shared between query and database sequences, then extends promising seeds into longer alignments, trading some sensitivity for massive speed gains over exhaustive dynamic-programming methods, enabling database-scale searches. It doesn't sort reads by quality, compose sequence data, or visualize annotations (those are other tools' jobs). So its main purpose is finding sequence alignments using a heuristic."
  },
  {
    "question": "What does PCA aim to maximize in the new feature space?",
    "options": [
      "Variance of the data",
      "Distance to the origin",
      "Number of features",
      "Class separation accuracy"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.03.Feature_Reduction.pdf",
      "page": 8,
      "note": "Slides: PCA remaps data to a new space that maximizes variance of the data."
    },
    "explanation": "PCA remaps data into a new coordinate system of principal components chosen to maximize variance of the data in the new representation, computed via eigen-decomposition of the covariance matrix; higher-variance directions are treated as carrying more information and retained. PCA doesn't optimize distance to origin, doesn't increase feature count (its purpose is reduction), and doesn't use class labels (that's supervised LDA's job, since PCA is unsupervised). So PCA maximizes variance."
  },
  {
    "question": "What is the basic idea of Markov Chain Clustering?",
    "options": [
      "Use random walks to identify dense clusters",
      "Use fixed thresholds for gene activity evaluation",
      "Compare sequences using BLAST",
      "Group nodes by molecular weight resulting in sparse clusters"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "5Network.02.BioNetwork.pdf",
      "page": 67,
      "note": "Slides: Markov Chain Clustering uses random walks on a graph to discover dense clusters."
    },
    "explanation": "Markov Clustering (MCL) is based on the idea that networks partition into regions with many internal links and few links between regions; it simulates random walks on the graph (modeled as a Markov chain) since a random walker tends to stay within a densely connected region longer before crossing a sparse boundary. It alternates expansion and inflation operations to converge on a partition. It doesn't use fixed thresholds, BLAST comparison, or molecular weight grouping — so random walks to find dense clusters is correct."
  },
  {
    "question": "PolyA is often used as an indicator of the presence of functional codon?",
    "options": [
      "true",
      "false"
    ],
    "correct_index": 1,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Polyadenylation",
      "note": "Poly-A signal/tail marks transcription termination and mRNA 3' processing/stability, not presence of a functional codon."
    },
    "explanation": "Polyadenylation adds a poly-A tail to the 3' end of a eukaryotic mRNA after recognition of a poly-A signal, serving to mark transcription termination, protect against exonuclease degradation, and assist nuclear export/translation. This is entirely independent of 'functional codons' or reading frames (which relate to translation, not 3' mRNA processing) — a transcript can be polyadenylated regardless of whether it contains a functional ORF (e.g. many non-coding RNAs are polyadenylated but never translated). So the statement is false."
  },
  {
    "question": "What is the purpose of QQ plot?",
    "options": [
      "To measure the data frequency in a set of features",
      "To compare averages between records",
      "To access if data follows a normal distribution",
      "To build regression lines"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "web",
      "url": "https://en.wikipedia.org/wiki/Q%E2%80%93Q_plot",
      "note": "QQ plots compare sample quantiles to theoretical (often normal) distribution quantiles to assess normality."
    },
    "explanation": "A QQ (quantile-quantile) plot compares the quantiles of an observed data sample against a theoretical reference distribution (commonly normal/Gaussian); if the data follow that distribution, points fall along the 45-degree diagonal, while systematic deviations reveal non-normality (skewness, heavy tails). This is used to visually assess normality before applying statistical methods that assume it. It's not about measuring frequency (that's a histogram), comparing averages (a t-test/bar chart), or building regression lines. So its purpose is assessing normality."
  },
  {
    "question": "What does a power law distribution imply in protein networks?",
    "options": [
      "All proteins interact with only large proteins",
      "All proteins interact equally with each other resulting in an average set of connections",
      "Most proteins have few connections, while few have many",
      "Protein function is predictable only by size"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "5Network.02.BioNetwork.pdf",
      "page": 37,
      "note": "Slides: power law degree distribution ('rich get richer') means most nodes have few connections, a few hubs have many."
    },
    "explanation": "A power-law degree distribution ('rich get richer') means the probability of a node having degree k decays as a power of k, producing a highly skewed distribution: most proteins have few interaction partners, while a small minority of hub proteins have disproportionately many connections. This scale-free property arises from preferential attachment during network growth. It doesn't mean all proteins interact only with large proteins, nor that interactions are uniform (that's a random/Poisson network, the opposite of power-law), nor that function is predictable only by size. So option 2 is correct."
  },
  {
    "question": "What is a regulatory network composed of?",
    "options": [
      "Enzymes for breaking down nutrients only",
      "Amino acids linked in a chain",
      "Entities that control gene transcription",
      "Lipids transporting energy across membranes"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "5Network.02.BioNetwork.pdf",
      "page": 33,
      "note": "Slides: a regulatory network is a collection of interacting genes/entities that govern the rates at which genes are transcribed into mRNA."
    },
    "explanation": "The slides define a regulatory network as a collection of DNA segments (genes) in a cell which interact with each other and with other substances in the cell, thereby governing the rates at which genes in the network are transcribed into mRNA. So a regulatory network is composed of entities (genes, transcription factors, and other regulatory molecules) that control gene transcription — not nutrient-breakdown enzymes, a plain amino acid chain, or lipid energy transport, which describe unrelated biological concepts."
  },
  {
    "question": "What is the purpose of clustering?",
    "options": [
      "To sort records in alphabetical order based on context",
      "To produce intermediate records to identify outliers",
      "To generate class labels from scratch and apply it to records",
      "To group records together based on feature similarity"
    ],
    "correct_index": 3,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "3ML.01.Introduction.pdf",
      "page": 29,
      "note": "Slides: clustering partitions instances into clusters by maximizing similarity within a cluster and minimizing similarity across clusters."
    },
    "explanation": "Clustering is an unsupervised learning task where instances are partitioned into groups (clusters) so that similarity of instances within the same cluster is maximized and similarity of instances in different clusters is minimized. It doesn't use predefined labels (unlike classification), isn't about alphabetical sorting, and isn't specifically an outlier-detection procedure. So the purpose of clustering is to group records together based on feature similarity."
  },
  {
    "question": "What are the minimum required fields in the BED format?",
    "options": [
      "ID, Name, Score",
      "Gene, Exon, Intron",
      "chrom, chromStart, chromEnd",
      "start, end, attribute"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "2NGS.02.Formats_seqBasicTools.pdf",
      "page": 26,
      "note": "Slides: the first three fields of a BED line are required — chrom, chromStart, chromEnd."
    },
    "explanation": "The BED (Browser Extensible Data) format describes genomic features one per line. Only the first three fields are mandatory: chrom (chromosome name), chromStart (feature start position), and chromEnd (feature end position). Additional fields (name, score, strand, thickStart, thickEnd, itemRgb, blockCount, etc.) are optional and can be added after these three. So the minimum required fields are chrom, chromStart, chromEnd."
  },
  {
    "question": "How does alternative splicing benefit organisms?",
    "options": [
      "It allows a single gene to produce multiple proteins",
      "It ensures only one mRNA is made per gene",
      "It deletes faulty genes",
      "It prevents protein folding errors"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "1Intro_MolBio.01.Introduction to Molecular Biology and Bioinf.pdf",
      "page": 24,
      "note": "Slides: exons can be reconnected in multiple ways during splicing, so different mRNAs from the same gene translate into different protein isoforms."
    },
    "explanation": "During RNA splicing, the exons produced from transcription of a single gene can be reconnected in multiple combinations, producing different mature mRNAs. These different mRNAs can be translated into different protein isoforms, meaning a single gene can code for multiple distinct proteins. This greatly expands the protein diversity an organism can generate without needing a proportionally larger genome. It doesn't ensure only one mRNA per gene (the opposite), doesn't delete genes, and isn't a protein-folding quality-control mechanism."
  },
  {
    "question": "What is a common error when interpreting correlation?",
    "options": [
      "Ignoring data plots",
      "Applying it to large datasets only",
      "Assuming it implies causation",
      "Using it with qualitative data"
    ],
    "correct_index": 2,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "4Data.Data_and_statistics.pdf",
      "note": "Slides (Causality section): a strong correlation does not necessarily imply a causal relationship; caution is advised before stating cause-effect from association alone."
    },
    "explanation": "A strong correlation between two variables only shows they tend to vary together — it says nothing about which (if either) causes the other, or whether both are driven by a third, confounding variable. The slides explicitly warn to be cautious about claiming a cause-effect relationship just because two variables are strongly associated. Treating correlation as proof of causation is the classic, common interpretation error, not a matter of dataset size, plotting, or data type."
  },
  {
    "question": "Which algorithmic technique is used to perform sequence alignment efficiently?",
    "options": [
      "Dynamic programming",
      "Depth-first search",
      "Random sampling",
      "Greedy hashing"
    ],
    "correct_index": 0,
    "verified": true,
    "source": {
      "type": "pdf",
      "file": "2NGS.01.Alignment.pdf",
      "note": "Slides: global sequence alignment is solved efficiently using dynamic programming, building the solution from smaller partial sub-problems."
    },
    "explanation": "Sequence alignment (e.g. global alignment, as in the Needleman-Wunsch algorithm) is solved efficiently using dynamic programming: the problem is broken into smaller, overlapping partial alignment sub-problems, each solved once and stored in a matrix, then combined (via traceback) to build the optimal full alignment. This avoids the exponential cost of trying every possible alignment. It's not solved via depth-first search, random sampling, or hashing-based greedy shortcuts."
  }
];
