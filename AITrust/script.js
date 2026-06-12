/*
Human-AI Mutual Trust Door-Choice Experiment

This version preserves the RAVEN experiment's answer profile and Phase 1 trust logic,
but replaces the RAVEN task with a generated Door-Choice task.

Key updates:
- Explanations appear when AI decides whether to accept/reject the human suggestion, not after door opening.
- Agent icon + speech bubble shows dynamic messages.
- 40 door-choice cases have mixed, uncertain clues.
- Door clues are shown both as text and as CSS/SVG visual icons.
*/

const DOOR_TASKS = [
  {
    "task_id": 1,
    "name": "door_task001",
    "difficulty": "hard",
    "raven_correct_answer": 7,
    "raven_AI_answer": 3,
    "correct_answer": "left",
    "AI_answer": "right",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A certified route mark is carved beside the handle.” from certified route marker was more reliable than the risk cue “The peephole is covered from the inside.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A certified route mark is carved beside the handle.” from certified route marker.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A faint clicking sound repeats behind the door.” from mechanical trap cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 2,
    "name": "door_task002",
    "difficulty": "hard",
    "raven_correct_answer": 2,
    "raven_AI_answer": 4,
    "correct_answer": "right",
    "AI_answer": "left",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The emergency lantern above this door burns steadily.” from environmental sensor cue was more reliable than the risk cue “The shadow under the door moves irregularly.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The emergency lantern above this door burns steadily.” from environmental sensor cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Fresh scratches surround the handle.” from recent damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 3,
    "name": "door_task003",
    "difficulty": "medium",
    "raven_correct_answer": 3,
    "raven_AI_answer": 5,
    "correct_answer": "left",
    "AI_answer": "right",
    "left_score": 1.5,
    "right_score": -0.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A calm airflow comes from the gap below the door.” from environmental airflow cue was more reliable than the risk cue “A red thread is tied tightly around the knob.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A calm airflow comes from the gap below the door.” from environmental airflow cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A warning symbol appears partly painted over.” from tampered warning sign made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 4,
    "name": "door_task004",
    "difficulty": "hard",
    "raven_correct_answer": 5,
    "raven_AI_answer": 6,
    "correct_answer": "right",
    "AI_answer": "left",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The keyhole emits a stable green glow.” from door status indicator was more reliable than the risk cue “The floor tile in front of the door is loose.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The keyhole emits a stable green glow.” from door status indicator.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A hairline crack runs across the door frame.” from structural damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 5,
    "name": "door_task005",
    "difficulty": "hard",
    "raven_correct_answer": 2,
    "raven_AI_answer": 7,
    "correct_answer": "left",
    "AI_answer": "right",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The frame is straight, aligned, and undamaged.” from structural integrity cue was more reliable than the risk cue “The sign above the door is tilted and recently swapped.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “The frame is straight, aligned, and undamaged.” from structural integrity cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Dark smoke marks are visible near the bottom.” from environmental hazard cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 6,
    "name": "door_task006",
    "difficulty": "medium",
    "raven_correct_answer": 6,
    "raven_AI_answer": 8,
    "correct_answer": "right",
    "AI_answer": "left",
    "left_score": -0.5,
    "right_score": 1.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The floor mat is aligned with the doorway.” from environmental trace was more reliable than the risk cue “A faint clicking sound repeats behind the door.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The floor mat is aligned with the doorway.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The peephole is covered from the inside.” from visibility obstruction cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 7,
    "name": "door_task007",
    "difficulty": "hard",
    "raven_correct_answer": 3,
    "raven_AI_answer": 3,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A clean path of footprints leads to the threshold.” from environmental trace was more reliable than the risk cue “Fresh scratches surround the handle.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A clean path of footprints leads to the threshold.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The shadow under the door moves irregularly.” from movement anomaly cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 8,
    "name": "door_task008",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The handle is clean, cool, and free of residue.” from tactile inspection cue was more reliable than the risk cue “A warning symbol appears partly painted over.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The handle is clean, cool, and free of residue.” from tactile inspection cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A red thread is tied tightly around the knob.” from trap marker cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 9,
    "name": "door_task009",
    "difficulty": "medium",
    "raven_correct_answer": 2,
    "raven_AI_answer": 2,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 1.5,
    "right_score": -0.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A soft regular humming sound comes from inside.” from auditory machinery cue was more reliable than the risk cue “A hairline crack runs across the door frame.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A soft regular humming sound comes from inside.” from auditory machinery cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The floor tile in front of the door is loose.” from floor instability cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 10,
    "name": "door_task010",
    "difficulty": "hard",
    "raven_correct_answer": 3,
    "raven_AI_answer": 3,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The blue seal is intact and has not been scratched off.” from official safety seal was more reliable than the risk cue “Dark smoke marks are visible near the bottom.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The blue seal is intact and has not been scratched off.” from official safety seal.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The sign above the door is tilted and recently swapped.” from tampering cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 11,
    "name": "door_task011",
    "difficulty": "hard",
    "raven_correct_answer": 7,
    "raven_AI_answer": 7,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A certified route mark is carved beside the handle.” from certified route marker was more reliable than the risk cue “The peephole is covered from the inside.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A certified route mark is carved beside the handle.” from certified route marker.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A faint clicking sound repeats behind the door.” from mechanical trap cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 12,
    "name": "door_task012",
    "difficulty": "medium",
    "raven_correct_answer": 8,
    "raven_AI_answer": 8,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 1.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The emergency lantern above this door burns steadily.” from environmental sensor cue was more reliable than the risk cue “The shadow under the door moves irregularly.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The emergency lantern above this door burns steadily.” from environmental sensor cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Fresh scratches surround the handle.” from recent damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 13,
    "name": "door_task013",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A calm airflow comes from the gap below the door.” from environmental airflow cue was more reliable than the risk cue “A red thread is tied tightly around the knob.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A calm airflow comes from the gap below the door.” from environmental airflow cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A warning symbol appears partly painted over.” from tampered warning sign made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 14,
    "name": "door_task014",
    "difficulty": "hard",
    "raven_correct_answer": 4,
    "raven_AI_answer": 4,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The keyhole emits a stable green glow.” from door status indicator was more reliable than the risk cue “The floor tile in front of the door is loose.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The keyhole emits a stable green glow.” from door status indicator.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A hairline crack runs across the door frame.” from structural damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 15,
    "name": "door_task015",
    "difficulty": "medium",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 1.5,
    "right_score": -0.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The frame is straight, aligned, and undamaged.” from structural integrity cue was more reliable than the risk cue “The sign above the door is tilted and recently swapped.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “The frame is straight, aligned, and undamaged.” from structural integrity cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Dark smoke marks are visible near the bottom.” from environmental hazard cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 16,
    "name": "door_task016",
    "difficulty": "hard",
    "raven_correct_answer": 2,
    "raven_AI_answer": 2,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The floor mat is aligned with the doorway.” from environmental trace was more reliable than the risk cue “A faint clicking sound repeats behind the door.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The floor mat is aligned with the doorway.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The peephole is covered from the inside.” from visibility obstruction cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 17,
    "name": "door_task017",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A clean path of footprints leads to the threshold.” from environmental trace was more reliable than the risk cue “Fresh scratches surround the handle.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A clean path of footprints leads to the threshold.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The shadow under the door moves irregularly.” from movement anomaly cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 18,
    "name": "door_task018",
    "difficulty": "medium",
    "raven_correct_answer": 4,
    "raven_AI_answer": 4,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 1.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The handle is clean, cool, and free of residue.” from tactile inspection cue was more reliable than the risk cue “A warning symbol appears partly painted over.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The handle is clean, cool, and free of residue.” from tactile inspection cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A red thread is tied tightly around the knob.” from trap marker cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 19,
    "name": "door_task019",
    "difficulty": "hard",
    "raven_correct_answer": 8,
    "raven_AI_answer": 8,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A soft regular humming sound comes from inside.” from auditory machinery cue was more reliable than the risk cue “A hairline crack runs across the door frame.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A soft regular humming sound comes from inside.” from auditory machinery cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The floor tile in front of the door is loose.” from floor instability cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 20,
    "name": "door_task020",
    "difficulty": "hard",
    "raven_correct_answer": 6,
    "raven_AI_answer": 6,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The blue seal is intact and has not been scratched off.” from official safety seal was more reliable than the risk cue “Dark smoke marks are visible near the bottom.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The blue seal is intact and has not been scratched off.” from official safety seal.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The sign above the door is tilted and recently swapped.” from tampering cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 21,
    "name": "door_task021",
    "difficulty": "medium",
    "raven_correct_answer": 1,
    "raven_AI_answer": 2,
    "correct_answer": "left",
    "AI_answer": "right",
    "left_score": 1.5,
    "right_score": -0.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A certified route mark is carved beside the handle.” from certified route marker was more reliable than the risk cue “The peephole is covered from the inside.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A certified route mark is carved beside the handle.” from certified route marker.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A faint clicking sound repeats behind the door.” from mechanical trap cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 22,
    "name": "door_task022",
    "difficulty": "hard",
    "raven_correct_answer": 5,
    "raven_AI_answer": 3,
    "correct_answer": "right",
    "AI_answer": "left",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The emergency lantern above this door burns steadily.” from environmental sensor cue was more reliable than the risk cue “The shadow under the door moves irregularly.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The emergency lantern above this door burns steadily.” from environmental sensor cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Fresh scratches surround the handle.” from recent damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 23,
    "name": "door_task023",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 4,
    "correct_answer": "left",
    "AI_answer": "right",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A calm airflow comes from the gap below the door.” from environmental airflow cue was more reliable than the risk cue “A red thread is tied tightly around the knob.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A calm airflow comes from the gap below the door.” from environmental airflow cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A warning symbol appears partly painted over.” from tampered warning sign made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 24,
    "name": "door_task024",
    "difficulty": "medium",
    "raven_correct_answer": 2,
    "raven_AI_answer": 5,
    "correct_answer": "right",
    "AI_answer": "left",
    "left_score": -0.5,
    "right_score": 1.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The keyhole emits a stable green glow.” from door status indicator was more reliable than the risk cue “The floor tile in front of the door is loose.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The keyhole emits a stable green glow.” from door status indicator.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A hairline crack runs across the door frame.” from structural damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 25,
    "name": "door_task025",
    "difficulty": "hard",
    "raven_correct_answer": 6,
    "raven_AI_answer": 7,
    "correct_answer": "left",
    "AI_answer": "right",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The frame is straight, aligned, and undamaged.” from structural integrity cue was more reliable than the risk cue “The sign above the door is tilted and recently swapped.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “The frame is straight, aligned, and undamaged.” from structural integrity cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Dark smoke marks are visible near the bottom.” from environmental hazard cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 26,
    "name": "door_task026",
    "difficulty": "hard",
    "raven_correct_answer": 8,
    "raven_AI_answer": 6,
    "correct_answer": "right",
    "AI_answer": "left",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The floor mat is aligned with the doorway.” from environmental trace was more reliable than the risk cue “A faint clicking sound repeats behind the door.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The floor mat is aligned with the doorway.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The peephole is covered from the inside.” from visibility obstruction cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 27,
    "name": "door_task027",
    "difficulty": "medium",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 1.5,
    "right_score": -0.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A clean path of footprints leads to the threshold.” from environmental trace was more reliable than the risk cue “Fresh scratches surround the handle.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A clean path of footprints leads to the threshold.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The shadow under the door moves irregularly.” from movement anomaly cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 28,
    "name": "door_task028",
    "difficulty": "hard",
    "raven_correct_answer": 7,
    "raven_AI_answer": 7,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The handle is clean, cool, and free of residue.” from tactile inspection cue was more reliable than the risk cue “A warning symbol appears partly painted over.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The handle is clean, cool, and free of residue.” from tactile inspection cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A red thread is tied tightly around the knob.” from trap marker cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 29,
    "name": "door_task029",
    "difficulty": "hard",
    "raven_correct_answer": 5,
    "raven_AI_answer": 5,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A soft regular humming sound comes from inside.” from auditory machinery cue was more reliable than the risk cue “A hairline crack runs across the door frame.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A soft regular humming sound comes from inside.” from auditory machinery cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The floor tile in front of the door is loose.” from floor instability cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 30,
    "name": "door_task030",
    "difficulty": "medium",
    "raven_correct_answer": 3,
    "raven_AI_answer": 3,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 1.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The blue seal is intact and has not been scratched off.” from official safety seal was more reliable than the risk cue “Dark smoke marks are visible near the bottom.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The blue seal is intact and has not been scratched off.” from official safety seal.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The sign above the door is tilted and recently swapped.” from tampering cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 31,
    "name": "door_task031",
    "difficulty": "hard",
    "raven_correct_answer": 5,
    "raven_AI_answer": 5,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A certified route mark is carved beside the handle.” from certified route marker was more reliable than the risk cue “The peephole is covered from the inside.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A certified route mark is carved beside the handle.” from certified route marker.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A faint clicking sound repeats behind the door.” from mechanical trap cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 32,
    "name": "door_task032",
    "difficulty": "hard",
    "raven_correct_answer": 7,
    "raven_AI_answer": 7,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The emergency lantern above this door burns steadily.” from environmental sensor cue was more reliable than the risk cue “The shadow under the door moves irregularly.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The emergency lantern above this door burns steadily.” from environmental sensor cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Fresh scratches surround the handle.” from recent damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 33,
    "name": "door_task033",
    "difficulty": "medium",
    "raven_correct_answer": 3,
    "raven_AI_answer": 3,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 1.5,
    "right_score": -0.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A calm airflow comes from the gap below the door.” from environmental airflow cue was more reliable than the risk cue “A red thread is tied tightly around the knob.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A calm airflow comes from the gap below the door.” from environmental airflow cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A warning symbol appears partly painted over.” from tampered warning sign made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 34,
    "name": "door_task034",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The keyhole emits a stable green glow.” from door status indicator was more reliable than the risk cue “The floor tile in front of the door is loose.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The keyhole emits a stable green glow.” from door status indicator.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A hairline crack runs across the door frame.” from structural damage cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 35,
    "name": "door_task035",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The frame is straight, aligned, and undamaged.” from structural integrity cue was more reliable than the risk cue “The sign above the door is tilted and recently swapped.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “The frame is straight, aligned, and undamaged.” from structural integrity cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “Dark smoke marks are visible near the bottom.” from environmental hazard cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 36,
    "name": "door_task036",
    "difficulty": "medium",
    "raven_correct_answer": 7,
    "raven_AI_answer": 7,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 1.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A certified route mark is carved beside the handle.",
        "type": "mark",
        "evidence": "safe",
        "source": "certified route marker",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The peephole is covered from the inside.",
        "type": "covered",
        "evidence": "danger",
        "source": "visibility obstruction cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The floor mat is aligned with the doorway.",
        "type": "mat",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "A faint clicking sound repeats behind the door.",
        "type": "clicking",
        "evidence": "danger",
        "source": "mechanical trap cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The floor mat is aligned with the doorway.” from environmental trace was more reliable than the risk cue “A faint clicking sound repeats behind the door.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The floor mat is aligned with the doorway.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The peephole is covered from the inside.” from visibility obstruction cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 37,
    "name": "door_task037",
    "difficulty": "hard",
    "raven_correct_answer": 4,
    "raven_AI_answer": 4,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 0.5,
    "right_score": -0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A clean path of footprints leads to the threshold.",
        "type": "footprints",
        "evidence": "safe",
        "source": "environmental trace",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Fresh scratches surround the handle.",
        "type": "scratch",
        "evidence": "danger",
        "source": "recent damage cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The emergency lantern above this door burns steadily.",
        "type": "lantern",
        "evidence": "safe",
        "source": "environmental sensor cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The shadow under the door moves irregularly.",
        "type": "shadow",
        "evidence": "danger",
        "source": "movement anomaly cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A clean path of footprints leads to the threshold.” from environmental trace was more reliable than the risk cue “Fresh scratches surround the handle.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A clean path of footprints leads to the threshold.” from environmental trace.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The shadow under the door moves irregularly.” from movement anomaly cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 38,
    "name": "door_task038",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "A calm airflow comes from the gap below the door.",
        "type": "breeze",
        "evidence": "safe",
        "source": "environmental airflow cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A red thread is tied tightly around the knob.",
        "type": "thread",
        "evidence": "danger",
        "source": "trap marker cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "A handwritten note says 'safe', but the handwriting is unfamiliar.",
        "type": "note",
        "evidence": "ambiguous",
        "source": "unverified handwritten note",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The handle is clean, cool, and free of residue.",
        "type": "handle",
        "evidence": "safe",
        "source": "tactile inspection cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "A warning symbol appears partly painted over.",
        "type": "warning",
        "evidence": "danger",
        "source": "tampered warning sign",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The handle is warm, which could indicate either recent use or hidden danger.",
        "type": "warm_handle",
        "evidence": "ambiguous",
        "source": "ambiguous tactile cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The handle is clean, cool, and free of residue.” from tactile inspection cue was more reliable than the risk cue “A warning symbol appears partly painted over.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The handle is clean, cool, and free of residue.” from tactile inspection cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “A red thread is tied tightly around the knob.” from trap marker cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 39,
    "name": "door_task039",
    "difficulty": "medium",
    "raven_correct_answer": 8,
    "raven_AI_answer": 8,
    "correct_answer": "left",
    "AI_answer": "left",
    "left_score": 1.5,
    "right_score": -0.5,
    "score_gap": 2.0,
    "left_clues": [
      {
        "text": "A soft regular humming sound comes from inside.",
        "type": "light",
        "evidence": "safe",
        "source": "auditory machinery cue",
        "reliability": "high",
        "score": 3
      },
      {
        "text": "A hairline crack runs across the door frame.",
        "type": "crack",
        "evidence": "danger",
        "source": "structural damage cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The lock is polished, but there are small marks around it.",
        "type": "lock",
        "evidence": "ambiguous",
        "source": "mixed lock condition cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "right_clues": [
      {
        "text": "The keyhole emits a stable green glow.",
        "type": "keyhole",
        "evidence": "safe",
        "source": "door status indicator",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The floor tile in front of the door is loose.",
        "type": "tile",
        "evidence": "danger",
        "source": "floor instability cue",
        "reliability": "high",
        "score": -3
      },
      {
        "text": "A faint glow is visible, but it could be a decoy marker.",
        "type": "ambiguous_glow",
        "evidence": "ambiguous",
        "source": "ambiguous light cue",
        "reliability": "medium",
        "lean": "safe_leaning",
        "score": 0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The LEFT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “A soft regular humming sound comes from inside.” from auditory machinery cue was more reliable than the risk cue “A hairline crack runs across the door frame.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the LEFT door has a relatively stronger reliable safety cue: “A soft regular humming sound comes from inside.” from auditory machinery cue.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The floor tile in front of the door is loose.” from floor instability cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  },
  {
    "task_id": 40,
    "name": "door_task040",
    "difficulty": "hard",
    "raven_correct_answer": 1,
    "raven_AI_answer": 1,
    "correct_answer": "right",
    "AI_answer": "right",
    "left_score": -0.5,
    "right_score": 0.5,
    "score_gap": 1.0,
    "left_clues": [
      {
        "text": "The frame is straight, aligned, and undamaged.",
        "type": "frame",
        "evidence": "safe",
        "source": "structural integrity cue",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "The sign above the door is tilted and recently swapped.",
        "type": "sign",
        "evidence": "danger",
        "source": "tampering cue",
        "reliability": "medium",
        "score": -2
      },
      {
        "text": "The dust pattern is disturbed, but it does not clearly show direction.",
        "type": "dust",
        "evidence": "ambiguous",
        "source": "unclear environmental trace",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "right_clues": [
      {
        "text": "The blue seal is intact and has not been scratched off.",
        "type": "seal",
        "evidence": "safe",
        "source": "official safety seal",
        "reliability": "medium",
        "score": 2
      },
      {
        "text": "Dark smoke marks are visible near the bottom.",
        "type": "smoke",
        "evidence": "danger",
        "source": "environmental hazard cue",
        "reliability": "low",
        "score": -1
      },
      {
        "text": "The door is unusually quiet compared with the corridor.",
        "type": "quiet",
        "evidence": "ambiguous",
        "source": "ambiguous auditory cue",
        "reliability": "medium",
        "lean": "danger_leaning",
        "score": -0.5
      }
    ],
    "scoring_rule": "safe clues add reliability weight; danger clues subtract reliability weight; ambiguous clues add +0.5, 0, or -0.5 depending on lean",
    "explanation": "The RIGHT door was safer overall because its stronger reliable safety evidence outweighed its weaker risk cue. For example, “The blue seal is intact and has not been scratched off.” from official safety seal was more reliable than the risk cue “Dark smoke marks are visible near the bottom.”.",
    "explanation_templates": {
      "trust": "I accepted your suggestion because the RIGHT door has a relatively stronger reliable safety cue: “The blue seal is intact and has not been scratched off.” from official safety seal.",
      "reject": "I kept my own choice because I weighted the available clues differently. In particular, the risk cue “The sign above the door is tilted and recently swapped.” from tampering cue made the alternative door less reliable.",
      "result": "The safer door was determined by weighted evidence, not by simply counting good or bad clues."
    }
  }
];

const CONFIG = {
  totalPages: 10,
  phase1TaskCount: 20,
  phase2TaskCount: 20,
  thinkingDurationMs: 3000,
  openingDurationMs: 950,

  phase1TrustStrategies: ["over_trusting", "under_trusting", "calibrated_trusting"],

  overTrustingMaxAdoptionRate: 0.8,
  underTrustingMinAdoptionRate: 0.2,
  calibratedMinAdoptionRate: 0.2,
  calibratedMaxAdoptionRate: 0.8,
  calibratedNeutralAdoptionRate: 0.5,

  completionPrefix: "HMT"
};

const state = {
  page: 1,
  participantId: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now()),
  condition: null,
  phase1TrustStrategy: null,
  phase1TrustStats: {
    acceptedCount: 0,
    totalDecisions: 0,
    humanCorrectAIWrongCount: 0,
    humanWrongAICorrectCount: 0,
    bothWrongDifferentCount: 0,
    caseStats: {
      agreement: { total: 0, accepted: 0 },
      human_correct_ai_wrong: { total: 0, accepted: 0 },
      human_wrong_ai_correct: { total: 0, accepted: 0 },
      both_wrong_different: { total: 0, accepted: 0 }
    },
    consoleCaseStats: {
      human_correct_ai_correct: { total: 0, accepted: 0 },
      same_choice_both_wrong: { total: 0, accepted: 0 },
      human_correct_ai_wrong: { total: 0, accepted: 0 },
      human_wrong_ai_correct: { total: 0, accepted: 0 },
      different_choice_both_wrong: { total: 0, accepted: 0 }
    }
  },
  demographics: {},
  consent: {},
  tasks: [],
  tasksById: {},
  phase1Order: [],
  phase2Order: [],
  phase1Index: 0,
  phase2Index: 0,
  phase1Trials: [],
  phase2Trials: [],
  mediatorSurvey: {},
  finalSurvey: {},
  startedAt: new Date().toISOString(),
  endedAt: null
};

const app = document.getElementById("pageContainer");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const version = urlParams.get("version");
  const strategy = urlParams.get("strategy");

  if (version === "direct" || version === "explanation") {
    state.condition = version;
  } else {
    state.condition = Math.random() < 0.5 ? "direct" : "explanation";
  }

  loadTaskAnswersFromEmbeddedData();

  if (CONFIG.phase1TrustStrategies.includes(strategy)) {
    state.phase1TrustStrategy = strategy;
  } else {
    state.phase1TrustStrategy = randomArrayItem(CONFIG.phase1TrustStrategies);
  }

  alert(`Phase 1 trust strategy: ${formatTrustStrategyLabel(state.phase1TrustStrategy)}`);

  state.phase1Order = shuffle(range(1, CONFIG.phase1TaskCount));
  state.phase2Order = shuffle(range(1, CONFIG.phase2TaskCount));

  renderPage();
}

function loadTaskAnswersFromEmbeddedData() {
  state.tasks = DOOR_TASKS;
  state.tasksById = {};
  DOOR_TASKS.forEach(task => {
    state.tasksById[Number(task.task_id)] = task;
  });
}

function range(start, endInclusive) {
  return Array.from({ length: endInclusive - start + 1 }, (_, i) => start + i);
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomArrayItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatTrustStrategyLabel(strategy) {
  const labels = {
    over_trusting: "Over-trusting AI",
    under_trusting: "Under-trusting AI",
    calibrated_trusting: "Calibrated-trusting AI"
  };
  return labels[strategy] || strategy;
}

function doorLabel(door) {
  return door === "left" ? "Left Door" : "Right Door";
}

function getTaskMeta(taskNumber) {
  const task = state.tasksById[Number(taskNumber)];
  if (!task) throw new Error(`Task metadata not found for task_id=${taskNumber}`);
  return task;
}

function getCorrectAnswer(taskNumber) {
  return getTaskMeta(taskNumber).correct_answer;
}

function getAIAnswer(taskNumber) {
  return getTaskMeta(taskNumber).AI_answer;
}

function getPhaseTaskNumber(phase, indexInPhase) {
  return phase === 1 ? indexInPhase : indexInPhase + CONFIG.phase1TaskCount;
}

function updateProgress() {
  progressText.textContent = `Page ${state.page} / ${CONFIG.totalPages}`;
  progressBar.style.width = `${(state.page / CONFIG.totalPages) * 100}%`;
}

function renderPage() {
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (state.page === 1) renderDemographics();
  if (state.page === 2) renderConsent();
  if (state.page === 3) renderStudyIntro();
  if (state.page === 4) renderPhase1Intro();
  if (state.page === 5) renderPhase1Task();
  if (state.page === 6) renderMediatorSurvey();
  if (state.page === 7) renderPhase2Intro();
  if (state.page === 8) renderPhase2Task();
  if (state.page === 9) renderFinalSurvey();
  if (state.page === 10) renderCompletion();
}

function setHTML(html) { app.innerHTML = html; }
function nextPage() { state.page += 1; renderPage(); }
function backPage() { state.page = Math.max(1, state.page - 1); renderPage(); }

function renderAgentWidget(message = "I am ready to collaborate on this challenge.") {
  return `
    <div class="agent-widget">
      <div class="agent-icon" aria-label="AI agent icon">
        <div class="agent-antenna"></div>
        <div class="agent-mouth"></div>
      </div>
      <div class="agent-bubble" id="agentBubble">${message}</div>
    </div>
  `;
}

function setAgentBubble(message) {
  const bubble = document.getElementById("agentBubble");
  if (bubble) bubble.innerHTML = message;
}

function renderDemographics() {
  setHTML(`
    <section class="card narrow">
      <h2>Demographic Information</h2>
      <p>Please answer the following questions before starting the study.</p>
      <div class="form-grid">
        <div class="form-row"><label for="age">Age</label><input id="age" type="number" min="18" max="100" placeholder="e.g., 25" required /></div>
        <div class="form-row"><label for="gender">Gender</label><select id="gender" required><option value="">Select one</option><option>Woman</option><option>Man</option><option>Non-binary</option><option>Prefer not to say</option><option>Other</option></select></div>
        <div class="form-row"><label for="education">Highest education level</label><select id="education" required><option value="">Select one</option><option>High school or below</option><option>Some college</option><option>Bachelor's degree</option><option>Master's degree</option><option>Doctoral degree</option><option>Other</option></select></div>
        <div class="form-row"><label for="aiExperience">Experience with AI tools</label><select id="aiExperience" required><option value="">Select one</option><option>Never used</option><option>Rarely</option><option>Sometimes</option><option>Often</option><option>Very often</option></select></div>
      </div>
      <div class="form-row"><label for="participantCode">Participant ID / platform ID</label><input id="participantCode" type="text" placeholder="Optional or required depending on your platform" /></div>
      <p id="demoError" class="error hidden">Please complete all required fields.</p>
      <div class="actions"><button class="btn primary" id="demoNext">Next</button></div>
    </section>
  `);
  document.getElementById("demoNext").addEventListener("click", () => {
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const education = document.getElementById("education").value;
    const aiExperience = document.getElementById("aiExperience").value;
    const participantCode = document.getElementById("participantCode").value.trim();
    if (!age || !gender || !education || !aiExperience) {
      document.getElementById("demoError").classList.remove("hidden");
      return;
    }
    state.demographics = { age, gender, education, aiExperience, participantCode };
    nextPage();
  });
}

function renderConsent() {
  setHTML(`
    <section class="card narrow">
      <h2>Consent Form</h2>
      <p>You are invited to participate in a research study on human-AI collaboration and door-choice reasoning.</p>
      <div class="info-box"><strong>Study procedure:</strong><p>You will interact with an AI collaborator across two phases. In the first phase, you provide suggestions and the AI decides whether to rely on them. In the second phase, the AI provides suggestions and you decide whether to rely on the AI.</p></div>
      <p>Your participation is voluntary. You may stop at any time. Your responses will be used for research purposes.</p>
      <div class="checkbox-row"><input id="consentAge" type="checkbox" /><label for="consentAge">I confirm that I am at least 18 years old.</label></div>
      <div class="checkbox-row"><input id="consentVoluntary" type="checkbox" /><label for="consentVoluntary">I understand that my participation is voluntary.</label></div>
      <div class="checkbox-row"><input id="consentAgree" type="checkbox" /><label for="consentAgree">I agree to participate in this study.</label></div>
      <p id="consentError" class="error hidden">Please check all boxes to continue.</p>
      <div class="actions"><button class="btn secondary" id="consentBack">Back</button><button class="btn primary" id="consentNext">Next</button></div>
    </section>
  `);
  document.getElementById("consentBack").addEventListener("click", backPage);
  document.getElementById("consentNext").addEventListener("click", () => {
    const ok = document.getElementById("consentAge").checked && document.getElementById("consentVoluntary").checked && document.getElementById("consentAgree").checked;
    if (!ok) {
      document.getElementById("consentError").classList.remove("hidden");
      return;
    }
    state.consent = { consentAge: true, consentVoluntary: true, consentAgree: true, consentTime: new Date().toISOString() };
    nextPage();
  });
}

function renderStudyIntro() {
  setHTML(`
    <section class="card narrow">
      <h2>Study Introduction</h2>
      <p>In this study, you will complete a series of door-choice reasoning challenges. Each task asks you to select which of two doors is safe.</p>
      <div class="info-box"><h3>How to answer each task</h3><p>Each scene contains two doors and multiple clues for each door. One door is safer overall. Importantly, the safe door may still have a suspicious-looking clue, and the unsafe door may still have a tempting-looking clue. Please weigh the evidence carefully.</p></div>
      <p>There is no need to rush, but please stay focused. Your choices and interaction process will be recorded for research analysis.</p>
      <div class="actions"><button class="btn secondary" id="introBack">Back</button><button class="btn primary" id="introNext">Next</button></div>
    </section>
  `);
  document.getElementById("introBack").addEventListener("click", backPage);
  document.getElementById("introNext").addEventListener("click", nextPage);
}

function renderPhase1Intro() {
  setHTML(`
    <section class="card narrow">
      <h2>Phase 1: You Advise, AI Decides</h2>
      <p>You and an AI collaborator are now working together on door-choice reasoning challenges.</p>
      <div class="info-box"><p>In this phase, your role is to give the AI a suggestion. For each task, you will first select the door you think is safe. The AI will then make its own choice and decide whether to accept your suggestion.</p></div>
      <p>After the AI makes its decision, you will open the AI's final door and see whether it was safe. You cannot revise your answer after seeing the AI's response.</p>
      <div class="warning-box">Current experimental version: <strong>${state.condition}</strong>. You can force a version by adding <code>?version=direct</code> or <code>?version=explanation</code> to the URL.</div>
      <div class="actions"><button class="btn secondary" id="p1IntroBack">Back</button><button class="btn primary" id="p1IntroNext">Start Phase 1</button></div>
    </section>
  `);
  document.getElementById("p1IntroBack").addEventListener("click", backPage);
  document.getElementById("p1IntroNext").addEventListener("click", nextPage);
}

function clueIcon(type) {
  const icons = {
    light: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="9" fill="#fde68a"/><path d="M20 3v7M20 30v7M3 20h7M30 20h7M8 8l5 5M27 27l5 5M32 8l-5 5M13 27l-5 5" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/></svg>',
    seal: '<svg viewBox="0 0 40 40"><path d="M20 4l12 5v9c0 8-5 14-12 18C13 32 8 26 8 18V9l12-5z" fill="#60a5fa"/><path d="M13 20l5 5 10-11" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    footprints: '<svg viewBox="0 0 40 40"><ellipse cx="14" cy="14" rx="5" ry="8" fill="#bbf7d0" transform="rotate(-20 14 14)"/><ellipse cx="26" cy="27" rx="5" ry="8" fill="#bbf7d0" transform="rotate(-20 26 27)"/></svg>',
    keyhole: '<svg viewBox="0 0 40 40"><circle cx="20" cy="14" r="8" fill="#86efac"/><path d="M17 21h6l3 15H14l3-15z" fill="#22c55e"/></svg>',
    frame: '<svg viewBox="0 0 40 40"><rect x="9" y="5" width="22" height="30" rx="2" fill="none" stroke="#d1fae5" stroke-width="4"/><path d="M14 31h12" stroke="#86efac" stroke-width="4" stroke-linecap="round"/></svg>',
    mark: '<svg viewBox="0 0 40 40"><path d="M6 22l8 8L34 10" fill="none" stroke="#4ade80" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    lantern: '<svg viewBox="0 0 40 40"><path d="M14 13h12l3 18H11l3-18z" fill="#fde68a"/><path d="M16 13a4 4 0 018 0" fill="none" stroke="#f59e0b" stroke-width="3"/><circle cx="20" cy="23" r="5" fill="#fbbf24"/></svg>',
    handle: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="#facc15"/><circle cx="20" cy="20" r="4" fill="#92400e"/></svg>',
    breeze: '<svg viewBox="0 0 40 40"><path d="M5 14h22a5 5 0 100-10" fill="none" stroke="#bae6fd" stroke-width="4" stroke-linecap="round"/><path d="M5 25h28a5 5 0 110 10" fill="none" stroke="#bae6fd" stroke-width="4" stroke-linecap="round"/></svg>',
    mat: '<svg viewBox="0 0 40 40"><rect x="5" y="13" width="30" height="18" rx="3" fill="#a7f3d0"/><path d="M10 21h20" stroke="#047857" stroke-width="3"/></svg>',
    scratch: '<svg viewBox="0 0 40 40"><path d="M10 6l-3 28M20 5l-4 30M31 8l-5 27" stroke="#fecaca" stroke-width="4" stroke-linecap="round"/></svg>',
    warning: '<svg viewBox="0 0 40 40"><path d="M20 5l17 30H3L20 5z" fill="#f97316"/><path d="M20 15v9" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="20" cy="29" r="2" fill="#fff"/></svg>',
    crack: '<svg viewBox="0 0 40 40"><path d="M22 3l-7 11 8 4-10 19" fill="none" stroke="#fecaca" stroke-width="4" stroke-linejoin="round"/></svg>',
    smoke: '<svg viewBox="0 0 40 40"><path d="M13 34c10-6-5-10 4-16 7-5-1-8 6-13M25 35c8-8-4-12 5-20" fill="none" stroke="#9ca3af" stroke-width="4" stroke-linecap="round"/></svg>',
    covered: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#111827"/><path d="M8 32L32 8" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/></svg>',
    shadow: '<svg viewBox="0 0 40 40"><ellipse cx="20" cy="25" rx="15" ry="7" fill="#111827"/><circle cx="14" cy="23" r="3" fill="#6b7280"/><circle cx="26" cy="23" r="3" fill="#6b7280"/></svg>',
    thread: '<svg viewBox="0 0 40 40"><path d="M7 20c7-10 19 10 26 0M7 27c7-10 19 10 26 0" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/></svg>',
    tile: '<svg viewBox="0 0 40 40"><rect x="6" y="10" width="28" height="22" fill="#d1d5db"/><path d="M6 21h28M20 10v22M16 21l5-5 3 9" stroke="#6b7280" stroke-width="2" fill="none"/></svg>',
    sign: '<svg viewBox="0 0 40 40"><rect x="8" y="12" width="24" height="16" rx="2" fill="#fef3c7" transform="rotate(-12 20 20)"/><path d="M14 20h12" stroke="#92400e" stroke-width="3"/></svg>',
    clicking: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="10" fill="#fca5a5"/><path d="M20 8v12l8 5" stroke="#7f1d1d" stroke-width="4" stroke-linecap="round"/></svg>',
    ambiguous_glow: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="11" fill="#fde68a" opacity=".8"/><text x="20" y="26" text-anchor="middle" font-size="20" fill="#92400e">?</text></svg>',
    note: '<svg viewBox="0 0 40 40"><rect x="9" y="6" width="22" height="28" rx="2" fill="#fef3c7"/><path d="M14 15h12M14 21h10M14 27h8" stroke="#92400e" stroke-width="2"/></svg>',
    dust: '<svg viewBox="0 0 40 40"><circle cx="10" cy="25" r="3" fill="#d6d3d1"/><circle cx="19" cy="18" r="4" fill="#d6d3d1"/><circle cx="29" cy="26" r="3" fill="#d6d3d1"/></svg>',
    warm_handle: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="9" fill="#f59e0b"/><path d="M9 8c5 4 5 8 0 12M31 8c-5 4-5 8 0 12" stroke="#fed7aa" stroke-width="3" fill="none"/></svg>',
    lock: '<svg viewBox="0 0 40 40"><rect x="10" y="17" width="20" height="16" rx="3" fill="#fbbf24"/><path d="M14 17v-5a6 6 0 0112 0v5" fill="none" stroke="#92400e" stroke-width="4"/><path d="M12 34l16-16" stroke="#ef4444" stroke-width="3"/></svg>',
    quiet: '<svg viewBox="0 0 40 40"><path d="M9 22h7l8 7V11l-8 7H9v4z" fill="#c7d2fe"/><path d="M29 15l6 10M35 15l-6 10" stroke="#818cf8" stroke-width="3" stroke-linecap="round"/></svg>'
  };
  return icons[type] || icons.note;
}

function renderVisualClues(clues) {
  return clues.slice(0, 3).map((clue, idx) => `
    <span class="visual-clue pos${idx}" title="${clue.text}">
      ${clueIcon(clue.type)}
    </span>
  `).join("");
}

function renderClueList(clues) {
  return clues.map(clue => `
    <li class="${clue.evidence}-evidence">
      <span class="clue-main">${clue.text}</span>
    </li>
  `).join("");
}

function renderDoorScene(task, openedDoor = null, showOutcome = false) {
  const leftGlow = showOutcome && openedDoor === "left" ? (task.correct_answer === "left" ? "safe show" : "danger show") : "";
  const rightGlow = showOutcome && openedDoor === "right" ? (task.correct_answer === "right" ? "safe show" : "danger show") : "";

  return `
    <div class="door-scene">
      <h2>Door Challenge ${String(task.task_id).padStart(2, "0")}</h2>
      <p>Inspect the clues. Both doors contain mixed evidence: each door has one safety cue, one risk cue, and one ambiguous cue. The safer door depends on the reliability and source of the cues.</p>
      <div class="doors-row">
        <div class="door-zone">
          <div class="door-name">Left Door</div>
          <div class="door-frame">
            <div class="door-glow ${leftGlow}"></div>
            <div class="door left-door ${openedDoor === "left" ? "open" : ""}">
              <div class="door-panel p1"></div><div class="door-panel p2"></div><div class="door-panel p3"></div><div class="knob"></div>
              ${renderVisualClues(task.left_clues)}
            </div>
          </div>
        </div>
        <div class="door-zone">
          <div class="door-name">Right Door</div>
          <div class="door-frame">
            <div class="door-glow ${rightGlow}"></div>
            <div class="door right-door ${openedDoor === "right" ? "open" : ""}">
              <div class="door-panel p1"></div><div class="door-panel p2"></div><div class="door-panel p3"></div><div class="knob"></div>
              ${renderVisualClues(task.right_clues)}
            </div>
          </div>
        </div>
      </div>
      <div class="clues-grid">
        <div class="clue-card"><h3>Left Door Clues</h3><ul>${renderClueList(task.left_clues)}</ul></div>
        <div class="clue-card"><h3>Right Door Clues</h3><ul>${renderClueList(task.right_clues)}</ul></div>
      </div>
    </div>
  `;
}

function renderChoiceButtons(onSelect) {
  const wrap = document.createElement("div");
  wrap.className = "choice-grid";
  wrap.innerHTML = `<button class="choice-btn" data-choice="left">Left Door</button><button class="choice-btn" data-choice="right">Right Door</button>`;
  wrap.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      onSelect(btn.dataset.choice);
    });
  });
  return wrap;
}

