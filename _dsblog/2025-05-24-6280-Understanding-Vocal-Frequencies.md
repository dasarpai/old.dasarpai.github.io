# Exploring Voice Signal Processing 

## Introduction
In AI projects that involve human voice, such as mood detection, speaker identification, language recognition, and speech-to-text transcription, it's essential to understand the characteristics of vocal frequencies and how sound behaves. This knowledge enables data scientists and engineers to develop effective models for tasks like real-time translation, sentiment analysis, and biometric recognition.

### Understanding Human Hearing and Animal Comparisons

The average human ear can detect sound frequencies ranging from approximately 20 Hz to 20,000 Hz (20 kHz). However, sensitivity varies among individuals, and many people, especially as they age, may have difficulty hearing higher frequencies . Sounds below 20 Hz are termed infrasound and are generally inaudible to humans, though they can sometimes be felt as vibrations .

Dogs, on the other hand, have a broader hearing range, approximately from 40 Hz to 60,000 Hz, allowing them to perceive higher-pitched sounds that are beyond human capabilities .

### The Nature of Sound Waves

Sound is a mechanical wave, meaning it requires a medium (such as air, water, or solids) to propagate. It cannot travel through a vacuum . Key properties of sound waves include:

* **Frequency (Hz):** Number of oscillations per second, determining the pitch of the sound.
* **Wavelength (m):** Distance between successive crests or troughs of the wave.
* **Speed (m/s):** Rate at which the wave travels through a medium; varies depending on the medium's properties.
* **Amplitude:** Height of the wave, related to the loudness of the sound.
* **Phase:** The position of a point in time on a waveform cycle.
* **Energy:** Proportional to the square of the amplitude; higher amplitude means more energy .

### Exploring Key Questions in Voice Signal Processing

To delve deeper into voice signal processing, consider the following questions:

* **How can computers generate realistic sounds without physical instruments?**

  Computers use digital signal processing (DSP) techniques to synthesize sounds by manipulating waveforms and frequencies, enabling the creation of virtual instruments and voices.

* **Can computers produce entirely new sounds not found in nature?**

  Yes, through sound synthesis methods like additive, subtractive, and granular synthesis, computers can generate unique sounds that don't occur naturally.

* **What mechanisms in the human vocal cords allow for distinct syllables and words?**

  The human vocal apparatus, including the vocal cords, tongue, and lips, shapes airflow and vibrations to produce a wide range of sounds and articulate speech.

* **How does the human ear distinguish between different speakers or identify gender and age?**

  Variations in pitch, timbre, and speech patterns allow listeners to differentiate between speakers and infer characteristics like gender and age.

* **How can we detect a person's mood from their voice?**

  Emotional states influence speech patterns, including tone, pitch, and rhythm, which can be analyzed to assess mood and sentiment.

Understanding these aspects is crucial for developing AI systems capable of interpreting and processing human speech effectively.

## Exploring Musical Notes 

### What is octave?
The word "octave" comes from the Latin "octavus", meaning eighth.

In a major scale, there are 8 notes:

C – D – E – F – G – A – B – C   
(That’s 8 notes: C is counted twice—start and end)

So the 8th note is called the octave — it's the same pitch class, but doubled in frequency.

**Example on Piano:**

If you play Middle C (C4) and then the next higher C (C5), that’s 1 octave apart.

There are 12 keys between them (7 white + 5 black = 12 semitones).
 | 

### Finding your voice type 
If you want to find your voice you an android app like Riyaz. Sing ah.... at the deepest level and see what note is identified by the app. Then you can sing ee... and highest note and see what note is identified by the app. The difference between these is your vocal range. Having volcal range like 4, 4.5, 5, 5.5, 6 is extremely exceptional. Keep in mind holding the breath and maintaining that sound of ah or ee for long period of time without crack is must.

