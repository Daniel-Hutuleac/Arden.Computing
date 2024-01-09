// script.js
  function shrinkVideo() {
    // Get the container
    var container = document.getElementById('videoContainer');
    var welcomeText = document.getElementById('welcomeText');
    // Add the 'small' class to the container
    container.classList.add('small');
    welcomeText.style.display = 'none';
    // Redirect or perform other actions after a slight delay
    setTimeout(function(){
        window.location.href = 'HomePage.html'; 
    }, 2000); // delay time in milliseconds
}

  // menu button toggle
  var menuButton = document.getElementById('menuButton');
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      var navList = document.querySelector('nav ul');
      if (navList.style.display === 'block') {
        navList.style.display = 'none';
      } else {
        navList.style.display = 'block';
      }
    });
  }
  
  // Resize event listener
  var navList = document.getElementById('navList');
  window.addEventListener('resize', function() {
    if (navList) {
      if (window.innerWidth > 600) {
        navList.style.display = 'block'; // Ensure it's visible on larger screens
      } else {
        navList.style.display = 'none'; // Hide on smaller screens
      }
    }
  });

 var showRegisterForm = document.getElementById('showRegisterForm');
  if(showRegisterForm){
    showRegisterForm.addEventListener('click', function(){
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    
    // Toggle the display of forms
    if (registerForm.style.display === 'none') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }
  }
    )};
  


function checkPasswords() {
  var password = document.getElementById('newPassword').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Check if passwords match
  if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return false; // Prevent form submission
  }
  return true; // Allow form submission
}

