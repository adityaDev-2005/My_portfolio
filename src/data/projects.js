// Add a new project by adding a new object to this array.
// No component code needs to change. Leave fields as "" or [] if unavailable —
// the UI will show them as placeholders and hide empty links automatically.

const projects = [
  {
    id: "dhwani-kavach",
    title: "Dhwani-Kavach",
    category: "Audio Forensics",
    description:
      "Real-time audio forensics and voice fraud detection system built for the UCO Bank x IIT Kharagpur PSB Hackathon — Top 20 finalist.",
    image: "",
    technologies: ["Python", "Signal Processing", "Machine Learning"],
    githubUrl: "https://github.com/Chiranjib-x/Dhwani-Kavach",
    demoUrl: "",
    details: {
      problem:
        "AI voice-cloning fraud in banking — attackers using synthetic voices to impersonate customers on live calls.",
      objective:
        "Flag high-risk fraudulent calls in real time while preserving caller privacy and supporting on-premise deployment.",
      technologies: ["Python", "Spectrogram analysis", "Voice authentication"],
      architecture:
        "Combines synthetic-voice (deepfake audio) detection via spectrogram analysis, voice authentication, threat scoring, and conversational analysis into a single real-time pipeline.",
      implementation:
        "Analyzes live call audio to detect signs of AI-cloned voices, cross-references voice authentication signals, and computes a threat score used to flag high-risk calls within 10 seconds.",
      results:
        "Selected among the Top 20 finalists at the PSB Hackathon (UCO Bank x IIT Kharagpur) out of the national competition field.",
      challenges:
        "Balancing detection sensitivity against false positives, and keeping the full detection pipeline fast enough to flag calls within a 10-second window.",
      lessonsLearned:
        "Placeholder — add what you learned building this under hackathon time constraints.",
      links: {
        github: "https://github.com/Chiranjib-x/Dhwani-Kavach",
        demo: "",
        documentation: "",
        video: "",
      },
    },
  },
  {
    id: "deepfake-classification",
    title: "Deepfake Classification",
    category: "Computer Vision",
    description:
      "A CNN-based pipeline to classify real vs. deepfake images, built for a college hackathon.",
    image: "",
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV", "Scikit-learn"],
    githubUrl: "https://github.com/adityaDev-2005/model_arena_hack",
    demoUrl: "",
    details: {
      problem:
        "Distinguishing real faces from AI-generated (deepfake) faces in a labeled image dataset.",
      objective:
        "Build a deep learning classifier that generalizes well to unseen real vs. deepfake images.",
      technologies: ["TensorFlow", "Convolutional Neural Networks", "OpenCV", "Scikit-learn"],
      architecture:
        "Multi-layer CNN architecture, tuned iteratively across learning rate, batch size, and layer depth.",
      implementation:
        "Trained on a hackathon-provided labeled dataset of real and AI-generated faces, using OpenCV and TensorFlow data pipelines for augmentation (rotation, flipping, brightness adjustment) to improve generalization and reduce overfitting.",
      results:
        "Evaluated using accuracy, precision, recall, and F1-score as the core classification metrics.",
      challenges:
        "Reducing overfitting on a limited hackathon dataset while keeping training time within the competition window.",
      lessonsLearned: "Placeholder — add what you learned from this project.",
      links: {
        github: "https://github.com/adityaDev-2005/model_arena_hack",
        demo: "",
        documentation: "",
        video: "",
      },
    },
  },
  {
    id: "satellite-image-generator",
    title: "Satellite Image Generator",
    category: "Geospatial / Computer Vision",
    description:
      "A geospatial tool that generates high-resolution satellite images from a location name or GPS coordinates.",
    image: "",
    technologies: ["Python", "GeoPandas", "Shapely", "Contextily", "Matplotlib"],
    githubUrl: "https://github.com/ToxicKoder/Satellite-image-generator",
    demoUrl: "",
    details: {
      problem:
        "Generating usable satellite imagery for a location typically requires specialized GIS software.",
      objective:
        "Build a Python-based tool that generates high-resolution satellite imagery from a location name or GPS coordinates without needing GIS software.",
      technologies: ["GeoPandas", "Shapely", "Contextily", "Matplotlib"],
      architecture:
        "End-to-end pipeline handling coordinate transformation, bounding-box computation, and vector overlay rendering on raster tile maps, with Contextily for dynamic tile fetching and Matplotlib for image export.",
      implementation:
        "Supports customizable zoom levels, resolutions, and multiple tile providers, converting a location name or GPS input into a rendered satellite image.",
      results: "Placeholder — add real results once available.",
      challenges:
        "Handling coordinate transformation and tile-provider integration reliably across different zoom levels and resolutions.",
      lessonsLearned:
        "Identified extension potential for obstacle detection on generated imagery, applicable to autonomous vehicle and drone navigation pipelines.",
      links: {
        github: "https://github.com/ToxicKoder/Satellite-image-generator",
        demo: "",
        documentation: "",
        video: "",
      },
    },
  },
  {
    id: "drowsiness-detection",
    title: "Drowsiness Detection System",
    category: "Computer Vision",
    description:
      "A real-time driver drowsiness detection system using facial landmark detection and the Eye Aspect Ratio (EAR) algorithm.",
    image: "",
    technologies: ["Python", "OpenCV", "dlib", "Machine Learning"],
    githubUrl: "https://github.com/ToxicKoder/Drowsiness-Detection-System",
    demoUrl: "",
    details: {
      problem: "Detecting driver drowsiness in real time to help prevent accidents.",
      objective:
        "Classify eye closure states in real time and trigger an alert before prolonged drowsiness becomes dangerous.",
      technologies: ["OpenCV", "dlib", "Eye Aspect Ratio (EAR)"],
      architecture:
        "Facial landmark detection feeding an Eye Aspect Ratio (EAR) calculation, with a threshold-based alert mechanism layered on top.",
      implementation:
        "Tracks facial landmarks in real time, computes EAR to classify eye closure state, and triggers an audible warning on prolonged eye closure — simulating a driver safety assist system.",
      results:
        "Achieved 84.56% overall accuracy with 1.0 precision (zero false positives) on evaluation data; recall was 0.24, a deliberate threshold-tuning tradeoff favoring false-alarm avoidance over detection sensitivity.",
      challenges:
        "Tuning the EAR threshold to prioritize avoiding false alarms, which came at the cost of lower recall — flagged as an area for future iteration.",
      lessonsLearned: "Placeholder — add what you learned from this project.",
      links: {
        github: "https://github.com/ToxicKoder/Drowsiness-Detection-System",
        demo: "",
        documentation: "",
        video: "",
      },
    },
  },
];

export default projects;