function lockChoiceGrid(container) {
  container.querySelectorAll(".choice-btn").forEach(btn => {
    btn.disabled = true;
    btn.classList.add("locked");
  });
}

function renderPhase1Task() {
  const i = state.phase1Index;
  const taskNumber = getPhaseTaskNumber(1, state.phase1Order[i]);
  const task = getTaskMeta(taskNumber);

  setHTML(`
    <section class="card">
      <div class="task-meta"><span class="badge">Phase 1</span><span class="badge">Task ${i + 1} / ${CONFIG.phase1TaskCount}</span></div>
      <div class="task-layout">
        <div id="doorSceneWrap">${renderDoorScene(task)}</div>
        <aside class="task-panel">
          ${renderAgentWidget("I am reviewing the door clues. Please share your suggestion first.")}
          <h2>Your suggestion to the AI</h2>
          <p>Please select the door you think is safe.</p>
          <div id="phase1ChoiceArea"></div>
          <button class="btn primary" id="submitP1" disabled>Submit Suggestion</button>
          <div id="phase1AIResponse"></div>
          <div class="actions" id="phase1Actions"></div>
        </aside>
      </div>
    </section>
  `);

  const choiceArea = document.getElementById("phase1ChoiceArea");
  choiceArea.appendChild(renderChoiceButtons((choice) => {
    state.currentP1Choice = choice;
    document.getElementById("submitP1").disabled = false;
  }));

  document.getElementById("submitP1").addEventListener("click", () => handlePhase1Submit(taskNumber));
}

