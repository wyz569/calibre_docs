//
// Copyright 2005-2011 Mentor Graphics Corporation
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
var mInfoHub = "ret_ih";
var mProductList = "Calibre CellArray, Calibre DSA, Calibre Dynamic Resource Allocator (DRA), Calibre FullScale, Calibre EUV, Calibre LITHOview, Calibre LPE, Calibre Multi-Patterning, Calibre nmModelflow, Calibre nmOPC, Calibre nmSRAF, Calibre OPCpro, Calibre OPCsbar, Calibre OPCverify, Calibre ORC, Calibre PIXbar, Calibre PRINTimage, Calibre PSMgate, Calibre pxOPC, Calibre pxSMO, Calibre SONR, Calibre TDopc, Calibre WORKbench";

var Entry;
var List;

SetDefaultListSize(35);

// Online Help & Manuals
Entry = new TabEntry_Object( "Resolution Enhancement Technology" );

IHTab_Olh.fVisible( true );
IHTab_Olh.fAddEntry( Entry );


// Entry = new TabEntry_Object( "Release Notes" );
// List = new List_Object("doclist", "sort");
// List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
// Entry.fAddList( List );
// IHTab_Olh.fAddEntry( Entry );


Entry = new TabEntry_Object( "User's and Reference Manuals" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Release Notes", "calbr_rn"  );
List.fAddItem( "Calibre CellArray RET User's and Reference Manual", "calbr_caret_useref"  );
List.fAddItem( "Calibre Cluster Manager (CalCM) User's Manual", "calbr_cm_user"  );
List.fAddItem( "Calibre DESIGNrev Layout Viewer User's Manual", "calbr_drv_user"  );
List.fAddItem( "Calibre DESIGNrev Reference Manual", "calbr_drv_ref"  );
List.fAddItem( "Calibre Directed Self-Assembly User's and Reference Manual", "calbr_dsa_useref"  );
List.fAddItem( "Calibre Dynamic Resource Allocator (DRA) User's Manual", "calbr_dra_user" );
List.fAddItem( "Calibre Interactive User's Manual", "calbr_interactive_user"  );
List.fAddItem( "Calibre Interactive (New GUI) User's Manual", "calbr_interactive_n_user"  );
List.fAddItem( "Calibre RVE User's Manual", "calbr_rve_user"  );
List.fAddItem( "Calibre Litho-Friendly Design User's Manual", "calbr_lfd_user"  );
List.fAddItem( "Calibre Local Printability Enhancement User's and Reference Manual", "calbr_lpe_useref"  );
List.fAddItem( "Calibre LogView User's Manual", "calbr_logview_user"  );
List.fAddItem( "Calibre Multi-Patterning User's and Reference Manual", "calbr_mp_useref"  );
List.fAddItem( "Calibre nmModelflow User's and Reference Manual", "calbr_nmmdf_useref"  );
List.fAddItem( "Calibre nmOPC User's and Reference Manual", "calbr_nmopc_useref" );
List.fAddItem( "Calibre nmSRAF User's and Reference Manual", "calbr_nmsraf_useref"  );
List.fAddItem( "Calibre OPCpro User's and Reference Manual", "calbr_opcpro_useref"  );
List.fAddItem( "Calibre OPCsbar User's and Reference Manual", "calbr_sbar_useref"  );
List.fAddItem( "Calibre OPCverify User's and Reference Manual", "calbr_opcv_useref"  );
List.fAddItem( "Calibre Post-Tapeout Flow User's Manual", "calbr_pto_user"  );
List.fAddItem( "Calibre PSMgate User's Manual", "calbr_psm_user"  );
List.fAddItem( "Calibre pxOPC User's and Reference Manual", "calbr_pxopc_useref" );
List.fAddItem( "Calibre Rule-Based OPC User's and Reference Manual", "calbr_rbopc_useref"  );
List.fAddItem( "Calibre SMO RET Selection User's and Reference Manual", "calbr_ret_smo_useref"  );
List.fAddItem( "Calibre SONR User's and Reference Manual", "calbr_sonr_useref"  );
List.fAddItem( "Calibre SVRF Optimizer User's and Reference Manual", "calbr_svrfopt_useref"  );
List.fAddItem( "Calibre Verification User's Manual", "calbr_ver_user"  );
List.fAddItem( "Calibre WORKbench User's and Reference Manual", "calbr_wbench_useref"  );
List.fAddItem( "Calibre WORKbench: RET Flow Tool User's Manual", "calbr_rft_user"  );
List.fAddItem( "Calibre WORKbench: RET Flow Tool (RFT) v2.0 User's Manual", "calbr_rftv2_user"  );
List.fAddItem( "Calibre WORKbench Topography Modeling User's and Reference Manual", "calbr_topo_useref"  );
List.fAddItem( "Open Artwork System Interchange Standard (OASIS)", "calbr_oasis_gd"  );
List.fAddItem( "Standard Verification Rule Format (SVRF) Manual", "svrf_ur"  );
//List.fAddItem( "Calibre CalScope User's Manual", "calbr_calscope_user"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

// Entry = new TabEntry_Object( "Examples, Tutorials, and Utilities" );
// Entry.fAddLink( "Download \"A Quick Start to Calibre Tools\" and other available examples from SupportNet", "utilities", "
// 1. Log in to SupportNet.<br>
// 2. Accept the License Agreement.<br>
// 3. Select \"Calibre examples\" (located in the \"View utilities by product\" list).<br>
// 4. Right click an example to save the download." );
// IHTab_Olh.fAddEntry( Entry );


// Custom HTML for a link that switches to the Support & Training tab
// Entry = new TabEntry_Object();
// Entry.fAddHTML( "</div></td></tr><tr valign=\"top\"><td class=\"doclist_title\" width=\"100%\"><div>" );
// Entry.fAddHTML( "<h2>Examples, Tutorials, Training, and SupportNet Information</h2>" );
// IHTab_Olh.fAddEntry( Entry );
// Entry = new TabEntry_Object();
// Entry.fAddHTML( "</div></td></tr><tr valign=\"top\"><td class=\"doclist\" width=\"100%\"><div>" );
// Entry.fAddHTML( "<ul class=\"listbull\">" );
// Entry.fAddHTML( "<li class=\"listbull\">" );
// Entry.fAddHTML( "<p class=\"listbull\"><a href=\"javascript:SwitchTab('support');\">Access downloads, communities, and SupportNet information</a></p>" );
// Entry.fAddHTML( "<p class=\"H2BodyText\">Navigate to the <b>SupportNet QuickLinks</b> tab of this InfoHub scope.</p>" );
// Entry.fAddHTML( "</li>" );
// Entry.fAddHTML( "<li class=\"listbull\">" );
// Entry.fAddHTML( "<p class=\"listbull\"><a href=\"javascript:SwitchTab('training');\">Access Calibre examples, tutorials, utilities, movies, and instructor-led classes</a></p>" );
// Entry.fAddHTML( "<p class=\"H2BodyText\">Navigate to the <b>Training</b> tab of this InfoHub scope.</p>" );
// Entry.fAddHTML( "</li>" );
// Entry.fAddHTML( "</ul>" );
// IHTab_Olh.fAddEntry( Entry );
// END Custom HTML

Entry = new TabEntry_Object( "Quick Reference" );
List = new List_Object("doclist", "sort");
List.fAddItem( "Calibre Interactive (New GUI) Quick Reference", "calbr_interactive_n_qref", "pdf"  );
List.fAddItem( "Calibre DESIGNrev Key Definitions Quick Reference", "calbr_drv_keydef_qref", "pdf"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Tutorials and Example Kits (eKits) for RET on Support Center" );
Entry.fSetBodyText( "Tutorials and example kits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and Example Kits", "cal_ekit_RET", "Click the link to go to the Support Center listing of eKits for RET." );
IHTab_Olh.fAddEntry( Entry );

// Training
IHTab_Training.fVisible( true );
Entry = new TabEntry_Object( "Tutorials and Example Kits" );
Entry.fSetBodyText( "Tutorials and eKits contain design data, rule files, and instructions for running and learning more about the tool."  );
Entry.fAddLink( "Try It! Calibre Tutorials and eKits for RET", "cal_ekit_RET", "Click the link to go to the Support Center listing of eKits for RET. "
						 + "<br>To download an eKit for an earlier release, choose the release in the \"Restrict content to version\" dropdown list." );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Videos and Training" );
//Entry.fAddLink( "How-To Video Library", "cal_howto_videos", "On mentor.com, access videos relating to most of the Calibre products." );
Entry.fAddLink( "Instructor-led and online training courses", "training" );
IHTab_Training.fAddEntry( Entry );


// Support
IHTab_Support.fVisible( true );

Entry = new TabEntry_Object( "Technical Support & Downloads" );
Entry.fAddLink( "Access Calibre Support Center site", "microsite" );
Entry.fAddLink( "Sign up for CustomerInsight Newsletter", "supportpro" );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Communities" );
Entry.fAddLink( "Participate in IC Layout Verification and Optimization communities", "community", "A place to learn, share, and network with other designers." );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Contact Us" );
Entry.fAddLink( "Send feedback on the documentation", "feedback" );
Entry.fAddLink( "Visit https://eda.sw.siemens.com/", "Siemens EDA" );
IHTab_Support.fAddEntry( Entry );
