//
// Copyright 2005-2017 Mentor Graphics Corporation
//
//    All Rights Reserved.
//
// THIS WORK CONTAINS TRADE SECRET
// AND PROPRIETARY INFORMATION WHICH IS THE
// PROPERTY OF MENTOR GRAPHICS
// CORPORATION OR ITS LICENSORS AND IS
// SUBJECT TO LICENSE TERMS.
//

// InfoHub data
var mInfoHub = "calbr_video_ih";
var mProductList = "All Calibre Products";

var Entry;
var List;

SetDefaultListSize(54);

// Online Help & Manuals
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Getting Started and How-To Videos" );


// Training
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Videos on the Web" );
//Entry.fAddLink( "mentor.com", "http://www.mentor.com/products/ic_nanometer_design/calibre-how-to-video-library/", "Contains non-proprietary videos available to all customers; no login required." );
Entry.fAddLink( "Support Center", "https://support.mentor.com/en/product/852852053/learn-explore", "May include proprietary information such as rule file examples; Support Center login required." );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "General Videos" );             // Sets title for entry
List = new List_Object("doclist", "sort");
List.fAddItem( "Getting Started with Calibre - A Video Series", "calbr_gs"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "IC Verification Videos" );             // Sets title for entry
List = new List_Object();                             // Creates new listbox
//List = new List_Object("doclist", "sort");
//List.fSetTitle( "Listbox Title" );                    // Sets title for listbox
List.fAddItem( "Getting Started with Calibre 3DSTACK", "videos/calbr_3dstack_gs_vid/index.html" );
List.fAddItem( "Waiver Shape Interactions", "videos/calbr_autowaiver_crit_ht_vid/index.html" );
List.fAddItem( "Getting Started with Calibre Auto-Waivers", "videos/calbr_autowaiver_gs_vid/index.html" );
List.fAddItem( "Getting Started with Calibre nmDRC", "videos/calbr_drc_gs_vid/index.html" );
List.fAddItem( "How to Suppress Warning Messages for FDI and DBdiff", "videos/calbr_fdi_msg_ht_vid/index.html" );
List.fAddItem( "Count Devices Efficiently in Calibre PERC", "videos/calbr_perc_dev_count_ht_vid/index.html" );
List.fAddItem( "Capture Pattern From a Layout Open in Calibre DESIGNrev", "videos/calbr_pmatch_capture_pattern_ht_vid/index.html" );
List.fAddItem( "Pattern Editing: Create Single Edge and Edge to Edge Constraint", "videos/calbr_pmatch_e2e_constraint_ht_vid/index.html" );
List.fAddItem( "Pattern Editing: Add Constraints to Markers", "videos/calbr_pmatch_marker_constraint_ht_vid/index.html" );
List.fAddItem( "Pattern Match With Count Markers", "videos/calbr_pmatch_run_countmarker_ht_vid/index.html" );
List.fAddItem( "Finding Hcells to Improve LVS-H Performance", "videos/calbr_query_hcells_ht_vid/index.html" );
List.fAddItem( "Getting Started with Calibre Query Server", "videos/calbr_query_server_gs_vid/index.html" );
List.fAddItem( "How to Debug Double Patterning Results with Calibre RealTime", "videos/calbr_realtime_debug_dp_ht_vid/index.html" );
// List.fAddItem( "Running Calibre nmDRC with a Pattern Matching Rule File", "videos/calbr_pmatch_runpmatch_ht_vid/index.html" );



//List.fAddItem( "Item 4 Title", "url8" );
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Olh.fAddEntry( Entry );