function getPhase1CaseType(sameChoice, humanIsCorrect, aiIsCorrect, bothWrongDifferent) {
  if (sameChoice) return "agreement";
  if (humanIsCorrect && !aiIsCorrect) return "human_correct_ai_wrong";
  if (!humanIsCorrect && aiIsCorrect) return "human_wrong_ai_correct";
  if (bothWrongDifferent) return "both_wrong_different";
  return "unexpected_case";
}

function getPhase1ConsoleCaseType(sameChoice, humanIsCorrect, aiIsCorrect, bothWrongDifferent) {
  if (humanIsCorrect && aiIsCorrect) return "human_correct_ai_correct";
  if (sameChoice && !humanIsCorrect && !aiIsCorrect) return "same_choice_both_wrong";
  if (humanIsCorrect && !aiIsCorrect) return "human_correct_ai_wrong";
  if (!humanIsCorrect && aiIsCorrect) return "human_wrong_ai_correct";
  if (bothWrongDifferent) return "different_choice_both_wrong";
  return "unexpected_case";
}

function logPhase1CaseStats() {
  const stats = state.phase1TrustStats.consoleCaseStats;
  console.groupCollapsed(`[Phase 1 Trust Stats] Trial ${state.phase1TrustStats.totalDecisions} | Strategy: ${state.phase1TrustStrategy} | Overall adoption: ${state.phase1TrustStats.acceptedCount}/${state.phase1TrustStats.totalDecisions} (${(getCurrentPhase1AdoptionRate() * 100).toFixed(1)}%)`);
  console.table({
    human_correct_ai_correct: {
      description: "Human correct, AI correct",
      total: stats.human_correct_ai_correct.total,
      accepted: stats.human_correct_ai_correct.accepted,
      adoptionRate: stats.human_correct_ai_correct.total ? `${((stats.human_correct_ai_correct.accepted / stats.human_correct_ai_correct.total) * 100).toFixed(1)}%` : "N/A"
    },
    same_choice_both_wrong: {
      description: "Same choice, both wrong",
      total: stats.same_choice_both_wrong.total,
      accepted: stats.same_choice_both_wrong.accepted,
      adoptionRate: stats.same_choice_both_wrong.total ? `${((stats.same_choice_both_wrong.accepted / stats.same_choice_both_wrong.total) * 100).toFixed(1)}%` : "N/A"
    },
    human_correct_ai_wrong: {
      description: "Human correct, AI wrong",
      total: stats.human_correct_ai_wrong.total,
      accepted: stats.human_correct_ai_wrong.accepted,
      adoptionRate: stats.human_correct_ai_wrong.total ? `${((stats.human_correct_ai_wrong.accepted / stats.human_correct_ai_wrong.total) * 100).toFixed(1)}%` : "N/A"
    },
    human_wrong_ai_correct: {
      description: "Human wrong, AI correct",
      total: stats.human_wrong_ai_correct.total,
      accepted: stats.human_wrong_ai_correct.accepted,
      adoptionRate: stats.human_wrong_ai_correct.total ? `${((stats.human_wrong_ai_correct.accepted / stats.human_wrong_ai_correct.total) * 100).toFixed(1)}%` : "N/A"
    },
    different_choice_both_wrong: {
      description: "Different choices, both wrong",
      total: stats.different_choice_both_wrong.total,
      accepted: stats.different_choice_both_wrong.accepted,
      adoptionRate: stats.different_choice_both_wrong.total ? `${((stats.different_choice_both_wrong.accepted / stats.different_choice_both_wrong.total) * 100).toFixed(1)}%` : "N/A"
    }
  });
  console.groupEnd();
}