function togglePasswordVisibility(inputId, toggleIcon) {
  var passwordInput = document.getElementById(inputId);
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.textContent = '🔒'; 
  } else {
      passwordInput.type = 'password';
      toggleIcon.textContent = '🔓'; 
  }
}
document.addEventListener("DOMContentLoaded", function() {
const questions = [
  {
      "id": 1,
      "question": "What is the normal rate range for a sinus rhythm?",
      "options": [
          "40-60 bpm",
          "60-100 bpm",
          "100-140 bpm",
          "140-180 bpm"
      ],
      "answer": "60-100 bpm",
      "explanation": "This range represents the heart's natural pace set by the sinoatrial node under resting conditions and balanced by the autonomic nervous system."
  },
  {
    "id": 2,
    "question": "What key feature on the ECG indicates atrial fibrillation?",
    "options": [
        "Regular R-R intervals",
        "Irregular R-R intervals with no distinct P waves",
        "Widened QRS complexes",
        "Tall T waves"
    ],
    "answer": "Irregular R-R intervals with no distinct P waves",
    "explanation":"The key feature on the ECG that indicates atrial fibrillation is the absence of distinct P waves, coupled with irregularly irregular R-R intervals. This occurs because, in atrial fibrillation, the electrical signals in the atria are chaotic and disorganised, leading to a rapid and irregular activation of the atria. Instead of a single, coordinated impulse originating from the sinoatrial node, multiple erratic impulses generate throughout the atria, causing a quivering or fibrillation. This results in a baseline that looks irregular and erratic (fibrillatory waves) instead of the smooth, consistent pattern seen with normal P waves. The irregularly irregular R-R intervals are due to the erratic conduction of impulses to the ventricles, causing them to contract irregularly and at varying intervals."
},
{
  "id":3,
  "question": "Describe the ECG characteristics of a first-degree heart block",
  "options": [
      "Prolonged PR interval > 0.20 seconds",
      "Missing QRS complexes",
      "Alternating strong and weak QRS complexes",
      "Rapid heart rate"
  ],
  "answer": "Prolonged PR interval > 0.20 seconds",
  "explanation":"In a first-degree heart block, the primary ECG characteristic is a prolonged PR interval, which is longer than 200 milliseconds (one small square on the ECG is 40 milliseconds). The PR interval is the time from the onset of the P wave (indicating atrial depolarization) to the start of the QRS complex (indicating ventricular depolarization). In first-degree heart block, every atrial impulse is conducted to the ventricles, but there is a consistent delay in the AV node's conduction.The key points of first-degree heart block on an ECG are: Prolonged PR interval: Longer than 200 ms, but constant for each cardiac cycle.Regular Rhythm: Despite the delay, the overall heart rhythm remains regular. P wave before each QRS Complex: There is a P wave before each QRS complex, indicating that the atrial impulse eventually reaches the ventricles, albeit delayed. This condition often doesn't result in any noticeable symptoms and may be found incidentally during an ECG for another reason. However, it can indicate underlying heart disease or an effect of medications."
},
{
  "id": 4,
  "question": "What are the defining features of ventricular tachycardia on an ECG?",
  "options": [
      "Narrow QRS complexes",
      "P waves preceding each QRS complex",
      "Wide QRS complexes (> 0.12 seconds) with a rate over 100 bpm",
      "Regular R-R intervals with distinct P waves"
  ],
  "answer": "Wide QRS complexes (> 0.12 seconds) with a rate over 100 bpm",
  "explanation":"Ventricular tachycardia (VT) on an ECG is characterised by a rapid heart rate over 100 beats per minute, typically 100 to 250 bpm, with wide and abnormal QRS complexes longer than 120 ms due to the abnormal ventricular depolarization. The rhythm is usually regular, though it can be slightly irregular, and often shows AV dissociation where the atria and ventricles beat independently, leading to the absence or dissociation of P waves from the QRS complexes. This condition is serious, potentially life-threatening, and requires immediate medical attention, especially in individuals with symptoms or underlying heart conditions."
},
{
  "id": 5,
  "question": "What ECG changes might suggest myocardial ischemia?",
  "options": [
      "Tall T waves",
      "ST-segment depression or T wave inversion",
      "Prolonged QT interval",
      "Short PR interval"
  ],
  "answer": "ST-segment depression or T wave inversion",
  "explanation":"Myocardial ischemia on an ECG is primarily indicated by ST-segment depression, typically horizontal or downsloping, and T-wave inversion, which represents a reversible injury to the heart muscle. In more severe cases, or with ongoing injury, ST-segment elevation may occur, indicating transmural ischemia often associated with acute myocardial infarction. Additionally, pathological Q waves might develop, suggesting a past or evolving myocardial infarction. These changes reflect the impaired blood flow and oxygenation to the myocardium and are critical in diagnosing and determining the severity of ischemic events."
},
{
  "id": 6,
  "question": "What could a widened QRS complex indicate?",
  "options": [
      "Bundle branch block or ventricular rhythm ",
      "Atrial fibrillation",
      "First-degree heart block",
      "Sinus bradycardia"
  ],
  "answer": "Bundle branch block or ventricular rhythm ",
  "explanation":"A widened QRS complex, typically defined as a duration greater than 120 milliseconds, could indicate several cardiac conditions. It often suggests a delay in the ventricular conduction system, such as bundle branch block (either right or left bundle branch block) where the electrical impulse is delayed in one branch of the conduction pathway. It could also indicate ventricular hypertrophy, pre-excitation syndromes like Wolff-Parkinson-White syndrome, a ventricular rhythm originating from the ventricles, or ventricular tachycardia. Additionally, electrolyte imbalances, drug effects, or structural heart diseases might widen the QRS complex. Identifying the underlying cause is crucial as it may reflect significant cardiac pathology or guide treatment decisions."
},
{
  "id": 7,
  "question": "Describe a method to estimate the heart rate using an ECG strip.",
  "options": [
      "Count the number of QRS complexes in 6 seconds and multiply by 10",
      "Count the number of large squares between R-R intervals and divide 300 by this number ",
      "Measure the PR interval duration",
      "Count the number of T waves in 10 seconds"
  ],
  "answer": "Count the number of large squares between R-R intervals and divide 300 by this number ",
  "explanation":"To estimate heart rate using an ECG strip, the 300 rule is commonly employed for paper speed at 25 mm/s. First, identify an R wave that aligns with a bold vertical line; then count the number of large squares between consecutive R waves. Each large square represents 0.20 seconds. Divide 300 by the number of large squares between the R waves to get the heart rate in beats per minute (bpm). For instance, if there are 5 large squares between R waves, the heart rate is 300/5 = 60 bpm. This method is particularly useful for regular rhythms and provides a quick approximation of the heart rate."
},
{
  "id": 8,
  "question": "You are presented with an ECG showing irregular rhythm, absent P waves, and varying QRS complexes. What is the most likely diagnosis?",
  "options": [
      "Atrial fibrillation ",
      "Ventricular fibrillation",
      "Third-degree heart block",
      "Sinus tachycardia"
  ],
  "answer": "Atrial fibrillation ",
  "explanation":"An ECG showing an irregular rhythm, absent P waves, and varying QRS complexes most likely indicates atrial fibrillation with variable conduction. Atrial fibrillation is characterized by rapid, chaotic atrial activity leading to an irregularly irregular ventricular response, reflected in the irregular R-R intervals. The absence of P waves suggests the atria are not depolarizing in the typical coordinated manner, and instead, there's a quivering or fibrillatory activity. Varying QRS complexes may arise due to irregular conduction of impulses to the ventricles or varying degrees of block at the AV node, common in atrial fibrillation. This presentation is distinctive for atrial fibrillation, a common type of arrhythmia associated with significant cardiovascular morbidity and mortality."
},
{
  "id": 9,
  "question": "What is a characteristic ECG finding in STEMI?",
  "options": [
      "T wave inversion",
      "ST segment elevation ",
      "PR interval prolongation",
      "Q wave development"
  ],
  "answer": "ST segment elevation ",
  "explanation":"A characteristic electrocardiogram (ECG) finding in ST-Elevation Myocardial Infarction (STEMI) is significant ST-segment elevation. Typically, this elevation is seen in consecutive leads associated with the area of the heart affected by the infarction and is defined as an elevation of >1mm (0.1mV) in all leads other than leads V2-V3, where the following criteria are applied: >2mm in men under 40, >2.5mm in men aged 40 and older, or >1.5mm in women of any age. Additionally, STEMI may show a new left bundle branch block (LBBB), pathological Q waves indicating necrosis, and reciprocal changes (ST depression) in leads opposite the infarcted area. These ECG changes reflect acute injury and are critical in diagnosing STEMI, necessitating immediate medical intervention to restore blood flow to the affected myocardium."
},
{
  "id": 10,
  "question": "What ECG pattern is indicative of Torsades de Pointes?",
  "options": [
      "Twisting peaks of QRS complexes",
      "Consistently wide QRS complexes",
      "Regular R-R intervals",
      "Isolated P wave inversion"
  ],
  "answer": "Twisting peaks of QRS complexes",
  "explanation":"The electrocardiogram (ECG) pattern indicative of Torsades de Pointes, a specific type of polymorphic ventricular tachycardia, is characterised by a distinctive twisting of the points of the QRS complexes around the isoelectric line, which appears to change amplitude and cycle in a sine wave pattern. The heart rate is usually fast, and the QRS complexes vary in amplitude, polarity, and cycle length, giving the appearance of a party streamer twisting in the wind. This arrhythmia is often associated with a prolonged QT interval, which may be congenital or acquired due to certain medications, electrolyte imbalances, or other medical conditions. Torsades de Pointes is a serious and potentially life-threatening condition that requires immediate medical intervention, as it can degenerate into ventricular fibrillation or lead to sudden cardiac death."
},
{
  "id": 11,
  "question": "How can you distinguish SVT from Ventricular Tachycardia on an ECG?",
  "options": [
      "Presence of P waves in SVT",
      "Longer QT interval in SVT",
      "Taller T waves in Ventricular Tachycardia",
      "Irregular rhythm in Ventricular Tachycardia"
  ],
  "answer": "Presence of P waves in SVT",
  "explanation":"Distinguishing Supraventricular Tachycardia (SVT) from Ventricular Tachycardia (VT) on an ECG involves examining several key features. SVT typically presents with a narrow QRS complex (unless there is aberrant conduction), and P waves might be absent, hidden within the QRS complex, or abnormal. Ventricular Tachycardia usually shows a wide QRS complex (>120 ms), often with an abnormal axis and bizarre QRS morphology, indicating the ventricular origin of the rhythm. Capture beats or fusion beats are more specific to VT, and the presence of AV dissociation (where atrial and ventricular activities are independent of each other) is a strong indicator of VT. Additionally, a history of structural heart disease favors VT. Clinicians often use specific criteria and algorithms, such as the Brugada criteria, to differentiate these rhythms, as accurate diagnosis is crucial for appropriate treatment and prognosis. In uncertain cases, treating for VT is common due to its potential lethality."
},
{
  "id": 12,
  "question": "What does a prolonged PR interval indicate?",
  "options": [
      "Atrial flutter",
      "Ventricular fibrillation",
      "Sinus arrhythmia",
      "First-degree heart block "
  ],
  "answer": "First-degree heart block ",
  "explanation":"A prolonged PR interval on an electrocardiogram (ECG), defined as longer than 200 milliseconds, typically indicates first-degree atrioventricular (AV) block. In this condition, electrical signals from the atria to the ventricles are delayed but still complete their journey, leading to a longer time between the initiation of atrial contraction (P wave) and ventricular contraction (QRS complex). While a prolonged PR interval is the hallmark of first-degree AV block, it can also be seen in other conditions such as increased vagal tone, especially in athletes or during sleep, or as a result of certain medications like beta-blockers, calcium channel blockers, or digitalis. It is important to consider the clinical context and patient symptoms, as a prolonged PR interval may be a benign finding or represent more serious underlying heart disease depending on the situation."
},
{
  "id": 13,
  "question": "What is a hallmark sign of atrial flutter on an ECG?",
  "options": [
      "Prolonged QT interval",
      "Sawtooth-like flutter waves",
      "Irregular QRS complexes",
      "Absence of P waves"
  ],
  "answer": "Sawtooth-like flutter waves",
  "explanation":"A hallmark sign of atrial flutter on an electrocardiogram (ECG) is the presence of sawtooth like flutter waves, particularly visible in the inferior leads (II, III, and aVF) and sometimes in the V1 lead, known as F waves. These flutter waves result from a rapid, regular atrial rate typically around 250-350 beats per minute, which gives the baseline of the ECG a distinctive sawtooth appearance. The ventricular response in atrial flutter is often a regular rhythm, especially if there is a fixed block (commonly 2:1) at the atrioventricular node, although the exact ventricular rate can vary based on the conduction ratio. Atrial flutter is a type of supraventricular tachycardia and is considered a reentrant tachyarrhythmia, often requiring medical intervention for rate control or rhythm conversion."
},
{
  "id": 14,
  "question": "What defines sinus bradycardia on an ECG?",
  "options": [
      "Heart rate above 100 bpm",
      "Heart rate less than 60 bpm with normal waveforms",
      "Widened QRS complexes",
      "Absent P waves"
  ],
  "answer": "Heart rate less than 60 bpm with normal waveforms",
  "explanation":"Sinus bradycardia on an electrocardiogram (ECG) is defined by a heart rate that is slower than 60 beats per minute, originating from the sinus node, the natural pacemaker of the heart. The ECG characteristics include a regular rhythm with a normal P wave preceding each QRS complex, indicating normal atrial depolarization followed by normal ventricular depolarization, but at a decreased rate. The PR interval and QRS duration are usually within normal limits, reflecting the normal conduction pathway. Sinus bradycardia can be a normal finding in healthy individuals, especially athletes or during sleep, but can also indicate underlying medical conditions or be a side effect of medications. It's important to correlate the heart rate with the patient's symptoms and clinical context to determine its significance."
},
{
  "id": 15,
  "question": "What ECG feature is characteristic of a right bundle branch block?",
  "options": [
      "Shortened PR interval",
      "Inverted T waves in lead II",
      "QRS complex duration >0.12 seconds with an RSR' pattern in V1",
      "ST-segment elevation in leads I and aVL"
  ],
  "answer": "QRS complex duration >0.12 seconds with an RSR' pattern in V1",
  "explanation":"A right bundle branch block (RBBB) on an electrocardiogram (ECG) is characterised by a widened QRS complex greater than 120 milliseconds and a distinctive pattern in the QRS complexes of V1 and V6 leads. In lead V1, there is typically a tall R' wave (rsr', rSR', or RR' pattern), which gives the appearance of an 'M' or 'rabbit ears'. In lead V6, there is often a widened S wave. This widening and pattern are due to the delayed depolarization of the right ventricle, as the electrical impulse first activates the left ventricle and then transverses to the right, causing a secondary R wave in V1 and a wide S wave in V6. Additionally, there is usually a discordant ST segment and T wave change opposite to the direction of the QRS complex, which is considered a secondary change due to the altered depolarization sequence. Right bundle branch block can occur in healthy individuals without heart disease but might also indicate an underlying cardiac or pulmonary condition."
},
{
  "id": 16,
  "question": "What might prominent U waves indicate?",
  "options": [
      "Hypokalemia",
      "Hyperkalemia",
      "Myocardial infarction",
      "Atrial fibrillation"
  ],
  "answer": "Hypokalemia",
  "explanation":"Prominent U waves on an electrocardiogram (ECG) are often indicative of several possible clinical conditions, most commonly associated with hypokalemia (low potassium levels). They can also be seen in conditions causing bradycardia or in the presence of drugs such as digitalis, antiarrhythmics, or intracranial hemorrhage. Prominent U waves are typically defined as U waves that are 1/2 the amplitude of the preceding T wave or more. They are most apparent in the mid- to left precordial leads (V2-V6). While U waves are a normal part of the ECG representing repolarization of the Purkinje fibers, their prominent appearance can signal underlying electrolyte disturbances, especially hypokalemia, or other cardiovascular conditions like severe left ventricular hypertrophy, and they may increase the risk of arrhythmias. Careful evaluation of patient history, symptoms, and possible medication effects is essential to interpret the significance of prominent U waves accurately."
},
{
  "id": 17,
  "question": "What does left axis deviation on an ECG suggest?",
  "options": [
      "Possible left ventricular hypertrophy or left anterior fascicular block",
      "Right ventricular hypertrophy",
      "Inferior myocardial infarction",
      "Normal variant"
  ],
  "answer": "Possible left ventricular hypertrophy or left anterior fascicular block",
  "explanation":"Left axis deviation (LAD) on an electrocardiogram (ECG) suggests that the heart's electrical axis is directed more towards the left side, with a QRS axis typically between -30 to -90 degrees. LAD can indicate a variety of conditions. It's commonly associated with left ventricular hypertrophy, as the increased mass of the left ventricle pulls the axis leftward. It may also be seen in conditions like left anterior fascicular block (LAFB), in which conduction through the left anterior fascicle is delayed or blocked. Other causes can include congenital heart defects, a previous myocardial infarction affecting the left ventricle, or progressive fibrotic changes in the cardiac conduction system. While LAD might be a normal variant in some individuals, particularly in the elderly due to slight shifting of the heart's position, it's often important to consider the patient's clinical context and investigate further if there are signs of underlying cardiac conditions."
},
{
  "id": 18,
  "question": "Which condition is characterised by a rapid heart rate with three or more different P wave morphologies?",
  "options": [
      "Ventricular tachycardia",
      "Atrial fibrillation",
      "Multifocal atrial tachycardia",
      "Sinus tachycardia"
  ],
  "answer": "Multifocal atrial tachycardia",
  "explanation":"The condition characterised by a rapid heart rate with three or more different P wave morphologies is known as Multifocal Atrial Tachycardia (MAT). MAT is typically seen in adults and is often associated with severe pulmonary disease, such as chronic obstructive pulmonary disease (COPD), as well as conditions like congestive heart failure, electrolyte imbalance, or theophylline toxicity. The heart rate in MAT is usually over 100 beats per minute (tachycardia), and the varying P wave morphologies reflect the multiple ectopic foci in the atria firing impulses, leading to irregular atrial depolarization. This irregularity results in a chaotic rhythm with a variable rate and P wave appearance, which is the hallmark of MAT. While it can be seen in the acute setting, often related to exacerbation of underlying conditions, its presence necessitates a careful evaluation of the patient's overall medical status and underlying causes."
},
{
  "id": 19,
  "question": "What ECG findings suggest left ventricular hypertrophy?",
  "options": [
      "Prolonged PR interval",
      "T wave inversion in leads I and aVL",
      "ST-segment depression",
      "Increased voltage in chest leads and deep S waves in V1-V2"
  ],
  "answer": "Increased voltage in chest leads and deep S waves in V1-V2",
  "explanation":"Left Ventricular Hypertrophy (LVH) on an electrocardiogram (ECG) is suggested by several findings, primarily involving changes in the amplitude and duration of the QRS complex. The most commonly used criteria include the Sokolow-Lyon index, where the sum of the S wave in V1 and the tallest R wave in V5 or V6 exceeds 35 mm, or the R wave in aVL is greater than 11 mm. Additionally, LVH is often indicated by an increased QRS duration, although it typically remains less than 120 ms. There may also be leftward shift in the QRS axis, ST-segment, and T-wave changes opposite to the direction of the QRS complex, often referred to as 'strain pattern.' These ECG changes are due to the increased muscle mass in the left ventricle causing greater electrical forces and altered depolarization and repolarization patterns. While ECG is a helpful tool in suggesting LVH, it is considered less sensitive than imaging modalities like echocardiography, especially in mild cases. Nonetheless, identifying LVH on ECG is important due to its association with increased risk of cardiovascular events, including hypertension, aortic stenosis, and cardiomyopathies."
},
{
  "id": 20,
  "question": "How is ventricular fibrillation represented on an ECG?",
  "options": [
      "Regular rhythm with wide QRS complexes",
      "Erratic waveform with no discernible P waves, QRS complexes, or T waves",
      "Tall, peaked T waves",
      "Alternating large and small QRS complexes"
  ],
  "answer": "Erratic waveform with no discernible P waves, QRS complexes, or T waves",
  "explanation":"Ventricular fibrillation (VF) on an electrocardiogram (ECG) is represented by a chaotic, erratic electrical activity without any discernible waves or complexes. The ECG line fluctuates rapidly and irregularly without a recognizable pattern, showing no distinct P waves, QRS complexes, or T waves. The amplitude and frequency of the oscillations vary, resulting in a coarse or fine appearance depending on the stage and severity of the VF. In coarse VF, the undulations are larger and more distinct, whereas in fine VF, they become smaller and more rapid. Ventricular fibrillation is a critical, life-threatening condition as it indicates disorganized electrical activity in the ventricles, leading to ineffective ventricular contractions and cessation of effective blood circulation, requiring immediate medical intervention, typically defibrillation. The rapid recognition of VF on an ECG is vital for prompt and effective resuscitation efforts."
},
{
  "id": 21,
  "question": "What does a prolonged QT interval suggest?",
  "options": [
      "Increased risk of torsades de pointes and other arrhythmias",
      "Sinus bradycardia",
      "Bundle branch block",
      "Atrial flutter"
  ],
  "answer": "Increased risk of torsades de pointes and other arrhythmias",
  "explanation":"A prolonged QT interval on an electrocardiogram (ECG) suggests an increased risk of cardiac arrhythmias, particularly Torsades de Pointes, a type of potentially life-threatening polymorphic ventricular tachycardia. The QT interval represents the total time for ventricular depolarization and repolarization. Prolongation can be congenital, as seen in congenital long QT syndromes, or acquired, often due to medications (like certain antiarrhythmics, antibiotics, or antipsychotics), electrolyte imbalances (like hypokalemia, hypomagnesemia, or hypocalcemia), myocardial ischemia, or other cardiac or systemic conditions. A prolonged QT interval increases the risk of developing ventricular arrhythmias because it indicates a delay in the repolarization of the ventricles, leading to a vulnerable period during which abnormal electrical impulses can result in erratic heartbeats. It's crucial to identify and address the underlying cause, as well as to monitor and manage the patient to prevent potentially fatal arrhythmias."
},
{
  "id": 22,
  "question": "Which ECG finding is commonly associated with hyperkalemia?",
  "options": [
      "Absent P waves",
      "ST-segment depression",
      "Tall, peaked T waves",
      "Widened QRS complex"
  ],
  "answer": "Tall, peaked T waves",
  "explanation":"ECG findings commonly associated with hyperkalemia, or high levels of potassium in the blood, typically progress in a characteristic manner as the potassium level increases. Early and moderate elevations often present with tall, peaked T waves, particularly in the precordial leads. As the hyperkalemia becomes more severe, the PR interval may prolong, and P waves may flatten or disappear, indicating atrial muscle depression. Further progression can lead to widening of the QRS complex, resembling a bundle branch block pattern, and eventually merging with the T wave if severe, forming a sine wave pattern. In extreme cases, hyperkalemia can lead to ventricular fibrillation or asystole. These changes reflect the effect of high potassium levels on cardiac myocyte membrane potential and conduction properties, and recognizing these ECG changes is crucial for prompt diagnosis and management of hyperkalemia to prevent life-threatening cardiac arrhythmias."
},
{
  "id": 23,
  "question": "What indicates a pacemaker rhythm on an ECG?",
  "options": [
      "Spike before the P wave or QRS complex",
      "Inverted T waves",
      "Regular R-R intervals",
      "Prolonged QT interval"
  ],
  "answer": "Spike before the P wave or QRS complex",
  "explanation":"A pacemaker rhythm on an electrocardiogram (ECG) is indicated by the presence of pacemaker spikes followed by either atrial or ventricular complexes, or both, depending on the type of pacemaker. The spikes are small, vertical lines representing the electrical stimulus delivered by the pacemaker. In a single-chamber pacemaker rhythm, you might see spikes followed by wide QRS complexes (if ventricular pacing) or by P waves (if atrial pacing). In a dual-chamber pacemaker rhythm, you typically see a spike before the P wave (atrial pacing) and another spike before the QRS complex (ventricular pacing), signifying sequential atrioventricular pacing. The paced QRS complexes are generally wide and may resemble a bundle branch block pattern due to the unnatural path of ventricular activation. Additionally, the rate and rhythm are usually regular and consistent, reflecting the programmed pacing parameters. Recognizing a pacemaker rhythm is important in evaluating the function and effectiveness of the pacemaker and in identifying any associated complications or malfunctions."
},
{
  "id": 24,
  "question": "What is characteristic of Wolff-Parkinson-White Syndrome on an ECG?",
  "options": [
      "Prolonged QT interval",
      "Absent P waves",
      "Deep S waves in leads V1-V2",
      "Short PR interval with a delta wave"
  ],
  "answer": "Short PR interval with a delta wave",
  "explanation":"Wolff-Parkinson-White (WPW) Syndrome on an electrocardiogram (ECG) is characterised by a short PR interval (less than 120 milliseconds) and a distinctive broad 'delta wave' at the onset of the QRS complex, resulting in a widened QRS duration. These features are due to the presence of an accessory conduction pathway between the atria and ventricles, known as the Bundle of Kent, which bypasses the AV node and allows electrical impulses to prematurely activate the ventricles. This results in the fusion of early (from the accessory pathway) and late (from the normal conduction system) ventricular depolarizations, creating the delta wave. The combination of a short PR interval and delta wave is pathognomonic for WPW syndrome, a condition associated with a risk of supraventricular tachycardia and other reentrant arrhythmias. Recognising these ECG features is critical for the diagnosis and management of patients with WPW syndrome."
},
{
  "id": 25,
  "question": "Which leads typically show changes in an inferior myocardial infarction?",
  "options": [
      "Leads II, III, and aVF",
      "Leads V1-V4",
      "Leads I, aVL, V5, and V6",
      "Leads V1 and V2"
  ],
  "answer": "Leads II, III, and aVF",
  "explanation":"In an inferior myocardial infarction, the ECG changes are typically seen in the leads that correspond to the inferior part of the heart, which are leads II, III, and aVF. These leads view the heart from the inferior perspective, so changes such as ST-segment elevation, pathological Q waves, or T-wave inversions in these leads are indicative of an inferior myocardial infarction. The changes reflect damage or ischemia in the area of the heart supplied by the right coronary artery or, less commonly, the left circumflex artery. Recognizing the specific leads with changes is crucial for localizing the infarction and guiding appropriate treatment."
},
];

let currentQuestionIndex = 0;
let timerInterval; // Variable to store the timer's interval ID
let isFlashQuiz = false; // To distinguish between regular and flash quizzes
let correctAnswersCount =0; // Variable to track the number of correct answers
let startTime;
// Fisher-Yates (aka Knuth) Shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayNextQuestion() {
  if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      document.getElementById('questionText').textContent = question.question;
      const optionsContainer = document.getElementById('optionsContainer');
      optionsContainer.innerHTML = ''; // Clear previous options
      question.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.onclick = function() { checkAnswer(option, question.answer,question.explanation); };
          optionsContainer.appendChild(button);
      });
      currentQuestionIndex++;
  } else {
      endQuiz();
  }
}

