window.PHISHING_STUDY_DATA = {
  "metadata": {
    "source_file": "WebURL.csv",
    "source_dataset": "PhiUSIIL WebURL",
    "selected_count": 100,
    "selection": "High-challenge boundary cases with conflicting evidence, balanced labels, and controlled agent error quotas.",
    "label_mapping": {
      "0": "PHISHING",
      "1": "LEGITIMATE"
    },
    "dataset_feature_count_per_task": 54,
    "feature_vector_count_per_task": 53,
    "study_design": {
      "phase_one_name": "agent_final_authority_with_mandatory_advice",
      "phase_one_task_ids": [
        "phishing_url_task_188081",
        "phishing_url_task_056818",
        "phishing_url_task_226133",
        "phishing_url_task_095891",
        "phishing_url_task_067808",
        "phishing_url_task_135697",
        "phishing_url_task_183901",
        "phishing_url_task_080426",
        "phishing_url_task_077422",
        "phishing_url_task_185534",
        "phishing_url_task_183822",
        "phishing_url_task_119531",
        "phishing_url_task_211914",
        "phishing_url_task_068407",
        "phishing_url_task_078325",
        "phishing_url_task_211365",
        "phishing_url_task_143324",
        "phishing_url_task_059098",
        "phishing_url_task_192717",
        "phishing_url_task_053886"
      ],
      "phase_one_interaction": {
        "human_input": "ADVICE",
        "human_choice_required": true,
        "agent_may_accept_or_reject": true,
        "final_authority": "AGENT"
      },
      "questionnaire_after_phase_one": true,
      "phase_two_name": "permission_checkpoint_with_binding_human_decision",
      "phase_two_task_ids": [
        "phishing_url_task_218756",
        "phishing_url_task_139541",
        "phishing_url_task_080350",
        "phishing_url_task_210698",
        "phishing_url_task_029948",
        "phishing_url_task_087005",
        "phishing_url_task_142824",
        "phishing_url_task_067041",
        "phishing_url_task_203460",
        "phishing_url_task_063507",
        "phishing_url_task_092314",
        "phishing_url_task_108914",
        "phishing_url_task_103515",
        "phishing_url_task_155500",
        "phishing_url_task_036845",
        "phishing_url_task_107753",
        "phishing_url_task_016359",
        "phishing_url_task_054708",
        "phishing_url_task_202406",
        "phishing_url_task_115747"
      ],
      "phase_two_interaction": {
        "agent_reveals_initial_judgment": true,
        "choices": [
          "LET_AGENT_DECIDE",
          "BINDING_HUMAN_JUDGMENT"
        ],
        "let_agent_decide_rule": "RETAIN_AGENT_INITIAL_JUDGMENT",
        "binding_human_judgment_rule": "FOLLOW_HUMAN_JUDGMENT",
        "final_authority": "HUMAN_PERMISSION"
      },
      "practice_task_id": "phishing_url_task_090986",
      "reserve_task_ids": [
        "phishing_url_task_027173",
        "phishing_url_task_056178",
        "phishing_url_task_181464",
        "phishing_url_task_092089",
        "phishing_url_task_002321",
        "phishing_url_task_159801",
        "phishing_url_task_169504",
        "phishing_url_task_128459",
        "phishing_url_task_090139",
        "phishing_url_task_151858",
        "phishing_url_task_123611",
        "phishing_url_task_145727",
        "phishing_url_task_163925",
        "phishing_url_task_203538",
        "phishing_url_task_136995",
        "phishing_url_task_076078",
        "phishing_url_task_015608",
        "phishing_url_task_167022",
        "phishing_url_task_173180",
        "phishing_url_task_017230",
        "phishing_url_task_194811",
        "phishing_url_task_217703",
        "phishing_url_task_235304",
        "phishing_url_task_219354",
        "phishing_url_task_183896",
        "phishing_url_task_229076",
        "phishing_url_task_119804",
        "phishing_url_task_167905",
        "phishing_url_task_157260",
        "phishing_url_task_062988",
        "phishing_url_task_080582",
        "phishing_url_task_015838",
        "phishing_url_task_154254",
        "phishing_url_task_138214",
        "phishing_url_task_229571",
        "phishing_url_task_051235",
        "phishing_url_task_042004",
        "phishing_url_task_102604",
        "phishing_url_task_180121",
        "phishing_url_task_137403",
        "phishing_url_task_160865",
        "phishing_url_task_151913",
        "phishing_url_task_118753",
        "phishing_url_task_064517",
        "phishing_url_task_040893",
        "phishing_url_task_134750",
        "phishing_url_task_030049",
        "phishing_url_task_107191",
        "phishing_url_task_079273",
        "phishing_url_task_179639",
        "phishing_url_task_112819",
        "phishing_url_task_100733",
        "phishing_url_task_022280",
        "phishing_url_task_054683",
        "phishing_url_task_041454",
        "phishing_url_task_004352",
        "phishing_url_task_233603",
        "phishing_url_task_001891",
        "phishing_url_task_158982"
      ],
      "per_phase_constraints": {
        "task_count": 20,
        "phishing": 10,
        "legitimate": 10,
        "agent_correct": 14,
        "agent_incorrect": 6
      },
      "full_selection_constraints": {
        "task_count": 100,
        "phishing": 50,
        "legitimate": 50,
        "agent_correct": 70,
        "agent_incorrect": 30
      }
    },
    "notes": "The agent initial assessment is computed without the ground-truth label. Labels are used only for quota-controlled study sampling and outcome evaluation."
  },
  "feature_schema": [
    {
      "index": 0,
      "name": "URLLength",
      "type": "number"
    },
    {
      "index": 1,
      "name": "Domain",
      "type": "string"
    },
    {
      "index": 2,
      "name": "DomainLength",
      "type": "number"
    },
    {
      "index": 3,
      "name": "IsDomainIP",
      "type": "number"
    },
    {
      "index": 4,
      "name": "TLD",
      "type": "string"
    },
    {
      "index": 5,
      "name": "URLSimilarityIndex",
      "type": "number"
    },
    {
      "index": 6,
      "name": "CharContinuationRate",
      "type": "number"
    },
    {
      "index": 7,
      "name": "TLDLegitimateProb",
      "type": "number"
    },
    {
      "index": 8,
      "name": "URLCharProb",
      "type": "number"
    },
    {
      "index": 9,
      "name": "TLDLength",
      "type": "number"
    },
    {
      "index": 10,
      "name": "NoOfSubDomain",
      "type": "number"
    },
    {
      "index": 11,
      "name": "HasObfuscation",
      "type": "number"
    },
    {
      "index": 12,
      "name": "NoOfObfuscatedChar",
      "type": "number"
    },
    {
      "index": 13,
      "name": "ObfuscationRatio",
      "type": "number"
    },
    {
      "index": 14,
      "name": "NoOfLettersInURL",
      "type": "number"
    },
    {
      "index": 15,
      "name": "LetterRatioInURL",
      "type": "number"
    },
    {
      "index": 16,
      "name": "NoOfDegitsInURL",
      "type": "number"
    },
    {
      "index": 17,
      "name": "DegitRatioInURL",
      "type": "number"
    },
    {
      "index": 18,
      "name": "NoOfEqualsInURL",
      "type": "number"
    },
    {
      "index": 19,
      "name": "NoOfQMarkInURL",
      "type": "number"
    },
    {
      "index": 20,
      "name": "NoOfAmpersandInURL",
      "type": "number"
    },
    {
      "index": 21,
      "name": "NoOfOtherSpecialCharsInURL",
      "type": "number"
    },
    {
      "index": 22,
      "name": "SpacialCharRatioInURL",
      "type": "number"
    },
    {
      "index": 23,
      "name": "IsHTTPS",
      "type": "number"
    },
    {
      "index": 24,
      "name": "LineOfCode",
      "type": "number"
    },
    {
      "index": 25,
      "name": "LargestLineLength",
      "type": "number"
    },
    {
      "index": 26,
      "name": "HasTitle",
      "type": "number"
    },
    {
      "index": 27,
      "name": "Title",
      "type": "string"
    },
    {
      "index": 28,
      "name": "DomainTitleMatchScore",
      "type": "number"
    },
    {
      "index": 29,
      "name": "URLTitleMatchScore",
      "type": "number"
    },
    {
      "index": 30,
      "name": "HasFavicon",
      "type": "number"
    },
    {
      "index": 31,
      "name": "Robots",
      "type": "number"
    },
    {
      "index": 32,
      "name": "IsResponsive",
      "type": "number"
    },
    {
      "index": 33,
      "name": "NoOfURLRedirect",
      "type": "number"
    },
    {
      "index": 34,
      "name": "NoOfSelfRedirect",
      "type": "number"
    },
    {
      "index": 35,
      "name": "HasDescription",
      "type": "number"
    },
    {
      "index": 36,
      "name": "NoOfPopup",
      "type": "number"
    },
    {
      "index": 37,
      "name": "NoOfiFrame",
      "type": "number"
    },
    {
      "index": 38,
      "name": "HasExternalFormSubmit",
      "type": "number"
    },
    {
      "index": 39,
      "name": "HasSocialNet",
      "type": "number"
    },
    {
      "index": 40,
      "name": "HasSubmitButton",
      "type": "number"
    },
    {
      "index": 41,
      "name": "HasHiddenFields",
      "type": "number"
    },
    {
      "index": 42,
      "name": "HasPasswordField",
      "type": "number"
    },
    {
      "index": 43,
      "name": "Bank",
      "type": "number"
    },
    {
      "index": 44,
      "name": "Pay",
      "type": "number"
    },
    {
      "index": 45,
      "name": "Crypto",
      "type": "number"
    },
    {
      "index": 46,
      "name": "HasCopyrightInfo",
      "type": "number"
    },
    {
      "index": 47,
      "name": "NoOfImage",
      "type": "number"
    },
    {
      "index": 48,
      "name": "NoOfCSS",
      "type": "number"
    },
    {
      "index": 49,
      "name": "NoOfJS",
      "type": "number"
    },
    {
      "index": 50,
      "name": "NoOfSelfRef",
      "type": "number"
    },
    {
      "index": 51,
      "name": "NoOfEmptyRef",
      "type": "number"
    },
    {
      "index": 52,
      "name": "NoOfExternalRef",
      "type": "number"
    }
  ],
  "workflow": {
    "id": "phishing_url_investigation_v1",
    "version": 1,
    "agent_role": "Enterprise web security investigation and response agent",
    "objective": "Investigate one suspicious URL, pause once for optional human judgment, make the final phishing decision, and execute the matching containment or release workflow.",
    "execution_mode": {
      "kind": "offline_dataset_replay",
      "live_navigation": false,
      "note": "Tool results are reconstructed from the archived PhiUSIIL feature row. The workflow must not visit or submit data to the recorded URL."
    },
    "task_contract": {
      "input": "One archived URL and its PhiUSIIL URL/page-source feature snapshot.",
      "final_decisions": [
        "PHISHING",
        "LEGITIMATE"
      ],
      "final_authority": "agent",
      "evaluation_source": "task.ground_truth.verdict"
    },
    "investigation_steps": [
      {
        "id": "expand_and_parse_url",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "url_tools.expand_and_parse_snapshot",
        "depends_on": [],
        "input": {
          "url": "{{task.url}}"
        },
        "result": "{{task.tool_results.url_expansion}}",
        "next": "query_domain_information"
      },
      {
        "id": "query_domain_information",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "domain_intelligence.lookup_snapshot",
        "depends_on": [
          "expand_and_parse_url"
        ],
        "input": {
          "domain": "{{task.tool_results.url_expansion.final_domain}}"
        },
        "result": "{{task.tool_results.domain_information}}",
        "next": "inspect_redirects"
      },
      {
        "id": "inspect_redirects",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "browser_security.inspect_redirect_snapshot",
        "depends_on": [
          "expand_and_parse_url"
        ],
        "input": {
          "url": "{{task.url}}"
        },
        "result": "{{task.tool_results.redirect_analysis}}",
        "next": "analyze_title_domain_match"
      },
      {
        "id": "analyze_title_domain_match",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "page_security.compare_title_and_domain",
        "depends_on": [
          "query_domain_information"
        ],
        "input": {
          "domain": "{{task.tool_results.domain_information.domain}}",
          "title": "{{task.tool_results.title_domain_analysis.title}}"
        },
        "result": "{{task.tool_results.title_domain_analysis}}",
        "next": "inspect_login_form"
      },
      {
        "id": "inspect_login_form",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "page_security.inspect_form_snapshot",
        "depends_on": [
          "expand_and_parse_url"
        ],
        "input": {
          "url": "{{task.url}}"
        },
        "result": "{{task.tool_results.login_form_analysis}}",
        "next": "compare_with_official_site"
      },
      {
        "id": "compare_with_official_site",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "brand_registry.compare_legitimacy_reference",
        "depends_on": [
          "query_domain_information",
          "analyze_title_domain_match"
        ],
        "input": {
          "url": "{{task.url}}",
          "domain": "{{task.tool_results.domain_information.domain}}"
        },
        "result": "{{task.tool_results.official_site_comparison}}",
        "next": "extract_security_features"
      },
      {
        "id": "extract_security_features",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "feature_engine.extract_phiusiil_snapshot",
        "depends_on": [
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site"
        ],
        "input": {
          "source_row": "{{task.source.row_number}}"
        },
        "result": {
          "schema": "{{dataset.feature_schema}}",
          "values": "{{task.feature_values}}"
        },
        "next": "summarize_security_signals"
      },
      {
        "id": "summarize_security_signals",
        "phase": "investigation",
        "type": "tool_call",
        "tool": "security_reasoner.aggregate_signals",
        "depends_on": [
          "extract_security_features"
        ],
        "input": {
          "feature_values": "{{task.feature_values}}"
        },
        "result": "{{task.tool_results.security_signal_summary}}",
        "next": "human_advice_checkpoint"
      }
    ],
    "decision_step": {
      "id": "human_advice_checkpoint",
      "phase": "decision",
      "type": "decision",
      "intervention": true,
      "single_intervention": true,
      "content": "The agent pauses after its evidence collection. A human security judgment consultant may provide one recommendation; the agent retains final authority.",
      "human_advice": {
        "optional": true,
        "choices": [
          {
            "id": "ADVISE_PHISHING",
            "verdict": "PHISHING",
            "label": "I think this is a phishing site."
          },
          {
            "id": "ADVISE_LEGITIMATE",
            "verdict": "LEGITIMATE",
            "label": "I think this is a legitimate site."
          }
        ],
        "rationale_allowed": true
      },
      "agent_response_modes": [
        "ADOPT_ADVICE",
        "REJECT_ADVICE",
        "PARTIALLY_CONSIDER_ADVICE",
        "REQUEST_RATIONALE"
      ],
      "reliance_conditions_supported": [
        "OVER_RELIANCE",
        "UNDER_RELIANCE",
        "CALIBRATED_RELIANCE"
      ],
      "next": "make_final_decision"
    },
    "final_decision_step": {
      "id": "make_final_decision",
      "phase": "decision",
      "type": "decision",
      "decision_rule": "Combine the archived security evidence, the agent's initial assessment, and any human advice according to the experiment's reliance condition. Always resolve to PHISHING or LEGITIMATE.",
      "output": {
        "verdict": "{{runtime.final_verdict}}",
        "reliance_response": "{{runtime.reliance_response}}",
        "rationale_summary": "{{runtime.final_rationale_summary}}"
      },
      "branches": {
        "PHISHING": "phishing_response",
        "LEGITIMATE": "legitimate_response"
      }
    },
    "response_branches": {
      "phishing_response": {
        "when": "{{runtime.final_verdict}} == 'PHISHING'",
        "primary_action": "QUARANTINE_LINK",
        "steps": [
          {
            "id": "report_indicator",
            "type": "tool_call",
            "tool": "threat_intelligence.submit_indicator",
            "input": {
              "url": "{{task.url}}",
              "evidence": "{{task.tool_results.security_signal_summary}}"
            },
            "output": {
              "report_id": "{{runtime.threat_report_id}}",
              "status": "SUBMITTED"
            }
          },
          {
            "id": "quarantine_and_block",
            "type": "action",
            "tool": "secure_web_gateway.quarantine_url",
            "depends_on": [
              "report_indicator"
            ],
            "input": {
              "url": "{{task.url}}",
              "scope": "ORGANIZATION"
            },
            "output": {
              "access": "BLOCKED",
              "quarantine": "ACTIVE"
            }
          },
          {
            "id": "search_and_contain_exposure",
            "type": "action",
            "tool": "email_security.search_and_contain",
            "depends_on": [
              "quarantine_and_block"
            ],
            "input": {
              "indicator": "{{task.url}}",
              "recall_matching_messages": true
            },
            "output": {
              "exposure_search": "COMPLETED",
              "messages_recalled": "{{runtime.recalled_count}}"
            }
          },
          {
            "id": "create_security_case",
            "type": "action",
            "tool": "incident_response.create_case",
            "depends_on": [
              "report_indicator",
              "search_and_contain_exposure"
            ],
            "input": {
              "threat_report_id": "{{runtime.threat_report_id}}",
              "include_agent_evidence": true,
              "include_human_advice_audit": true
            },
            "output": {
              "case_id": "{{runtime.case_id}}",
              "status": "OPEN_FOR_MONITORING"
            }
          },
          {
            "id": "phishing_final_result",
            "type": "final_result",
            "status": "CONTAINED",
            "content": "The link was reported, blocked, exposure-checked, and attached to a security case."
          }
        ]
      },
      "legitimate_response": {
        "when": "{{runtime.final_verdict}} == 'LEGITIMATE'",
        "primary_action": "ALLOW_LINK",
        "steps": [
          {
            "id": "validate_allowlist_scope",
            "type": "tool_call",
            "tool": "allowlist.validate_scope",
            "input": {
              "url": "{{task.url}}",
              "scope": "EXACT_URL_OR_DOMAIN",
              "check_conflicting_threat_reports": true
            },
            "output": {
              "validation": "{{runtime.allowlist_validation}}"
            }
          },
          {
            "id": "release_quarantine",
            "type": "action",
            "tool": "secure_web_gateway.release_quarantine",
            "depends_on": [
              "validate_allowlist_scope"
            ],
            "input": {
              "url": "{{task.url}}"
            },
            "output": {
              "access": "ALLOWED",
              "quarantine": "RELEASED"
            }
          },
          {
            "id": "add_allowlist_entry",
            "type": "action",
            "tool": "threat_intelligence.add_allowlist_entry",
            "depends_on": [
              "validate_allowlist_scope",
              "release_quarantine"
            ],
            "input": {
              "indicator": "{{task.tool_results.domain_information.domain}}",
              "scope": "VALIDATED_EXACT_SCOPE",
              "evidence": "{{task.tool_results.security_signal_summary}}"
            },
            "output": {
              "allowlist": "UPDATED",
              "entry_id": "{{runtime.allowlist_entry_id}}"
            }
          },
          {
            "id": "close_false_positive_alert",
            "type": "action",
            "tool": "case_management.close_alert",
            "depends_on": [
              "add_allowlist_entry"
            ],
            "input": {
              "disposition": "FALSE_POSITIVE",
              "include_agent_evidence": true,
              "include_human_advice_audit": true
            },
            "output": {
              "alert": "CLOSED"
            }
          },
          {
            "id": "legitimate_final_result",
            "type": "final_result",
            "status": "RELEASED",
            "content": "The allowlist scope was validated, the link was released, the allowlist was updated, and the alert was closed."
          }
        ]
      }
    },
    "risk_model": {
      "id": "transparent_security_signal_baseline_v1",
      "kind": "deterministic_heuristic",
      "intended_use": "Create a reproducible initial agent assessment and identify evidence-conflict boundary cases; it is not a calibrated production classifier.",
      "component_weights": {
        "url_similarity_risk": 0.25,
        "character_continuation_risk": 0.05,
        "tld_reputation_risk": 0.08,
        "url_character_probability_risk": 0.08,
        "domain_structure_risk": 0.12,
        "transport_risk": 0.07,
        "title_match_risk": 0.12,
        "form_risk": 0.12,
        "site_identity_risk": 0.08,
        "redirect_risk": 0.03
      },
      "score_transform": "phishing_score = logistic((raw_weighted_risk - 0.32) * 8)",
      "verdict_threshold": 0.5,
      "boundary_case_range": [
        0.4,
        0.6
      ]
    },
    "signal_catalog": {
      "domain_is_ip": {
        "polarity": "suspicious",
        "description": "The host is an IP address rather than a named domain."
      },
      "domain_obfuscation": {
        "polarity": "suspicious",
        "description": "The URL contains obfuscated characters or an obfuscation pattern."
      },
      "many_subdomains": {
        "polarity": "suspicious",
        "description": "The hostname contains an unusually deep subdomain chain."
      },
      "low_url_similarity": {
        "polarity": "suspicious",
        "description": "The URL has a low similarity score against the dataset legitimacy reference."
      },
      "low_tld_reputation": {
        "polarity": "suspicious",
        "description": "The top-level domain has a low legitimacy prior in the dataset."
      },
      "no_https": {
        "polarity": "suspicious",
        "description": "The observed page does not use HTTPS."
      },
      "missing_title": {
        "polarity": "suspicious",
        "description": "The page has no usable HTML title."
      },
      "title_domain_mismatch": {
        "polarity": "suspicious",
        "description": "The title has a weak match with both the domain and the URL."
      },
      "external_form_submit": {
        "polarity": "suspicious",
        "description": "A form submits data to an external origin."
      },
      "credential_form": {
        "polarity": "suspicious",
        "description": "The page contains a password field."
      },
      "hidden_form_fields": {
        "polarity": "suspicious",
        "description": "The page contains hidden form fields."
      },
      "redirect_activity": {
        "polarity": "suspicious",
        "description": "One or more URL redirects were observed in the archived page snapshot."
      },
      "high_special_character_ratio": {
        "polarity": "suspicious",
        "description": "The URL contains a high proportion of special characters."
      },
      "high_url_similarity": {
        "polarity": "protective",
        "description": "The URL strongly matches the dataset legitimacy reference."
      },
      "https_enabled": {
        "polarity": "protective",
        "description": "The observed page uses HTTPS."
      },
      "title_domain_match": {
        "polarity": "protective",
        "description": "The page title strongly matches the domain or URL."
      },
      "same_origin_form": {
        "polarity": "protective",
        "description": "The page has a submit control but no external form action was detected."
      },
      "identity_assets_present": {
        "polarity": "protective",
        "description": "Multiple normal site identity signals are present, such as favicon, social links, or copyright information."
      },
      "no_credential_exfiltration": {
        "polarity": "protective",
        "description": "No password field or external form submission was detected."
      }
    }
  },
  "examples": [
    {
      "id": "phishing_url_task_188081",
      "source": {
        "filename": "8004196.txt",
        "row_number": 188082,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://likju-30c6a.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://likju-30c6a.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "likju-30c6a.firebaseapp.com",
        27,
        0,
        "com",
        67.07424349,
        0.608695652,
        0.5229071,
        0.048541142,
        3,
        1,
        0,
        0,
        0,
        21,
        0.6,
        3,
        0.086,
        0,
        0,
        0,
        3,
        0.086,
        1,
        108,
        8125,
        1,
        "likju-30c6afirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://likju-30c6a.firebaseapp.com/",
          "resolved_url": "https://likju-30c6a.firebaseapp.com/",
          "final_domain": "likju-30c6a.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "likju-30c6a.firebaseapp.com",
          "tld": "com",
          "domain_length": 27,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "likju-30c6afirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 67.07424349,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.50001,
          "raw_weighted_risk": 0.320005,
          "initial_verdict": "PHISHING",
          "confidence": 0.50001,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.329258,
            "character_continuation_risk": 0.391304,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.393236,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.50001,
        "confidence": 0.50001,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 0,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.00001,
        "distance_from_phishing_boundary": 0.00001,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_056818",
      "source": {
        "filename": "67422.txt",
        "row_number": 56819,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.cril.univ-artois.fr. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.cril.univ-artois.fr",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        30,
        "www.cril.univ-artois.fr",
        23,
        0,
        "fr",
        100,
        0.4375,
        0.0141483,
        0.055961685,
        2,
        2,
        0,
        0,
        0,
        15,
        0.5,
        0,
        0,
        0,
        0,
        0,
        3,
        0.1,
        1,
        624,
        887,
        1,
        "criluniv-artois",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        4,
        6,
        40,
        7,
        11
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.cril.univ-artois.fr",
          "resolved_url": "https://www.cril.univ-artois.fr",
          "final_domain": "www.cril.univ-artois.fr",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.cril.univ-artois.fr",
          "tld": "fr",
          "domain_length": 23,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0141483,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "criluniv-artois",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499998,
          "raw_weighted_risk": 0.319999,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500002,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.5625,
            "tld_reputation_risk": 0.972943,
            "url_character_probability_risk": 0.300479,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499998,
        "confidence": 0.500002,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 1,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012002,
        "distance_from_phishing_boundary": 0.000002,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_226133",
      "source": {
        "filename": "8052472.txt",
        "row_number": 226134,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://scvnby3ybv.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://scvnby3ybv.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "scvnby3ybv.firebaseapp.com",
        26,
        0,
        "com",
        68.00350647,
        0.590909091,
        0.5229071,
        0.047052338,
        3,
        1,
        0,
        0,
        0,
        23,
        0.657,
        1,
        0.029,
        0,
        0,
        0,
        3,
        0.086,
        1,
        108,
        8125,
        1,
        "scvnby3ybvfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://scvnby3ybv.firebaseapp.com/",
          "resolved_url": "https://scvnby3ybv.firebaseapp.com/",
          "final_domain": "scvnby3ybv.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "scvnby3ybv.firebaseapp.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "scvnby3ybvfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 68.00350647,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.50012,
          "raw_weighted_risk": 0.32006,
          "initial_verdict": "PHISHING",
          "confidence": 0.50012,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.319965,
            "character_continuation_risk": 0.409091,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.411846,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.50012,
        "confidence": 0.50012,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 2,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.00012,
        "distance_from_phishing_boundary": 0.00012,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_095891",
      "source": {
        "filename": "179270.txt",
        "row_number": 95892,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.imes.boj.or.jp. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.imes.boj.or.jp",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        25,
        "www.imes.boj.or.jp",
        18,
        0,
        "jp",
        100,
        0.454545455,
        0.0230451,
        0.057118926,
        2,
        3,
        0,
        0,
        0,
        10,
        0.4,
        0,
        0,
        0,
        0,
        0,
        3,
        0.12,
        1,
        2338,
        391,
        1,
        "imesboor",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        18,
        9,
        7,
        7,
        26,
        15
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.imes.boj.or.jp",
          "resolved_url": "https://www.imes.boj.or.jp",
          "final_domain": "www.imes.boj.or.jp",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.imes.boj.or.jp",
          "tld": "jp",
          "domain_length": 18,
          "is_ip_address": false,
          "subdomain_count": 3,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0230451,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "imesboor",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499923,
          "raw_weighted_risk": 0.319961,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500077,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "many_subdomains",
            "low_tld_reputation",
            "title_domain_mismatch",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.545455,
            "tld_reputation_risk": 0.955929,
            "url_character_probability_risk": 0.286013,
            "domain_structure_risk": 0.5,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499923,
        "confidence": 0.500077,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 3,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012077,
        "distance_from_phishing_boundary": 0.000077,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_067808",
      "source": {
        "filename": "8057479.txt",
        "row_number": 67809,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://hqyo6nxza.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://hqyo6nxza.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        34,
        "hqyo6nxza.firebaseapp.com",
        25,
        0,
        "com",
        66.52307692,
        0.619047619,
        0.5229071,
        0.04944407,
        3,
        1,
        0,
        0,
        0,
        22,
        0.647,
        1,
        0.029,
        0,
        0,
        0,
        3,
        0.088,
        1,
        108,
        8125,
        1,
        "hqyo6nxzafirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://hqyo6nxza.firebaseapp.com/",
          "resolved_url": "https://hqyo6nxza.firebaseapp.com/",
          "final_domain": "hqyo6nxza.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "hqyo6nxza.firebaseapp.com",
          "tld": "com",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "hqyo6nxzafirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.52307692,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499925,
          "raw_weighted_risk": 0.319963,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500075,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.334769,
            "character_continuation_risk": 0.380952,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.381949,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499925,
        "confidence": 0.500075,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 4,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000075,
        "distance_from_phishing_boundary": 0.000075,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_135697",
      "source": {
        "filename": "124903.txt",
        "row_number": 135698,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.cityofventura.ca.gov. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.cityofventura.ca.gov",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        31,
        "www.cityofventura.ca.gov",
        24,
        0,
        "gov",
        100,
        0.875,
        0.0033282,
        0.058554561,
        3,
        2,
        0,
        0,
        0,
        17,
        0.548,
        0,
        0,
        0,
        0,
        0,
        2,
        0.065,
        1,
        3401,
        962,
        1,
        "cityofventuraca",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        4,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        2,
        35,
        23,
        111,
        0,
        67
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.cityofventura.ca.gov",
          "resolved_url": "https://www.cityofventura.ca.gov",
          "final_domain": "www.cityofventura.ca.gov",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.cityofventura.ca.gov",
          "tld": "gov",
          "domain_length": 24,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0033282,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "cityofventuraca",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500039,
          "raw_weighted_risk": 0.32002,
          "initial_verdict": "PHISHING",
          "confidence": 0.500039,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.125,
            "tld_reputation_risk": 0.993635,
            "url_character_probability_risk": 0.268068,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500039,
        "confidence": 0.500039,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 5,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012039,
        "distance_from_phishing_boundary": 0.000039,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_183901",
      "source": {
        "filename": "8003315.txt",
        "row_number": 183902,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://rsedavki-si.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://rsedavki-si.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "rsedavki-si.firebaseapp.com",
        27,
        0,
        "com",
        65.27532824,
        0.52173913,
        0.5229071,
        0.057313611,
        3,
        1,
        0,
        0,
        0,
        24,
        0.686,
        0,
        0,
        0,
        0,
        0,
        3,
        0.086,
        1,
        108,
        8125,
        1,
        "rsedavki-sifirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://rsedavki-si.firebaseapp.com/",
          "resolved_url": "https://rsedavki-si.firebaseapp.com/",
          "final_domain": "rsedavki-si.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "rsedavki-si.firebaseapp.com",
          "tld": "com",
          "domain_length": 27,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "rsedavki-sifirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.27532824,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500156,
          "raw_weighted_risk": 0.320078,
          "initial_verdict": "PHISHING",
          "confidence": 0.500156,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.347247,
            "character_continuation_risk": 0.478261,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.28358,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500156,
        "confidence": 0.500156,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 6,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000156,
        "distance_from_phishing_boundary": 0.000156,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_080426",
      "source": {
        "filename": "406675.txt",
        "row_number": 80427,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.tikli.in. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.tikli.in",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        19,
        "www.tikli.in",
        12,
        0,
        "in",
        100,
        1,
        0.0050842,
        0.050623003,
        2,
        1,
        0,
        0,
        0,
        6,
        0.316,
        0,
        0,
        0,
        0,
        0,
        1,
        0.053,
        1,
        2224,
        9381,
        1,
        "tkl",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        2,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        47,
        45,
        76,
        152,
        5,
        162
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.tikli.in",
          "resolved_url": "https://www.tikli.in",
          "final_domain": "www.tikli.in",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.tikli.in",
          "tld": "in",
          "domain_length": 12,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0050842,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "tkl",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499865,
          "raw_weighted_risk": 0.319932,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500135,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.990277,
            "url_character_probability_risk": 0.367212,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499865,
        "confidence": 0.500135,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 7,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012135,
        "distance_from_phishing_boundary": 0.000135,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_077422",
      "source": {
        "filename": "7999993.txt",
        "row_number": 77423,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://netsol-account.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://netsol-account.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        38,
        "netsol-account.firebaseapp.com",
        30,
        0,
        "com",
        63.85275754,
        0.461538462,
        0.5229071,
        0.063875023,
        3,
        1,
        0,
        0,
        0,
        27,
        0.711,
        0,
        0,
        0,
        0,
        0,
        3,
        0.079,
        1,
        108,
        8125,
        1,
        "netsol-accountfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://netsol-account.firebaseapp.com/",
          "resolved_url": "https://netsol-account.firebaseapp.com/",
          "final_domain": "netsol-account.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "netsol-account.firebaseapp.com",
          "tld": "com",
          "domain_length": 30,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "netsol-accountfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 63.85275754,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500166,
          "raw_weighted_risk": 0.320083,
          "initial_verdict": "PHISHING",
          "confidence": 0.500166,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.361472,
            "character_continuation_risk": 0.538462,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.201562,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500166,
        "confidence": 0.500166,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 8,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000166,
        "distance_from_phishing_boundary": 0.000166,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_185534",
      "source": {
        "filename": "874653.txt",
        "row_number": 185535,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.wydawnictwopolitechniki.pl. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.wydawnictwopolitechniki.pl",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        37,
        "www.wydawnictwopolitechniki.pl",
        30,
        0,
        "pl",
        100,
        1,
        0.0069695,
        0.050367392,
        2,
        1,
        0,
        0,
        0,
        24,
        0.649,
        0,
        0,
        0,
        0,
        0,
        1,
        0.027,
        1,
        334,
        2087,
        1,
        "wydawnictwoolitechniki",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        8,
        1,
        8,
        7,
        0,
        2
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.wydawnictwopolitechniki.pl",
          "resolved_url": "https://www.wydawnictwopolitechniki.pl",
          "final_domain": "www.wydawnictwopolitechniki.pl",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.wydawnictwopolitechniki.pl",
          "tld": "pl",
          "domain_length": 30,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0069695,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "wydawnictwoolitechniki",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499799,
          "raw_weighted_risk": 0.3199,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500201,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.986672,
            "url_character_probability_risk": 0.370408,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499799,
        "confidence": 0.500201,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 9,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012201,
        "distance_from_phishing_boundary": 0.000201,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_183822",
      "source": {
        "filename": "8006162.txt",
        "row_number": 183823,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://pheasanthawk80.wixsite.com/atttofall. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://pheasanthawk80.wixsite.com/atttofall",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        43,
        "pheasanthawk80.wixsite.com",
        26,
        0,
        "com",
        53.50767434,
        0.681818182,
        0.5229071,
        0.0522086,
        3,
        1,
        0,
        0,
        0,
        30,
        0.698,
        2,
        0.047,
        0,
        0,
        0,
        3,
        0.07,
        1,
        64,
        151,
        1,
        "pheasanthawk80wixsiteatttofal",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        8,
        3,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://pheasanthawk80.wixsite.com/atttofall",
          "resolved_url": "https://pheasanthawk80.wixsite.com/atttofall",
          "final_domain": "pheasanthawk80.wixsite.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "pheasanthawk80.wixsite.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "pheasanthawk80wixsiteatttofal",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 53.50767434,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499863,
          "raw_weighted_risk": 0.319931,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500137,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.464923,
            "character_continuation_risk": 0.318182,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.347393,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499863,
        "confidence": 0.500137,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 10,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000137,
        "distance_from_phishing_boundary": 0.000137,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_119531",
      "source": {
        "filename": "401358.txt",
        "row_number": 119532,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.iyunmai.us. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.iyunmai.us",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        21,
        "www.iyunmai.us",
        14,
        0,
        "us",
        100,
        1,
        0.0045585,
        0.050582903,
        2,
        1,
        0,
        0,
        0,
        8,
        0.381,
        0,
        0,
        0,
        0,
        0,
        1,
        0.048,
        1,
        2896,
        5067,
        1,
        "iynmai",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        19,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        70,
        5,
        19,
        55,
        0,
        18
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.iyunmai.us",
          "resolved_url": "https://www.iyunmai.us",
          "final_domain": "www.iyunmai.us",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.iyunmai.us",
          "tld": "us",
          "domain_length": 14,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0045585,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "iynmai",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500106,
          "raw_weighted_risk": 0.320053,
          "initial_verdict": "PHISHING",
          "confidence": 0.500106,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.991282,
            "url_character_probability_risk": 0.367714,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500106,
        "confidence": 0.500106,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 11,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012106,
        "distance_from_phishing_boundary": 0.000106,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_211914",
      "source": {
        "filename": "8011209.txt",
        "row_number": 211915,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://qwas-26150.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://qwas-26150.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        34,
        "qwas-26150.firebaseapp.com",
        26,
        0,
        "com",
        65.70644719,
        0.772727273,
        0.5229071,
        0.043674377,
        3,
        1,
        0,
        0,
        0,
        18,
        0.529,
        5,
        0.147,
        0,
        0,
        0,
        3,
        0.088,
        1,
        108,
        8125,
        1,
        "qwas-26150firebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://qwas-26150.firebaseapp.com/",
          "resolved_url": "https://qwas-26150.firebaseapp.com/",
          "final_domain": "qwas-26150.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "qwas-26150.firebaseapp.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "qwas-26150firebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.70644719,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.50018,
          "raw_weighted_risk": 0.32009,
          "initial_verdict": "PHISHING",
          "confidence": 0.50018,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.342936,
            "character_continuation_risk": 0.227273,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.45407,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.50018,
        "confidence": 0.50018,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 12,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.00018,
        "distance_from_phishing_boundary": 0.00018,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_068407",
      "source": {
        "filename": "871171.txt",
        "row_number": 68408,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.roselle.il.us. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.roselle.il.us",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        24,
        "www.roselle.il.us",
        17,
        0,
        "us",
        100,
        0.8,
        0.0045585,
        0.06229581,
        2,
        2,
        0,
        0,
        0,
        10,
        0.417,
        0,
        0,
        0,
        0,
        0,
        2,
        0.083,
        1,
        3486,
        1224,
        1,
        "roselleil",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        4,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        32,
        19,
        77,
        0,
        14
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.roselle.il.us",
          "resolved_url": "https://www.roselle.il.us",
          "final_domain": "www.roselle.il.us",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.roselle.il.us",
          "tld": "us",
          "domain_length": 17,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0045585,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "roselleil",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.49968,
          "raw_weighted_risk": 0.31984,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.50032,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.2,
            "tld_reputation_risk": 0.991282,
            "url_character_probability_risk": 0.221302,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.49968,
        "confidence": 0.50032,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 13,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.01232,
        "distance_from_phishing_boundary": 0.00032,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_078325",
      "source": {
        "filename": "8064089.txt",
        "row_number": 78326,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL http://pancakasvvap.finance. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "http://pancakasvvap.finance",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        27,
        "pancakasvvap.finance",
        20,
        0,
        "finance",
        80.19047619,
        1,
        0.0002611,
        0.054573849,
        7,
        0,
        0,
        0,
        0,
        19,
        0.704,
        0,
        0,
        0,
        0,
        0,
        1,
        0.037,
        0,
        90,
        394,
        1,
        "pancakasvvap",
        100,
        100,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        2,
        0,
        2
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "http://pancakasvvap.finance",
          "resolved_url": "http://pancakasvvap.finance",
          "final_domain": "pancakasvvap.finance",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "pancakasvvap.finance",
          "tld": "finance",
          "domain_length": 20,
          "is_ip_address": false,
          "subdomain_count": 0,
          "uses_https": false,
          "tld_legitimacy_prior": 0.0002611,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "pancakasvvap",
          "domain_title_match_score": 100,
          "url_title_match_score": 100,
          "assessment": "STRONG_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "SAME_ORIGIN_OR_UNRESOLVED_FORM"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 80.19047619,
          "title_reference_score": 100,
          "assessment": "MEDIUM",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500487,
          "raw_weighted_risk": 0.320243,
          "initial_verdict": "PHISHING",
          "confidence": 0.500487,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "no_https",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "title_domain_match",
            "same_origin_form",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.198095,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.999501,
            "url_character_probability_risk": 0.317827,
            "domain_structure_risk": 0,
            "transport_risk": 1,
            "title_match_risk": 0,
            "form_risk": 0.35,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500487,
        "confidence": 0.500487,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 14,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000487,
        "distance_from_phishing_boundary": 0.000487,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_211365",
      "source": {
        "filename": "570492.txt",
        "row_number": 211366,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.laboiteasurprisesdenicolas.ca. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.laboiteasurprisesdenicolas.ca",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        40,
        "www.laboiteasurprisesdenicolas.ca",
        33,
        0,
        "ca",
        100,
        1,
        0.0101825,
        0.063268928,
        2,
        1,
        0,
        0,
        0,
        27,
        0.675,
        0,
        0,
        0,
        0,
        0,
        1,
        0.025,
        1,
        1820,
        2691,
        1,
        "laboiteasurprisesdeniolas",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        22,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        19,
        8,
        34,
        121,
        2,
        22
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.laboiteasurprisesdenicolas.ca",
          "resolved_url": "https://www.laboiteasurprisesdenicolas.ca",
          "final_domain": "www.laboiteasurprisesdenicolas.ca",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.laboiteasurprisesdenicolas.ca",
          "tld": "ca",
          "domain_length": 33,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0101825,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "laboiteasurprisesdeniolas",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.49968,
          "raw_weighted_risk": 0.31984,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.50032,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.980527,
            "url_character_probability_risk": 0.209138,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.49968,
        "confidence": 0.50032,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 15,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.01232,
        "distance_from_phishing_boundary": 0.00032,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_143324",
      "source": {
        "filename": "7968411.txt",
        "row_number": 143325,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://project1e-a5580.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://project1e-a5580.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        39,
        "project1e-a5580.firebaseapp.com",
        31,
        0,
        "com",
        66.32096365,
        0.592592593,
        0.5229071,
        0.051331505,
        3,
        1,
        0,
        0,
        0,
        23,
        0.59,
        5,
        0.128,
        0,
        0,
        0,
        3,
        0.077,
        1,
        108,
        8125,
        1,
        "project1e-a5580firebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://project1e-a5580.firebaseapp.com/",
          "resolved_url": "https://project1e-a5580.firebaseapp.com/",
          "final_domain": "project1e-a5580.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "project1e-a5580.firebaseapp.com",
          "tld": "com",
          "domain_length": 31,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "project1e-a5580firebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.32096365,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499806,
          "raw_weighted_risk": 0.319903,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500194,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.33679,
            "character_continuation_risk": 0.407407,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.358356,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499806,
        "confidence": 0.500194,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 16,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000194,
        "distance_from_phishing_boundary": 0.000194,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_059098",
      "source": {
        "filename": "178063.txt",
        "row_number": 59099,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.ntt-west.co.jp. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.ntt-west.co.jp",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        25,
        "www.ntt-west.co.jp",
        18,
        0,
        "jp",
        100,
        0.454545455,
        0.0230451,
        0.055967333,
        2,
        2,
        0,
        0,
        0,
        10,
        0.4,
        0,
        0,
        0,
        0,
        0,
        3,
        0.12,
        1,
        986,
        262,
        1,
        "ntt-westco",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        18,
        9,
        7,
        187,
        0,
        41
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.ntt-west.co.jp",
          "resolved_url": "https://www.ntt-west.co.jp",
          "final_domain": "www.ntt-west.co.jp",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.ntt-west.co.jp",
          "tld": "jp",
          "domain_length": 18,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0230451,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "ntt-westco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499559,
          "raw_weighted_risk": 0.31978,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500441,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.545455,
            "tld_reputation_risk": 0.955929,
            "url_character_probability_risk": 0.300408,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499559,
        "confidence": 0.500441,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 17,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012441,
        "distance_from_phishing_boundary": 0.000441,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_192717",
      "source": {
        "filename": "8112113.txt",
        "row_number": 192718,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://teusbsvsoiua.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://teusbsvsoiua.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        37,
        "teusbsvsoiua.firebaseapp.com",
        28,
        0,
        "com",
        64.59770115,
        0.541666667,
        0.5229071,
        0.057831168,
        3,
        1,
        0,
        0,
        0,
        26,
        0.703,
        0,
        0,
        0,
        0,
        0,
        3,
        0.081,
        1,
        108,
        8125,
        1,
        "teusbsvsoiuafirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://teusbsvsoiua.firebaseapp.com/",
          "resolved_url": "https://teusbsvsoiua.firebaseapp.com/",
          "final_domain": "teusbsvsoiua.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "teusbsvsoiua.firebaseapp.com",
          "tld": "com",
          "domain_length": 28,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "teusbsvsoiuafirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 64.59770115,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500516,
          "raw_weighted_risk": 0.320258,
          "initial_verdict": "PHISHING",
          "confidence": 0.500516,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.354023,
            "character_continuation_risk": 0.458333,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.27711,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500516,
        "confidence": 0.500516,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 18,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000516,
        "distance_from_phishing_boundary": 0.000516,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_053886",
      "source": {
        "filename": "836839.txt",
        "row_number": 53887,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.spdc.pt. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.spdc.pt",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        18,
        "www.spdc.pt",
        11,
        0,
        "pt",
        100,
        1,
        0.0015361,
        0.041702308,
        2,
        1,
        0,
        0,
        0,
        5,
        0.278,
        0,
        0,
        0,
        0,
        0,
        1,
        0.056,
        1,
        1364,
        777,
        1,
        "sdc",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        42,
        6,
        10,
        80,
        9,
        28
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.spdc.pt",
          "resolved_url": "https://www.spdc.pt",
          "final_domain": "www.spdc.pt",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.spdc.pt",
          "tld": "pt",
          "domain_length": 11,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0015361,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "sdc",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500125,
          "raw_weighted_risk": 0.320063,
          "initial_verdict": "PHISHING",
          "confidence": 0.500125,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.997062,
            "url_character_probability_risk": 0.478721,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500125,
        "confidence": 0.500125,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 19,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012125,
        "distance_from_phishing_boundary": 0.000125,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_218756",
      "source": {
        "filename": "8006301.txt",
        "row_number": 218757,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://geefarrm.wixsite.com/frontier. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://geefarrm.wixsite.com/frontier",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        36,
        "geefarrm.wixsite.com",
        20,
        0,
        "com",
        52.43757432,
        0.5625,
        0.5229071,
        0.060499144,
        3,
        1,
        0,
        0,
        0,
        25,
        0.694,
        0,
        0,
        0,
        0,
        0,
        3,
        0.083,
        1,
        64,
        151,
        1,
        "geefarrmwixsitefrontie",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        8,
        3,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://geefarrm.wixsite.com/frontier",
          "resolved_url": "https://geefarrm.wixsite.com/frontier",
          "final_domain": "geefarrm.wixsite.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "geefarrm.wixsite.com",
          "tld": "com",
          "domain_length": 20,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "geefarrmwixsitefrontie",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 52.43757432,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500564,
          "raw_weighted_risk": 0.320282,
          "initial_verdict": "PHISHING",
          "confidence": 0.500564,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.475624,
            "character_continuation_risk": 0.4375,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.243761,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500564,
        "confidence": 0.500564,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 20,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000564,
        "distance_from_phishing_boundary": 0.000564,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_139541",
      "source": {
        "filename": "447896.txt",
        "row_number": 139542,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.ee.iitm.ac.in. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.ee.iitm.ac.in",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        24,
        "www.ee.iitm.ac.in",
        17,
        0,
        "in",
        100,
        0.5,
        0.0050842,
        0.07111493,
        2,
        3,
        0,
        0,
        0,
        9,
        0.375,
        0,
        0,
        0,
        0,
        0,
        3,
        0.125,
        1,
        802,
        580,
        1,
        "eetmac",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        30,
        15,
        17,
        69,
        33,
        73
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.ee.iitm.ac.in",
          "resolved_url": "https://www.ee.iitm.ac.in",
          "final_domain": "www.ee.iitm.ac.in",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.ee.iitm.ac.in",
          "tld": "in",
          "domain_length": 17,
          "is_ip_address": false,
          "subdomain_count": 3,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0050842,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "eetmac",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499548,
          "raw_weighted_risk": 0.319774,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500452,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "many_subdomains",
            "low_tld_reputation",
            "title_domain_mismatch",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.5,
            "tld_reputation_risk": 0.990277,
            "url_character_probability_risk": 0.111063,
            "domain_structure_risk": 0.5,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499548,
        "confidence": 0.500452,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 21,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012452,
        "distance_from_phishing_boundary": 0.000452,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_080350",
      "source": {
        "filename": "8007608.txt",
        "row_number": 80351,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://yahoomailconnect.wixsite.com/active. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://yahoomailconnect.wixsite.com/active",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        42,
        "yahoomailconnect.wixsite.com",
        28,
        0,
        "com",
        48.65306122,
        0.708333333,
        0.5229071,
        0.062668283,
        3,
        1,
        0,
        0,
        0,
        31,
        0.738,
        0,
        0,
        0,
        0,
        0,
        3,
        0.071,
        1,
        64,
        151,
        1,
        "yahoomailconnectwixsiteactiv",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        8,
        3,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://yahoomailconnect.wixsite.com/active",
          "resolved_url": "https://yahoomailconnect.wixsite.com/active",
          "final_domain": "yahoomailconnect.wixsite.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "yahoomailconnect.wixsite.com",
          "tld": "com",
          "domain_length": 28,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "yahoomailconnectwixsiteactiv",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 48.65306122,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500565,
          "raw_weighted_risk": 0.320282,
          "initial_verdict": "PHISHING",
          "confidence": 0.500565,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.513469,
            "character_continuation_risk": 0.291667,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.216646,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500565,
        "confidence": 0.500565,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 22,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000565,
        "distance_from_phishing_boundary": 0.000565,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_210698",
      "source": {
        "filename": "552550.txt",
        "row_number": 210699,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.activecarestore.co.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.activecarestore.co.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        32,
        "www.activecarestore.co.uk",
        25,
        0,
        "uk",
        100,
        0.888888889,
        0.028555,
        0.069494969,
        2,
        2,
        0,
        0,
        0,
        18,
        0.562,
        0,
        0,
        0,
        0,
        0,
        2,
        0.062,
        1,
        3412,
        11144,
        1,
        "activecarestoreco",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        19,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        51,
        2,
        26,
        263,
        11,
        17
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.activecarestore.co.uk",
          "resolved_url": "https://www.activecarestore.co.uk",
          "final_domain": "www.activecarestore.co.uk",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.activecarestore.co.uk",
          "tld": "uk",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "activecarestoreco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499384,
          "raw_weighted_risk": 0.319692,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500616,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.111111,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.131313,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499384,
        "confidence": 0.500616,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 23,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012616,
        "distance_from_phishing_boundary": 0.000616,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_029948",
      "source": {
        "filename": "8065507.txt",
        "row_number": 29949,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://ha3ez3bjhu.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://ha3ez3bjhu.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "ha3ez3bjhu.firebaseapp.com",
        26,
        0,
        "com",
        68.00350647,
        0.590909091,
        0.5229071,
        0.047240484,
        3,
        1,
        0,
        0,
        0,
        22,
        0.629,
        2,
        0.057,
        0,
        0,
        0,
        3,
        0.086,
        1,
        108,
        8125,
        1,
        "ha3ez3bjhufirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://ha3ez3bjhu.firebaseapp.com/",
          "resolved_url": "https://ha3ez3bjhu.firebaseapp.com/",
          "final_domain": "ha3ez3bjhu.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "ha3ez3bjhu.firebaseapp.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "ha3ez3bjhufirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 68.00350647,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499744,
          "raw_weighted_risk": 0.319872,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500256,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.319965,
            "character_continuation_risk": 0.409091,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.409494,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499744,
        "confidence": 0.500256,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 24,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000256,
        "distance_from_phishing_boundary": 0.000256,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_087005",
      "source": {
        "filename": "726715.txt",
        "row_number": 87006,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.reportdigital.co.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.reportdigital.co.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        30,
        "www.reportdigital.co.uk",
        23,
        0,
        "uk",
        100,
        0.875,
        0.028555,
        0.060476668,
        2,
        2,
        0,
        0,
        0,
        16,
        0.533,
        0,
        0,
        0,
        0,
        0,
        2,
        0.067,
        1,
        422,
        3663,
        1,
        "reportdigitalco",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        29,
        5,
        8,
        71,
        6,
        5
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.reportdigital.co.uk",
          "resolved_url": "https://www.reportdigital.co.uk",
          "final_domain": "www.reportdigital.co.uk",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.reportdigital.co.uk",
          "tld": "uk",
          "domain_length": 23,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "reportdigitalco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500143,
          "raw_weighted_risk": 0.320071,
          "initial_verdict": "PHISHING",
          "confidence": 0.500143,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.125,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.244042,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500143,
        "confidence": 0.500143,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 25,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012143,
        "distance_from_phishing_boundary": 0.000143,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_142824",
      "source": {
        "filename": "8062026.txt",
        "row_number": 142825,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://abnermalatees1.wixsite.com/my-site. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://abnermalatees1.wixsite.com/my-site",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        42,
        "abnermalatees1.wixsite.com",
        26,
        0,
        "com",
        50.36085022,
        0.681818182,
        0.5229071,
        0.059674211,
        3,
        1,
        0,
        0,
        0,
        29,
        0.69,
        1,
        0.024,
        0,
        0,
        0,
        4,
        0.095,
        1,
        64,
        151,
        1,
        "abnermalatees1wixsitemy-site",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        8,
        3,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://abnermalatees1.wixsite.com/my-site",
          "resolved_url": "https://abnermalatees1.wixsite.com/my-site",
          "final_domain": "abnermalatees1.wixsite.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "abnermalatees1.wixsite.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "abnermalatees1wixsitemy-site",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 50.36085022,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500666,
          "raw_weighted_risk": 0.320333,
          "initial_verdict": "PHISHING",
          "confidence": 0.500666,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.496391,
            "character_continuation_risk": 0.318182,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.254072,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500666,
        "confidence": 0.500666,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 26,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000666,
        "distance_from_phishing_boundary": 0.000666,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_067041",
      "source": {
        "filename": "693464.txt",
        "row_number": 67042,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.hawkertempest.se. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.hawkertempest.se",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        27,
        "www.hawkertempest.se",
        20,
        0,
        "se",
        100,
        1,
        0.0040185,
        0.055069538,
        2,
        1,
        0,
        0,
        0,
        14,
        0.519,
        0,
        0,
        0,
        0,
        0,
        1,
        0.037,
        1,
        1848,
        1035,
        1,
        "hawkertempet",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        6,
        11,
        12,
        87,
        31,
        7
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.hawkertempest.se",
          "resolved_url": "https://www.hawkertempest.se",
          "final_domain": "www.hawkertempest.se",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.hawkertempest.se",
          "tld": "se",
          "domain_length": 20,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0040185,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "hawkertempet",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499298,
          "raw_weighted_risk": 0.319649,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500702,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.992315,
            "url_character_probability_risk": 0.311631,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499298,
        "confidence": 0.500702,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 27,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012702,
        "distance_from_phishing_boundary": 0.000702,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_203460",
      "source": {
        "filename": "8023334.txt",
        "row_number": 203461,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://lokpiii.weebly.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://lokpiii.weebly.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        26,
        "lokpiii.weebly.com",
        18,
        0,
        "com",
        59.71410006,
        0.571428571,
        0.5229071,
        0.055135764,
        3,
        1,
        0,
        0,
        0,
        16,
        0.615,
        0,
        0,
        0,
        0,
        0,
        2,
        0.077,
        1,
        129,
        368,
        1,
        "lokpiiiweebly",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        3,
        0,
        0
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://lokpiii.weebly.com/",
          "resolved_url": "https://lokpiii.weebly.com/",
          "final_domain": "lokpiii.weebly.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "lokpiii.weebly.com",
          "tld": "com",
          "domain_length": 18,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "lokpiiiweebly",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 59.71410006,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500682,
          "raw_weighted_risk": 0.320341,
          "initial_verdict": "PHISHING",
          "confidence": 0.500682,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.402859,
            "character_continuation_risk": 0.428571,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.310803,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500682,
        "confidence": 0.500682,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 28,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000682,
        "distance_from_phishing_boundary": 0.000682,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_063507",
      "source": {
        "filename": "826472.txt",
        "row_number": 63508,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.forumcinemas.ee. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.forumcinemas.ee",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        26,
        "www.forumcinemas.ee",
        19,
        0,
        "ee",
        100,
        1,
        0.0005336,
        0.064957165,
        2,
        1,
        0,
        0,
        0,
        13,
        0.5,
        0,
        0,
        0,
        0,
        0,
        1,
        0.038,
        1,
        3125,
        1184,
        1,
        "forumcinmas",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        60,
        21,
        4,
        106,
        8,
        20
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.forumcinemas.ee",
          "resolved_url": "https://www.forumcinemas.ee",
          "final_domain": "www.forumcinemas.ee",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.forumcinemas.ee",
          "tld": "ee",
          "domain_length": 19,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0005336,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "forumcinmas",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499256,
          "raw_weighted_risk": 0.319628,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500744,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.99898,
            "url_character_probability_risk": 0.188035,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499256,
        "confidence": 0.500744,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 29,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012744,
        "distance_from_phishing_boundary": 0.000744,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_092314",
      "source": {
        "filename": "8054381.txt",
        "row_number": 92315,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://soij8jvkjd.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://soij8jvkjd.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "soij8jvkjd.firebaseapp.com",
        26,
        0,
        "com",
        67.85009862,
        0.590909091,
        0.5229071,
        0.047652212,
        3,
        1,
        0,
        0,
        0,
        23,
        0.657,
        1,
        0.029,
        0,
        0,
        0,
        3,
        0.086,
        1,
        108,
        8125,
        1,
        "soij8jvkjdfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://soij8jvkjd.firebaseapp.com/",
          "resolved_url": "https://soij8jvkjd.firebaseapp.com/",
          "final_domain": "soij8jvkjd.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "soij8jvkjd.firebaseapp.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "soij8jvkjdfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 67.85009862,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499688,
          "raw_weighted_risk": 0.319844,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500312,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.321499,
            "character_continuation_risk": 0.409091,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.404347,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499688,
        "confidence": 0.500312,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 30,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000312,
        "distance_from_phishing_boundary": 0.000312,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_108914",
      "source": {
        "filename": "392718.txt",
        "row_number": 108915,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.n-sharyo.co.jp. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.n-sharyo.co.jp",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        25,
        "www.n-sharyo.co.jp",
        18,
        0,
        "jp",
        100,
        0.636363636,
        0.0230451,
        0.057748953,
        2,
        2,
        0,
        0,
        0,
        10,
        0.4,
        0,
        0,
        0,
        0,
        0,
        3,
        0.12,
        1,
        806,
        527,
        1,
        "n-sharyoco",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        35,
        5,
        4,
        2,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.n-sharyo.co.jp",
          "resolved_url": "https://www.n-sharyo.co.jp",
          "final_domain": "www.n-sharyo.co.jp",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.n-sharyo.co.jp",
          "tld": "jp",
          "domain_length": 18,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0230451,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "n-sharyoco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500481,
          "raw_weighted_risk": 0.320241,
          "initial_verdict": "PHISHING",
          "confidence": 0.500481,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.363636,
            "tld_reputation_risk": 0.955929,
            "url_character_probability_risk": 0.278138,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500481,
        "confidence": 0.500481,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 31,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012481,
        "distance_from_phishing_boundary": 0.000481,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_103515",
      "source": {
        "filename": "7969604.txt",
        "row_number": 103516,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://consolegdigitale.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://consolegdigitale.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        40,
        "consolegdigitale.firebaseapp.com",
        32,
        0,
        "com",
        61.65956439,
        0.607142857,
        0.5229071,
        0.061764229,
        3,
        1,
        0,
        0,
        0,
        30,
        0.75,
        0,
        0,
        0,
        0,
        0,
        2,
        0.05,
        1,
        108,
        8125,
        1,
        "consolegdigitalefirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://consolegdigitale.firebaseapp.com/",
          "resolved_url": "https://consolegdigitale.firebaseapp.com/",
          "final_domain": "consolegdigitale.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "consolegdigitale.firebaseapp.com",
          "tld": "com",
          "domain_length": 32,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "consolegdigitalefirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 61.65956439,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500793,
          "raw_weighted_risk": 0.320396,
          "initial_verdict": "PHISHING",
          "confidence": 0.500793,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.383404,
            "character_continuation_risk": 0.392857,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.227947,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500793,
        "confidence": 0.500793,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 32,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000793,
        "distance_from_phishing_boundary": 0.000793,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_155500",
      "source": {
        "filename": "836292.txt",
        "row_number": 155501,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.whitbyregatta.co.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.whitbyregatta.co.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        30,
        "www.whitbyregatta.co.uk",
        23,
        0,
        "uk",
        100,
        0.875,
        0.028555,
        0.053096371,
        2,
        2,
        0,
        0,
        0,
        16,
        0.533,
        0,
        0,
        0,
        0,
        0,
        2,
        0.067,
        1,
        245,
        609,
        1,
        "whitbyregattaco",
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        7,
        2,
        4,
        20,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.whitbyregatta.co.uk",
          "resolved_url": "https://www.whitbyregatta.co.uk",
          "final_domain": "www.whitbyregatta.co.uk",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.whitbyregatta.co.uk",
          "tld": "uk",
          "domain_length": 23,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "whitbyregattaco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499237,
          "raw_weighted_risk": 0.319618,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500763,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.125,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.336295,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499237,
        "confidence": 0.500763,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 33,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012763,
        "distance_from_phishing_boundary": 0.000763,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_036845",
      "source": {
        "filename": "8120602.txt",
        "row_number": 36846,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://messageriepro8.godaddysites.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://messageriepro8.godaddysites.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        40,
        "messageriepro8.godaddysites.com",
        31,
        0,
        "com",
        63.3975026,
        0.555555556,
        0.5229071,
        0.059970501,
        3,
        1,
        0,
        0,
        0,
        28,
        0.7,
        1,
        0.025,
        0,
        0,
        0,
        3,
        0.075,
        1,
        30,
        115,
        1,
        "messageriepro8godaddysites",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        0,
        2,
        0,
        0
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://messageriepro8.godaddysites.com/",
          "resolved_url": "https://messageriepro8.godaddysites.com/",
          "final_domain": "messageriepro8.godaddysites.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "messageriepro8.godaddysites.com",
          "tld": "com",
          "domain_length": 31,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "messageriepro8godaddysites",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 63.3975026,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500849,
          "raw_weighted_risk": 0.320425,
          "initial_verdict": "PHISHING",
          "confidence": 0.500849,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.366025,
            "character_continuation_risk": 0.444444,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.250369,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500849,
        "confidence": 0.500849,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 34,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000849,
        "distance_from_phishing_boundary": 0.000849,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_107753",
      "source": {
        "filename": "587445.txt",
        "row_number": 107754,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.eurocars.ro. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.eurocars.ro",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        22,
        "www.eurocars.ro",
        15,
        0,
        "ro",
        100,
        1,
        0.001523,
        0.06889561,
        2,
        1,
        0,
        0,
        0,
        9,
        0.409,
        0,
        0,
        0,
        0,
        0,
        1,
        0.045,
        1,
        710,
        3093,
        1,
        "euocas",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        17,
        2,
        3,
        70,
        0,
        21
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.eurocars.ro",
          "resolved_url": "https://www.eurocars.ro",
          "final_domain": "www.eurocars.ro",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.eurocars.ro",
          "tld": "ro",
          "domain_length": 15,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.001523,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "euocas",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499076,
          "raw_weighted_risk": 0.319538,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500924,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.997087,
            "url_character_probability_risk": 0.138805,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499076,
        "confidence": 0.500924,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 35,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.012924,
        "distance_from_phishing_boundary": 0.000924,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_016359",
      "source": {
        "filename": "mw52122.txt",
        "row_number": 16360,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL http://www.1337.cx. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "http://www.1337.cx",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        17,
        "www.1337.cx",
        11,
        0,
        "cx",
        79.16666667,
        1,
        0.00012,
        0.015604622,
        2,
        1,
        0,
        0,
        0,
        1,
        0.059,
        4,
        0.235,
        0,
        0,
        0,
        1,
        0.059,
        0,
        65,
        179,
        1,
        "1337",
        100,
        100,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        5,
        0,
        0,
        7
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "http://www.1337.cx",
          "resolved_url": "http://www.1337.cx",
          "final_domain": "www.1337.cx",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.1337.cx",
          "tld": "cx",
          "domain_length": 11,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": false,
          "tld_legitimacy_prior": 0.00012,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "1337",
          "domain_title_match_score": 100,
          "url_title_match_score": 100,
          "assessment": "STRONG_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 79.16666667,
          "title_reference_score": 100,
          "assessment": "MEDIUM",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499587,
          "raw_weighted_risk": 0.319794,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500413,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "no_https"
          ],
          "protective_signal_codes": [
            "title_domain_match",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.208333,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.999771,
            "url_character_probability_risk": 0.804942,
            "domain_structure_risk": 0,
            "transport_risk": 1,
            "title_match_risk": 0,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499587,
        "confidence": 0.500413,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 36,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000413,
        "distance_from_phishing_boundary": 0.000413,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_054708",
      "source": {
        "filename": "155439.txt",
        "row_number": 54709,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.uec.ac.jp. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.uec.ac.jp",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        20,
        "www.uec.ac.jp",
        13,
        0,
        "jp",
        100,
        0.666666667,
        0.0230451,
        0.059042805,
        2,
        2,
        0,
        0,
        0,
        6,
        0.3,
        0,
        0,
        0,
        0,
        0,
        2,
        0.1,
        1,
        2688,
        381,
        1,
        "uecac",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        3,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        122,
        12,
        23,
        206,
        6,
        67
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.uec.ac.jp",
          "resolved_url": "https://www.uec.ac.jp",
          "final_domain": "www.uec.ac.jp",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.uec.ac.jp",
          "tld": "jp",
          "domain_length": 13,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0230451,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "uecac",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498863,
          "raw_weighted_risk": 0.319432,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501137,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0.955929,
            "url_character_probability_risk": 0.261965,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498863,
        "confidence": 0.501137,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 37,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013137,
        "distance_from_phishing_boundary": 0.001137,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_202406",
      "source": {
        "filename": "8134703.txt",
        "row_number": 202407,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://yahooonlinein.wixsite.com/signin. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://yahooonlinein.wixsite.com/signin",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        40,
        "yahooonlinein.wixsite.com",
        25,
        0,
        "com",
        50.18939394,
        0.666666667,
        0.5229071,
        0.060744279,
        3,
        1,
        0,
        0,
        0,
        29,
        0.725,
        0,
        0,
        0,
        0,
        0,
        3,
        0.075,
        1,
        64,
        151,
        1,
        "yahooonlineinwixsitesignin",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        8,
        3,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://yahooonlinein.wixsite.com/signin",
          "resolved_url": "https://yahooonlinein.wixsite.com/signin",
          "final_domain": "yahooonlinein.wixsite.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "yahooonlinein.wixsite.com",
          "tld": "com",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "yahooonlineinwixsitesignin",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 50.18939394,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500898,
          "raw_weighted_risk": 0.320449,
          "initial_verdict": "PHISHING",
          "confidence": 0.500898,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.498106,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.240697,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500898,
        "confidence": 0.500898,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 38,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.000898,
        "distance_from_phishing_boundary": 0.000898,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_115747",
      "source": {
        "filename": "727405.txt",
        "row_number": 115748,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.scottishritestore.org. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.scottishritestore.org",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        32,
        "www.scottishritestore.org",
        25,
        0,
        "org",
        100,
        1,
        0.0799628,
        0.067517531,
        3,
        1,
        0,
        0,
        0,
        19,
        0.594,
        0,
        0,
        0,
        0,
        0,
        1,
        0.031,
        1,
        1287,
        6679,
        1,
        "scottishriteste",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        1,
        29,
        23,
        4,
        41,
        20,
        46
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.scottishritestore.org",
          "resolved_url": "https://www.scottishritestore.org",
          "final_domain": "www.scottishritestore.org",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.scottishritestore.org",
          "tld": "org",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0799628,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "scottishriteste",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": true,
          "assessment": "FORM_SUBMITS_EXTERNALLY"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500498,
          "raw_weighted_risk": 0.320249,
          "initial_verdict": "PHISHING",
          "confidence": 0.500498,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "title_domain_mismatch",
            "external_form_submit",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.84708,
            "url_character_probability_risk": 0.156031,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 1,
            "site_identity_risk": 0,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500498,
        "confidence": 0.500498,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 39,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012498,
        "distance_from_phishing_boundary": 0.000498,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_090986",
      "source": {
        "filename": "8075614.txt",
        "row_number": 90987,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://mougoulinbanque.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://mougoulinbanque.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        40,
        "mougoulinbanque.firebaseapp.com",
        31,
        0,
        "com",
        63.78772112,
        0.592592593,
        0.5229071,
        0.057052754,
        3,
        1,
        0,
        0,
        0,
        29,
        0.725,
        0,
        0,
        0,
        0,
        0,
        3,
        0.075,
        1,
        108,
        8125,
        1,
        "mougoulinbanquefirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://mougoulinbanque.firebaseapp.com/",
          "resolved_url": "https://mougoulinbanque.firebaseapp.com/",
          "final_domain": "mougoulinbanque.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "mougoulinbanque.firebaseapp.com",
          "tld": "com",
          "domain_length": 31,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "mougoulinbanquefirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 63.78772112,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.50103,
          "raw_weighted_risk": 0.320515,
          "initial_verdict": "PHISHING",
          "confidence": 0.50103,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.362123,
            "character_continuation_risk": 0.407407,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.286841,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.50103,
        "confidence": 0.50103,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 40,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.00103,
        "distance_from_phishing_boundary": 0.00103,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_027173",
      "source": {
        "filename": "259839.txt",
        "row_number": 27174,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.unbiased.co.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.unbiased.co.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        25,
        "www.unbiased.co.uk",
        18,
        0,
        "uk",
        100,
        0.818181818,
        0.028555,
        0.058128719,
        2,
        2,
        0,
        0,
        0,
        11,
        0.44,
        0,
        0,
        0,
        0,
        0,
        2,
        0.08,
        1,
        3233,
        1755,
        1,
        "nbiasedco",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        2,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        18,
        2,
        11,
        153,
        0,
        33
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.unbiased.co.uk",
          "resolved_url": "https://www.unbiased.co.uk",
          "final_domain": "www.unbiased.co.uk",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.unbiased.co.uk",
          "tld": "uk",
          "domain_length": 18,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "nbiasedco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498854,
          "raw_weighted_risk": 0.319427,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501146,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.181818,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.273391,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498854,
        "confidence": 0.501146,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 41,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013146,
        "distance_from_phishing_boundary": 0.001146,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_056178",
      "source": {
        "filename": "7671715.txt",
        "row_number": 56179,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://m4agence.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://m4agence.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        32,
        "m4agence.firebaseapp.com",
        24,
        0,
        "com",
        66.91692308,
        0.65,
        0.5229071,
        0.060431993,
        3,
        1,
        0,
        0,
        0,
        21,
        0.656,
        1,
        0.031,
        0,
        0,
        0,
        2,
        0.062,
        1,
        36,
        24569,
        1,
        "m4agencefirebaseapp",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://m4agence.firebaseapp.com/",
          "resolved_url": "https://m4agence.firebaseapp.com/",
          "final_domain": "m4agence.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "m4agence.firebaseapp.com",
          "tld": "com",
          "domain_length": 24,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "m4agencefirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.91692308,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499551,
          "raw_weighted_risk": 0.319776,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500449,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.330831,
            "character_continuation_risk": 0.35,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.2446,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 1,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499551,
        "confidence": 0.500449,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 42,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000449,
        "distance_from_phishing_boundary": 0.000449,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_181464",
      "source": {
        "filename": "425513.txt",
        "row_number": 181465,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.nextmedia-hamburg.de. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.nextmedia-hamburg.de",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        31,
        "www.nextmedia-hamburg.de",
        24,
        0,
        "de",
        100,
        0.588235294,
        0.0326503,
        0.05142914,
        2,
        1,
        0,
        0,
        0,
        17,
        0.548,
        0,
        0,
        0,
        0,
        0,
        2,
        0.065,
        1,
        3178,
        26703,
        1,
        "nextmeia-hamburg",
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        43,
        27,
        53,
        140,
        10,
        173
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.nextmedia-hamburg.de",
          "resolved_url": "https://www.nextmedia-hamburg.de",
          "final_domain": "www.nextmedia-hamburg.de",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.nextmedia-hamburg.de",
          "tld": "de",
          "domain_length": 24,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0326503,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "nextmeia-hamburg",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "SAME_ORIGIN_OR_UNRESOLVED_FORM"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500661,
          "raw_weighted_risk": 0.320331,
          "initial_verdict": "PHISHING",
          "confidence": 0.500661,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.411765,
            "tld_reputation_risk": 0.93756,
            "url_character_probability_risk": 0.357136,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500661,
        "confidence": 0.500661,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 43,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012661,
        "distance_from_phishing_boundary": 0.000661,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_092089",
      "source": {
        "filename": "8081547.txt",
        "row_number": 92090,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://sijcdv6vx.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://sijcdv6vx.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        34,
        "sijcdv6vx.firebaseapp.com",
        25,
        0,
        "com",
        66.91692308,
        0.619047619,
        0.5229071,
        0.04788281,
        3,
        1,
        0,
        0,
        0,
        22,
        0.647,
        1,
        0.029,
        0,
        0,
        0,
        3,
        0.088,
        1,
        108,
        8125,
        1,
        "sijcdv6vxfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://sijcdv6vx.firebaseapp.com/",
          "resolved_url": "https://sijcdv6vx.firebaseapp.com/",
          "final_domain": "sijcdv6vx.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "sijcdv6vx.firebaseapp.com",
          "tld": "com",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "sijcdv6vxfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.91692308,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501078,
          "raw_weighted_risk": 0.320539,
          "initial_verdict": "PHISHING",
          "confidence": 0.501078,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.330831,
            "character_continuation_risk": 0.380952,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.401465,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501078,
        "confidence": 0.501078,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 44,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001078,
        "distance_from_phishing_boundary": 0.001078,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_002321",
      "source": {
        "filename": "157402.txt",
        "row_number": 2322,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.hornsociety.org. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.hornsociety.org",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        26,
        "www.hornsociety.org",
        19,
        0,
        "org",
        100,
        1,
        0.0799628,
        0.066357852,
        3,
        1,
        0,
        0,
        0,
        13,
        0.5,
        0,
        0,
        0,
        0,
        0,
        1,
        0.038,
        1,
        932,
        5054,
        1,
        "hnsociety",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        12,
        23,
        24,
        66,
        2,
        19
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.hornsociety.org",
          "resolved_url": "https://www.hornsociety.org",
          "final_domain": "www.hornsociety.org",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.hornsociety.org",
          "tld": "org",
          "domain_length": 19,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0799628,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "hnsociety",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498817,
          "raw_weighted_risk": 0.319409,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501183,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.84708,
            "url_character_probability_risk": 0.170527,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498817,
        "confidence": 0.501183,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 45,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013183,
        "distance_from_phishing_boundary": 0.001183,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_159801",
      "source": {
        "filename": "7671717.txt",
        "row_number": 159802,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://m3agence.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://m3agence.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        32,
        "m3agence.firebaseapp.com",
        24,
        0,
        "com",
        66.91692308,
        0.65,
        0.5229071,
        0.06043767,
        3,
        1,
        0,
        0,
        0,
        21,
        0.656,
        1,
        0.031,
        0,
        0,
        0,
        2,
        0.062,
        1,
        36,
        24569,
        1,
        "m3agencefirebaseapp",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://m3agence.firebaseapp.com/",
          "resolved_url": "https://m3agence.firebaseapp.com/",
          "final_domain": "m3agence.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "m3agence.firebaseapp.com",
          "tld": "com",
          "domain_length": 24,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "m3agencefirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.91692308,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.49954,
          "raw_weighted_risk": 0.31977,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.50046,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.330831,
            "character_continuation_risk": 0.35,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.244529,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 1,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.49954,
        "confidence": 0.50046,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 46,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.00046,
        "distance_from_phishing_boundary": 0.00046,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_169504",
      "source": {
        "filename": "534401.txt",
        "row_number": 169505,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.marinette.wi.us. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.marinette.wi.us",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        26,
        "www.marinette.wi.us",
        19,
        0,
        "us",
        100,
        0.833333333,
        0.0045585,
        0.060117713,
        2,
        2,
        0,
        0,
        0,
        12,
        0.462,
        0,
        0,
        0,
        0,
        0,
        2,
        0.077,
        1,
        2742,
        1975,
        1,
        "marinettewi",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        9,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        9,
        19,
        73,
        0,
        11
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.marinette.wi.us",
          "resolved_url": "https://www.marinette.wi.us",
          "final_domain": "www.marinette.wi.us",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.marinette.wi.us",
          "tld": "us",
          "domain_length": 19,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0045585,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "marinettewi",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500703,
          "raw_weighted_risk": 0.320352,
          "initial_verdict": "PHISHING",
          "confidence": 0.500703,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.166667,
            "tld_reputation_risk": 0.991282,
            "url_character_probability_risk": 0.248529,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500703,
        "confidence": 0.500703,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 47,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012703,
        "distance_from_phishing_boundary": 0.000703,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_128459",
      "source": {
        "filename": "8058703.txt",
        "row_number": 128460,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://sbzuc7vcx.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://sbzuc7vcx.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        34,
        "sbzuc7vcx.firebaseapp.com",
        25,
        0,
        "com",
        66.52307692,
        0.619047619,
        0.5229071,
        0.04885478,
        3,
        1,
        0,
        0,
        0,
        22,
        0.647,
        1,
        0.029,
        0,
        0,
        0,
        3,
        0.088,
        1,
        108,
        8125,
        1,
        "sbzuc7vcxfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://sbzuc7vcx.firebaseapp.com/",
          "resolved_url": "https://sbzuc7vcx.firebaseapp.com/",
          "final_domain": "sbzuc7vcx.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "sbzuc7vcx.firebaseapp.com",
          "tld": "com",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "sbzuc7vcxfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.52307692,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501104,
          "raw_weighted_risk": 0.320552,
          "initial_verdict": "PHISHING",
          "confidence": 0.501104,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.334769,
            "character_continuation_risk": 0.380952,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.389315,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501104,
        "confidence": 0.501104,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 48,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001104,
        "distance_from_phishing_boundary": 0.001104,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_090139",
      "source": {
        "filename": "856029.txt",
        "row_number": 90140,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.lakecrest.ca. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.lakecrest.ca",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        23,
        "www.lakecrest.ca",
        16,
        0,
        "ca",
        100,
        1,
        0.0101825,
        0.063788514,
        2,
        1,
        0,
        0,
        0,
        10,
        0.435,
        0,
        0,
        0,
        0,
        0,
        1,
        0.043,
        1,
        1739,
        2501,
        1,
        "lakerest",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        2,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        23,
        30,
        41,
        145,
        12,
        145
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.lakecrest.ca",
          "resolved_url": "https://www.lakecrest.ca",
          "final_domain": "www.lakecrest.ca",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.lakecrest.ca",
          "tld": "ca",
          "domain_length": 16,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0101825,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "lakerest",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": true,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498641,
          "raw_weighted_risk": 0.31932,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501359,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.980527,
            "url_character_probability_risk": 0.202644,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498641,
        "confidence": 0.501359,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 49,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013359,
        "distance_from_phishing_boundary": 0.001359,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_151858",
      "source": {
        "filename": "8043917.txt",
        "row_number": 151859,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://dzhdfb.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://dzhdfb.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        31,
        "dzhdfb.firebaseapp.com",
        22,
        0,
        "com",
        65.94444444,
        0.666666667,
        0.5229071,
        0.048706444,
        3,
        1,
        0,
        0,
        0,
        20,
        0.645,
        0,
        0,
        0,
        0,
        0,
        3,
        0.097,
        1,
        108,
        8125,
        1,
        "dzhdfbfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://dzhdfb.firebaseapp.com/",
          "resolved_url": "https://dzhdfb.firebaseapp.com/",
          "final_domain": "dzhdfb.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "dzhdfb.firebaseapp.com",
          "tld": "com",
          "domain_length": 22,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "dzhdfbfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.94444444,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499532,
          "raw_weighted_risk": 0.319766,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500468,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.340556,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.391169,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499532,
        "confidence": 0.500468,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 50,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000468,
        "distance_from_phishing_boundary": 0.000468,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_123611",
      "source": {
        "filename": "780375.txt",
        "row_number": 123612,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.marica.rj.gov.br. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.marica.rj.gov.br",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        27,
        "www.marica.rj.gov.br",
        20,
        0,
        "br",
        100,
        0.538461538,
        0.0094423,
        0.05459216,
        2,
        3,
        0,
        0,
        0,
        12,
        0.444,
        0,
        0,
        0,
        0,
        0,
        3,
        0.111,
        1,
        1301,
        19227,
        1,
        "maricarjgov",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        52,
        24,
        36,
        122,
        20,
        217
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.marica.rj.gov.br",
          "resolved_url": "https://www.marica.rj.gov.br",
          "final_domain": "www.marica.rj.gov.br",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.marica.rj.gov.br",
          "tld": "br",
          "domain_length": 20,
          "is_ip_address": false,
          "subdomain_count": 3,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0094423,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "maricarjgov",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500747,
          "raw_weighted_risk": 0.320374,
          "initial_verdict": "PHISHING",
          "confidence": 0.500747,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "many_subdomains",
            "low_tld_reputation",
            "title_domain_mismatch",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.461538,
            "tld_reputation_risk": 0.981943,
            "url_character_probability_risk": 0.317598,
            "domain_structure_risk": 0.5,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500747,
        "confidence": 0.500747,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 51,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.012747,
        "distance_from_phishing_boundary": 0.000747,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_145727",
      "source": {
        "filename": "8138672.txt",
        "row_number": 145728,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://sbcglobalsettings.godaddysites.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://sbcglobalsettings.godaddysites.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        43,
        "sbcglobalsettings.godaddysites.com",
        34,
        0,
        "com",
        63.88531883,
        0.6,
        0.5229071,
        0.056379595,
        3,
        1,
        0,
        0,
        0,
        32,
        0.744,
        0,
        0,
        0,
        0,
        0,
        3,
        0.07,
        1,
        30,
        115,
        1,
        "sbcglobalsettingsgodaddysites",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        0,
        2,
        0,
        0
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://sbcglobalsettings.godaddysites.com/",
          "resolved_url": "https://sbcglobalsettings.godaddysites.com/",
          "final_domain": "sbcglobalsettings.godaddysites.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "sbcglobalsettings.godaddysites.com",
          "tld": "com",
          "domain_length": 34,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "sbcglobalsettingsgodaddysites",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 63.88531883,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501148,
          "raw_weighted_risk": 0.320574,
          "initial_verdict": "PHISHING",
          "confidence": 0.501148,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.361147,
            "character_continuation_risk": 0.4,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.295255,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501148,
        "confidence": 0.501148,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 52,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001148,
        "distance_from_phishing_boundary": 0.001148,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_163925",
      "source": {
        "filename": "856943.txt",
        "row_number": 163926,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.shockmagazin.hu. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.shockmagazin.hu",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        26,
        "www.shockmagazin.hu",
        19,
        0,
        "hu",
        100,
        1,
        0.0022172,
        0.051788279,
        2,
        1,
        0,
        0,
        0,
        13,
        0.5,
        0,
        0,
        0,
        0,
        0,
        1,
        0.038,
        1,
        1567,
        1160,
        1,
        "sockmagazin",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        1,
        46,
        21,
        20,
        274,
        0,
        13
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.shockmagazin.hu",
          "resolved_url": "https://www.shockmagazin.hu",
          "final_domain": "www.shockmagazin.hu",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.shockmagazin.hu",
          "tld": "hu",
          "domain_length": 19,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0022172,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "sockmagazin",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498412,
          "raw_weighted_risk": 0.319206,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501588,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.99576,
            "url_character_probability_risk": 0.352647,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498412,
        "confidence": 0.501588,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 53,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013588,
        "distance_from_phishing_boundary": 0.001588,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_203538",
      "source": {
        "filename": "7800273.txt",
        "row_number": 203539,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://dik.si/wf9gl6. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://dik.si/wf9gl6",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        20,
        "dik.si",
        6,
        0,
        "si",
        49.70414201,
        1,
        0.0004946,
        0.032577185,
        2,
        0,
        0,
        0,
        0,
        9,
        0.45,
        1,
        0.05,
        0,
        0,
        0,
        2,
        0.1,
        1,
        85,
        43312,
        1,
        "dikwf9gl",
        0,
        88.88888889,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        2,
        1,
        6,
        2,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://dik.si/wf9gl6",
          "resolved_url": "https://dik.si/wf9gl6",
          "final_domain": "dik.si",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "dik.si",
          "tld": "si",
          "domain_length": 6,
          "is_ip_address": false,
          "subdomain_count": 0,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0004946,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "dikwf9gl",
          "domain_title_match_score": 0,
          "url_title_match_score": 88.88888889,
          "assessment": "STRONG_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 49.70414201,
          "title_reference_score": 88.88888889,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499507,
          "raw_weighted_risk": 0.319753,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500493,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "low_tld_reputation",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "title_domain_match",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.502959,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.999054,
            "url_character_probability_risk": 0.592785,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 0.111111,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499507,
        "confidence": 0.500493,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 54,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000493,
        "distance_from_phishing_boundary": 0.000493,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_136995",
      "source": {
        "filename": "226275.txt",
        "row_number": 136996,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.plantsome.nl. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.plantsome.nl",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        23,
        "www.plantsome.nl",
        16,
        0,
        "nl",
        100,
        1,
        0.0082003,
        0.062882431,
        2,
        1,
        0,
        0,
        0,
        10,
        0.435,
        0,
        0,
        0,
        0,
        0,
        1,
        0.043,
        1,
        6625,
        2794,
        1,
        "platsome",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        22,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        47,
        1,
        28,
        222,
        0,
        68
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.plantsome.nl",
          "resolved_url": "https://www.plantsome.nl",
          "final_domain": "www.plantsome.nl",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.plantsome.nl",
          "tld": "nl",
          "domain_length": 16,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0082003,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "platsome",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501059,
          "raw_weighted_risk": 0.32053,
          "initial_verdict": "PHISHING",
          "confidence": 0.501059,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.984318,
            "url_character_probability_risk": 0.21397,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501059,
        "confidence": 0.501059,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 55,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.013059,
        "distance_from_phishing_boundary": 0.001059,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_076078",
      "source": {
        "filename": "8047570.txt",
        "row_number": 76079,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://mailservrsupport23.wixsite.com/att23. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://mailservrsupport23.wixsite.com/att23",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        44,
        "mailservrsupport23.wixsite.com",
        30,
        0,
        "com",
        52.97380714,
        0.730769231,
        0.5229071,
        0.050394478,
        3,
        1,
        0,
        0,
        0,
        29,
        0.659,
        4,
        0.091,
        0,
        0,
        0,
        3,
        0.068,
        1,
        64,
        151,
        1,
        "mailservrsupport23wixsiteatt23",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        8,
        3,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://mailservrsupport23.wixsite.com/att23",
          "resolved_url": "https://mailservrsupport23.wixsite.com/att23",
          "final_domain": "mailservrsupport23.wixsite.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "mailservrsupport23.wixsite.com",
          "tld": "com",
          "domain_length": 30,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "mailservrsupport23wixsiteatt23",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 52.97380714,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501265,
          "raw_weighted_risk": 0.320633,
          "initial_verdict": "PHISHING",
          "confidence": 0.501265,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.470262,
            "character_continuation_risk": 0.269231,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.370069,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501265,
        "confidence": 0.501265,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 56,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001265,
        "distance_from_phishing_boundary": 0.001265,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_015608",
      "source": {
        "filename": "813775.txt",
        "row_number": 15609,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.ci.albertville.mn.us. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.ci.albertville.mn.us",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        31,
        "www.ci.albertville.mn.us",
        24,
        0,
        "us",
        100,
        0.705882353,
        0.0045585,
        0.055665773,
        2,
        3,
        0,
        0,
        0,
        16,
        0.516,
        0,
        0,
        0,
        0,
        0,
        3,
        0.097,
        1,
        1320,
        20282,
        1,
        "cialbertvillemn",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        1,
        23,
        14,
        52,
        1,
        14
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.ci.albertville.mn.us",
          "resolved_url": "https://www.ci.albertville.mn.us",
          "final_domain": "www.ci.albertville.mn.us",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.ci.albertville.mn.us",
          "tld": "us",
          "domain_length": 24,
          "is_ip_address": false,
          "subdomain_count": 3,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0045585,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "cialbertvillemn",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498352,
          "raw_weighted_risk": 0.319176,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501648,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "many_subdomains",
            "low_tld_reputation",
            "title_domain_mismatch",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.294118,
            "tld_reputation_risk": 0.991282,
            "url_character_probability_risk": 0.304178,
            "domain_structure_risk": 0.5,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498352,
        "confidence": 0.501648,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 57,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013648,
        "distance_from_phishing_boundary": 0.001648,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_167022",
      "source": {
        "filename": "8014542.txt",
        "row_number": 167023,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://statubsoletecr.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://statubsoletecr.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        38,
        "statubsoletecr.firebaseapp.com",
        30,
        0,
        "com",
        62.6953405,
        0.576923077,
        0.5229071,
        0.061406781,
        3,
        1,
        0,
        0,
        0,
        28,
        0.737,
        0,
        0,
        0,
        0,
        0,
        2,
        0.053,
        1,
        108,
        8125,
        1,
        "statubsoletecrfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://statubsoletecr.firebaseapp.com/",
          "resolved_url": "https://statubsoletecr.firebaseapp.com/",
          "final_domain": "statubsoletecr.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "statubsoletecr.firebaseapp.com",
          "tld": "com",
          "domain_length": 30,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "statubsoletecrfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 62.6953405,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499351,
          "raw_weighted_risk": 0.319675,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500649,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.373047,
            "character_continuation_risk": 0.423077,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.232415,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499351,
        "confidence": 0.500649,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 58,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000649,
        "distance_from_phishing_boundary": 0.000649,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_173180",
      "source": {
        "filename": "767192.txt",
        "row_number": 173181,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.montelagocelticfestival.it. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.montelagocelticfestival.it",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        37,
        "www.montelagocelticfestival.it",
        30,
        0,
        "it",
        100,
        1,
        0.012178,
        0.062272936,
        2,
        1,
        0,
        0,
        0,
        24,
        0.649,
        0,
        0,
        0,
        0,
        0,
        1,
        0.027,
        1,
        1916,
        8272,
        1,
        "montelagoceltcfestval",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        22,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        1,
        29,
        6,
        34,
        30,
        10,
        23
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.montelagocelticfestival.it",
          "resolved_url": "https://www.montelagocelticfestival.it",
          "final_domain": "www.montelagocelticfestival.it",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.montelagocelticfestival.it",
          "tld": "it",
          "domain_length": 30,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.012178,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "montelagoceltcfestval",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501061,
          "raw_weighted_risk": 0.320531,
          "initial_verdict": "PHISHING",
          "confidence": 0.501061,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.976711,
            "url_character_probability_risk": 0.221588,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501061,
        "confidence": 0.501061,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 59,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.013061,
        "distance_from_phishing_boundary": 0.001061,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_017230",
      "source": {
        "filename": "8037388.txt",
        "row_number": 17231,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://hq-f11f.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://hq-f11f.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        31,
        "hq-f11f.firebaseapp.com",
        23,
        0,
        "com",
        65.52777778,
        0.736842105,
        0.5229071,
        0.045344603,
        3,
        1,
        0,
        0,
        0,
        18,
        0.581,
        2,
        0.065,
        0,
        0,
        0,
        3,
        0.097,
        1,
        108,
        8125,
        1,
        "hq-f11ffirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://hq-f11f.firebaseapp.com/",
          "resolved_url": "https://hq-f11f.firebaseapp.com/",
          "final_domain": "hq-f11f.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "hq-f11f.firebaseapp.com",
          "tld": "com",
          "domain_length": 23,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "hq-f11ffirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.52777778,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501321,
          "raw_weighted_risk": 0.320661,
          "initial_verdict": "PHISHING",
          "confidence": 0.501321,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.344722,
            "character_continuation_risk": 0.263158,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.433192,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501321,
        "confidence": 0.501321,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 60,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001321,
        "distance_from_phishing_boundary": 0.001321,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_194811",
      "source": {
        "filename": "745182.txt",
        "row_number": 194812,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.fsc.org.ai. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.fsc.org.ai",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        21,
        "www.fsc.org.ai",
        14,
        0,
        "ai",
        100,
        0.571428571,
        0.0007675,
        0.05963618,
        2,
        2,
        0,
        0,
        0,
        7,
        0.333,
        0,
        0,
        0,
        0,
        0,
        2,
        0.095,
        1,
        354,
        583,
        1,
        "fscorg",
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        8,
        5,
        7,
        2,
        4,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.fsc.org.ai",
          "resolved_url": "https://www.fsc.org.ai",
          "final_domain": "www.fsc.org.ai",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.fsc.org.ai",
          "tld": "ai",
          "domain_length": 14,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0007675,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "fscorg",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.49835,
          "raw_weighted_risk": 0.319175,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.50165,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.428571,
            "tld_reputation_risk": 0.998532,
            "url_character_probability_risk": 0.254548,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.49835,
        "confidence": 0.50165,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 61,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.01365,
        "distance_from_phishing_boundary": 0.00165,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_217703",
      "source": {
        "filename": "8034059.txt",
        "row_number": 217704,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://redirectpost.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://redirectpost.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        36,
        "redirectpost.firebaseapp.com",
        28,
        0,
        "com",
        63.19493315,
        0.541666667,
        0.5229071,
        0.061928552,
        3,
        1,
        0,
        0,
        0,
        26,
        0.722,
        0,
        0,
        0,
        0,
        0,
        2,
        0.056,
        1,
        108,
        8125,
        1,
        "redirectpostfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://redirectpost.firebaseapp.com/",
          "resolved_url": "https://redirectpost.firebaseapp.com/",
          "final_domain": "redirectpost.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "redirectpost.firebaseapp.com",
          "tld": "com",
          "domain_length": 28,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "redirectpostfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 63.19493315,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499335,
          "raw_weighted_risk": 0.319667,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500665,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.368051,
            "character_continuation_risk": 0.458333,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.225893,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499335,
        "confidence": 0.500665,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 62,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000665,
        "distance_from_phishing_boundary": 0.000665,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_235304",
      "source": {
        "filename": "840359.txt",
        "row_number": 235305,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.uk-med.co.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.uk-med.co.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        23,
        "www.uk-med.co.uk",
        16,
        0,
        "uk",
        100,
        0.444444444,
        0.028555,
        0.054541129,
        2,
        2,
        0,
        0,
        0,
        8,
        0.348,
        0,
        0,
        0,
        0,
        0,
        3,
        0.13,
        1,
        602,
        3023,
        1,
        "k-medco",
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        9,
        2,
        8,
        41,
        0,
        41
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.uk-med.co.uk",
          "resolved_url": "https://www.uk-med.co.uk",
          "final_domain": "www.uk-med.co.uk",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.uk-med.co.uk",
          "tld": "uk",
          "domain_length": 16,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 1,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "k-medco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501069,
          "raw_weighted_risk": 0.320535,
          "initial_verdict": "PHISHING",
          "confidence": 0.501069,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "redirect_activity",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.555556,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.318236,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0.5
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501069,
        "confidence": 0.501069,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 63,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.013069,
        "distance_from_phishing_boundary": 0.001069,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_219354",
      "source": {
        "filename": "8072184.txt",
        "row_number": 219355,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://srbjr8hvq.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://srbjr8hvq.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        34,
        "srbjr8hvq.firebaseapp.com",
        25,
        0,
        "com",
        67.01538462,
        0.619047619,
        0.5229071,
        0.047515323,
        3,
        1,
        0,
        0,
        0,
        22,
        0.647,
        1,
        0.029,
        0,
        0,
        0,
        3,
        0.088,
        1,
        108,
        8125,
        1,
        "srbjr8hvqfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://srbjr8hvq.firebaseapp.com/",
          "resolved_url": "https://srbjr8hvq.firebaseapp.com/",
          "final_domain": "srbjr8hvq.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "srbjr8hvq.firebaseapp.com",
          "tld": "com",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "srbjr8hvqfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 67.01538462,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501321,
          "raw_weighted_risk": 0.320661,
          "initial_verdict": "PHISHING",
          "confidence": 0.501321,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.329846,
            "character_continuation_risk": 0.380952,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.406058,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501321,
        "confidence": 0.501321,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 64,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001321,
        "distance_from_phishing_boundary": 0.001321,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_183896",
      "source": {
        "filename": "18905.txt",
        "row_number": 183897,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.nbr.co.nz. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.nbr.co.nz",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        20,
        "www.nbr.co.nz",
        13,
        0,
        "nz",
        100,
        0.666666667,
        0.0019933,
        0.062543298,
        2,
        2,
        0,
        0,
        0,
        6,
        0.3,
        0,
        0,
        0,
        0,
        0,
        2,
        0.1,
        1,
        6655,
        837,
        1,
        "brco",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        5,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        136,
        7,
        11,
        354,
        0,
        97
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.nbr.co.nz",
          "resolved_url": "https://www.nbr.co.nz",
          "final_domain": "www.nbr.co.nz",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.nbr.co.nz",
          "tld": "nz",
          "domain_length": 13,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0019933,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "brco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498303,
          "raw_weighted_risk": 0.319152,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501697,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0.996188,
            "url_character_probability_risk": 0.218209,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498303,
        "confidence": 0.501697,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 65,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013697,
        "distance_from_phishing_boundary": 0.001697,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_229076",
      "source": {
        "filename": "8057424.txt",
        "row_number": 229077,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://szfbl33wdm.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://szfbl33wdm.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "szfbl33wdm.firebaseapp.com",
        26,
        0,
        "com",
        67.85009862,
        0.636363636,
        0.5229071,
        0.04556221,
        3,
        1,
        0,
        0,
        0,
        22,
        0.629,
        2,
        0.057,
        0,
        0,
        0,
        3,
        0.086,
        1,
        108,
        8125,
        1,
        "szfbl33wdmfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://szfbl33wdm.firebaseapp.com/",
          "resolved_url": "https://szfbl33wdm.firebaseapp.com/",
          "final_domain": "szfbl33wdm.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "szfbl33wdm.firebaseapp.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "szfbl33wdmfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 67.85009862,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499322,
          "raw_weighted_risk": 0.319661,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500678,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.321499,
            "character_continuation_risk": 0.363636,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.430472,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499322,
        "confidence": 0.500678,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 66,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000678,
        "distance_from_phishing_boundary": 0.000678,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_119804",
      "source": {
        "filename": "610825.txt",
        "row_number": 119805,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.knuddelwichtel.de. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.knuddelwichtel.de",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        28,
        "www.knuddelwichtel.de",
        21,
        0,
        "de",
        100,
        1,
        0.0326503,
        0.045771463,
        2,
        1,
        0,
        0,
        0,
        15,
        0.536,
        0,
        0,
        0,
        0,
        0,
        1,
        0.036,
        1,
        10404,
        2276,
        1,
        "knuelwichtel",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        129,
        1,
        8,
        196,
        2,
        195
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.knuddelwichtel.de",
          "resolved_url": "https://www.knuddelwichtel.de",
          "final_domain": "www.knuddelwichtel.de",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.knuddelwichtel.de",
          "tld": "de",
          "domain_length": 21,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0326503,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "knuelwichtel",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501133,
          "raw_weighted_risk": 0.320567,
          "initial_verdict": "PHISHING",
          "confidence": 0.501133,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.93756,
            "url_character_probability_risk": 0.427857,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501133,
        "confidence": 0.501133,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 67,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.013133,
        "distance_from_phishing_boundary": 0.001133,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_167905",
      "source": {
        "filename": "8112036.txt",
        "row_number": 167906,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://metaamsklugenn.godaddysites.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://metaamsklugenn.godaddysites.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        40,
        "metaamsklugenn.godaddysites.com",
        31,
        0,
        "com",
        64.07388137,
        0.555555556,
        0.5229071,
        0.058019402,
        3,
        1,
        0,
        0,
        0,
        29,
        0.725,
        0,
        0,
        0,
        0,
        0,
        3,
        0.075,
        1,
        30,
        115,
        1,
        "metaamsklugenngodaddysites",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        0,
        2,
        0,
        0
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://metaamsklugenn.godaddysites.com/",
          "resolved_url": "https://metaamsklugenn.godaddysites.com/",
          "final_domain": "metaamsklugenn.godaddysites.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "metaamsklugenn.godaddysites.com",
          "tld": "com",
          "domain_length": 31,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "metaamsklugenngodaddysites",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 64.07388137,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.50137,
          "raw_weighted_risk": 0.320685,
          "initial_verdict": "PHISHING",
          "confidence": 0.50137,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.359261,
            "character_continuation_risk": 0.444444,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.274757,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.50137,
        "confidence": 0.50137,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 68,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.00137,
        "distance_from_phishing_boundary": 0.00137,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_157260",
      "source": {
        "filename": "45342.txt",
        "row_number": 157261,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.onb.ac.at. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.onb.ac.at",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        20,
        "www.onb.ac.at",
        13,
        0,
        "at",
        100,
        0.666666667,
        0.0038776,
        0.06977053,
        2,
        2,
        0,
        0,
        0,
        6,
        0.3,
        0,
        0,
        0,
        0,
        0,
        2,
        0.1,
        1,
        4149,
        4346,
        1,
        "onbc",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        4,
        10,
        27,
        430,
        0,
        51
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.onb.ac.at",
          "resolved_url": "https://www.onb.ac.at",
          "final_domain": "www.onb.ac.at",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.onb.ac.at",
          "tld": "at",
          "domain_length": 13,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0038776,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "onbc",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "SAME_ORIGIN_OR_UNRESOLVED_FORM"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.498272,
          "raw_weighted_risk": 0.319136,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.501728,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "redirect_activity",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0.992585,
            "url_character_probability_risk": 0.127868,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.498272,
        "confidence": 0.501728,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 69,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.013728,
        "distance_from_phishing_boundary": 0.001728,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_062988",
      "source": {
        "filename": "8007714.txt",
        "row_number": 62989,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://ikpuamaka21.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://ikpuamaka21.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "ikpuamaka21.firebaseapp.com",
        27,
        0,
        "com",
        65.68685087,
        0.608695652,
        0.5229071,
        0.052410039,
        3,
        1,
        0,
        0,
        0,
        23,
        0.657,
        2,
        0.057,
        0,
        0,
        0,
        2,
        0.057,
        1,
        108,
        8125,
        1,
        "ikpuamaka21firebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://ikpuamaka21.firebaseapp.com/",
          "resolved_url": "https://ikpuamaka21.firebaseapp.com/",
          "final_domain": "ikpuamaka21.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "ikpuamaka21.firebaseapp.com",
          "tld": "com",
          "domain_length": 27,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "ikpuamaka21firebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.68685087,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499209,
          "raw_weighted_risk": 0.319605,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500791,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.343131,
            "character_continuation_risk": 0.391304,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.344875,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499209,
        "confidence": 0.500791,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 70,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000791,
        "distance_from_phishing_boundary": 0.000791,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_080582",
      "source": {
        "filename": "147002.txt",
        "row_number": 80583,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.navlib.it. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.navlib.it",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        20,
        "www.navlib.it",
        13,
        0,
        "it",
        100,
        1,
        0.012178,
        0.048892123,
        2,
        1,
        0,
        0,
        0,
        7,
        0.35,
        0,
        0,
        0,
        0,
        0,
        1,
        0.05,
        1,
        2817,
        9381,
        1,
        "navlb",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        5,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        92,
        29,
        42,
        137,
        21,
        232
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.navlib.it",
          "resolved_url": "https://www.navlib.it",
          "final_domain": "www.navlib.it",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.navlib.it",
          "tld": "it",
          "domain_length": 13,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.012178,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "navlb",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501156,
          "raw_weighted_risk": 0.320578,
          "initial_verdict": "PHISHING",
          "confidence": 0.501156,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.976711,
            "url_character_probability_risk": 0.388848,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501156,
        "confidence": 0.501156,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 71,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.013156,
        "distance_from_phishing_boundary": 0.001156,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_015838",
      "source": {
        "filename": "8087197.txt",
        "row_number": 15839,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://kuciinlggun.godaddysites.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://kuciinlggun.godaddysites.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        37,
        "kuciinlggun.godaddysites.com",
        28,
        0,
        "com",
        66.54644616,
        0.541666667,
        0.5229071,
        0.052531343,
        3,
        1,
        0,
        0,
        0,
        26,
        0.703,
        0,
        0,
        0,
        0,
        0,
        3,
        0.081,
        1,
        30,
        115,
        1,
        "kuciinlggungodaddysites",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        0,
        2,
        0,
        0
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://kuciinlggun.godaddysites.com/",
          "resolved_url": "https://kuciinlggun.godaddysites.com/",
          "final_domain": "kuciinlggun.godaddysites.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "kuciinlggun.godaddysites.com",
          "tld": "com",
          "domain_length": 28,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "kuciinlggungodaddysites",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.54644616,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501372,
          "raw_weighted_risk": 0.320686,
          "initial_verdict": "PHISHING",
          "confidence": 0.501372,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.334536,
            "character_continuation_risk": 0.458333,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.343358,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501372,
        "confidence": 0.501372,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 72,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001372,
        "distance_from_phishing_boundary": 0.001372,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_154254",
      "source": {
        "filename": "715339.txt",
        "row_number": 154255,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.nuee.nagoya-u.ac.jp. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.nuee.nagoya-u.ac.jp",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        30,
        "www.nuee.nagoya-u.ac.jp",
        23,
        0,
        "jp",
        100,
        0.4375,
        0.0230451,
        0.058944972,
        2,
        3,
        0,
        0,
        0,
        14,
        0.467,
        0,
        0,
        0,
        0,
        0,
        4,
        0.133,
        1,
        1007,
        564,
        1,
        "nueenagoya-uac",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        38,
        2,
        3,
        16,
        0,
        48
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.nuee.nagoya-u.ac.jp",
          "resolved_url": "https://www.nuee.nagoya-u.ac.jp",
          "final_domain": "www.nuee.nagoya-u.ac.jp",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.nuee.nagoya-u.ac.jp",
          "tld": "jp",
          "domain_length": 23,
          "is_ip_address": false,
          "subdomain_count": 3,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0230451,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "nueenagoya-uac",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.497975,
          "raw_weighted_risk": 0.318988,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.502025,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "many_subdomains",
            "low_tld_reputation",
            "title_domain_mismatch",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.5625,
            "tld_reputation_risk": 0.955929,
            "url_character_probability_risk": 0.263188,
            "domain_structure_risk": 0.5,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.497975,
        "confidence": 0.502025,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 73,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014025,
        "distance_from_phishing_boundary": 0.002025,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_138214",
      "source": {
        "filename": "8040908.txt",
        "row_number": 138215,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://hd7-mk8.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://hd7-mk8.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        31,
        "hd7-mk8.firebaseapp.com",
        23,
        0,
        "com",
        65.52777778,
        0.684210526,
        0.5229071,
        0.049032866,
        3,
        1,
        0,
        0,
        0,
        18,
        0.581,
        2,
        0.065,
        0,
        0,
        0,
        3,
        0.097,
        1,
        108,
        8125,
        1,
        "hd7-mk8firebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://hd7-mk8.firebaseapp.com/",
          "resolved_url": "https://hd7-mk8.firebaseapp.com/",
          "final_domain": "hd7-mk8.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "hd7-mk8.firebaseapp.com",
          "tld": "com",
          "domain_length": 23,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "hd7-mk8firebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.52777778,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499208,
          "raw_weighted_risk": 0.319604,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500792,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.344722,
            "character_continuation_risk": 0.315789,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.387089,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499208,
        "confidence": 0.500792,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 74,
        "bucket": "PHISHING_INCORRECT",
        "challenge_score": 0.000792,
        "distance_from_phishing_boundary": 0.000792,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_229571",
      "source": {
        "filename": "698962.txt",
        "row_number": 229572,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.bollettinosifo.it. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.bollettinosifo.it",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        28,
        "www.bollettinosifo.it",
        21,
        0,
        "it",
        100,
        1,
        0.012178,
        0.062208956,
        2,
        1,
        0,
        0,
        0,
        15,
        0.536,
        0,
        0,
        0,
        0,
        0,
        1,
        0.036,
        1,
        875,
        661,
        1,
        "bollettnosfo",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        25,
        1,
        14,
        80,
        1,
        44
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.bollettinosifo.it",
          "resolved_url": "https://www.bollettinosifo.it",
          "final_domain": "www.bollettinosifo.it",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.bollettinosifo.it",
          "tld": "it",
          "domain_length": 21,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.012178,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "bollettnosfo",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501189,
          "raw_weighted_risk": 0.320595,
          "initial_verdict": "PHISHING",
          "confidence": 0.501189,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.976711,
            "url_character_probability_risk": 0.222388,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501189,
        "confidence": 0.501189,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": false,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 75,
        "bucket": "LEGITIMATE_INCORRECT",
        "challenge_score": 0.013189,
        "distance_from_phishing_boundary": 0.001189,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_051235",
      "source": {
        "filename": "8006112.txt",
        "row_number": 51236,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://fonction-pst1.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://fonction-pst1.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        37,
        "fonction-pst1.firebaseapp.com",
        29,
        0,
        "com",
        64.74038843,
        0.52,
        0.5229071,
        0.058124868,
        3,
        1,
        0,
        0,
        0,
        25,
        0.676,
        1,
        0.027,
        0,
        0,
        0,
        3,
        0.081,
        1,
        108,
        8125,
        1,
        "fonction-pst1firebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://fonction-pst1.firebaseapp.com/",
          "resolved_url": "https://fonction-pst1.firebaseapp.com/",
          "final_domain": "fonction-pst1.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "fonction-pst1.firebaseapp.com",
          "tld": "com",
          "domain_length": 29,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "fonction-pst1firebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 64.74038843,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501382,
          "raw_weighted_risk": 0.320691,
          "initial_verdict": "PHISHING",
          "confidence": 0.501382,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.352596,
            "character_continuation_risk": 0.48,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.273439,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501382,
        "confidence": 0.501382,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 76,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001382,
        "distance_from_phishing_boundary": 0.001382,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_042004",
      "source": {
        "filename": "840045.txt",
        "row_number": 42005,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.assemblies.org.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.assemblies.org.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        28,
        "www.assemblies.org.uk",
        21,
        0,
        "uk",
        100,
        0.785714286,
        0.028555,
        0.060195113,
        2,
        2,
        0,
        0,
        0,
        14,
        0.5,
        0,
        0,
        0,
        0,
        0,
        2,
        0.071,
        1,
        760,
        4191,
        1,
        "assembliesorg",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        45,
        7,
        9,
        64,
        6,
        48
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.assemblies.org.uk",
          "resolved_url": "https://www.assemblies.org.uk",
          "final_domain": "www.assemblies.org.uk",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.assemblies.org.uk",
          "tld": "uk",
          "domain_length": 21,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "assembliesorg",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.497968,
          "raw_weighted_risk": 0.318984,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.502032,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.214286,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.247561,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.497968,
        "confidence": 0.502032,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 77,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014032,
        "distance_from_phishing_boundary": 0.002032,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_102604",
      "source": {
        "filename": "8040875.txt",
        "row_number": 102605,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://sdt6-jkd6g.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://sdt6-jkd6g.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        34,
        "sdt6-jkd6g.firebaseapp.com",
        26,
        0,
        "com",
        67.93776025,
        0.590909091,
        0.5229071,
        0.046514374,
        3,
        1,
        0,
        0,
        0,
        21,
        0.618,
        2,
        0.059,
        0,
        0,
        0,
        3,
        0.088,
        1,
        108,
        8125,
        1,
        "sdt6-jkd6gfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://sdt6-jkd6g.firebaseapp.com/",
          "resolved_url": "https://sdt6-jkd6g.firebaseapp.com/",
          "final_domain": "sdt6-jkd6g.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "sdt6-jkd6g.firebaseapp.com",
          "tld": "com",
          "domain_length": 26,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "sdt6-jkd6gfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 67.93776025,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501525,
          "raw_weighted_risk": 0.320762,
          "initial_verdict": "PHISHING",
          "confidence": 0.501525,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.320622,
            "character_continuation_risk": 0.409091,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.41857,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501525,
        "confidence": 0.501525,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 78,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001525,
        "distance_from_phishing_boundary": 0.001525,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_180121",
      "source": {
        "filename": "244401.txt",
        "row_number": 180122,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.cloveworld.org. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.cloveworld.org",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        25,
        "www.cloveworld.org",
        18,
        0,
        "org",
        100,
        1,
        0.0799628,
        0.060952675,
        3,
        1,
        0,
        0,
        0,
        12,
        0.48,
        0,
        0,
        0,
        0,
        0,
        1,
        0.04,
        1,
        5036,
        499,
        1,
        "clovewld",
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        3,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        1,
        0,
        1,
        185,
        17,
        38,
        7,
        52,
        26
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.cloveworld.org",
          "resolved_url": "https://www.cloveworld.org",
          "final_domain": "www.cloveworld.org",
          "archived_redirect_count": 1,
          "status": "REDIRECT_ACTIVITY_RECORDED_WITHOUT_CHAIN"
        },
        "domain_information": {
          "domain": "www.cloveworld.org",
          "tld": "org",
          "domain_length": 18,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0799628,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 1,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "clovewld",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.497961,
          "raw_weighted_risk": 0.31898,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.502039,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields",
            "redirect_activity"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.84708,
            "url_character_probability_risk": 0.238092,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0.25
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.497961,
        "confidence": 0.502039,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 79,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014039,
        "distance_from_phishing_boundary": 0.002039,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_137403",
      "source": {
        "filename": "7967258.txt",
        "row_number": 137404,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://javapro-577bc.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://javapro-577bc.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        37,
        "javapro-577bc.firebaseapp.com",
        29,
        0,
        "com",
        66.1218638,
        0.6,
        0.5229071,
        0.050553186,
        3,
        1,
        0,
        0,
        0,
        23,
        0.622,
        3,
        0.081,
        0,
        0,
        0,
        3,
        0.081,
        1,
        108,
        8125,
        1,
        "javapro-577bcfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://javapro-577bc.firebaseapp.com/",
          "resolved_url": "https://javapro-577bc.firebaseapp.com/",
          "final_domain": "javapro-577bc.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "javapro-577bc.firebaseapp.com",
          "tld": "com",
          "domain_length": 29,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "javapro-577bcfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.1218638,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501618,
          "raw_weighted_risk": 0.320809,
          "initial_verdict": "PHISHING",
          "confidence": 0.501618,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.338781,
            "character_continuation_risk": 0.4,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.368085,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501618,
        "confidence": 0.501618,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 80,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001618,
        "distance_from_phishing_boundary": 0.001618,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_160865",
      "source": {
        "filename": "494388.txt",
        "row_number": 160866,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.bufora.org.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.bufora.org.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        24,
        "www.bufora.org.uk",
        17,
        0,
        "uk",
        100,
        0.7,
        0.028555,
        0.054002996,
        2,
        2,
        0,
        0,
        0,
        10,
        0.417,
        0,
        0,
        0,
        0,
        0,
        2,
        0.083,
        1,
        1592,
        2249,
        1,
        "bforaorg",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        8,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        7,
        11,
        8,
        0,
        0,
        98
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.bufora.org.uk",
          "resolved_url": "https://www.bufora.org.uk",
          "final_domain": "www.bufora.org.uk",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.bufora.org.uk",
          "tld": "uk",
          "domain_length": 17,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "bforaorg",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499923,
          "raw_weighted_risk": 0.319962,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500077,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.3,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.324963,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499923,
        "confidence": 0.500077,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 81,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014077,
        "distance_from_phishing_boundary": 0.000077,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_151913",
      "source": {
        "filename": "8007690.txt",
        "row_number": 151914,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://project1e-34470.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://project1e-34470.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        39,
        "project1e-34470.firebaseapp.com",
        31,
        0,
        "com",
        66.32096365,
        0.62962963,
        0.5229071,
        0.048474997,
        3,
        1,
        0,
        0,
        0,
        22,
        0.564,
        6,
        0.154,
        0,
        0,
        0,
        3,
        0.077,
        1,
        108,
        8125,
        1,
        "project1e-34470firebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://project1e-34470.firebaseapp.com/",
          "resolved_url": "https://project1e-34470.firebaseapp.com/",
          "final_domain": "project1e-34470.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "project1e-34470.firebaseapp.com",
          "tld": "com",
          "domain_length": 31,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "project1e-34470firebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.32096365,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501816,
          "raw_weighted_risk": 0.320908,
          "initial_verdict": "PHISHING",
          "confidence": 0.501816,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.33679,
            "character_continuation_risk": 0.37037,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.394063,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501816,
        "confidence": 0.501816,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 82,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001816,
        "distance_from_phishing_boundary": 0.001816,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_118753",
      "source": {
        "filename": "455529.txt",
        "row_number": 118754,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.usarcent.army.mil. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.usarcent.army.mil",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        28,
        "www.usarcent.army.mil",
        21,
        0,
        "mil",
        100,
        0.692307692,
        0.0002984,
        0.060714934,
        3,
        2,
        0,
        0,
        0,
        14,
        0.5,
        0,
        0,
        0,
        0,
        0,
        2,
        0.071,
        1,
        3228,
        7922,
        1,
        "usarcentarmy",
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        5,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        153,
        14,
        12,
        148,
        5,
        181
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.usarcent.army.mil",
          "resolved_url": "https://www.usarcent.army.mil",
          "final_domain": "www.usarcent.army.mil",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.usarcent.army.mil",
          "tld": "mil",
          "domain_length": 21,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0002984,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "usarcentarmy",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499915,
          "raw_weighted_risk": 0.319957,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500085,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.307692,
            "tld_reputation_risk": 0.999429,
            "url_character_probability_risk": 0.241063,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499915,
        "confidence": 0.500085,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 83,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014085,
        "distance_from_phishing_boundary": 0.000085,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_064517",
      "source": {
        "filename": "7971311.txt",
        "row_number": 64518,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://mnjde-b2973.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://mnjde-b2973.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        35,
        "mnjde-b2973.firebaseapp.com",
        27,
        0,
        "com",
        65.7260435,
        0.695652174,
        0.5229071,
        0.04665211,
        3,
        1,
        0,
        0,
        0,
        20,
        0.571,
        4,
        0.114,
        0,
        0,
        0,
        3,
        0.086,
        1,
        108,
        8125,
        1,
        "mnjde-b2973firebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://mnjde-b2973.firebaseapp.com/",
          "resolved_url": "https://mnjde-b2973.firebaseapp.com/",
          "final_domain": "mnjde-b2973.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "mnjde-b2973.firebaseapp.com",
          "tld": "com",
          "domain_length": 27,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "mnjde-b2973firebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.7260435,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501834,
          "raw_weighted_risk": 0.320917,
          "initial_verdict": "PHISHING",
          "confidence": 0.501834,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.34274,
            "character_continuation_risk": 0.304348,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.416849,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501834,
        "confidence": 0.501834,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 84,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001834,
        "distance_from_phishing_boundary": 0.001834,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_040893",
      "source": {
        "filename": "640200.txt",
        "row_number": 40894,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.autofrance.com.ar. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.autofrance.com.ar",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        28,
        "www.autofrance.com.ar",
        21,
        0,
        "ar",
        100,
        0.785714286,
        0.0020445,
        0.069113737,
        2,
        2,
        0,
        0,
        0,
        14,
        0.5,
        0,
        0,
        0,
        0,
        0,
        2,
        0.071,
        1,
        931,
        584,
        1,
        "utofrncecom",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        16,
        12,
        6,
        1,
        0,
        9
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.autofrance.com.ar",
          "resolved_url": "https://www.autofrance.com.ar",
          "final_domain": "www.autofrance.com.ar",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.autofrance.com.ar",
          "tld": "ar",
          "domain_length": 21,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0020445,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "utofrncecom",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499909,
          "raw_weighted_risk": 0.319954,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500091,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.214286,
            "tld_reputation_risk": 0.99609,
            "url_character_probability_risk": 0.136078,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499909,
        "confidence": 0.500091,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 85,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014091,
        "distance_from_phishing_boundary": 0.000091,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_134750",
      "source": {
        "filename": "8041610.txt",
        "row_number": 134751,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://srf-55jkv.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://srf-55jkv.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        33,
        "srf-55jkv.firebaseapp.com",
        25,
        0,
        "com",
        66.52307692,
        0.666666667,
        0.5229071,
        0.046095607,
        3,
        1,
        0,
        0,
        0,
        20,
        0.606,
        2,
        0.061,
        0,
        0,
        0,
        3,
        0.091,
        1,
        108,
        8125,
        1,
        "srf-55jkvfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://srf-55jkv.firebaseapp.com/",
          "resolved_url": "https://srf-55jkv.firebaseapp.com/",
          "final_domain": "srf-55jkv.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "srf-55jkv.firebaseapp.com",
          "tld": "com",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "srf-55jkvfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 66.52307692,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.50186,
          "raw_weighted_risk": 0.32093,
          "initial_verdict": "PHISHING",
          "confidence": 0.50186,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.334769,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.423805,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.50186,
        "confidence": 0.50186,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 86,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.00186,
        "distance_from_phishing_boundary": 0.00186,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_030049",
      "source": {
        "filename": "127025.txt",
        "row_number": 30050,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.japan-acad.go.jp. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.japan-acad.go.jp",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        27,
        "www.japan-acad.go.jp",
        20,
        0,
        "jp",
        100,
        0.461538462,
        0.0230451,
        0.054465077,
        2,
        2,
        0,
        0,
        0,
        12,
        0.444,
        0,
        0,
        0,
        0,
        0,
        3,
        0.111,
        1,
        297,
        162,
        1,
        "apan-acadgo",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        19,
        1,
        7,
        1,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.japan-acad.go.jp",
          "resolved_url": "https://www.japan-acad.go.jp",
          "final_domain": "www.japan-acad.go.jp",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.japan-acad.go.jp",
          "tld": "jp",
          "domain_length": 20,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0230451,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "apan-acadgo",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.497865,
          "raw_weighted_risk": 0.318932,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.502135,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.538462,
            "tld_reputation_risk": 0.955929,
            "url_character_probability_risk": 0.319187,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.497865,
        "confidence": 0.502135,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 87,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014135,
        "distance_from_phishing_boundary": 0.002135,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_107191",
      "source": {
        "filename": "oph14718.txt",
        "row_number": 107192,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://amerthanouben.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://amerthanouben.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        38,
        "amerthanouben.firebaseapp.com",
        29,
        0,
        "com",
        62.42293907,
        0.56,
        0.5229071,
        0.061650527,
        3,
        1,
        0,
        0,
        0,
        27,
        0.711,
        0,
        0,
        0,
        0,
        0,
        3,
        0.079,
        1,
        108,
        8125,
        1,
        "amerthanoubenfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://amerthanouben.firebaseapp.com/",
          "resolved_url": "https://amerthanouben.firebaseapp.com/",
          "final_domain": "amerthanouben.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "amerthanouben.firebaseapp.com",
          "tld": "com",
          "domain_length": 29,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "amerthanoubenfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 62.42293907,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.501918,
          "raw_weighted_risk": 0.320959,
          "initial_verdict": "PHISHING",
          "confidence": 0.501918,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.375771,
            "character_continuation_risk": 0.44,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.229368,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.501918,
        "confidence": 0.501918,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 88,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.001918,
        "distance_from_phishing_boundary": 0.001918,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_079273",
      "source": {
        "filename": "72933.txt",
        "row_number": 79274,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.forum.axishistory.com. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.forum.axishistory.com",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        32,
        "www.forum.axishistory.com",
        25,
        0,
        "com",
        100,
        0.705882353,
        0.5229071,
        0.057108924,
        3,
        2,
        0,
        0,
        0,
        18,
        0.562,
        0,
        0,
        0,
        0,
        0,
        2,
        0.062,
        1,
        2149,
        416,
        1,
        "forumaxishistory",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        1,
        0,
        8,
        6,
        4,
        3,
        7
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.forum.axishistory.com",
          "resolved_url": "https://www.forum.axishistory.com",
          "final_domain": "www.forum.axishistory.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.forum.axishistory.com",
          "tld": "com",
          "domain_length": 25,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "forumaxishistory",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.497861,
          "raw_weighted_risk": 0.31893,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.502139,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "title_domain_mismatch",
            "credential_form",
            "hidden_form_fields"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.294118,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.286138,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.497861,
        "confidence": 0.502139,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 89,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014139,
        "distance_from_phishing_boundary": 0.002139,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_179639",
      "source": {
        "filename": "8062576.txt",
        "row_number": 179640,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://marvellousayomide5.wixsite.com/my-site. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://marvellousayomide5.wixsite.com/my-site",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        46,
        "marvellousayomide5.wixsite.com",
        30,
        0,
        "com",
        50.13850416,
        0.730769231,
        0.5229071,
        0.057099469,
        3,
        1,
        0,
        0,
        0,
        33,
        0.717,
        1,
        0.022,
        0,
        0,
        0,
        4,
        0.087,
        1,
        64,
        151,
        1,
        "marvellousayomide5wixsitemy-site",
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        8,
        3,
        0,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://marvellousayomide5.wixsite.com/my-site",
          "resolved_url": "https://marvellousayomide5.wixsite.com/my-site",
          "final_domain": "marvellousayomide5.wixsite.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "marvellousayomide5.wixsite.com",
          "tld": "com",
          "domain_length": 30,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "marvellousayomide5wixsitemy-site",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 50.13850416,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.502032,
          "raw_weighted_risk": 0.321016,
          "initial_verdict": "PHISHING",
          "confidence": 0.502032,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.498615,
            "character_continuation_risk": 0.269231,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.286257,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.502032,
        "confidence": 0.502032,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 90,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.002032,
        "distance_from_phishing_boundary": 0.002032,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_112819",
      "source": {
        "filename": "429255.txt",
        "row_number": 112820,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.kuko.co.uk. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.kuko.co.uk",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        21,
        "www.kuko.co.uk",
        14,
        0,
        "uk",
        100,
        0.714285714,
        0.028555,
        0.053325763,
        2,
        2,
        0,
        0,
        0,
        7,
        0.333,
        0,
        0,
        0,
        0,
        0,
        2,
        0.095,
        1,
        592,
        582,
        1,
        "kkoco",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        13,
        1,
        2,
        18,
        5,
        8
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.kuko.co.uk",
          "resolved_url": "https://www.kuko.co.uk",
          "final_domain": "www.kuko.co.uk",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.kuko.co.uk",
          "tld": "uk",
          "domain_length": 14,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.028555,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "kkoco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499849,
          "raw_weighted_risk": 0.319925,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500151,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.285714,
            "tld_reputation_risk": 0.945392,
            "url_character_probability_risk": 0.333428,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499849,
        "confidence": 0.500151,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 91,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014151,
        "distance_from_phishing_boundary": 0.000151,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_100733",
      "source": {
        "filename": "8008513.txt",
        "row_number": 100734,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://moneylog-2388b.firebaseapp.com/. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://moneylog-2388b.firebaseapp.com/",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        38,
        "moneylog-2388b.firebaseapp.com",
        30,
        0,
        "com",
        65.60573477,
        0.615384615,
        0.5229071,
        0.050866747,
        3,
        1,
        0,
        0,
        0,
        23,
        0.605,
        4,
        0.105,
        0,
        0,
        0,
        3,
        0.079,
        1,
        108,
        8125,
        1,
        "moneylog-2388bfirebaseapp",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://moneylog-2388b.firebaseapp.com/",
          "resolved_url": "https://moneylog-2388b.firebaseapp.com/",
          "final_domain": "moneylog-2388b.firebaseapp.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "moneylog-2388b.firebaseapp.com",
          "tld": "com",
          "domain_length": 30,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "moneylog-2388bfirebaseapp",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 65.60573477,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.502033,
          "raw_weighted_risk": 0.321016,
          "initial_verdict": "PHISHING",
          "confidence": 0.502033,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.343943,
            "character_continuation_risk": 0.384615,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.364166,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.502033,
        "confidence": 0.502033,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 92,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.002033,
        "distance_from_phishing_boundary": 0.002033,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_022280",
      "source": {
        "filename": "245358.txt",
        "row_number": 22281,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.topconsulenten.nl. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.topconsulenten.nl",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        28,
        "www.topconsulenten.nl",
        21,
        0,
        "nl",
        100,
        1,
        0.0082003,
        0.063493576,
        2,
        1,
        0,
        0,
        0,
        15,
        0.536,
        0,
        0,
        0,
        0,
        0,
        1,
        0.036,
        1,
        5382,
        324,
        1,
        "topcosulete",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        1,
        1,
        0,
        1,
        43,
        2,
        2,
        112,
        27,
        6
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.topconsulenten.nl",
          "resolved_url": "https://www.topconsulenten.nl",
          "final_domain": "www.topconsulenten.nl",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.topconsulenten.nl",
          "tld": "nl",
          "domain_length": 21,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0082003,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "topcosulete",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": true,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "PASSWORD_FORM_PRESENT"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499837,
          "raw_weighted_risk": 0.319919,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500163,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "credential_form"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.984318,
            "url_character_probability_risk": 0.20633,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.65,
            "site_identity_risk": 0.333333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499837,
        "confidence": 0.500163,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 93,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014163,
        "distance_from_phishing_boundary": 0.000163,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_054683",
      "source": {
        "filename": "mw181895.txt",
        "row_number": 54684,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL http://www.kulsofttech.net. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "http://www.kulsofttech.net",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        25,
        "www.kulsofttech.net",
        19,
        0,
        "net",
        61.22222222,
        1,
        0.0384199,
        0.054377387,
        3,
        1,
        0,
        0,
        0,
        13,
        0.52,
        0,
        0,
        0,
        0,
        0,
        1,
        0.04,
        0,
        56,
        223,
        1,
        "kulsofttech",
        100,
        100,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        7
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "http://www.kulsofttech.net",
          "resolved_url": "http://www.kulsofttech.net",
          "final_domain": "www.kulsofttech.net",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.kulsofttech.net",
          "tld": "net",
          "domain_length": 19,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": false,
          "tld_legitimacy_prior": 0.0384199,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "kulsofttech",
          "domain_title_match_score": 100,
          "url_title_match_score": 100,
          "assessment": "STRONG_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 61.22222222,
          "title_reference_score": 100,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.500045,
          "raw_weighted_risk": 0.320022,
          "initial_verdict": "PHISHING",
          "confidence": 0.500045,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "low_tld_reputation",
            "no_https"
          ],
          "protective_signal_codes": [
            "title_domain_match",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.387778,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.926526,
            "url_character_probability_risk": 0.320283,
            "domain_structure_risk": 0,
            "transport_risk": 1,
            "title_match_risk": 0,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.500045,
        "confidence": 0.500045,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 94,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.002045,
        "distance_from_phishing_boundary": 0.000045,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_041454",
      "source": {
        "filename": "771463.txt",
        "row_number": 41455,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.jklaw.nic.in. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.jklaw.nic.in",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        23,
        "www.jklaw.nic.in",
        16,
        0,
        "in",
        100,
        0.666666667,
        0.0050842,
        0.045987261,
        2,
        2,
        0,
        0,
        0,
        9,
        0.391,
        0,
        0,
        0,
        0,
        0,
        2,
        0.087,
        1,
        323,
        396,
        1,
        "jklawnc",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        16,
        14,
        5,
        0,
        12,
        1
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.jklaw.nic.in",
          "resolved_url": "https://www.jklaw.nic.in",
          "final_domain": "www.jklaw.nic.in",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.jklaw.nic.in",
          "tld": "in",
          "domain_length": 16,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0050842,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "jklawnc",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499803,
          "raw_weighted_risk": 0.319902,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500197,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0.990277,
            "url_character_probability_risk": 0.425159,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.5,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499803,
        "confidence": 0.500197,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 95,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014197,
        "distance_from_phishing_boundary": 0.000197,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_004352",
      "source": {
        "filename": "mw155011.txt",
        "row_number": 4353,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL http://www.doable.nl. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "http://www.doable.nl",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        20,
        "www.doable.nl",
        13,
        0,
        "nl",
        72,
        1,
        0.0082003,
        0.058715261,
        2,
        1,
        0,
        0,
        0,
        8,
        0.4,
        0,
        0,
        0,
        0,
        0,
        1,
        0.05,
        0,
        37,
        2317,
        1,
        "doable",
        100,
        100,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "http://www.doable.nl",
          "resolved_url": "http://www.doable.nl",
          "final_domain": "www.doable.nl",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.doable.nl",
          "tld": "nl",
          "domain_length": 13,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": false,
          "tld_legitimacy_prior": 0.0082003,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "doable",
          "domain_title_match_score": 100,
          "url_title_match_score": 100,
          "assessment": "STRONG_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 72,
          "title_reference_score": 100,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.50006,
          "raw_weighted_risk": 0.32003,
          "initial_verdict": "PHISHING",
          "confidence": 0.50006,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "low_tld_reputation",
            "no_https"
          ],
          "protective_signal_codes": [
            "title_domain_match",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.28,
            "character_continuation_risk": 0,
            "tld_reputation_risk": 0.984318,
            "url_character_probability_risk": 0.266059,
            "domain_structure_risk": 0,
            "transport_risk": 1,
            "title_match_risk": 0,
            "form_risk": 0,
            "site_identity_risk": 1,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.50006,
        "confidence": 0.50006,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 96,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.00206,
        "distance_from_phishing_boundary": 0.00006,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_233603",
      "source": {
        "filename": "739901.txt",
        "row_number": 233604,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.siddha.com.my. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.siddha.com.my",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        24,
        "www.siddha.com.my",
        17,
        0,
        "my",
        100,
        0.7,
        0.0007497,
        0.058319341,
        2,
        2,
        0,
        0,
        0,
        10,
        0.417,
        0,
        0,
        0,
        0,
        0,
        2,
        0.083,
        1,
        438,
        735,
        1,
        "siddhaco",
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        66,
        0,
        67
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.siddha.com.my",
          "resolved_url": "https://www.siddha.com.my",
          "final_domain": "www.siddha.com.my",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.siddha.com.my",
          "tld": "my",
          "domain_length": 17,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0007497,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "siddhaco",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499799,
          "raw_weighted_risk": 0.319899,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500201,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.3,
            "tld_reputation_risk": 0.998566,
            "url_character_probability_risk": 0.271008,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.666667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499799,
        "confidence": 0.500201,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 97,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014201,
        "distance_from_phishing_boundary": 0.000201,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_001891",
      "source": {
        "filename": "8082785.txt",
        "row_number": 1892,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://optus19.godaddysites.com. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://optus19.godaddysites.com",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        32,
        "optus19.godaddysites.com",
        24,
        0,
        "com",
        62.43386243,
        0.75,
        0.5229071,
        0.052048277,
        3,
        1,
        0,
        0,
        0,
        20,
        0.625,
        2,
        0.062,
        0,
        0,
        0,
        2,
        0.062,
        1,
        30,
        115,
        1,
        "optus19godaddysites",
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        0,
        2,
        0,
        0
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://optus19.godaddysites.com",
          "resolved_url": "https://optus19.godaddysites.com",
          "final_domain": "optus19.godaddysites.com",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "optus19.godaddysites.com",
          "tld": "com",
          "domain_length": 24,
          "is_ip_address": false,
          "subdomain_count": 1,
          "uses_https": true,
          "tld_legitimacy_prior": 0.5229071,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "optus19godaddysites",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": false,
          "has_password_field": false,
          "has_hidden_fields": false,
          "submits_to_external_origin": false,
          "assessment": "NO_LOGIN_FORM_SIGNAL"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 62.43386243,
          "title_reference_score": 0,
          "assessment": "LOW",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.502067,
          "raw_weighted_risk": 0.321034,
          "initial_verdict": "PHISHING",
          "confidence": 0.502067,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_url_similarity",
            "title_domain_mismatch"
          ],
          "protective_signal_codes": [
            "https_enabled",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0.375661,
            "character_continuation_risk": 0.25,
            "tld_reputation_risk": 0,
            "url_character_probability_risk": 0.349397,
            "domain_structure_risk": 0,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0,
            "site_identity_risk": 0.833333,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.502067,
        "confidence": 0.502067,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 0,
        "verdict": "PHISHING"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 98,
        "bucket": "PHISHING_CORRECT",
        "challenge_score": 0.002067,
        "distance_from_phishing_boundary": 0.002067,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    },
    {
      "id": "phishing_url_task_158982",
      "source": {
        "filename": "534972.txt",
        "row_number": 158983,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.med.or.jp. Decide whether it is phishing or legitimate, consider one optional human recommendation, and execute the corresponding security response.",
      "url": "https://www.med.or.jp",
      "workflow_id": "phishing_url_investigation_v1",
      "feature_values": [
        20,
        "www.med.or.jp",
        13,
        0,
        "jp",
        100,
        0.666666667,
        0.0230451,
        0.0585965,
        2,
        2,
        0,
        0,
        0,
        6,
        0.3,
        0,
        0,
        0,
        0,
        0,
        2,
        0.1,
        1,
        2550,
        371,
        1,
        "medor",
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        3,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        81,
        4,
        11,
        134,
        1,
        23
      ],
      "tool_results": {
        "url_expansion": {
          "original_url": "https://www.med.or.jp",
          "resolved_url": "https://www.med.or.jp",
          "final_domain": "www.med.or.jp",
          "archived_redirect_count": 0,
          "status": "NO_REDIRECT_RECORDED"
        },
        "domain_information": {
          "domain": "www.med.or.jp",
          "tld": "jp",
          "domain_length": 13,
          "is_ip_address": false,
          "subdomain_count": 2,
          "uses_https": true,
          "tld_legitimacy_prior": 0.0230451,
          "lookup_mode": "ARCHIVED_FEATURE_SNAPSHOT"
        },
        "redirect_analysis": {
          "redirect_count": 0,
          "self_redirect_count": 0,
          "chain_available": false,
          "assessment": "NO_REDIRECTS_OBSERVED"
        },
        "title_domain_analysis": {
          "has_title": true,
          "title": "medor",
          "domain_title_match_score": 0,
          "url_title_match_score": 0,
          "assessment": "WEAK_OR_NO_MATCH"
        },
        "login_form_analysis": {
          "has_submit_button": true,
          "has_password_field": false,
          "has_hidden_fields": true,
          "submits_to_external_origin": false,
          "assessment": "SAME_ORIGIN_OR_UNRESOLVED_FORM"
        },
        "official_site_comparison": {
          "comparison_mode": "DATASET_LEGITIMACY_REFERENCE",
          "named_official_domain_available": false,
          "url_similarity_index": 100,
          "title_reference_score": 0,
          "assessment": "HIGH",
          "caveat": "The CSV does not contain a named target brand or authoritative official-domain field."
        },
        "security_signal_summary": {
          "model_id": "transparent_security_signal_baseline_v1",
          "phishing_score": 0.499756,
          "raw_weighted_risk": 0.319878,
          "initial_verdict": "LEGITIMATE",
          "confidence": 0.500244,
          "boundary_case": true,
          "evidence_conflict": true,
          "suspicious_signal_codes": [
            "low_tld_reputation",
            "title_domain_mismatch",
            "hidden_form_fields",
            "high_special_character_ratio"
          ],
          "protective_signal_codes": [
            "high_url_similarity",
            "https_enabled",
            "same_origin_form",
            "identity_assets_present",
            "no_credential_exfiltration"
          ],
          "component_risks": {
            "url_similarity_risk": 0,
            "character_continuation_risk": 0.333333,
            "tld_reputation_risk": 0.955929,
            "url_character_probability_risk": 0.267544,
            "domain_structure_risk": 0.25,
            "transport_risk": 0,
            "title_match_risk": 1,
            "form_risk": 0.35,
            "site_identity_risk": 0.166667,
            "redirect_risk": 0
          }
        }
      },
      "agent_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.499756,
        "confidence": 0.500244,
        "source": "transparent_security_signal_baseline_v1"
      },
      "golden_decision": {
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "source": "PhiUSIIL label"
      },
      "ground_truth": {
        "label_value": 1,
        "verdict": "LEGITIMATE"
      },
      "agent_decision_correct": true,
      "trajectory": {
        "workflow_id": "phishing_url_investigation_v1",
        "pre_intervention_step_ids": [
          "expand_and_parse_url",
          "query_domain_information",
          "inspect_redirects",
          "analyze_title_domain_match",
          "inspect_login_form",
          "compare_with_official_site",
          "extract_security_features",
          "summarize_security_signals"
        ],
        "intervention_step_id": "human_advice_checkpoint",
        "final_decision_step_id": "make_final_decision",
        "post_intervention_branch_selector": "{{runtime.final_verdict}}",
        "result_bindings": "task.tool_results"
      },
      "selection": {
        "selection_index": 99,
        "bucket": "LEGITIMATE_CORRECT",
        "challenge_score": 0.014244,
        "distance_from_phishing_boundary": 0.000244,
        "criteria": [
          "phishing_score_between_0.4_and_0.6",
          "conflicting_security_signals",
          "usable_page_title",
          "archived_page_content_available",
          "unique_domain_within_selection"
        ]
      }
    }
  ],
  "statistics": {
    "all": {
      "count": 100,
      "ground_truth": {
        "PHISHING": 50,
        "LEGITIMATE": 50
      },
      "agent_correct": 70,
      "agent_incorrect": 30,
      "boundary_cases": 100,
      "evidence_conflicts": 100,
      "agent_accuracy": 0.7
    },
    "phase_one": {
      "count": 20,
      "ground_truth": {
        "PHISHING": 10,
        "LEGITIMATE": 10
      },
      "agent_correct": 14,
      "agent_incorrect": 6,
      "boundary_cases": 20,
      "evidence_conflicts": 20,
      "agent_accuracy": 0.7
    },
    "phase_two": {
      "count": 20,
      "ground_truth": {
        "PHISHING": 10,
        "LEGITIMATE": 10
      },
      "agent_correct": 14,
      "agent_incorrect": 6,
      "boundary_cases": 20,
      "evidence_conflicts": 20,
      "agent_accuracy": 0.7
    }
  }
};