function getCurrentPhase1AdoptionRate() {
  const total = state.phase1TrustStats.totalDecisions;
  if (total === 0) return 0;
  return state.phase1TrustStats.acceptedCount / total;
}

function getPhase1CaseAdoptionRate(caseType) {
  const stats = state.phase1TrustStats.caseStats[caseType];
  if (!stats || stats.total === 0) return 0;
  return stats.accepted / stats.total;
}

function decidePhase1Trust(userChoice, aiInitialChoice, correctAnswer) {
  const humanIsCorrect = userChoice === correctAnswer;
  const aiIsCorrect = aiInitialChoice === correctAnswer;
  const sameChoice = userChoice === aiInitialChoice;
  const bothWrongDifferent = !humanIsCorrect && !aiIsCorrect && !sameChoice;
  const caseType = getPhase1CaseType(sameChoice, humanIsCorrect, aiIsCorrect, bothWrongDifferent);
  const consoleCaseType = getPhase1ConsoleCaseType(sameChoice, humanIsCorrect, aiIsCorrect, bothWrongDifferent);
  const currentOverallAdoptionRate = getCurrentPhase1AdoptionRate();
  const currentCaseAdoptionRate = getPhase1CaseAdoptionRate(caseType);

  let aiTrustsUser;
  let reasonCode;

  if (sameChoice) {
    aiTrustsUser = true;
    reasonCode = "same_choice_accept";
  } else if (state.phase1TrustStrategy === "over_trusting") {
    const decision = decideOverTrusting(humanIsCorrect, aiIsCorrect, bothWrongDifferent, caseType, currentCaseAdoptionRate);
    aiTrustsUser = decision.aiTrustsUser;
    reasonCode = decision.reasonCode;
  } else if (state.phase1TrustStrategy === "under_trusting") {
    const decision = decideUnderTrusting(humanIsCorrect, aiIsCorrect, bothWrongDifferent, caseType, currentCaseAdoptionRate);
    aiTrustsUser = decision.aiTrustsUser;
    reasonCode = decision.reasonCode;
  } else if (state.phase1TrustStrategy === "calibrated_trusting") {
    const decision = decideCalibratedTrusting(humanIsCorrect, aiIsCorrect, bothWrongDifferent, caseType, currentCaseAdoptionRate);
    aiTrustsUser = decision.aiTrustsUser;
    reasonCode = decision.reasonCode;
  } else {
    throw new Error(`Unknown phase1TrustStrategy: ${state.phase1TrustStrategy}`);
  }

  return {
    aiTrustsUser, reasonCode, humanIsCorrect, aiIsCorrect, sameChoice, bothWrongDifferent, caseType, consoleCaseType,
    currentAdoptionRateBeforeDecision: currentOverallAdoptionRate,
    currentCaseAdoptionRateBeforeDecision: currentCaseAdoptionRate
  };
}