function checkAnswer(selectedOption, correctAnswer,explanation) {
  if (selectedOption === correctAnswer) {
      correctAnswersCount++; // Increment correct answers count
      if(!isFlashQuiz) {
        showModal(`Correct!\n\n ${explanation} `,false);
      }
  } else {
      if(!isFlashQuiz) {
       showModal(`Wrong answer!\n\nThe correct anser is: ${correctAnswer}\n\n${explanation}`,false);
      }
  }
  displayNextQuestion(); // Move on to the next question
}

function startQuiz() {
  isFlashQuiz = false; // Set the quiz type to regular
  shuffleArray(questions);
  currentQuestionIndex = 0;
  document.getElementById('timer').style.visibility = 'hidden'; // Hide timer
  displayNextQuestion();
  hideQuizButtons();
}

function startFlashQuiz() {
  isFlashQuiz = true; // Set the quiz type to flash
  shuffleArray(questions);
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  startTime = Date.now();
  startTimer();
  document.getElementById('timer').style.visibility = 'visible'; // Show timer
  displayNextQuestion();
  hideQuizButtons();
}
function hideQuizButtons() {
  document.getElementById('startQuizBtn').style.display = 'none';
  document.getElementById('startFlashQuizBtn').style.display = 'none';
}
function endQuiz() {
  if (isFlashQuiz) {
      stopTimer(); // Stop and reset the timer
      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2); // Calculate time taken
      showModal(`Flash quiz completed! Time: ${timeTaken} seconds\nCorrect answers: ${correctAnswersCount} out of ${questions.length}`,true);
  } else {
      showModal(`You've completed the quiz!\nCorrect answers: ${correctAnswersCount} out of ${questions.length}`,true);
  }
  // Reset for next round or display results
  currentQuestionIndex = 0;
  correctAnswersCount = 0; // Reset correct answers count
 // window.location.reload();
}