Entry = new TabEntry_Object( "Design for Manufacturability Videos" );             // Sets title for entry
List = new List_Object();                             // Creates new listbox
//List = new List_Object("doclist", "sort");
//List.fSetTitle( "Listbox Title" );                    // Sets title for listbox
List.fAddItem( "Running Calibre Litho-Friendly Design (LFD) with Model-Based Hints (MBH)", "videos/calbr_lfd_run_lfd_mbh_ht_vid/index.html" );
List.fAddItem( "Viewing Calibre Litho-Friendly Design (LFD) Model-Based Hints (MBH) Results", "videos/calbr_lfd_view_lfd_mbh_results_ht_vid/index.html" );
List.fAddItem( "Getting Started with Viewing Calibre Litho-Friendly Design (LFD) Results", "videos/calbr_lfd_view_results_gs_vid/index.html" );
List.fAddItem( "Getting Started with Calibre YieldServer", "videos/calbr_ys_gs_vid/index.html" );
//List.fAddItem( "Item 4 Title", "url8" );
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Parasitic Extraction Videos" );             // Sets title for entry
List = new List_Object();                             // Creates new listbox
//List = new List_Object("doclist", "sort");
//List.fSetTitle( "Listbox Title" );                    // Sets title for listbox
List.fAddItem( "Calibre xACT Transistor-Level Parasitic Extraction Using Layout Names", "videos/xact_user_xactT_laynames_gs_vid/index.html" );
List.fAddItem( "Calibre xACT Transistor-Level Parasitic Extraction Using Source Names", "videos/xact_user_xactT_srcnames_gs_vid/index.html" );
//List.fAddItem( "Item 4 Title", "url8" );
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Viewing & Interfaces Videos" );             // Sets title for entry
List = new List_Object();                             // Creates new listbox
//List = new List_Object("doclist", "sort");
//List.fSetTitle( "Listbox Title" );                    // Sets title for listbox
List.fAddItem( "How to Create an Initial Hcell List with Calibre Interactive", "videos/calbr_ci_create_hcell_list_ht_vid/index.html" );
List.fAddItem( "How to Review Calibre RealTime DRC Results", "videos/calbr_realtime_review_drc_ht_vid/index.html" );
List.fAddItem( "How to Create a Custom Page for the Calibre Interactive xACT GUI", "videos/calbr_ci_gui_custompage_ht_vid/index.html" );
List.fAddItem( "How to Do Pre- and Post-Processing with Calibre Interactive Internal Triggers", "videos/calbr_ci_internal_trigger_ht_vid/index.html" );
List.fAddItem( "Getting Started with Calibre Interactive PERC", "videos/calbr_ci_perc_gs_vid/index.html" );
List.fAddItem( "How to Set Rule File Environment Variables in Calibre Interactive", "videos/calbr_ci_set_env_vars_ht_vid/index.html" );
List.fAddItem( "Problem: Calibre Interactive Runset Values Are Not Used in the GUI", "videos/calbr_ci_template_disable_ht_vid/index.html" );
List.fAddItem( "How to Fill In Calibre Interactive GUI Fields Based on the Open Design by Using Templates", "videos/calbr_ci_use_templates_ht_vid/index.html" );
List.fAddItem( "How to Customize a DRC HTML Report", "videos/calbr_rve_drchtmlcustomize_ht_vid/index.html" );
List.fAddItem( "How to Save Net Polygons as an RDB Using Calibre RVE and Calibre DESIGNrev", "videos/calbr_rve_drv_save_net_as_rdb_ht_vid/index.html" );
List.fAddItem( "How to Trace Hierarchical Short Chains Using Calibre RVE for LVS", "videos/calbr_rve_tracehiershort_ht_vid/index.html" );
List.fAddItem( "Getting Started with Calibre RVE for DRC", "videos/calbr_rvedrc_gs_vid/index.html" );
List.fAddItem( "How to Save a Subset of DRC Results as an RDB Using Calibre RVE", "videos/calbr_rvedrc_rdb_subset_ht_vid/index.html" );
List.fAddItem( "How to Share Views in Calibre RVE with Admin Bookmarks", "videos/calbr_rvedrcperc_admin_bkmk_ht_vid/index.html" );
List.fAddItem( "How to Include and Exclude Rule Checks to Filter Results in Calibre RVE", "videos/calbr_rvedrcperc_checkfilter_ht_vid/index.html" );
List.fAddItem( "How to Add Links to Custom Reports in Calibre RVE for LVS and PERC", "videos/calbr_rvelvsperc_report_links_ht_vid/index.html" );
List.fAddItem( "Viewing Sources, Sinks, and Connections from a Calibre PERC LDL Run with Enhanced Simulation Results", "videos/calbr_rveperc_percldl_simresults_ht_vid/index.html" );
List.fAddItem( "Customizing the Calibre Interactive xACT GUI", "videos/calbr_ci_lock_hide_options_ht_vid/index.html" );
List.fAddItem( "How to Hide Pins When Expanding an Instance with the Calibre RVE Internal Schematic Viewer", "videos/calbr_rve_schemviewer_hide_pins_ht_vid/index.html" );
List.fAddItem( "How to Filter Calibre DRC Results by Layer Using Categories in Calibre RVE", "videos/calbr_rvedrc_filter_cat_layer_ht_vid/index.html" );
//List.fAddItem( "Item 4 Title", "url8" );
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Resolution Enhancement Technology (RET) Videos" );             // Sets title for entry
List = new List_Object();                             // Creates new listbox
//List = new List_Object("doclist", "sort");
//List.fSetTitle( "Listbox Title" );                    // Sets title for listbox
List.fAddItem( "Getting Started with Global Litho Models in Calibre EUV", "videos/calbr_euv_glm_gs_vid/index.html" );
List.fAddItem( "Getting Started using Calibre Multi-Patterning within the RET Flow Tool", "videos/calbr_mp_gs_vid/index.html" );
List.fAddItem( "Introduction to the Calibre nmModelflow Database", "videos/calbr_nmmdf_db_intro_gs_vid/index.html" );
List.fAddItem( "Creating a Calibration Stage in Calibre nmModelflow", "videos/calbr_nmmdf_stage_intro_gs_vid/index.html" );
List.fAddItem( "Getting Started with RET Correction and Verification with the Calibre RET Flow Tool", "videos/calbr_nmopc_opcv_rft_gs_vid/index.html" );
List.fAddItem( "Getting Started with Calibre nmSRAF in the RET Flow Tool", "videos/calbr_nmsraf_gs_vid/index.html" );
List.fAddItem( "Getting Started with Calibre OPCpro Fragmentation in the Calibre WORKbench GUI", "videos/calbr_opcpro_rft_gs_vid/index.html" );
List.fAddItem( "Getting Started with Rule-Based OPC", "videos/calbr_rbopc_gs_vid/index.html" );
List.fAddItem( "Fast Rigorous Model (FRM) Modes in Calibre nmModelflow", "videos/calbr_nmmdf_frmmode_ht_vid/index.html" );
List.fAddItem( "How to Edit Topography Model Signals in Calibre nmModelflow", "videos/calbr_topo_edit_signals_ht_vid/index.html" );
List.fAddItem( "Calibre WORKbench Topography Modeling: Fasttopo 2 Mode Concepts", "videos/calbr_topo_stages_ht_vid/index.html" );
List.fAddItem( "Calibre RET Flow Tool: Simulation Flow", "videos/calbr_wbench_rft_simulation_gs_vid/index.html" );
List.fAddItem( "Calibre RET Flow Tool: Using the Calibre nmOPC Sweeping Tool", "videos/calbr_wbench_rft_sweep_tool_ht_vid/index.html" );
List.fAddItem( "Getting Started with Parametric Explorer 1 - Overview", "videos/calbr_ret_smo_parametricex_gs_01_vid/index.html" );
List.fAddItem( "Getting Started with Parametric Explorer 2 - Demonstration: Session Mode Selection", "videos/calbr_ret_smo_parametricex_gs_02_vid/index.html" );
List.fAddItem( "Getting Started with Parametric Explorer 3 - Demonstration: Parametric Explorer Setup", "videos/calbr_ret_smo_parametricex_gs_03_vid/index.html" );
List.fAddItem( "Getting Started with Parametric Explorer 4 - Demonstration: Job Run Setup", "videos/calbr_ret_smo_parametricex_gs_04_vid/index.html" );
List.fAddItem( "Getting Started with Parametric Explorer 5 - Demonstration: Parametric Plot for Reviewing Results", "videos/calbr_ret_smo_parametricex_gs_05_vid/index.html" );
List.fAddItem( "Getting Started with Parametric Explorer 6 - Demonstration: Custom Parametric Plots for Reviewing Results", "videos/calbr_ret_smo_parametricex_gs_06_vid/index.html" );
List.fAddItem( "Getting Started with Parametric Explorer 7 - Conclusion and Finding Additional Information", "videos/calbr_ret_smo_parametricex_gs_07_vid/index.html" );
List.fAddItem( "How to Use Gauge Selection 1 - Overview", "videos/calbr_ret_smo_gaugesel_ht_01_vid/index.html" );
List.fAddItem( "How to Use Gauge Selection 2 - Demonstration", "videos/calbr_ret_smo_gaugesel_ht_02_vid/index.html" );
List.fAddItem( "How to Use Anchoring 1 - Overview", "videos/calbr_ret_smo_anchoring_ht_01_vid/index.html" );
// List.fAddItem( "How to Use Anchoring 2 - Demonstration", "videos/calbr_ret_smo_anchoring_ht_02_vid/index.html" );
List.fAddItem( "How to Use CDOF and EL/ILS Optimization 1 - Overview", "videos/calbr_ret_smo_cdof_el_ht_01_vid/index.html" );
List.fAddItem( "How to Use CDOF and EL/ILS Optimization 2 - Creating Tolerance Bands", "videos/calbr_ret_smo_cdof_el_ht_02_vid/index.html" );
List.fAddItem( "How to Use CDOF and EL/ILS Optimization 3 - Constructing Tolerance Bands", "videos/calbr_ret_smo_cdof_el_ht_03_vid/index.html" );
List.fAddItem( "How to Use CDOF and EL/ILS Optimization 4 - Setting Up CDOF Optimization", "videos/calbr_ret_smo_cdof_el_ht_04_vid/index.html" );
List.fAddItem( "How to Use CDOF and EL/ILS Optimization 5 - Setting Up EL Optimization", "videos/calbr_ret_smo_cdof_el_ht_05_vid/index.html" );
List.fAddItem( "Getting Started with the Calibre Pattern Generator 1 - Overview", "videos/calbr_wbench_cpg_gs_01_vid/index.html" );
List.fAddItem( "Getting Started with the Calibre Pattern Generator 2 - Creating a New Pattern and Pattern Library", "videos/calbr_wbench_cpg_gs_02_vid/index.html" );
List.fAddItem( "Getting Started with the Calibre Pattern Generator 3 - Creating a New Layout and Layout Configuration", "videos/calbr_wbench_cpg_gs_03_vid/index.html" );