function decideOverTrusting(humanIsCorrect, aiIsCorrect, bothWrongDifferent, caseType, currentCaseAdoptionRate) {
  if (humanIsCorrect && !aiIsCorrect) return { aiTrustsUser: true, reasonCode: "over_human_correct_ai_wrong_always_accept" };
  if (!humanIsCorrect && aiIsCorrect) {
    if (state.phase1TrustStats.humanWrongAICorrectCount < 2) return { aiTrustsUser: true, reasonCode: "over_human_wrong_ai_correct_first_two_accept" };
    if (currentCaseAdoptionRate <= CONFIG.overTrustingMaxAdoptionRate) return { aiTrustsUser: true, reasonCode: "over_human_wrong_ai_correct_case_rate_control_accept" };
    return { aiTrustsUser: false, reasonCode: "over_human_wrong_ai_correct_case_rate_control_reject" };
  }
  if (bothWrongDifferent) {
    if (currentCaseAdoptionRate <= CONFIG.overTrustingMaxAdoptionRate) return { aiTrustsUser: true, reasonCode: "over_both_wrong_different_case_rate_control_accept" };
    return { aiTrustsUser: false, reasonCode: "over_both_wrong_different_case_rate_control_reject" };
  }
  if (currentCaseAdoptionRate <= CONFIG.overTrustingMaxAdoptionRate) return { aiTrustsUser: true, reasonCode: "over_fallback_case_rate_control_accept" };
  return { aiTrustsUser: false, reasonCode: "over_fallback_case_rate_control_reject" };
}