Example:  
* Your **lowest note** (e.g., F2)
* Your **highest note** (e.g., C#7)

Then count the number of **semitones between** those two notes (or just use the vocal range calculator of Riyaz app).

---

**Determine Your Voice Type (optional, based on gender)**

| Voice Type    | Typical Range |
| ------------- | ------------- |
| Bass          | E2 – E4       |
| Baritone      | A2 – A4       |
| Tenor         | C3 – C5       |
| Alto          | F3 – F5       |
| Mezzo-Soprano | A3 – A5       |
| Soprano       | C4 – C6       |

If you start around **F2** and go up 4.5 octaves, you may span **Bass to Soprano** territory — rare and impressive! It means you can sing all kind of music.

---

**Tips to Register Notes:** You can use these tips to improve your singing.

**1. Chest Voice (Lower range):**

* Practice **descending scales** on vowels like “ah” or “uh”
* Use lip trills to loosen tension
* Stay relaxed and don’t push too hard for deep notes

**2. Mixed Voice (Middle):**

* Try **5-tone scales** blending chest and head voice
* Use consonants like “gee” or “nay” to help with balance
* Use a straw in water for SOVT (semi-occluded vocal tract) warm-ups

**3. Head Voice & Falsetto (Higher):**

* Start with **siren exercises** (“woo” or “ooh” slides)
* Focus on ease and control rather than volume
* Avoid pushing chest voice into the high range — mix instead

**4. Whistle Register (if you go above C6/C7):**

* Not necessary for most singers, but possible with safe, slow practice
* Begin with squeaky, soft “eee” sounds
* Requires careful technique and is best learned with a coach


## Connection between Indian and Western Musical notes.

The Western notes **A, B, C, D, E, F, G** do correspond to the **Sa Re Ga Ma Pa Dha Ni** (Sargam) notes in **Indian classical music**, but the mapping depends on **which note is chosen as the tonic (Sa)**.

---

### **Key Concept:**

In **Indian music**, **Sa is movable** — like the tonic (root note) in a scale — and all other notes are relative to it.

In **Western music**, **C is usually treated as the default starting point**, especially in major scales (C Major = no sharps or flats).

---

### Common Mapping (if C = Sa):

| Indian Note   | Western Note | Description |
| ------------- | ------------ | ----------- |
| **Sa**        | C            | Tonic (1st) |
| **Re**        | D            | Major 2nd   |
| **Ga**        | E            | Major 3rd   |
| **Ma**        | F            | Perfect 4th |
| **Pa**        | G            | Perfect 5th |
| **Dha**       | A            | Major 6th   |
| **Ni**        | B            | Major 7th   |
| **Sa (next)** | C            | Octave      |

---

### If **D = Sa**, then:

* Re = E
* Ga = F♯
* and so on...

So, the **Western note that corresponds to "Sa" depends on your chosen pitch**.

---

Indian music also has **Komal** (flat) and **Tivra** (sharp) versions:

* **Re, Ga, Dha, Ni** can be **Komal** (flat)
* **Ma** can be **Tivra** (sharp)

## If your natural voice note is F2 then what does that mean?

**It means musical note (F2) that corresponds to the fundamental frequency of your speaking voice**.

* **F2** is a note in the second octave on the musical scale.
* It has a frequency of approximately **87.31 Hz**.
* It's **quite low**, typically found in the **bass range** for male voices.

### What value does it carry for singing?

1. **Voice Type Indicator**:

   * A natural speaking pitch of F2 suggests you likely have a **low-pitched voice**.
   * This is common in **bass** or **bass-baritone** voice types.
   * It means your **comfort zone in singing (tessitura)** is likely lower, and your range may extend well into the low notes.

2. **Range Potential**:

   * Singers often have a usable singing range that spans about 1.5 to 3 octaves above their speaking pitch.
   * If F2 is your speaking pitch, you might comfortably sing from **E2 or F2 up to F4 or even higher**, depending on your training.

3. **Timbre and Style**:

   * A lower natural pitch gives a **richer, deeper timbre**, which is great for:

     * Classical bass/baritone roles
     * Jazz
     * Blues
     * Some pop genres
   * However, singing high tenor or soprano parts would likely be challenging without extensive training.

In summary, Your **natural speaking pitch (F2)** gives a rough idea of your vocal **range, tessitura**, and **voice type**. While it doesn't define your singing **quality** directly, it helps vocal coaches tailor training to maximize your natural strengths.


## Connection between note, frequcy and Octave Connection 
Here's a table showing the **frequencies (in Hz)** of all 12 notes in **octaves 1 to 4**. These are based on **A4 = 440 Hz**, the standard tuning pitch used in Western music.

---

### 🎵 Notes & Frequencies by Octave (A4 = 440 Hz)
Each note is 12th-SQRT(2) of previous note. 12th-SQRT(2) = 1.0594 (approx) 
C1 = 32.79, D = 1.0594 x  32.79 = 34.72

Note Name | Note Number | Multiplier | Frequency (Hz)
--- | --- | --- | ---
C | 1 | 1.0595 | 32.700
C♯/D♭ | 2 | 1.0595 | 34.644
D | 3 | 1.0595 | 36.705
D♯/E♭ | 4 | 1.0595 | 38.887
E | 5 | 1.0595 | 41.199
F | 6 | 1.0595 | 43.649
F♯/G♭ | 7 | 1.0595 | 46.245
G | 8 | 1.0595 | 48.995
G♯/A♭ | 9 | 1.0595 | 51.908
A | 10 | 1.0595 | 54.995
A♯/B♭ | 11 | 1.0595 | 58.265
B | 12 | 1.0595 | 61.729

| Note      | Octave 1 | Octave 2  | Octave 3  | Octave 4  |
| --------- | -------- | --------- | --------- | --------- |
| **C**     | 32.70 Hz | 65.41 Hz  | 130.81 Hz | 261.63 Hz |
| **C♯/D♭** | 34.65 Hz | 69.30 Hz  | 138.59 Hz | 277.18 Hz |
| **D**     | 36.71 Hz | 73.42 Hz  | 146.83 Hz | 293.66 Hz |
| **D♯/E♭** | 38.89 Hz | 77.78 Hz  | 155.56 Hz | 311.13 Hz |
| **E**     | 41.20 Hz | 82.41 Hz  | 164.81 Hz | 329.63 Hz |
| **F**     | 43.65 Hz | 87.31 Hz  | 174.61 Hz | 349.23 Hz |
| **F♯/G♭** | 46.25 Hz | 92.50 Hz  | 185.00 Hz | 369.99 Hz |
| **G**     | 49.00 Hz | 98.00 Hz  | 196.00 Hz | 392.00 Hz |
| **G♯/A♭** | 51.91 Hz | 103.83 Hz | 207.65 Hz | 415.30 Hz |
| **A**     | 55.00 Hz | 110.00 Hz | 220.00 Hz | 440.00 Hz |
| **A♯/B♭** | 58.27 Hz | 116.54 Hz | 233.08 Hz | 466.16 Hz |
| **B**     | 61.74 Hz | 123.47 Hz | 246.94 Hz | 493.88 Hz |

---

### 🧠 Key Observations:

* Each octave **doubles the frequency** of the previous.
* For example:   
  C2 (65.41 Hz) × 2 = C3 (130.81 Hz)   
  A3 (220 Hz) × 2 = A4 (440 Hz)


## What is natural frequency of human body?
The natural or resonant frequency of the human body refers to the specific frequencies at which various parts of the body tend to vibrate when subjected to external forces. Understanding these frequencies is crucial in fields like biomechanics, occupational health, and audio engineering.

When considered as a whole, has a fundamental resonant frequency typically ranging between 5 and 10 Hz. This low-frequency range is significant because exposure to vibrations at these frequencies can lead to discomfort or health issues, especially in occupational settings involving machinery or vehicles. For instance, studies have shown that **whole-body vibrations around 10 Hz** can cause resonance effects that may impact comfort and performance. 


Beyond mechanical resonance, some alternative medicine practices suggest that human cells and tissues have vibrational frequencies in the megahertz (MHz) range. For example, it's claimed that a healthy human body resonates between 62–78 MHz, and that frequencies below this range may be associated with illness.


Different parts of the human body have their own natural frequencies:
- Head: Approximately 20–30 Hz
- Eyes: Around 20–90 Hz
- Chest and abdomen: Approximately 60–90 Hz
- Lower limbs: Typically between 2–20 Hz

## What is the natural frequency of earth?
The Earth's natural frequency is primarily characterized by the Schumann resonances, a set of extremely low-frequency (ELF) electromagnetic waves that resonate within the cavity formed between the Earth's surface and the ionosphere. These resonances are excited by lightning discharges and manifest as standing waves encircling the planet.

The fundamental Schumann resonance occurs at **approximately 7.83 Hz**, often referred to as the Earth's "heartbeat" or "hum." This frequency corresponds to a wavelength equal to the Earth's circumference, resulting from the planet's spherical geometry and the conductive properties of the ionosphere.

Beyond the fundamental frequency, the Schumann resonances include several higher harmonics, typically observed at: 14.3 Hz, 20.8 Hz, 27.3 Hz, 33.8 Hz

## What is special in 432 Hz and 440 Hz?
The frequency of 432 Hz has been associated with historical tuning systems. Some proponents suggest that ancient cultures utilized this tuning, believing it to be in harmony with the universe's natural vibrations. However, the standardization of 440 Hz as the reference pitch (A4) was established in the 20th century, and the historical use of 432 Hz remains a topic of debate.

Listeners often report that music tuned to 432 Hz feels more relaxing and harmonious compared to the standard 440 Hz tuning. Some small-scale studies and anecdotal reports suggest potential benefits, such as reduced stress and anxiety. For instance, a study indicated that 432 Hz music might help decrease dental anxiety during procedures.