//List.fAddItem( "Item 4 Title", "url8" );
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Mask Data Preparation (MDP) Videos" );             // Sets title for entry
List = new List_Object();                             // Creates new listbox
//List = new List_Object("doclist", "sort");
//List.fSetTitle( "Listbox Title" );                    // Sets title for listbox
List.fAddItem( "Getting Started with Fracture and Verification in Calibre MDPview Fracture GUI", "videos/calbr_mdp_mdpverify_gs_vid/index.html" );
List.fAddItem( "Getting Started with Calibre DefectReview", "videos/calbr_defectreview_gs_vid/index.html" );
//List.fAddItem( "Item 4 Title", "url8" );
Entry.fAddList( List );                               // Adds listbox to entry
IHTab_Olh.fAddEntry( Entry );


// Training
IHTab_Training.fVisible( true );
Entry = new TabEntry_Object( "Tutorials and Example Kits (eKits)" );
Entry.fAddLink( "Calibre Tutorials and eKits", "caldocs", "This link goes to the Documentation tab for the latest Calibre release. " 
                                  + "Under Document Types, choose Getting Started Guide to view the Try It eKits. "
								  + "To download an eKit for an earlier release, choose the release in the version dropdown list." );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Videos and Training" );
//Entry.fAddLink( "How-To Video Library", "cal_howto_videos", "On mentor.com, access videos relating to most of the Calibre products." );
Entry.fAddLink( "Instructor-led and online training courses", "training" );
IHTab_Training.fAddEntry( Entry );


// Support
IHTab_Support.fVisible( true );

Entry = new TabEntry_Object( "Technical Support & Downloads");
Entry.fAddLink( "Access Videos on Calibre Support Center site", "animations" );
Entry.fAddLink( "Sign up for CustomerInsight Newsletter", "supportpro" );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Communities" );
Entry.fAddLink( "Participate in IC Layout Verification and Optimization communities", "community", "A place to learn, share, and network with other designers." );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Contact Us" );
Entry.fAddLink( "Send feedback on the documentation", "feedback" );
Entry.fAddLink( "Visit https://eda.sw.siemens.com/", "Siemens EDA" );
IHTab_Support.fAddEntry( Entry );
