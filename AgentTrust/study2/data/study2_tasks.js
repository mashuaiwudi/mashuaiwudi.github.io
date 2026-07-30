window.STUDY2_DATA = {
  "metadata": {
    "dataset_name": "Study 2: Strong Agent Rejection",
    "generated_at": "2026-07-26T12:39:22.976Z",
    "source_file": "../data/phishing_study_100.json",
    "source_selection": "Study 1 Phase 1 task IDs",
    "study_design": {
      "formal_task_ids": [
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
      "practice_task_id": "phishing_url_task_090986",
      "task_count": 20,
      "phishing_count": 10,
      "legitimate_count": 10,
      "agent_correct_count": 20,
      "agent_accuracy": 1,
      "public_performance_statement": "The agent has been extensively evaluated in this task domain and achieved an accuracy above 90%.",
      "factors": {
        "explanation": [
          "NO_EXPLANATION",
          "CASE_SPECIFIC_EXPLANATION"
        ],
        "final_override": [
          "NO_OVERRIDE",
          "HUMAN_OVERRIDE"
        ]
      }
    }
  },
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
  "practice_task": {
    "id": "phishing_url_task_090986",
    "source": {
      "filename": "8075614.txt",
      "row_number": 90987,
      "dataset": "PhiUSIIL WebURL"
    },
    "task_text": "Investigate the archived URL https://mougoulinbanque.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
        "model_id": "study2_validated_security_agent",
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
      "source": "study2_validated_security_agent"
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
    },
    "study2": {
      "role": "PRACTICE",
      "source_task_id": "phishing_url_task_090986",
      "source_agent_verdict": "PHISHING",
      "source_agent_correct": true,
      "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
    }
  },
  "tasks": [
    {
      "id": "phishing_url_task_188081",
      "source": {
        "filename": "8004196.txt",
        "row_number": 188082,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://likju-30c6a.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_188081",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_056818",
      "source": {
        "filename": "67422.txt",
        "row_number": 56819,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.cril.univ-artois.fr. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_056818",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_226133",
      "source": {
        "filename": "8052472.txt",
        "row_number": 226134,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://scvnby3ybv.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_226133",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_095891",
      "source": {
        "filename": "179270.txt",
        "row_number": 95892,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.imes.boj.or.jp. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_095891",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_067808",
      "source": {
        "filename": "8057479.txt",
        "row_number": 67809,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://hqyo6nxza.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
          "phishing_score": 0.499925,
          "raw_weighted_risk": 0.319963,
          "initial_verdict": "PHISHING",
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
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.499925,
        "confidence": 0.500075,
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_067808",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": false,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_135697",
      "source": {
        "filename": "124903.txt",
        "row_number": 135698,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.cityofventura.ca.gov. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
          "phishing_score": 0.500039,
          "raw_weighted_risk": 0.32002,
          "initial_verdict": "LEGITIMATE",
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
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.500039,
        "confidence": 0.500039,
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_135697",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": false,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_183901",
      "source": {
        "filename": "8003315.txt",
        "row_number": 183902,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://rsedavki-si.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_183901",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_080426",
      "source": {
        "filename": "406675.txt",
        "row_number": 80427,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.tikli.in. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_080426",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_077422",
      "source": {
        "filename": "7999993.txt",
        "row_number": 77423,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://netsol-account.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_077422",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_185534",
      "source": {
        "filename": "874653.txt",
        "row_number": 185535,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.wydawnictwopolitechniki.pl. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_185534",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_183822",
      "source": {
        "filename": "8006162.txt",
        "row_number": 183823,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://pheasanthawk80.wixsite.com/atttofall. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
          "phishing_score": 0.499863,
          "raw_weighted_risk": 0.319931,
          "initial_verdict": "PHISHING",
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
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.499863,
        "confidence": 0.500137,
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_183822",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": false,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_119531",
      "source": {
        "filename": "401358.txt",
        "row_number": 119532,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.iyunmai.us. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
          "phishing_score": 0.500106,
          "raw_weighted_risk": 0.320053,
          "initial_verdict": "LEGITIMATE",
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
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.500106,
        "confidence": 0.500106,
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_119531",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": false,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_211914",
      "source": {
        "filename": "8011209.txt",
        "row_number": 211915,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://qwas-26150.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_211914",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_068407",
      "source": {
        "filename": "871171.txt",
        "row_number": 68408,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.roselle.il.us. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_068407",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_078325",
      "source": {
        "filename": "8064089.txt",
        "row_number": 78326,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL http://pancakasvvap.finance. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_078325",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_211365",
      "source": {
        "filename": "570492.txt",
        "row_number": 211366,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.laboiteasurprisesdenicolas.ca. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_211365",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_143324",
      "source": {
        "filename": "7968411.txt",
        "row_number": 143325,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://project1e-a5580.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
          "phishing_score": 0.499806,
          "raw_weighted_risk": 0.319903,
          "initial_verdict": "PHISHING",
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
        "verdict": "PHISHING",
        "primary_action": "QUARANTINE_LINK",
        "phishing_score": 0.499806,
        "confidence": 0.500194,
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_143324",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": false,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_059098",
      "source": {
        "filename": "178063.txt",
        "row_number": 59099,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.ntt-west.co.jp. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_059098",
        "source_agent_verdict": "LEGITIMATE",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_192717",
      "source": {
        "filename": "8112113.txt",
        "row_number": 192718,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://teusbsvsoiua.firebaseapp.com/. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
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
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_192717",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": true,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    },
    {
      "id": "phishing_url_task_053886",
      "source": {
        "filename": "836839.txt",
        "row_number": 53887,
        "dataset": "PhiUSIIL WebURL"
      },
      "task_text": "Investigate the archived URL https://www.spdc.pt. Collect and summarize security evidence, complete the assigned human-Agent decision protocol, and execute the corresponding security response.",
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
          "model_id": "study2_validated_security_agent",
          "phishing_score": 0.500125,
          "raw_weighted_risk": 0.320063,
          "initial_verdict": "LEGITIMATE",
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
        "verdict": "LEGITIMATE",
        "primary_action": "ALLOW_LINK",
        "phishing_score": 0.500125,
        "confidence": 0.500125,
        "source": "study2_validated_security_agent"
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
      },
      "study2": {
        "role": "FORMAL",
        "source_task_id": "phishing_url_task_053886",
        "source_agent_verdict": "PHISHING",
        "source_agent_correct": false,
        "experimental_agent_policy": "ORACLE_100_PERCENT_ACCURATE"
      }
    }
  ]
};
