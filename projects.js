// Edit by hand or use the admin dashboard (python server.py).
// Screenshots live in images/projects/<slug>/ and are listed in "images".
const PROJECTS = [
  {
    "slug": "floodsight-ai",
    "title": "FloodSight AI",
    "icon": "🌊",
    "stack": [
      "YOLOv8",
      "U-Net",
      "Flask"
    ],
    "summary": "Maps flooded areas from imagery, counts people and generates a risk assessment report.",
    "images": [],
    "details": {
      "sub": "AI-powered flood detection, prediction, and risk assessment system",
      "over": "An AI-based environmental monitoring application that analyzes rainfall, water levels, weather conditions, and geographical data to estimate flood risk. Machine-learning models identify high-risk areas and provide early warnings through an interactive dashboard.",
      "obj": [
        "Analyze weather and environmental data for flood risk prediction",
        "Train and compare machine-learning models for risk classification",
        "Identify areas with elevated flood probability",
        "Evaluate models using accuracy, precision, recall, F1-score, and ROC-AUC"
      ],
      "flow": [
        "Collect weather, rainfall, and water-level data",
        "Clean and preprocess the dataset",
        "Perform feature engineering and exploratory data analysis",
        "Train and evaluate machine-learning models",
        "Predict flood probability and risk levels",
        "Display results on a dashboard"
      ],
      "stack": [
        "YOLOv8",
        "U-Net",
        "Flask"
      ],
      "feat": [
        "Flood-risk prediction using environmental data",
        "Interactive dashboard for risk visualization",
        "Risk classification into low, medium, and high categories",
        "Model evaluation and performance comparison",
        "Downloadable prediction reports"
      ],
      "note": "This is an experimental flood-risk assessment system. Predictions depend on data quality and model generalization. It should not replace official weather alerts, emergency services, or government flood warnings."
    }
  },
  {
    "slug": "ayurvedic-remedy-chatbot",
    "title": "Ayurvedic Remedy Chatbot",
    "icon": "🪷",
    "stack": [
      "Android Studio",
      "Transformers",
      "Voice"
    ],
    "summary": "App that chats with herb or symptom images and replies with voice messages.",
    "images": [],
    "details": {
      "sub": "AI-powered Ayurvedic knowledge assistant with database integration",
      "over": "A conversational AI application that provides information about medicinal herbs, traditional Ayurvedic remedies, and their commonly described uses. The system combines a structured herbal-remedy database with natural-language processing to retrieve relevant information and answer user questions.",
      "obj": [
        "Build a structured database of medicinal herbs and traditional remedies",
        "Retrieve relevant remedies using user queries",
        "Support multilingual queries and voice-based interaction",
        "Provide clear explanations with appropriate safety information"
      ],
      "flow": [
        "User enters a text or voice query",
        "Process and identify the user's intent",
        "Search the herbal-remedy database",
        "Retrieve relevant information",
        "Generate a contextual response with relevant herbal image",
        "Display or speak the response"
      ],
      "stack": [
        "Android Studio",
        "Transformers",
        "Voice"
      ],
      "feat": [
        "Conversational interface for Ayurvedic information",
        "MySQL database integration for herbal remedies",
        "Natural-language query processing",
        "Optional voice input and text-to-speech output",
        "Multilingual interaction",
        "Herb search and remedy information retrieval"
      ],
      "note": "This application provides educational information about traditional remedies and is not a substitute for medical advice. Remedies may cause adverse effects or interact with medicines. Users should consult a qualified healthcare professional before using treatments."
    }
  },
  {
    "slug": "cancer-detection",
    "title": "Cancer Detection",
    "icon": "🩺",
    "stack": [
      "PyTorch",
      "CNN",
      "Python"
    ],
    "summary": "Detects cancer from an uploaded medical image.",
    "images": [
      {
        "file": "screenshot-1.jpg",
        "caption": "Prediction screen: uploaded image with results from six models"
      }
    ],
    "details": {
      "sub": "Multi-model image classification with a Streamlit interface",
      "over": "A computer-vision and machine-learning application that classifies cancer-related images and compares multiple trained classifiers. A pretrained ResNet18 network extracts image features, and classical machine-learning models run on compact, transformed feature vectors. A Streamlit web app lets users upload an image for prediction and evaluate the saved models.",
      "obj": [
        "Extract visual features from images with a pretrained ResNet18",
        "Standardize the features with a saved scaler and reduce them with PCA",
        "Train and compare Random Forest, Decision Tree, AdaBoost, KNN, LDA and XGBoost",
        "Report accuracy, precision, recall, F1-score, confusion matrices and ROC-AUC"
      ],
      "flow": [
        "Upload image",
        "OpenCV decode and resize",
        "ResNet18 features",
        "Scaler + PCA",
        "6 classifiers",
        "Predictions + confidence"
      ],
      "stack": [
        "PyTorch",
        "CNN",
        "Python"
      ],
      "feat": [
        "Multi-model comparison on the same held-out test set",
        "Single-image prediction from JPG, PNG, BMP and TIFF uploads",
        "Evaluation dashboard with accuracy chart, confusion matrices and ROC curves",
        "CSV export of the evaluation summary",
        "Saved test split and consistent OpenCV preprocessing for reproducible results"
      ],
      "note": "Experimental research prototype. This is not a medical diagnostic system and must not be used to diagnose cancer or guide treatment. Clinical use would need clinical validation, external testing, bias and safety assessment, and review by medical professionals."
    }
  },
  {
    "slug": "medicinal-herb-detection",
    "title": "Medicinal Herb Detection",
    "icon": "🌿",
    "stack": [
      "PyTorch",
      "CNN",
      "Python"
    ],
    "summary": "Identifies medicinal herbs from images.",
    "images": [],
    "details": {
      "sub": "AI-powered medicinal plant identification using computer vision",
      "over": "A computer-vision application that identifies medicinal herbs from uploaded images using a trained deep-learning image classifier. The system predicts the most likely plant category and displays related botanical information from a structured reference database.",
      "obj": [
        "Prepare and preprocess a labeled medicinal plant image dataset",
        "Train a CNN or transfer-learning model for herb classification",
        "Identify medicinal plant categories from uploaded images",
        "Evaluate model performance using precision, recall, and F1-score",
        "Connect predictions to a medicinal plant information database"
      ],
      "flow": [
        "Upload or capture a plant image",
        "Resize and normalize the image",
        "Extract visual features using the trained model",
        "Predict the medicinal herb category",
        "Retrieve relevant botanical information",
        "Display the prediction and model confidence"
      ],
      "stack": [
        "PyTorch",
        "CNN",
        "Python"
      ],
      "feat": [
        "Medicinal herb image classification",
        "Support for multiple plant categories",
        "Top predicted classes with confidence scores",
        "Herb information and commonly documented uses",
        "Image upload and prediction interface",
        "Model performance evaluation dashboard"
      ],
      "note": "Identification accuracy depends on image quality, plant similarity, and dataset coverage. Predictions are not sufficient to establish that a plant is safe to consume or medicinally effective. Expert verification is recommended before handling or using an unidentified plant."
    }
  },
  {
    "slug": "human-action-detection",
    "title": "Human Action Detection",
    "icon": "🏃",
    "stack": [
      "Android Studio",
      "PyTorch"
    ],
    "summary": "App for detecting human activities and actions.",
    "images": [],
    "details": {
      "sub": "Real-time human activity recognition using computer vision and deep learning",
      "over": "A video-analysis application that detects people and recognizes selected human activities from video streams or uploaded recordings. The system can combine person detection, pose estimation, and temporal deep-learning models to identify movements across consecutive frames.",
      "obj": [
        "Detect people in video frames",
        "Extract body keypoints and movement-related features",
        "Train a temporal model to recognize selected human activities",
        "Classify activities from video sequences",
        "Evaluate performance using class-wise precision, recall, and F1-score"
      ],
      "flow": [
        "Upload a video or initialize a video stream",
        "Extract and preprocess video frames",
        "Detect people and estimate body poses",
        "Build temporal features from consecutive frames",
        "Classify human activities",
        "Display annotated frames and activity predictions",
        "Generate evaluation reports"
      ],
      "stack": [
        "Android Studio",
        "PyTorch"
      ],
      "feat": [
        "Video-based human activity recognition",
        "Person detection and pose estimation",
        "Frame-by-frame activity labels",
        "Temporal analysis of human movement",
        "Annotated video output",
        "Classification metrics and confusion matrix"
      ],
      "note": "Recognition accuracy may decrease with occlusion, poor lighting, unusual camera angles, or activities not represented in training data. The system should be tested for privacy, fairness, and reliability before deployment in public or safety-critical environments."
    }
  },
  {
    "slug": "football-video-summarizer",
    "title": "Football Video Summarizer",
    "icon": "⚽",
    "stack": [
      "PyTorch",
      "OpenCV",
      "Transformers"
    ],
    "summary": "Detects goals and misses in an uploaded match video and summarizes it.",
    "images": [],
    "details": {
      "sub": "AI-powered football highlight detection and automatic video summarization",
      "over": "A computer-vision application that analyzes football footage to detect players, the ball, and important match events. Object detection and video-frame analysis help identify potential highlights, which are combined into a shorter summary of important moments in the original match.",
      "obj": [
        "Detect players, the ball, and relevant objects using YOLO",
        "Analyze video frames to identify potential match events",
        "Classify selected events such as goals and missed opportunities",
        "Extract timestamps and highlight segments",
        "Generate a concise summary video from detected events"
      ],
      "flow": [
        "Upload a football match video",
        "Extract frames and preprocess the footage",
        "Run object detection using YOLO",
        "Track relevant objects across frames",
        "Analyze candidate events and their timestamps",
        "Select and combine highlight clips",
        "Export the summarized video"
      ],
      "stack": [
        "PyTorch",
        "OpenCV",
        "Transformers"
      ],
      "feat": [
        "Automated football video analysis",
        "Player and ball detection",
        "Potential goal and missed-chance identification",
        "Timestamped highlight generation",
        "Customizable summary duration",
        "Exportable highlight video"
      ],
      "note": "Event detection is experimental and may miss important moments or identify false highlights due to camera cuts, occlusion, replay footage, or ball visibility. Reliable event classification requires suitable annotated match videos and validation across different competitions and camera setups."
    }
  },
  {
    "slug": "autism-detection",
    "title": "Autism Detection",
    "icon": "🧩",
    "stack": [
      "PyTorch",
      "Speech",
      "Video"
    ],
    "summary": "Screens for autism using video and speech notes.",
    "images": [],
    "details": {
      "sub": "Multimodal behavioral pattern analysis using video, audio, and machine learning",
      "over": "An experimental research application that analyzes selected behavioral patterns in video and audio using computer vision, pose estimation, speech processing, and machine-learning techniques. The system extracts movement and speech-related features and presents model-generated observations for research purposes.",
      "obj": [
        "Extract body landmarks and movement features from video",
        "Analyze selected repetitive movement patterns",
        "Process speech or audio features using suitable models",
        "Combine relevant features for experimental behavioral classification",
        "Evaluate models using appropriate classification metrics",
        "Present results with transparent confidence and limitations"
      ],
      "flow": [
        "Upload a consented video or audio recording",
        "Preprocess video frames and audio segments",
        "Extract pose landmarks and movement features",
        "Transcribe or analyze audio when enabled",
        "Generate model-based behavioral indicators",
        "Combine selected features for research analysis",
        "Display results and evaluation metrics"
      ],
      "stack": [
        "PyTorch",
        "Speech",
        "Video"
      ],
      "feat": [
        "Video-based pose and movement analysis",
        "Experimental repetitive-action recognition",
        "Optional speech transcription and text analysis",
        "Multimodal feature integration",
        "Visualized observations and model scores",
        "Evaluation dashboard for research experiments"
      ],
      "note": "This is an experimental research tool and cannot diagnose autism or determine an individual's developmental status. Behavioral patterns alone are not diagnostic. Any clinical assessment must be performed by qualified professionals using validated methods, appropriate consent, and safeguards against bias and misuse."
    }
  },
  {
    "slug": "asl-sign-to-text",
    "title": "ASL to Text & Sound",
    "icon": "🤟",
    "stack": [
      "MediaPipe",
      "PyTorch",
      "TTS"
    ],
    "summary": "Converts ASL hand signs into text and spoken audio.",
    "images": [],
    "details": {
      "sub": "Real-time American Sign Language recognition with text and speech output",
      "over": "A computer-vision application that recognizes selected American Sign Language signs from webcam input or recorded video and converts the predicted signs into text and optional spoken output. Hand landmarks and a trained image or sequence-classification model support sign recognition.",
      "obj": [
        "Capture hand gestures using a webcam or video input",
        "Extract hand landmarks using MediaPipe",
        "Train a model to classify supported ASL signs",
        "Convert recognized signs into readable text",
        "Generate optional text-to-speech output",
        "Evaluate recognition accuracy for individual sign classes"
      ],
      "flow": [
        "Capture a video frame",
        "Detect and extract hand landmarks",
        "Normalize the landmark or image features",
        "Classify the gesture using the trained model",
        "Convert predictions into text",
        "Generate speech using a text-to-speech engine",
        "Display the recognized sign and confidence"
      ],
      "stack": [
        "MediaPipe",
        "PyTorch",
        "TTS"
      ],
      "feat": [
        "Webcam-based sign recognition",
        "Single-hand gesture recognition where supported",
        "ASL sign-to-text conversion",
        "Optional text-to-speech output",
        "Live prediction and confidence display",
        "Recognition performance evaluation"
      ],
      "note": "The system recognizes only the signs included in its training dataset. ASL includes facial expressions, grammar, and motion-dependent signs that may not be captured by a static-image model. Predictions should not be treated as a complete or universally reliable sign-language translation."
    }
  },
  {
    "slug": "cardio-disease-prediction",
    "title": "Cardio Disease Prediction",
    "icon": "❤️",
    "stack": [
      "Python",
      "ML",
      "PyTorch"
    ],
    "summary": "Predicts cardiovascular disease risk from patient reports.",
    "images": [],
    "details": {
      "sub": "Machine-learning-based cardiovascular risk classification and model comparison",
      "over": "A machine-learning application that analyzes selected health and lifestyle variables to estimate cardiovascular disease risk categories. Multiple classification algorithms can be trained and compared to evaluate predictive performance and understand which features contribute to model predictions.",
      "obj": [
        "Clean and preprocess structured cardiovascular datasets",
        "Perform exploratory data analysis and feature engineering",
        "Train and compare Random Forest, XGBoost, and other classifiers",
        "Evaluate models using precision, recall, F1-score, and ROC-AUC",
        "Analyze model errors and feature importance",
        "Build an interface for entering patient-related data"
      ],
      "flow": [
        "Load the cardiovascular dataset",
        "Handle missing values and encode categorical variables",
        "Split data into training and testing sets",
        "Train individual and ensemble classifiers",
        "Evaluate predictions using classification metrics",
        "Enter new feature values through the interface",
        "Display the predicted risk category and model scores"
      ],
      "stack": [
        "Python",
        "ML",
        "PyTorch"
      ],
      "feat": [
        "Multiple cardiovascular classification models",
        "Structured health-data input form",
        "Model comparison dashboard",
        "Confusion matrix and ROC curves",
        "Feature importance visualization",
        "Downloadable evaluation reports"
      ],
      "note": "This project is for educational research and is not a medical diagnostic or treatment tool. Model predictions may be affected by dataset bias, missing variables, and population differences. Clinical decisions must be made by qualified healthcare professionals using validated assessments."
    }
  },
  {
    "slug": "drowsiness-detection",
    "title": "Drowsiness Detection",
    "icon": "😴",
    "stack": [
      "MediaPipe",
      "OpenCV",
      "Python"
    ],
    "summary": "Sounds an alarm when eyes stay closed for more than 1.5 seconds.",
    "images": [],
    "details": {
      "sub": "Computer-vision-based driver drowsiness monitoring and alert system",
      "over": "A real-time computer-vision application that monitors selected facial and eye-related indicators to estimate possible drowsiness. The system analyzes video frames using face detection, eye-state classification, and temporal features to generate alerts when sustained signs of reduced alertness are detected.",
      "obj": [
        "Detect faces and eye regions from video frames",
        "Estimate eye state using image classification or facial landmarks",
        "Measure temporal indicators such as prolonged eye closure",
        "Classify alert and possible drowsy states",
        "Generate alerts when configured thresholds are exceeded",
        "Evaluate performance on labeled video data"
      ],
      "flow": [
        "Capture video from a webcam or camera",
        "Detect the face and eye regions",
        "Extract and preprocess facial features",
        "Estimate eye state and relevant temporal indicators",
        "Calculate the drowsiness score",
        "Trigger an alert when the threshold is reached",
        "Display status and evaluation results"
      ],
      "stack": [
        "MediaPipe",
        "OpenCV",
        "Python"
      ],
      "feat": [
        "Live webcam monitoring",
        "Face and eye-state detection",
        "Temporal drowsiness indicators",
        "Visual or audio alerts",
        "Configurable detection thresholds",
        "Performance evaluation on labeled recordings"
      ],
      "note": "The system may produce false alarms or miss drowsiness because of lighting, eyewear, camera placement, and individual differences. It is not a substitute for adequate sleep, safe driving practices, or validated vehicle safety systems."
    }
  },
  {
    "slug": "harmful-page-detector",
    "title": "Harmful Page Detector",
    "icon": "🛡️",
    "stack": [
      "Chrome Extension",
      "JavaScript",
      "NLP"
    ],
    "summary": "Flags harmful or misleading webpages the moment they load.",
    "images": [],
    "details": {
      "sub": "AI-powered website safety analysis and suspicious-page risk classification",
      "over": "A website analysis application that evaluates URLs and page content to identify potentially harmful or suspicious websites. It combines URL structure analysis, webpage text extraction, and machine-learning-based classification to produce a risk score and explain the signals contributing to the result.",
      "obj": [
        "Extract structural features from URLs",
        "Analyze webpage content using text-processing techniques",
        "Identify suspicious patterns associated with phishing or malicious pages",
        "Train and evaluate a website classification model",
        "Generate a risk score with interpretable indicators",
        "Provide an interface for submitting and reviewing URLs"
      ],
      "flow": [
        "Enter a website URL",
        "Validate and normalize the URL",
        "Extract permitted webpage text and URL features",
        "Analyze text similarity and suspicious patterns",
        "Run the trained classification model",
        "Calculate and display the risk score",
        "Present findings and warning indicators"
      ],
      "stack": [
        "Chrome Extension",
        "JavaScript",
        "NLP"
      ],
      "feat": [
        "URL structure and webpage content analysis",
        "Machine-learning-based risk classification",
        "Phishing-related indicator detection",
        "Risk score and explanation dashboard",
        "URL history and result export where implemented",
        "Streamlit interface for website checks"
      ],
      "note": "The classifier cannot guarantee that a website is safe or malicious. Websites can change rapidly, and legitimate pages may trigger false positives. URL scanning should use secure request handling, timeouts, and protections against server-side request forgery (SSRF). Users should avoid entering passwords or sensitive data into suspicious websites."
    }
  },
  {
    "slug": "ai-commerce-platform",
    "title": "AI Commerce Platform",
    "icon": "🛒",
    "stack": [
      "Android Studio",
      "Chatbot",
      "Alerts"
    ],
    "summary": "Store with a custom AI chatbot using menu and health preferences, plus delivery tracking and alert messages.",
    "images": [],
    "details": {
      "sub": "AI-powered e-commerce platform with intelligent product discovery and automated assistance",
      "over": "A modern e-commerce application that combines product catalog management, inventory tracking, order processing, and AI-driven customer assistance. The platform can integrate conversational agents to answer product questions, help customers discover relevant products, and automate selected store operations through secure backend services.",
      "obj": [
        "Build a structured product catalog and inventory database",
        "Implement product search, filtering, and category navigation",
        "Support cart management and order processing",
        "Integrate an AI assistant for product-related queries",
        "Provide administrative tools for products, stock, and orders",
        "Maintain secure authentication and transaction workflows"
      ],
      "flow": [
        "Load products and inventory from the database",
        "Display the product catalog",
        "Process customer search and product questions",
        "Use AI retrieval to provide relevant product information",
        "Manage cart and checkout operations",
        "Record orders and update inventory",
        "Display order status and administrative analytics"
      ],
      "stack": [
        "Android Studio",
        "Chatbot",
        "Alerts"
      ],
      "feat": [
        "Product catalog and category management",
        "Search, filtering, and product recommendations",
        "AI-powered shopping assistant",
        "Inventory and stock management",
        "Shopping cart and order tracking",
        "Admin dashboard and sales analytics",
        "Database integration and API-based services"
      ],
      "note": "The production platform requires secure authentication, access control, payment-provider integration, data protection, and reliable inventory synchronization. AI-generated product information should be grounded in verified catalog data. Payment details should be handled by compliant payment providers rather than stored directly without appropriate safeguards."
    }
  }
];