function decideUnderTrusting(humanIsCorrect, aiIsCorrect, bothWrongDifferent, caseType, currentCaseAdoptionRate) {
  if (!humanIsCorrect && aiIsCorrect) return { aiTrustsUser: false, reasonCode: "under_human_wrong_ai_correct_always_reject" };
  if (humanIsCorrect && !aiIsCorrect) {
    if (state.phase1TrustStats.humanCorrectAIWrongCount < 2) return { aiTrustsUser: false, reasonCode: "under_human_correct_ai_wrong_first_two_reject" };
    if (currentCaseAdoptionRate >= CONFIG.underTrustingMinAdoptionRate) return { aiTrustsUser: false, reasonCode: "under_human_correct_ai_wrong_case_rate_control_reject" };
    return { aiTrustsUser: true, reasonCode: "under_human_correct_ai_wrong_case_rate_control_accept" };
  }
  if (bothWrongDifferent) {
    if (currentCaseAdoptionRate < CONFIG.underTrustingMinAdoptionRate) return { aiTrustsUser: true, reasonCode: "under_both_wrong_different_case_rate_control_accept" };
    return { aiTrustsUser: false, reasonCode: "under_both_wrong_different_case_rate_control_reject" };
  }
  if (currentCaseAdoptionRate < CONFIG.underTrustingMinAdoptionRate) return { aiTrustsUser: true, reasonCode: "under_fallback_case_rate_control_accept" };
  return { aiTrustsUser: false, reasonCode: "under_fallback_case_rate_control_reject" };
}

function decideCalibratedTrusting(humanIsCorrect, aiIsCorrect, bothWrongDifferent, caseType, currentCaseAdoptionRate) {
  if (!humanIsCorrect && aiIsCorrect) {
    if (state.phase1TrustStats.humanWrongAICorrectCount < 2) return { aiTrustsUser: false, reasonCode: "calibrated_human_wrong_ai_correct_first_two_reject" };
    if (currentCaseAdoptionRate >= CONFIG.calibratedMinAdoptionRate) return { aiTrustsUser: false, reasonCode: "calibrated_human_wrong_ai_correct_case_low_bound_reject" };
    return { aiTrustsUser: true, reasonCode: "calibrated_human_wrong_ai_correct_case_low_bound_accept" };
  }
  if (humanIsCorrect && !aiIsCorrect) {
    if (state.phase1TrustStats.humanCorrectAIWrongCount < 2) return { aiTrustsUser: true, reasonCode: "calibrated_human_correct_ai_wrong_first_two_accept" };
    if (currentCaseAdoptionRate <= CONFIG.calibratedMaxAdoptionRate) return { aiTrustsUser: true, reasonCode: "calibrated_human_correct_ai_wrong_case_high_bound_accept" };
    return { aiTrustsUser: false, reasonCode: "calibrated_human_correct_ai_wrong_case_high_bound_reject" };
  }
  if (bothWrongDifferent) {
    if (currentCaseAdoptionRate < CONFIG.calibratedNeutralAdoptionRate) return { aiTrustsUser: true, reasonCode: "calibrated_both_wrong_different_case_neutral_accept" };
    return { aiTrustsUser: false, reasonCode: "calibrated_both_wrong_different_case_neutral_reject" };
  }
  if (currentCaseAdoptionRate < CONFIG.calibratedMinAdoptionRate) return { aiTrustsUser: true, reasonCode: "calibrated_fallback_case_low_bound_accept" };
  if (currentCaseAdoptionRate > CONFIG.calibratedMaxAdoptionRate) return { aiTrustsUser: false, reasonCode: "calibrated_fallback_case_high_bound_reject" };
  return { aiTrustsUser: false, reasonCode: "calibrated_fallback_case_reject" };
}

function updatePhase1TrustStats(decision) {
  state.phase1TrustStats.totalDecisions += 1;
  if (decision.aiTrustsUser) state.phase1TrustStats.acceptedCount += 1;
  if (decision.humanIsCorrect && !decision.aiIsCorrect) state.phase1TrustStats.humanCorrectAIWrongCount += 1;
  if (!decision.humanIsCorrect && decision.aiIsCorrect) state.phase1TrustStats.humanWrongAICorrectCount += 1;
  if (decision.bothWrongDifferent) state.phase1TrustStats.bothWrongDifferentCount += 1;

  if (state.phase1TrustStats.caseStats[decision.caseType]) {
    state.phase1TrustStats.caseStats[decision.caseType].total += 1;
    if (decision.aiTrustsUser) state.phase1TrustStats.caseStats[decision.caseType].accepted += 1;
  } else console.warn("Unexpected Phase 1 logic case type:", decision.caseType, decision);

  if (state.phase1TrustStats.consoleCaseStats[decision.consoleCaseType]) {
    state.phase1TrustStats.consoleCaseStats[decision.consoleCaseType].total += 1;
    if (decision.aiTrustsUser) state.phase1TrustStats.consoleCaseStats[decision.consoleCaseType].accepted += 1;
  } else console.warn("Unexpected Phase 1 console case type:", decision.consoleCaseType, decision);

  logPhase1CaseStats();
}

function makeClueBasedExplanation(task, aiTrustsUser, userChoice, aiInitialChoice, aiFinalChoice) {
  const userClues = userChoice === "left" ? task.left_clues : task.right_clues;
  const aiClues = aiInitialChoice === "left" ? task.left_clues : task.right_clues;

  const reliabilityRank = { high: 3, medium: 2, low: 1 };
  const bestSafe = clues =>
    [...clues].filter(c => c.evidence === "safe")
      .sort((a, b) => (reliabilityRank[b.reliability] || 0) - (reliabilityRank[a.reliability] || 0))[0]
    || clues.find(c => c.evidence === "ambiguous")
    || clues[0];

  const strongestDanger = clues =>
    [...clues].filter(c => c.evidence === "danger")
      .sort((a, b) => (reliabilityRank[b.reliability] || 0) - (reliabilityRank[a.reliability] || 0))[0]
    || clues.find(c => c.evidence === "ambiguous")
    || clues[0];

  if (aiTrustsUser) {
    const clue = bestSafe(userClues);
    return `I decide to trust your suggestion. I am not just counting good or bad clues; I am weighing their sources. The ${doorLabel(userChoice)} has a ${clue.reliability}-reliability cue from ${clue.source}: “${clue.text}”. I will use your suggested door as my final decision.`;
  }

  const supporting = bestSafe(aiClues);
  const risk = strongestDanger(userClues);
  return `I decide not to adopt your suggestion. I am weighing the sources of the clues differently. My current choice, the ${doorLabel(aiInitialChoice)}, has a ${supporting.reliability}-reliability supporting cue from ${supporting.source}: “${supporting.text}”. Your suggested door also has a risk cue from ${risk.source}: “${risk.text}”. I will keep my initial decision.`;
}

