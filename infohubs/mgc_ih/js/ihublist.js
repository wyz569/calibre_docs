//
// Copyright 2009 Mentor Graphics Corporation
//
//    All Rights Reserved.
//
// THIS WORK CONTAINS TRADE SECRET
// AND PROPRIETARY INFORMATION WHICH IS THE
// PROPERTY OF MENTOR GRAPHICS
// CORPORATION OR ITS LICENSORS AND IS
// SUBJECT TO LICENSE TERMS.
//
// ----- auto-generated list of available documentation -----
var Entry;
var List;
// Define data relevant to all installed InfoHubs
var mReleaseName = "Calibre 2021.2"
var mbShowCommunities = false
// InfoHub data
var mInfoHub = "mgc_ih";
// Add InfoHubs tab
IHTab_InfoHubs.fVisible( true );
Entry = new TabEntry_Object( "Calibre - IC Design" );
List = new List_Object("infohub", "nosort");
List.fAddItem( "Release Information", "./index.html?infohub=calbr_ih" );
//List.fAddItem( "All Calibre Documentation", "./index.html?infohub=calbr_ih" );
List.fAddItem( "Physical Verification", "./index.html?infohub=ver_ih" );
List.fAddItem( "Design for Manufacturability (DFM)", "./index.html?infohub=dfm_ih" );
List.fAddItem( "Parasitic Extraction (PEX)", "./index.html?infohub=pex_ih" );
List.fAddItem( "Resolution Enhancement Technology (RET)", "./index.html?infohub=ret_ih" );
List.fAddItem( "Mask Data Preparation (MDP)", "./index.html?infohub=mdp_ih" );
List.fAddItem( "Videos", "./index.html?infohub=calbr_video_ih" );
Entry.fAddList( List );
IHTab_InfoHubs.fAddEntry( Entry );