function startTimer() {
  const startTime = Date.now();
  timerInterval = setInterval(function() {
      const elapsedTime = Date.now() - startTime;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      document.getElementById('timer').textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  document.getElementById('timer').textContent = "Time: 00:00";
  document.getElementById('timer').style.visibility = 'hidden'; // Hide timer after quiz
}

// Wait until the DOM is fully loaded before attaching event listeners

  var startQuizBtn = document.getElementById('startQuizBtn');
  if(startQuizBtn){
      startQuizBtn.addEventListener('click', startQuiz);
  }
  var startFlashQuizBtn = document.getElementById('startFlashQuizBtn');
  if(startFlashQuizBtn){
      startFlashQuizBtn.addEventListener('click', startFlashQuiz);
  }
  var timer= document.getElementById('timer');
  if(timer){
  timer.style.visibility = 'hidden';
  }
  function showModal(message,showRestartButton = false) {
    document.getElementById('modalText').innerText = message;
    document.getElementById('customModal').style.display = "block";
    document.getElementById('restartQuizBtn').style.display = showRestartButton ? "block" : "none";
}

var closeButton = document.querySelector('.close');
if (closeButton) { // Ensure it's not null
    closeButton.onclick = function() {
        document.getElementById('customModal').style.display = "none";
    };
} 
// Event listener for restarting the quiz
var restartQuizBtn = document.getElementById('restartQuizBtn');
if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', function() {
        window.location.reload(); // Reload the page to restart the quiz
    });
}
});