function handlePhase1Submit(taskNumber) {
  const userChoice = state.currentP1Choice;
  if (!userChoice) return;

  const submitBtn = document.getElementById("submitP1");
  submitBtn.disabled = true;
  lockChoiceGrid(document.getElementById("phase1ChoiceArea"));

  const task = getTaskMeta(taskNumber);
  const aiInitialChoice = getAIAnswer(taskNumber);
  const correctAnswer = getCorrectAnswer(taskNumber);

  const trustDecision = decidePhase1Trust(userChoice, aiInitialChoice, correctAnswer);
  updatePhase1TrustStats(trustDecision);

  const aiTrustsUser = trustDecision.aiTrustsUser;
  const aiFinalChoice = aiTrustsUser ? userChoice : aiInitialChoice;
  const aiFinalIsCorrect = aiFinalChoice === correctAnswer;
  const adoptionRateAfterDecision = getCurrentPhase1AdoptionRate();
  const caseAdoptionRateAfterDecision = getPhase1CaseAdoptionRate(trustDecision.caseType);
  const clueExplanation = makeClueBasedExplanation(task, aiTrustsUser, userChoice, aiInitialChoice, aiFinalChoice);

  const responseDiv = document.getElementById("phase1AIResponse");
  setAgentBubble(`My initial decision is the <strong>${doorLabel(aiInitialChoice)}</strong>.`);
  responseDiv.innerHTML = `
    <div class="ai-card">
      <h3>AI's initial choice</h3>
      <p>The AI initially selected the <strong>${doorLabel(aiInitialChoice)}</strong>.</p>
    </div>
    <div class="ai-card">
      <div class="thinking">
        <span>AI is deciding whether to accept your suggestion</span>
        <span class="dots"><span>.</span><span>.</span><span>.</span></span>
      </div>
    </div>
  `;

  const trialStartTime = new Date().toISOString();

  setTimeout(() => {
    const trustMessage = getPhase1TrustMessage(aiTrustsUser, userChoice, aiInitialChoice, aiFinalChoice, clueExplanation, trustDecision.sameChoice);
    if (trustDecision.sameChoice) {
      setAgentBubble(`We agree on the <strong>${doorLabel(aiFinalChoice)}</strong>. I will use that as my final decision.`);
    } else {
      setAgentBubble(aiTrustsUser
        ? `I decide to trust your suggestion and open the <strong>${doorLabel(aiFinalChoice)}</strong>.`
        : `I decide to rely on my own judgment and open the <strong>${doorLabel(aiFinalChoice)}</strong>.`
      );
    }

    responseDiv.innerHTML = `
      <div class="ai-card">
        <h3>AI's initial choice</h3>
        <p>The AI initially selected the <strong>${doorLabel(aiInitialChoice)}</strong>.</p>
      </div>
      ${trustMessage}
      <div class="ai-card">
        <h3>AI's final answer</h3>
        <p>The AI decided to open the <strong>${doorLabel(aiFinalChoice)}</strong>.</p>
      </div>
      <div id="phase1ResultArea"></div>
    `;

    state.phase1Trials.push({
      phase: 1,
      trialIndex: state.phase1Index + 1,
      taskNumber,
      taskId: task.task_id,
      ravenCorrectAnswer: task.raven_correct_answer,
      ravenAIAnswer: task.raven_AI_answer,
      correctAnswer,
      aiInitialChoice,
      userSuggestion: userChoice,
      userSuggestionIsCorrect: userChoice === correctAnswer,
      aiInitialIsCorrect: aiInitialChoice === correctAnswer,
      aiTrustsUser,
      phase1TrustStrategy: state.phase1TrustStrategy,
      phase1TrustReasonCode: trustDecision.reasonCode,
      clueBasedTrustExplanation: clueExplanation,
      sameChoice: trustDecision.sameChoice,
      bothWrongDifferent: trustDecision.bothWrongDifferent,
      phase1CaseType: trustDecision.caseType,
      phase1ConsoleCaseType: trustDecision.consoleCaseType,
      currentAdoptionRateBeforeDecision: trustDecision.currentAdoptionRateBeforeDecision,
      currentCaseAdoptionRateBeforeDecision: trustDecision.currentCaseAdoptionRateBeforeDecision,
      adoptionRateAfterDecision,
      caseAdoptionRateAfterDecision,
      phase1TrustStatsSnapshot: { ...structuredCloneSafe(state.phase1TrustStats) },
      aiFinalChoice,
      aiFinalIsCorrect,
      condition: state.condition,
      submittedAt: trialStartTime,
      aiDecisionShownAt: new Date().toISOString()
    });

    const actionsDiv = document.getElementById("phase1Actions");
    actionsDiv.innerHTML = `<button class="btn primary" id="checkP1Result">Open Door</button>`;

    document.getElementById("checkP1Result").addEventListener("click", () => {
      setAgentBubble(`Opening the <strong>${doorLabel(aiFinalChoice)}</strong> now.`);
      revealDoorOutcome(task, aiFinalChoice, "phase1ResultArea", () => {
        setAgentBubble(aiFinalIsCorrect
          ? `The door was safe. My final decision was correct.`
          : `The door was unsafe. My final decision was wrong.`
        );
        actionsDiv.innerHTML = `<button class="btn primary" id="nextP1">Next</button>`;
        document.getElementById("nextP1").addEventListener("click", handlePhase1Next, { once: true });
      });
    }, { once: true });
  }, CONFIG.thinkingDurationMs);

  function handlePhase1Next() {
    state.currentP1Choice = null;
    state.phase1Index += 1;
    if (state.phase1Index >= CONFIG.phase1TaskCount) nextPage();
    else renderPhase1Task();
  }
}

function getPhase1TrustMessage(aiTrustsUser, userChoice, aiInitialChoice, aiFinalChoice, clueExplanation, sameChoice = false) {
  if (sameChoice) {
    const body = state.condition === "direct"
      ? `We selected the same door: <strong>${doorLabel(aiFinalChoice)}</strong>.`
      : `We reached the same judgment: the <strong>${doorLabel(aiFinalChoice)}</strong>. Since our choices are aligned, I will use this shared decision as my final answer.`;

    return `
      <div class="ai-card success">
        <h3>AI and you agreed</h3>
        <p>${body}</p>
      </div>
    `;
  }

  const statusClass = aiTrustsUser ? "success" : "danger";
  const title = aiTrustsUser ? "AI accepted your suggestion" : "AI did not accept your suggestion";

  if (state.condition === "direct") {
    const body = aiTrustsUser
      ? `The AI decided to trust your choice and open the <strong>${doorLabel(userChoice)}</strong>.`
      : `The AI decided not to trust your choice and kept the <strong>${doorLabel(aiFinalChoice)}</strong>.`;

    return `<div class="ai-card ${statusClass}"><h3>${title}</h3><p>${body}</p></div>`;
  }

  return `
    <div class="ai-card ${statusClass}">
      <h3>${title}</h3>
      <p>${clueExplanation}</p>
    </div>
  `;
}

function revealDoorOutcome(task, chosenDoor, resultAreaId, onDone) {
  document.getElementById("doorSceneWrap").innerHTML = renderDoorScene(task, chosenDoor, true);
  const isCorrect = chosenDoor === task.correct_answer;

  setTimeout(() => {
    const resultArea = document.getElementById(resultAreaId);
    resultArea.innerHTML = `
      <div class="ai-card ${isCorrect ? "success" : "danger"}">
        <h3>${isCorrect ? "Safe Door!" : "Wrong Door!"}</h3>
        <p>The selected door was the <strong>${doorLabel(chosenDoor)}</strong>. The safe door was the <strong>${doorLabel(task.correct_answer)}</strong>.</p>
      </div>
    `;
    onDone();
  }, CONFIG.openingDurationMs);
}

function structuredCloneSafe(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function renderMediatorSurvey() {
  const items = [
    ["respected", "The AI treated my input as valuable."],
    ["recognized", "I felt that the AI recognized my reasoning ability."],
    ["psychSafety", "I felt comfortable sharing my judgments with the AI."],
    ["reciprocalTrust", "I felt that the AI trusted me as a collaborator."],
    ["partner", "I felt that the AI worked with me as a partner rather than simply judging me."],
    ["fairness", "The AI's decisions about whether to accept my suggestions felt fair."],
    ["willingFuture", "I would be willing to collaborate with this AI again."]
  ];

  setHTML(`
    <section class="card">
      <h2>Questionnaire after Phase 1</h2>
      <p>Please indicate how much you agree with each statement.</p>
      ${renderLikertTable("mediator", items)}
      <p id="mediatorError" class="error hidden">Please answer all questions before continuing.</p>
      <div class="actions"><button class="btn primary" id="mediatorNext">Next</button></div>
    </section>
  `);

  document.getElementById("mediatorNext").addEventListener("click", () => {
    const responses = collectLikert("mediator", items.map(x => x[0]));
    if (!responses) {
      document.getElementById("mediatorError").classList.remove("hidden");
      return;
    }
    state.mediatorSurvey = responses;
    nextPage();
  });
}

function renderLikertTable(prefix, items) {
  const headers = [1, 2, 3, 4, 5, 6, 7];
  return `
    <table class="scale-table">
      <thead>
        <tr><th>Statement</th>${headers.map(n => `<th>${n}</th>`).join("")}</tr>
        <tr><th></th><th colspan="2">Strongly disagree</th><th></th><th>Neutral</th><th></th><th colspan="2">Strongly agree</th></tr>
      </thead>
      <tbody>
        ${items.map(([key, text]) => `<tr><td>${text}</td>${headers.map(n => `<td><input class="scale-radio" type="radio" name="${prefix}_${key}" value="${n}" /></td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function collectLikert(prefix, keys) {
  const responses = {};
  for (const key of keys) {
    const selected = document.querySelector(`input[name="${prefix}_${key}"]:checked`);
    if (!selected) return null;
    responses[key] = Number(selected.value);
  }
  return responses;
}

function renderPhase2Intro() {
  setHTML(`
    <section class="card narrow">
      <h2>Phase 2: AI Advises, You Decide</h2>
      <p>You will now begin the second phase of the study.</p>
      <div class="info-box"><p>In this phase, you will first make your own initial choice for each door-choice task. After that, the AI will show you its suggestion. You will then make a final choice.</p></div>
      <p>Your initial choice will be fixed after submission. You may use or ignore the AI's suggestion when making your final choice.</p>
      <div class="actions"><button class="btn primary" id="p2IntroNext">Start Phase 2</button></div>
    </section>
  `);
  document.getElementById("p2IntroNext").addEventListener("click", nextPage);
}

function renderPhase2Task() {
  const i = state.phase2Index;
  const taskNumber = getPhaseTaskNumber(2, state.phase2Order[i]);
  const task = getTaskMeta(taskNumber);

  setHTML(`
    <section class="card">
      <div class="task-meta"><span class="badge">Phase 2</span><span class="badge">Task ${i + 1} / ${CONFIG.phase2TaskCount}</span></div>
      <div class="task-layout">
        <div id="doorSceneWrap">${renderDoorScene(task)}</div>
        <aside class="task-panel">
          ${renderAgentWidget("Please make your initial choice. Then I will share my suggestion.")}
          <h2>Your initial choice</h2>
          <p>Please select your initial answer before seeing the AI's suggestion.</p>
          <div id="phase2InitialChoiceArea"></div>
          <button class="btn primary" id="submitP2Initial" disabled>Submit Initial Choice</button>
          <div id="phase2AIAdvice"></div>
          <div id="phase2FinalArea" class="hidden">
            <h2>Your final choice</h2>
            <p>You may keep your initial choice or change your answer after seeing the AI's suggestion.</p>
            <div id="phase2FinalChoiceArea"></div>
            <button class="btn primary" id="submitP2Final" disabled>Open Door</button>
          </div>
        </aside>
      </div>
    </section>
  `);

  const initialArea = document.getElementById("phase2InitialChoiceArea");
  initialArea.appendChild(renderChoiceButtons((choice) => {
    state.currentP2InitialChoice = choice;
    document.getElementById("submitP2Initial").disabled = false;
  }));

  document.getElementById("submitP2Initial").addEventListener("click", () => handlePhase2InitialSubmit(taskNumber));
}

function makePhase2SuggestionExplanation(task, aiSuggestion) {
  const aiClues = aiSuggestion === "left" ? task.left_clues : task.right_clues;
  const safeCue = aiClues.find(c => c.evidence === "safe") || aiClues.find(c => c.evidence === "ambiguous") || aiClues[0];
  return `My suggestion is the <strong>${doorLabel(aiSuggestion)}</strong>. I am focusing on this clue: “${safeCue.text}”.`;
}

function handlePhase2InitialSubmit(taskNumber) {
  const initialChoice = state.currentP2InitialChoice;
  if (!initialChoice) return;

  document.getElementById("submitP2Initial").disabled = true;
  lockChoiceGrid(document.getElementById("phase2InitialChoiceArea"));

  const task = getTaskMeta(taskNumber);
  const aiSuggestion = getAIAnswer(taskNumber);
  const correctAnswer = getCorrectAnswer(taskNumber);
  const agentExplanation = makePhase2SuggestionExplanation(task, aiSuggestion);

  setAgentBubble(agentExplanation);

  document.getElementById("phase2AIAdvice").innerHTML = `
    <div class="ai-card warning">
      <h3>AI's suggestion</h3>
      <p>${agentExplanation}</p>
    </div>
  `;

  const finalArea = document.getElementById("phase2FinalArea");
  finalArea.classList.remove("hidden");

  const finalChoiceArea = document.getElementById("phase2FinalChoiceArea");
  finalChoiceArea.appendChild(renderChoiceButtons((choice) => {
    state.currentP2FinalChoice = choice;
    document.getElementById("submitP2Final").disabled = false;
  }));

  document.getElementById("submitP2Final").addEventListener("click", () => {
    const finalChoice = state.currentP2FinalChoice;
    if (!finalChoice) return;

    document.getElementById("submitP2Final").disabled = true;
    lockChoiceGrid(document.getElementById("phase2FinalChoiceArea"));

    state.phase2Trials.push({
      phase: 2,
      trialIndex: state.phase2Index + 1,
      taskNumber,
      taskId: task.task_id,
      ravenCorrectAnswer: task.raven_correct_answer,
      ravenAIAnswer: task.raven_AI_answer,
      userInitialChoice: initialChoice,
      userInitialIsCorrect: initialChoice === correctAnswer,
      aiSuggestion,
      aiSuggestionIsCorrect: aiSuggestion === correctAnswer,
      aiSuggestionExplanation: agentExplanation,
      userFinalChoice: finalChoice,
      userFinalIsCorrect: finalChoice === correctAnswer,
      correctAnswer,
      acceptedAIAdvice: finalChoice === aiSuggestion,
      changedFromInitial: finalChoice !== initialChoice,
      submittedAt: new Date().toISOString()
    });

    const adviceDiv = document.getElementById("phase2AIAdvice");
    adviceDiv.insertAdjacentHTML("beforeend", `<div id="phase2ResultArea"></div>`);

    setAgentBubble(`Opening the <strong>${doorLabel(finalChoice)}</strong> now.`);
    revealDoorOutcome(task, finalChoice, "phase2ResultArea", () => {
      setAgentBubble(finalChoice === correctAnswer
        ? `The door was safe. Your final decision was correct.`
        : `The door was unsafe. Your final decision was wrong.`
      );

      const panel = document.querySelector(".task-panel");
      const actions = document.createElement("div");
      actions.className = "actions";
      actions.innerHTML = `<button class="btn primary" id="nextP2">Next</button>`;
      panel.appendChild(actions);

      document.getElementById("nextP2").addEventListener("click", () => {
        state.currentP2InitialChoice = null;
        state.currentP2FinalChoice = null;
        state.phase2Index += 1;
        if (state.phase2Index >= CONFIG.phase2TaskCount) nextPage();
        else renderPhase2Task();
      }, { once: true });
    });
  }, { once: true });
}

function renderFinalSurvey() {
  const items = [
    ["trustAI", "I trusted the AI's suggestions in the second phase."],
    ["relyAI", "I was willing to rely on the AI when making my final choices."],
    ["competentAI", "The AI seemed competent at the door-choice tasks."],
    ["benevolentAI", "The AI seemed to support my performance."],
    ["integrityAI", "The AI seemed consistent and principled in its decisions."],
    ["calibratedTrust", "My trust in the AI felt appropriate for its behavior."],
    ["collabQuality", "Overall, the collaboration with the AI felt effective."]
  ];

  setHTML(`
    <section class="card">
      <h2>Final Questionnaire</h2>
      <p>Please answer the following questions about the overall study experience.</p>
      ${renderLikertTable("final", items)}
      <div class="form-row"><label for="openFeedback">Optional: Please describe anything you noticed about the AI collaborator.</label><textarea id="openFeedback" placeholder="Your comments..."></textarea></div>
      <p id="finalError" class="error hidden">Please answer all required questions before submitting.</p>
      <div class="actions"><button class="btn primary" id="finalSubmit">Submit Study</button></div>
    </section>
  `);

  document.getElementById("finalSubmit").addEventListener("click", () => {
    const responses = collectLikert("final", items.map(x => x[0]));
    if (!responses) {
      document.getElementById("finalError").classList.remove("hidden");
      return;
    }
    responses.openFeedback = document.getElementById("openFeedback").value.trim();
    state.finalSurvey = responses;
    state.endedAt = new Date().toISOString();
    nextPage();
  });
}

function renderCompletion() {
  const completionCode = generateCompletionCode();
  state.completionCode = completionCode;

  setHTML(`
    <section class="card narrow">
      <h2>Study Complete</h2>
      <p>Thank you for completing the study. Please copy the completion code below and return it to the study platform.</p>
      <div class="completion-code">${completionCode}</div>
      <div class="info-box"><p>Your data are stored in your browser for this demo version. Click the button below to download a JSON file containing the recorded responses.</p></div>
      <div class="actions"><button class="btn secondary" id="downloadData">Download Data JSON</button></div>
    </section>
  `);

  document.getElementById("downloadData").addEventListener("click", downloadData);
}

function generateCompletionCode() {
  const shortId = state.participantId.replaceAll("-", "").slice(0, 8).toUpperCase();
  return `${CONFIG.completionPrefix}-${shortId}`;
}

function downloadData() {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  link.href = url;
  link.download = `mutual_trust_door_choice_${timestamp}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

init();
