Search.setIndex({envversion:46,filenames:["api_doc","cli","components/components","components/events","components/inventory_db","components/iterations","components/query","components/stations","components/waveforms","how_lasif_finds_coordinates","index","introduction","iris2quakeml","iteration_xml","prerequisites","rotations","ses3d_setup_helper","tools","tools.file_info_cache","tools.parallel","tutorial","tutorial/00_interfaces","tutorial/01_creating_a_new_project","tutorial/02_seismic_events","tutorial/03_station_data","tutorial/04_waveform_data","tutorial/05_download_helpers","tutorial/06_data_inspection","tutorial/07_data_validation","tutorial/08_a_new_iteration","tutorial/09_model_handling","tutorial/10_generating_input_files","tutorial/11_synthetic_waveforms","tutorial/12_misfits_and_adjoint_sources","tutorial/13_model_update","tutorial/14_next_iterations","tutorial/15_customizing_lasif","webinterface","window_selection"],objects:{"lasif.components.events":{EventsComponent:[3,3,1,""]},"lasif.components.events.EventsComponent":{count:[3,1,1,""],get:[3,1,1,""],get_all_events:[3,1,1,""],has_event:[3,1,1,""],list:[3,1,1,""],update_cache:[3,1,1,""]},"lasif.components.inventory_db":{InventoryDBComponent:[4,3,1,""]},"lasif.components.inventory_db.InventoryDBComponent":{get_all_coordinates:[4,1,1,""],get_coordinates:[4,1,1,""],remove_coordinate_less_stations:[4,1,1,""],save_station_coordinates:[4,1,1,""]},"lasif.components.iterations":{IterationsComponent:[5,3,1,""]},"lasif.components.iterations.IterationsComponent":{count:[5,1,1,""],create_new_iteration:[5,1,1,""],create_successive_iteration:[5,1,1,""],get:[5,1,1,""],get_filename_for_iteration:[5,1,1,""],get_iteration_dict:[5,1,1,""],get_long_iteration_name:[5,1,1,""],has_iteration:[5,1,1,""],list:[5,1,1,""],plot_Q_model:[5,1,1,""],save_iteration:[5,1,1,""]},"lasif.components.query":{QueryComponent:[6,3,1,""]},"lasif.components.query.QueryComponent":{discover_available_data:[6,1,1,""],get_all_stations_for_event:[6,1,1,""],get_coordinates_for_station:[6,1,1,""],get_data_and_synthetics_iterator:[6,1,1,""],get_iteration_status:[6,1,1,""],get_stations_for_all_events:[6,1,1,""],point_in_domain:[6,1,1,""],what_is:[6,1,1,""]},"lasif.components.stations":{StationsComponent:[7,3,1,""]},"lasif.components.stations.StationsComponent":{file_count:[7,4,1,""],force_cache_update:[7,1,1,""],get_all_channels:[7,1,1,""],get_all_channels_at_time:[7,1,1,""],get_channel_filename:[7,1,1,""],get_details_for_filename:[7,1,1,""],get_station_filename:[7,1,1,""],has_channel:[7,1,1,""],total_file_size:[7,4,1,""]},"lasif.components.waveforms":{WaveformsComponent:[8,3,1,""]},"lasif.components.waveforms.WaveformsComponent":{get_available_processing_tags:[8,1,1,""],get_available_synthetics:[8,1,1,""],get_metadata_for_file:[8,1,1,""],get_metadata_processed:[8,1,1,""],get_metadata_processed_for_station:[8,1,1,""],get_metadata_raw:[8,1,1,""],get_metadata_raw_for_station:[8,1,1,""],get_metadata_synthetic:[8,1,1,""],get_metadata_synthetic_for_station:[8,1,1,""],get_waveform_folder:[8,1,1,""],get_waveforms_processed:[8,1,1,""],get_waveforms_raw:[8,1,1,""],get_waveforms_synthetic:[8,1,1,""],reset_cached_caches:[8,1,1,""]},"lasif.iteration_xml":{Iteration:[13,3,1,""],create_iteration_xml_string:[13,2,1,""]},"lasif.iteration_xml.Iteration":{get_process_params:[13,1,1,""],get_source_time_function:[13,1,1,""],processing_tag:[13,4,1,""],write:[13,1,1,""]},"lasif.rotations":{colat2lat:[15,2,1,""],get_border_latlng_list:[15,2,1,""],get_center_angle:[15,2,1,""],get_max_extention_of_domain:[15,2,1,""],get_spherical_unit_vectors:[15,2,1,""],lat2colat:[15,2,1,""],lat_lon_radius_to_xyz:[15,2,1,""],rotate_data:[15,2,1,""],rotate_lat_lon:[15,2,1,""],rotate_moment_tensor:[15,2,1,""],rotate_vector:[15,2,1,""],xyz_to_lat_lon_radius:[15,2,1,""]},"lasif.scripts":{iris2quakeml:[12,0,0,"-"],ses3d_setup_helper:[16,0,0,"-"]},"lasif.scripts.ses3d_setup_helper":{get_divisors:[16,2,1,""],get_domain_decompositions:[16,2,1,""],get_factors_and_multiplicity:[16,2,1,""],get_primes:[16,2,1,""]},"lasif.tools":{parallel_helpers:[19,0,0,"-"]},"lasif.tools.cache_helpers":{file_info_cache:[18,0,0,"-"]},"lasif.tools.cache_helpers.file_info_cache":{FileInfoCache:[18,3,1,""]},"lasif.tools.cache_helpers.file_info_cache.FileInfoCache":{file_count:[18,4,1,""],get_details:[18,1,1,""],get_values:[18,1,1,""],index_count:[18,4,1,""],total_size:[18,4,1,""],update:[18,1,1,""]},"lasif.tools.parallel_helpers":{FunctionInfo:[19,3,1,""],distribute_across_ranks:[19,2,1,""],function_info:[19,2,1,""]},"lasif.window_selection":{find_closest:[38,2,1,""],find_local_extrema:[38,2,1,""],flatnotmasked_contiguous:[38,2,1,""],select_windows:[38,2,1,""]},lasif:{LASIFError:[0,3,1,""],LASIFNotFoundError:[0,3,1,""],LASIFWarning:[0,3,1,""],iteration_xml:[13,0,0,"-"],rotations:[15,0,0,"-"],tools:[17,0,0,"-"],window_selection:[38,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:method","2":"py:function","3":"py:class","4":"py:attribute"},terms:{"000000z":[23,27],"01000_lp_0":[25,29,32],"02500_npts_2000_dt_0":[29,32],"07e":3,"12500_npts_4000_dt_0":25,"14e":36,"15e":36,"17e":3,"1_2010":[3,6,8,26],"21t17":[23,27],"22e":36,"5_2013":12,"61e":36,"78e":36,"92e":3,"98e":36,"9_1980":[23,25,29,31,32,34],"9_2000":[23,25,27,31,32,33,34],"9_2011":3,"__init__":18,"_dt_":29,"_extract_index_values_filetyp":18,"_extract_index_values_jpeg":18,"_extract_index_values_png":18,"_find_files_filetyp":18,"_find_files_jpeg":18,"_find_files_png":18,"_japan_mag_5":12,"_lp_":29,"boolean":7,"break":14,"byte":18,"case":[3,6,14,19,22,24,25,26,27,29,32,35,36,37,38],"class":[0,3,4,5,6,7,8,11,13,18,19],"default":[1,22,28,36,38],"final":[1,14],"float":[15,38],"function":0,"import":[5,6,7,8,11,13,29],"int":[7,16,36],"long":[1,5,8,11,38],"new":[1,5,8,13,14,15,18,20],"public":[12,13,15,16,18,19,38],"return":[3,4,5,6,7,8,9,13,15,16,18,19,29,36,38],"short":[5,11,32],"static":29,"super":18,"true":[1,3,5,6,7,13,18,22,25,29,30],"try":[1,11],"while":[1,8,10,14,25,26,28,29,33,35,37,38],aa00:27,aa01:27,aa02:27,aa03:27,aa04:27,aa05:27,aa22:29,abl:[11,18,19,25,26,27,29,30,32],about:[1,3,6,7,18,19,22,23,24,29,30,37],absolut:[7,8,24],absolute_filenam:8,absorpt:29,accept:1,access:[1,6,8,11,24,26],accord:[9,14,33,34],accordingli:31,account:[22,26],accur:[20,27],achiev:[11,24,29,33],acquir:1,across:[6,14,19,22],action:26,activ:[1,7,8,36],actual:[1,8,9,10,11,13,14,20,22,23,24,25,26,27,29,31,32,33],adapt:[16,26],add:[1,7,18,23,29,35],addit:[11,14,21,22,23,29,32],addition:14,address:26,adher:[3,7,11,14,25,26,29],adjoint:[1,10,11,20,31,32],adjoint_forward:[1,31],adjoint_output_paramet:29,adjoint_revers:[1,31],adjoint_sourc:[22,25],adjoint_sources_and_window:[22,25],adjust:[22,23,29,32],adopt:26,advantag:[11,22,29,33],advis:[21,22,31],affect:22,aforement:27,after:[14,22,23,24,25,26,38],again:[1,4,13,14,26,29,30,33,35],against:[1,15],aid:[21,34],aim:[11,29,36,38],akin:[22,33],algorithm:[29,36,38],algortihm:38,all:[1,3,4,5,6,7,9,11,14,15,16,18,19,22,23,24,25,26,27,28,29,31,33,35,36,37,38],allow:[27,33,38],almost:[14,26,29],alreadi:[4,5,11,22,25,26,29,31,32,33,35],also:[1,3,4,5,7,10,11,14,15,22,24,26,27,29,31,33,35,36,37,38],altm:7,alwai:[7,20,22,26,29],amongst:[1,10],amount:[1,10,11,15,22,27,31,32],amplitud:[30,38],anaconda:14,angl:[15,22],ani:[1,3,5,8,9,11,14,18,22,24,26,27,29,30,33,34,35,36],anmo:7,anomali:30,anonym:26,anoth:[1,5,22,24],anyth:[5,13,29,36],appear:28,append:[1,24],appli:[11,25,29,30,33,36,38],applic:[7,9,10,26,29],approach:[9,10,11,23,30],appropri:26,approxim:[16,29],arang:38,arbitrari:[18,29,30,33],archiv:[1,14,24],arclink:[9,26],arclink_usernam:26,arduou:10,arg1:36,arg:[1,6,8,11,15],argument:[1,16,18,19,20,29],aris:28,around:[15,22,36],arrai:[13,36,38],arriv:38,ask:26,assembl:22,assert:[1,9],assign:[25,33],assist:0,associ:[4,6,23,24,26,29],assum:[1,11,14,15,27,33,34,36],assumpt:11,assur:[11,14],attempt:[1,4,9,11,16,22,26,28,29],author:23,automat:[1,7,14,18,22,24,25,26,31],autoselect:1,avoid:[22,33],awai:22,awar:[1,24,28],axi:[15,22],azimuth:15,band:[1,29],bandpass:29,base:[0,1,5,11,14,15,20,30,33,36,38],basemap:14,basi:26,beachbal:1,becaus:23,becom:1,been:[4,14,15,19,22,23,27,29,31,32,33,35,36],befor:[21,26,33,35,38],beforehand:1,begin:[23,28],behind:11,belong:22,below:[1,14],best:[1,28],better:[11,19],between:[1,22,29,33,38],bhe:[7,8],bhz:7,big:[11,14],biggest:11,bin:1,bit:[14,36],bodi:15,boil:32,bool:38,border:[22,26],borehol:9,both:[1,6,15,21,30,31],bottom:[33,38],bound:[1,7,22],boundari:[1,22,37],boundary_width_in_degre:22,box:33,branch:36,browser:37,build:1,built:[1,25,27,29,36],bunch:[18,24,37],button:33,bw_altm:7,bw_furt:7,cach:[1,3,7,8,11,14,18,22,25,27],cache_db_fil:18,cache_fold:7,cache_help:18,calcul:[1,10,16,19,20,31,32],call:[3,5,6,8,11,14,18,19,22,28,33,36],callback:7,came:29,can:[1,4,7,9,10,11,12,14,18,19,22,23,24,26,27,28,29,30,31,33,34,35,36,38],canada:36,cancel:29,cannot:[25,28],capabl:[25,31,37],care:[33,34],carri:10,cartesian:11,cash:1,catalog:1,categori:1,center:[15,25,30],certain:[3,6,7,8,9,10,11,15,16,23,25],cha:14,chang:[7,11,15,22,23,26,33,36],channel:[1,6,7,8,14,22,24,26,27],channel_cod:14,channel_id:[7,8,14],channel_prior:22,cheap:3,check:[1,9,10,11,18,28,31,32],choic:36,choos:[11,14,22,24,26,30,33,35],chose:33,chosen:[22,29,33],chrome:37,chunk:22,circumst:3,clean:[11,24],clear:[3,22,25,31],click:[33,37],clockwis:15,clone:14,close:[15,22,30],closer:22,closest:[1,38],clunki:33,code:[7,9,10,14,20,22,23,24,27,29,36],coeefici:38,coeffici:38,coincid:[11,25],colat2lat:15,colat:15,colatitud:15,collabor:10,collect:[15,19,26,29],colloc:30,colorama:14,com:[14,16,38],combin:[1,6,7,9,27,29,33],come:[19,26,29,33],comm:[3,4,5,6,7,8,36],commando:35,comment:[1,5,22,29],commit:14,common:[1,11,25],commun:[1,3,4,5,6,7,8],compar:[1,29],comparis:1,complementari:21,complet:[11,19,20,36,38],complex:14,complic:36,compon:0,component_nam:[3,4,5,6,7,8],comput:[1,32],computational_setup:29,conclud:29,conda:14,condit:22,config:[1,22,25,26],configur:11,conform:14,consid:[1,6,22,27,30,38],consist:[1,14],constant:[1,29],constantli:7,constructor:18,contact:[9,11,14,26,29,36],contain:[1,3,4,6,9,13,14,18,19,22,24,26,27,28,29,36],content:[0,11,25,29],continent:[9,27],continu:[10,14,29],contour:22,contrast:24,contribut:[14,33],conveni:[15,23],convert:[15,29,32,33],coordin:[1,4,6,7],copi:[12,23,29,30,32,33,36],copyleft:[12,13,15,16,18,19,38],copyright:[12,13,15,16,18,19,38],core:[1,14,16,19,29],correct:[1,11,23,24,27,29,30,33,34],correctli:[14,28],correl:38,correspond:[1,9,18,22,24,29,33,38],could:[4,29],count:[1,3,5,16,30],counterpart:29,coupl:[29,31,32,35,37],cours:[22,25,29],cover:[25,29],coverag:27,cpu:16,crash:1,creat:[1,5,13,20],create_iteration_xml_str:13,criteria:[11,29],cross:22,cumul:29,current:[1,9,11,12,14,21,23,24,27,29,30,31,32,33,34,35,36],custom:20,custom_funct:36,cut:36,cycl:33,data_fold:8,data_preprocess:29,data_trac:[36,38],data_typ:8,databas:[1,4,11,18,27],datacent:25,dataless:[7,11,24,26],datalessse:7,dataprocess:29,dataservic:26,date:[1,14,20,33,37],db_file:4,deal:[1,4,5,7,10,13,25,26,29,30,38],debugg:1,decid:29,decomposit:16,decor:19,def:[18,19,36],defin:[4,11,15,18,20,21,22,23],degre:[9,15,16,22],delet:[1,5,11,18,31,33,35,36],delta:[13,29,36],demand:[1,9],denot:[1,18,29,33,36],depend:[14,26,33,35,36],depth:[1,9,16,22,23,27,30,38],depth_in_km:[3,36],deriv:[6,9,10,24,29,30],describ:[8,15,22,24,25,29],descript:[22,29,38],design:[10,11,37],desir:[9,15,23,29,30,33],desktop:29,despit:7,detail:[1,7,9,14,22,25,26,29,32,33,37,38],detect:1,determin:[15,16,22,35],develop:[9,11],deviat:20,devot:33,dict:[3,6],dictionari:[3,4,5,6,7,8,13,15,18,19],did:32,differ:[1,6,9,11,22,23,24,26,29,30,32,35,36,38],differenti:9,difficulti:10,dimens:22,dir:16,direct:[15,16,30],direction:27,directli:[15,22,29,30,31,33,36],directori:[1,11,14,21,22,24,25,29],dirti:16,disabl:37,disadvantag:23,disc:[5,32],discov:6,discover_available_data:6,discoveri:21,discret:29,discuss:31,disk:31,dispatch:9,displai:[12,37],distanc:[1,22],distribut:[1,14,19,24,33,37],distribute_across_rank:19,divisor:16,dmc:26,do_that:36,do_thi:36,doc:14,doctest:[3,4,5,6,7,8],doe:[1,5,6,7,9,22,26,27,29,30,32,34,36,38],domain:[1,6,11,15,16,22,23,24,26,29,31,32,33,37],domain_bound:22,domain_rot:22,don:[1,14,18,36,38],done:[1,16,26,29],down:[9,32],download:[1,4,7,12,14,20,22,23,25],download_set:22,download_st:26,download_waveform:26,drag:33,driven:[10,11],drop:1,dtype:36,dub:33,due:[9,26,28,32,38],duplic:[1,30],dure:[19,23,29,33],dynam:29,e_phi:15,e_r:15,e_theta:15,each:[1,3,4,6,7,8,11,18,19,22,23,24,25,26,27,29,30,32,33,35,36],earth:[11,15,20],earthquak:[1,23,27],eas:[3,10,14,25],easi:[23,36],easili:[11,32],east:15,east_data:15,edg:38,edit:22,edu:[12,23,26],effect:[22,25,27],effici:[10,22],ehz:7,eight:14,eismic:[10,11],either:[7,9,12,26,27],element:[16,22,30],elev:9,elevation_in_m:[4,6,7,8,27,36],ellipsi:[3,5,7,8],els:[9,36],email:[14,26],embarrassingli:19,emploi:[1,9,10,11],empti:[1,19,26,38],enabl:[1,10,14,23,26,30,38],encod:[22,29],encompass:10,encount:[1,14],end:[10,11,36],end_dat:7,endeavour:36,endtim:[8,36],energi:38,enforc:[11,25],enough:1,ensur:[14,28],enter:[9,30,33],entir:14,entri:[1,4],environ:29,equal:[9,14],equat:[15,22],equatori:22,error:[1,10,15,24,28,29,31,36],essenti:[25,26,27,29,31,33,35],establish:10,europ:22,european:26,even:[10,32,36],event_1:5,event_2:5,event_depth_in_km:[36,38],event_inform:36,event_latitud:[36,38],event_longitud:[36,38],event_nam:[1,3,6,8,25,26,29,31,32,34,36],event_weight:29,events_comm:3,events_dict:5,eventscompon:[0,2],ever:36,everi:[11,14,18,23,25,26,29,31,33,38],everyon:36,everyth:[14,26,29,32],evolv:[10,14],exampl:[1,14,15,18,20,27,29,32,34],except:[0,1,8,19,25,36],exchang:10,exclud:38,exclus:26,execut:[1,11,12,14,19,22,25,26,27,29,33,37],exemplari:[16,29],exist:[1,3,5,6,18,22,27,33],existing_iter:1,existing_iteration_nam:5,exit:[1,16,30],expect:[9,14,19,24,36],explain:[1,9,25,29],explanatori:22,explor:[21,37],expos:21,extend:[15,22],extens:[14,15,23],extent:[10,16],extract:[9,18,19],extrema:38,f90:32,facilit:[11,31],factor:[1,16],fail:[4,9],fairli:[6,14,34],fals:[3,5,6,7,13,22,29,38],far:26,fashion:36,fast:1,faster:[14,18],favor:14,fdsn:[1,11,26],featur:[14,23,32],feel:[23,29,33,36],fichtner:33,field:19,figur:[6,26,36],file:[1,3,4,5,6,7,8,9],file_count:[7,18],file_format:7,file_info_cach:0,filecount:1,fileinfocach:18,filenam:[1,3,5,7,8,13,18,23,24,29,36],files:7,filesystem:18,filetyp:18,filter:[25,29,36],find:1,find_closest:38,find_local_extrema:38,fine:[1,14,19],finish:[33,35],finit:29,fire:32,firefox:37,first:[9,11,14,18,22,23,28,29,31,35,38],fit:[1,23],fix:[1,12,23,29],flag:1,flake8:14,flask:14,flat:38,flatnotmasked_contigu:38,flexibl:[18,23,29,36],flip:36,float64:36,fly:36,fn01a:36,focal:[1,11],focu:10,fold:32,folder:[1,3,5,7,8,12,22,23,24,25,26,27,29,30,32,33,34,37],folder_path:1,follow:[1,3,6,7,8,9,11,13,14,15,19,22,24,25,26,29,33,34,35,36,37],force_cache_upd:7,forget:18,form:[5,8],format:[7,9],formula:33,forward:[31,32],found:[0,6,8,9,11],four:29,fourth:29,fraction:38,fraction_of_stations_that_have_window:6,fragil:1,frame:[22,31,33],framework:[1,10],free:14,freeli:9,freqmax:36,freqmin:36,frequenc:[1,11,29,33,35],friend:23,friendli:29,from:[1,4,5,7,8,9,11,15,16,19,20,22,23,25,26,27,29,30,33,34],from_iter:1,ftp:26,full:[1,4,7,10,11,19,20,23,28,29,36,37],fulli:[11,29,31],func_arg:19,function_info:19,functioninfo:19,furt:7,further:9,furthermor:[1,6,11,26,27,29,33],futur:[11,14,24,26,29,31,33],gain:23,gather:[1,11],gaussian:30,gcmt:1,gcmt_event_azores_island:1,gcmt_event_near_east_coast_of_honshu:12,gcmt_event_northern_italy_mag_4:[23,25,27,31,32,33,34],gcmt_event_northwestern_balkan_region_mag_5:[23,25,29,31,32,34],gcmt_event_turkey_mag_5:[3,6,8,26],gcmt_event_vancouver_island:36,gener:[1,9,11,12,13,15,16,18,19,20,22,29],geograph:15,geographiclib:14,geojson:14,geophysik:[12,13,15,16,18,19,38],get:[3,5,6,7,8,9,15,16,18,21,23,27,28,29,31,33,36],get_all_channel:7,get_all_channels_at_tim:7,get_all_coordin:4,get_all_ev:3,get_all_stations_for_ev:6,get_available_processing_tag:8,get_available_synthet:8,get_border_latlng_list:15,get_center_angl:15,get_channel_filenam:7,get_coordin:4,get_coordinates_for_st:6,get_data_and_synthetics_iter:6,get_detail:18,get_details_for_filenam:7,get_divisor:16,get_domain_decomposit:16,get_factors_and_multipl:16,get_filename_for_iter:5,get_iteration_dict:5,get_iteration_statu:6,get_long_iteration_nam:5,get_max_extention_of_domain:15,get_metadata_for_fil:8,get_metadata_process:8,get_metadata_processed_for_st:8,get_metadata_raw:8,get_metadata_raw_for_st:8,get_metadata_synthet:8,get_metadata_synthetic_for_st:8,get_nam:19,get_prim:16,get_process_param:[13,36],get_source_time_funct:13,get_spherical_unit_vector:15,get_station_filenam:7,get_stations_for_all_ev:6,get_valu:18,get_waveform_fold:8,get_waveforms_process:8,get_waveforms_raw:8,get_waveforms_synthet:8,getfixtur:[3,4,5,6,7,8],git:14,github:[1,14,22,23],give:[23,29],given:[1,5,6,7,8,13,15,22,23,27,29,33],glob:18,global:[9,22],globalcmt:23,globe:[11,22],gnu:[12,13,15,16,18,19,38],goal:[29,35],good:[23,27,29,31,32],gpl:[12,13,15,16,18,38],gplv3:14,grab:23,gradient:34,grain:16,graphic:33,great:33,greater:1,greenwich:15,ground:9,group:[1,22],guarante:[20,28],guard:15,gui:[1,14],hand:[15,20,28,31],handl:[10,20,22],happen:[22,23,29],has_channel:7,has_ev:3,has_iter:5,have:[1,4,7,8,9,11,14,15,18,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],heavili:37,heavisid:[29,36],height:18,help:[1,16,26,27,33],helper:[5,13,15,19,20],her:14,here:[11,14,18,25,29,30,35,37],hesit:14,hhz:36,high:31,higher:29,highlight:37,highpass:[29,36],highpass_period:29,hinder:10,hire:[22,23,27,29],histogram:1,hit:30,hopefulli:[11,29],horizont:30,hpc:[10,32],html:[12,13,14,15,16,18,19,38],http:[1,12,13,14,15,16,18,19,23,26,38],huge:31,human:11,hurt:[35,36],idea:[29,30,31],ideal:30,ident:[1,29],identifi:[7,14,23,24,29,30],ignor:[11,19,22,27,36],illustr:[9,27],imag:[9,10,18],image_fold:18,imagecach:18,immedi:22,immediatli:7,imped:1,implement:[11,18,36],impli:1,impos:[11,26],imposs:28,improv:10,inaccuraci:15,includ:[1,24,26,27,32,37],incorpor:29,increas:32,increment:[13,29],index:[11,18,38],index_count:18,index_valu:18,indic:[18,28,38],individu:38,infer:22,influenc:[22,26],inform:[1,3,6,7,8],infrastructur:29,ingredi:27,initi:[6,22,29,30,38],inner:[18,22],input:[1,20],input_filenam:36,insert:4,insid:[0,1,33,34,37],inspect:20,instanc:[1,3,4,5,6,7,8],instant:8,instead:14,instruct:14,instrument:[9,24,27,29],integ:18,integr:[6,11,14],intend:[1,14,18,21],interact:[1,21,22,32,36,37],interest:[9,22,24,27],intern:[0,4],interpret:27,interstation_distance_in_m:22,interv:[22,24],introduc:[11,35],inventori:[1,4],inventory_db:4,inventory_db_comm:4,inventorydbcompon:[0,2],invers:[1,9,10,11,20,21,22,23,25,26,27,29,33,35,36],inversion_1:25,inversion_2:25,invert:29,investig:31,invoc:7,ipdb:1,iri:[1,4,9,12,23,26],iris2quakeml:0,iris_single_channel_with_respons:7,is_dissip:29,island:36,issu:[10,11,14,22,23],itali:[23,27],item:[19,22],iteration_1:[5,29,30,32,34],iteration_2:5,iteration_:[32,34],iteration_nam:[1,5,13,29,31,32,34],iteration_xml:[0,5],iteration_xml_filenam:13,iterations_comm:5,iterations_fold:5,iterationscompon:[0,2],itself:11,iu_pab:7,javascript:37,job:31,joblib:14,join:18,jpeg:18,judg:[27,29],jump:33,just:[8,11,14,15,16,19,22,26,27,29,31,32,35,36],justifi:9,keep:[1,9,11,18,22,23,24,26,27,29,30,32,33,35,36],kei:[3,4,5,6,7,8,13,15,33],kept:1,kernel:[1,22,25,34],kilomet:30,know:[1,9,14,23,24,31],known:[1,5],krischer:[1,12,13,14,15,16,18,19,38],kula:6,lagrange_polynomial_degre:29,lambda:[7,8,30],laptop:29,larg:[1,9,10,11,18,27,28,32],larger:27,lasif:0,lasif_project:22,lasif_tutori:22,lasiferror:0,lasifnotfounderror:[0,5,6,8],lasifwarn:0,last:[5,6,8,33],lat2colat:15,lat:[9,15,23],lat_lon_radius_to_xyz:15,late:6,later:[25,29,31,38],latest:[14,36],latitud:[3,4,6,7,8,15,22,23,27,30,36,38],latitudin:[15,16],launch:[1,19,27,28,29,30,33,36],layer:[3,22],learn:22,least:[1,6,21,22],leav:30,left:[29,33],legaci:27,length:38,lesser:19,let:29,level:[8,9,38],leverag:23,licens:[12,13,15,16,18,19,38],like:[22,25,26,29,30,31,36],limit:[1,22,29,33],linear:29,linux:14,lion:[12,13,15,16,18,19,22,38],list:[1,3,5,6,7,8,11,13,14,15,18,19,29,33,36,37,38],list_x:29,lng:[9,23],load:30,loc:14,local:[9,27,37,38],local_depth_in_m:[4,6,7,8,36],locat:[1,7,8,9,14,15,22,23,24,26,27],location_cod:14,location_prior:22,log:[11,22,25,26,29],logfil:19,logic:[24,33],lon:15,long_iteration_nam:8,longitu:15,longitud:[3,4,6,7,8,15,22,23,27,30,36,38],longitudin:16,look:[15,22,25,29,32],loop:38,lot:[6,18,38],lowpass:[29,36],lowpass_period:29,m_pp:[3,36],m_rp:[3,36],m_rr:[3,36],m_rt:[3,36],m_tp:[3,36],m_tt:[3,36],mac:14,machin:[11,14,19,29,30,31],made:22,mag:23,magnitud:[1,3,36],magnitude_typ:[3,36],mai:28,main:[1,29,38],mainli:[1,7,11],mainten:11,major:10,make:[1,5,6,8,11,14,26,28,29,33,36,37,38],mani:[1,10,25,26,28,29],manner:29,manual:[4,9,22,27,32,33,34],map:[1,22,23,33,37],mark:29,master:14,match:[6,22,27],matplotlib:[14,33],matter:27,max_energy_ratio:38,max_lat:15,max_lng:15,max_magnitud:1,max_nois:38,max_noise_window:38,max_period:[1,5,13],max_recommend:16,max_year:1,maxima:38,maximum:[1,5,13,15,16,22,33,38],maximum_depth_in_km:22,maximum_latitud:[15,22],maximum_longitud:[15,22],maximum_period:[36,38],mean:[1,4,7,11,14,18,22,24,29,34],meaning:[6,11],meaningless:1,meantim:26,measur:38,mechan:[1,11,29],memori:30,mention:26,mere:30,meridian:15,messag:[1,16],meta:22,metadata:[8,9,11,22],meter:9,method:[3,7,10,18,23],mid:11,might:[1,14,20,25,28,29,31,32,33,35,36,38],migrat:[1,22],mill:32,million:28,min_cc:38,min_dist:1,min_lat:15,min_length_period:38,min_lng:15,min_magnitud:1,min_peaks_trough:38,min_period:[1,5,13],min_veloc:38,min_year:1,mind:[9,11,22,24,27,29,30,32,35],minim:11,minima:38,minimum:[1,5,13,15,22,33,38],minimum_depth_in_km:22,minimum_latitud:[15,22],minimum_longitud:[15,22],minimum_period:[36,38],minise:[24,25,26,27],minu:[22,23,25],minut:32,misfit:[1,10,11,14,20,25],miss:6,missing_process:6,missing_raw:6,missing_synthet:6,mix:9,mock:14,model:[1,5,10,11,20,22,25,29],modern:[10,37],modifi:[1,18,36,37],modul:[7,11,14,15,38],moment:[1,3,15,23,31],momenttensor:[1,12,23],monitor:18,more:[1,7,9,11,21,22,23,24,25,28,29,30,31,33,35,36,37,38],most:[1,5,6,8,11,13,14,15,21,22,24,26,27,29],mostli:[11,29],mous:33,move:[9,33],mpi4pi:14,mpirun:1,mpp:15,mrp:15,mrr:15,mrt:15,mseed:[8,36],mtp:15,mtt:15,much:[18,22],muenchen:[12,13,15,16,18,19,38],multi:38,multipl:[1,3,14,16,18,24],must:[3,6,7,14,18,23,26,38],mwc:[3,23,27,36],name:[1,3,4,5,6,7,8,13,18,19,22,23],name_of_the_iter:1,namedtupl:19,natur:[10,15,22],ndarrai:38,nearli:29,necessari:[7,11,14,20,22,23,24,26,29,33,36],necessarili:18,need:[1,6,7,8,9,11,14,18,19,22,23,24,25,26,27,29,32,33,35,36],nest:7,net:[8,14],network:[1,7,8,9,14,24,26],network_cod:14,network_st:24,never:[7,11,22,31,32,35],new_iter:1,new_iteration_nam:5,next:[1,4,7,20,22,23,29,33],no_simulation_domain:1,nobrows:1,nois:38,non:[7,11,22,29],none:[1,4,6,7,8,19,29,36],normal:29,normal_simul:[1,31],normalis:38,normalize_whitespac:[3,4,5,6,7,8],north:15,north_data:15,northern:[23,27],nose:14,notabl:9,noth:[4,22],notic:[23,28,29,33],notion:11,now:[11,12,14,18,30,31,32,33,34],npt:[29,36],npts_:29,number:[1,3,5,6,7,11,13,14,15,16,18,19,28,29,33,38],number_of_points_per_sid:15,number_of_time_step:29,numer:[10,29,30,36],numpi:[14,36,38],nversion:[10,11],nx_global:[16,29],ny_glob:[16,29],nz_global:[16,29],object:[1,5,7,8,18,19,36],obspi:[7,11,12,14,25,36],occas:36,occur:19,off:[1,29],offer:[11,29,30,36],offici:[14,36],offset:29,often:10,oftentim:[9,22,28],onc:[4,11,13,19,23,27,29,32,33,35],onli:[1,3,4,5,6,7,8,9,11,14,19,22,23,24,26,27,28,29,32,33],open:[1,7,14,22,29,30,33,37],open_to_outsid:1,oper:[1,11,25,28,33],opinion:11,optim:[1,16,29],option:[1,15,16,22,35],order:[1,14,18,33],orfeu:[4,26],org:[12,13,14,15,16,18,19,26,38],organ:[10,11,29,30],organz:1,origin:[1,9,11,15,22,23,26],origin_tim:[3,36],other:[1,4,6,7,11,14,18,19,22,24,25,27,28,29,31,34,35],otherwis:[1,6,11,14,19,25,26,28,29,35],out:[6,10,21,29,32,36],outlin:15,output:[11,16,22,25,28,29,31,32,33,38],output_directori:29,output_filenam:36,outward:15,over:[29,38],overview:[27,29],own:[11,29],pab:7,packag:[10,14],page:[9,14,22],pair:[15,29],paper:38,paragraph:[1,24],parallel:[0,1],parallel_help:19,param:5,paramet:[3,4,5,6,7,8,13,15,16,18,19,22,26,29,31,38],parent:[1,18],pars:30,part:[11,23,24,25,26,29,33],partial:29,particular:[6,8,9,22,34],particularli:33,partit:33,pass:[1,16,19,36],past:1,path:[4,5,6,7,8,13,18,29],pdf:[22,23,27,29],pep8:14,per:[6,15,18,26,28,29,30,32,33,36,37],perfectli:22,perform:[10,11,15,20,26,29,30,31,32,33],period:[1,5,13,29,38],perturb:30,phase:[33,38],phi:15,physic:[9,11,22,26,27,32],pick:[9,33],pictur:1,piec:[14,22],pip:14,place:[23,24,25,26,27,29,30,31],plai:36,plan:23,platform:32,pleas:[9,11,14,20,21,22,23,24,26,27,28,29,31,32,33,35,36,37,38],plot_kernel:34,plot_model:30,plot_stat:1,pml:22,png:[18,22,23,27,29],point:[6,7,8,14,15,22,24,26,27,29,30,32,33],point_in_domain:6,pole:15,port:1,posit:[1,15,16,30,33],possibl:[5,6,9,11,16,22,24,26,27,29,32,33,34,36],potenti:[1,10,26,28,30],pprint:[5,6,7,8],practic:[10,27],prefer:[11,27,36],prem:30,preparatori:11,preproc:23,preprocess:[1,6,10],preprocessed_:25,preprocessed_hp_0:[25,29,32],preprocessed_hp_:29,preprocessing_funct:36,present:[10,11,26,29,35],press:33,pretti:9,pretty_nam:18,prev:33,prevent:4,previou:[24,31,35],previous:22,primari:21,prime:16,print:[1,5,13,23,30],prioriti:22,probabl:29,problem:[1,9,10,11,24,28],procedur:[9,10],proceed:21,procesing_info:36,process:[1,6,8,9,13,14,19,25,29,34],process_param:36,process_synthet:36,processed_:36,processing_info:36,processing_tag:[13,29],produc:[1,19,31],product:26,profound:36,program:14,progress:38,progressbar:14,project:0,prone:[10,24,31],proof:[11,24],propag:10,proper:[23,33],properli:25,proven:[11,23,29,31,36],provid:[1,12,16,18,23,26,38],pub:26,pure:33,purpos:[23,27,29],put:[24,25,29,34],px_processors_in_theta_direct:29,py_processors_in_phi_direct:29,pyqt:14,pyqtgraph:14,pytest:14,python:[14,16,29],pz_processors_in_r_direct:29,quakeml:[1,3],qualiti:10,quantifi:25,queri:[1,6,26],query_comm:6,querycompon:[0,2],question:[6,9],quick:[16,29],quickli:[1,11],quiet:[5,13],quit:[14,15,30],radial:15,radiu:15,rai:[27,29],rais:[0,5,6,8,9,19,36],ramework:[10,11],random:[3,5],randomev:[6,8],rang:[29,33,35],rank:19,rate:22,rather:[1,23,28,29],ratio:38,raw:[6,8,9,11,23,24,25,26,32,34,36],raycoverag:1,raypath:[1,37],read:[1,18,21,29,36],read_onli:18,read_only_cach:1,readabl:11,readthedoc:14,real:[7,10,22,25,26,29,32,33],realli:[23,38],reason:[1,11,14,15,16,23,26,27,29,36,38],rebuilt:1,receiv:14,recent:[5,6,8,10,14,21],recommend:[1,11,16,24,25],record:[9,15,27,29,37],recurs:[1,14],red:33,redund:26,ref_arrai:38,refer:[11,12,20,21,22,29,31,32,33,38],reflect:[7,20,22,33],regard:29,region:[3,15,22,36],reindex:18,reject:11,rejection_criteria:29,rel:38,relat:[7,11,22,23,37],relax:29,relaxation_parameter_list:29,releas:33,relev:29,reli:37,reliabl:10,remain:[14,35],remaind:1,remov:[1,4,5,7,9,18,29,33],remove_coordinate_less_st:4,renam:23,repeat:29,repetit:[10,31],replac:[24,29],report:28,repositori:14,represent:[11,13,29,33],reproduc:[10,23,31,35,36],request:[4,18,26,27],requir:[1,7,11,12],research:10,resembl:25,reserv:25,reset:[8,33],reset_cached_cach:8,resid:25,resourc:29,resp:[7,9,11,22,24,25,26,27,36],resp_fold:7,respons:[6,7,14,24,25,26,27,29,30,35,36],respositori:14,rest:20,restart:37,restrict:29,restructur:11,result:[1,4,19,27,32,33,34,37],retriev:[4,5,7,8,13],revers:[7,33],rge:10,rho:30,rhoinv:30,right:[14,15,33,34],root:[1,22,25],root_fold:18,rotat:0,rotate_data:15,rotate_lat_lon:15,rotate_moment_tensor:15,rotate_vector:15,rotation_angle_in_degre:[15,22],rotation_axi:15,rotation_axis_i:22,rotation_axis_x:22,rotation_axis_z:22,roughli:22,round:15,routin:26,rsdy:6,rule:[14,22],run:[1,4],runn:19,sac:[8,9,11,24,27],safari:37,salt:16,same:[8,11,16,18,22,24,25,26,29,30,33,35],sampl:[11,22,36],sane:[24,29],saniti:1,save:[4,5,7,12,26,33],save_iter:5,save_station_coordin:4,scale:[1,9,10,11,22,27],scheme:[1,3,7,11,23],screenshot:37,script:0,search:[1,9,12,23],second:[5,18,26,29,33,38],seconds_after_ev:[22,26],seconds_before_ev:[22,26],section:[1,15,22,23,29,31,35],see:[9,11,23,29,32,38],seed:[7,9,11,14,22,24,25,26],seed_fold:7,seen:[10,29],segment:22,seismic:[1,9,10,11,20],seismogram:[15,29],seismomet:27,select:[1,10,33,38],selector:38,self:[18,22,29],send:26,sens:38,separ:[7,14,33],seper:9,seri:[11,29],serial:13,serializ:19,server:[26,37],servic:[4,12,23,26],ses3d:[0,1,5,11],ses3d_2_0:1,ses3d_4_1:[1,5,29,35],ses3d_modul:32,ses3d_setup_help:16,session:36,set:[1,5,9,11,13,16,18,22,25,27,29,31,32,33,35],setup:0,sever:[9,29],shareabl:10,shift:[36,38],ship:[25,32],should:[1,6,7,9,13,14,22,24,25,26,27,28,29,31,32],show:[1,16,22,23,24,33,37],show_progress:18,shown:29,side:15,sigma:30,signatur:36,sigr:6,similar:[32,34,36],simpl:[4,5,16,20,22,27,28,29,30,32,33,36],simpli:[1,23,25,26,29,30,33,34,37],simplifi:[11,28],simul:[1,16,22,29,30,31,32,33,34,36],simulation_paramet:29,simulation_typ:[1,31],simultan:15,singl:[1,7,8,9,25,29,33],site:12,size:[16,18,26,35,37],skip:33,slice:30,slight:[20,23],slightli:9,slow:[1,7,28],slowest:37,small:[9,13,29,30,32,38],smart:28,snide:14,softwar:11,solut:[9,23],solv:28,solver:[1,5,11,13,22,29,31,35],solver_nam:[1,5,13],solver_paramet:29,solver_set:29,some:[1,4,5,14,18,23,25,26,27,28,29,30,31,33,37],someth:[0,9,18,36],sometim:[8,26,36],somewher:[1,15],soon:[1,11,29],sort:[3,7,8,38],sourc:[0,1,3,4,5,6,7,8,10,13,15,16,18,19,20,22,23,25,27],source_time_funct:36,space:[29,31,32],specfem3d_cartesian:1,specfem3d_globe_cem:1,specfem:[11,22],special:25,specif:[1,7,18,26,29],specifi:[1,5,8,11,15,18,22,26,27,29,33],sped:14,speed:[1,10],sphere:15,spheric:[15,22],sphinx:14,sphinx_rtd_them:14,spud:[1,12,23],spudservic:12,sqlite:[4,7,18],sta:[8,14],stabl:14,stackoverflow:[16,38],stage:38,standalon:14,standard:[9,26],start:[11,13,19,22,27,28,29,36,37],start_dat:7,starttim:8,state:[21,32,35,37],station:[1,4,6,7,8,9,11,13,14,20,22,23],station_cach:7,station_cod:14,station_coordin:36,station_fil:7,station_file_avail:1,station_filenam:36,station_id:[4,6,8,14,29],station_latitud:[36,38],station_longitud:[36,38],station_weight:29,stations_comm:7,stationscompon:[0,2],stationxml:[7,9,11,22,24,25,26,27],stationxml_fold:7,statu:[1,6],step:[9,11,22,29,38],stf:36,stf_fct:13,still:8,store:[1,4,7,8,11,12,18,22,23,24,25,27,29,30,32,33,36],str:[3,5,6,7],straight:25,straightforward:[9,31],strategi:[9,28],stream:[8,36],strict:11,string:[6,9,13,19,29],strip:5,strongli:24,strongloi:27,structur:[1,11,13,21,22,25,29,32,37],style:22,subclass:18,subcommand:1,subdirectori:31,subfold:[23,24,25,26,30,36],submiss:31,subsequ:[1,14],subset:9,success:4,successfulli:19,suffer:22,suffici:[14,29],suit:22,suitabl:[9,10,16,22,29,32,35,38],sum:7,sumatra:15,summari:1,superposit:29,support:9,suppos:36,sure:[1,14,22,26,28,29,33,36,37],surprisingli:15,sync:6,synth:23,synthet:[6,8,9],synthetic_trac:[36,38],synthetics_fold:8,system:[10,11,15,22],tackl:[10,11],tag:[6,8,13,23,25,26],tag_or_iter:8,take:[1,5,14,15,16,18,26,28,29,31,32,34,35],taken:[22,33],target:38,task:[9,10],teach:20,techniqu:11,tell:[23,33],temp:22,templat:[5,35],tensor:[1,3,15,23,31],term:[7,29],test:[3,5,6,7],text:[18,33],than:[7,22,38],thank:25,thei:[1,7,9,11,15,21,23,24,26,35],them:[1,4,5,6,9,12,16,18,23,24,27,30,33,34,35,36,37],theme:14,therefor:[15,28,33],theta:15,thi:[1,3,4,5,6,7,8,9,11,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],thing:1,third:29,those:[6,23,38],three:[15,22,24,26,27,33,36],threshold:38,threshold_correl:38,threshold_shift:38,through:1,throughout:14,thu:[3,6,8,9,10,19,20,22,24,28,31,35,36],time:[1,7,8,9,10,11,13,14,18,22,24,25,26,27,28],time_correction_in_:29,time_incr:29,time_window:38,timestamp:7,timestep:29,to_iter:1,togeth:[11,18,29,30,31,33],toi:[20,27,32],toler:9,tomograph:10,too:[1,38],tool:[0,10,11],toolkit:33,top:[25,33,38],toplevel:14,total:[7,16,18,30],total_file_s:7,total_s:18,toward:[11,15],trace:[33,38],traceback:[5,6,8,19],traceback_limit:19,track:[18,23,29,36],transfer:[1,5,35],transpar:11,travers:22,travi:14,treat:[9,24],trend:29,tri:[26,28],trigger:9,trivial:[11,29],true_model:30,tupl:[18,19,36,38],turkei:3,turn:[1,32],tutorialanatolia:25,twice:32,two:[1,21,22,23,24,29,30,32,34,35,38],twofold:11,type:[1,3,6,8,11,18,29,30,31,32,33],undefin:37,under:[3,14],understood:10,unfortun:[22,33],uni:[12,13,15,16,18,19,38],unifi:10,uniqu:29,unit:[1,15,29],unix:22,unpack:24,unphys:22,unprocess:[25,29],unrot:31,until:1,updat:[4,7,10,18,20,25],update_cach:3,upon:[1,18,29,33],upsid:11,url:[1,12,23],usabl:33,usag:[1,12,16,34],useabl:1,user:[9,11,21,22,25,26,29,30],usual:[1,8,9,22,29,33,35],utc:[23,27],utcdatetim:[3,7,8,36],utf:[22,29],util:[10,14,22,29,33],valid:[1,11,20,23],valu:[1,3,4,5,6,7,8,13,18,19,22,29,38],valueerror:5,vancouv:36,variant:29,varieti:9,variou:[33,37,38],vast:10,vector:15,veloc:[30,38],verbos:[1,29,38],veri:[1,3,7,9,10,11,23,27,28,29,30,31,32,36],verifi:[14,31],version:[1,12,13,14,15,16,18,19,22,29,36,38],vertic:[15,29,30],vertical_data:15,via:[6,14,21,23,29],view:[1,30,33,34],viewer:30,visual:[30,32],vsh:30,vsv:30,wai:[1,6,9,10,11,23,24,29,30,33,36,37],walk:1,want:[1,11,14,18,23,29,31,35,36],warn:[0,9,19],watch:29,wave:[10,30],wavefield:[1,22,25,31,32,33,36],waveform:[1,8,9,10,11,20,22,23,24],waveforms_comm:8,waveformscompon:[0,2],web:4,webbrows:1,webinterfac:[1,12,14,37],webpag:23,webrequest:9,webserv:1,webservic:[1,4],websit:[1,14,37],weight:[23,29],well:[1,10,14,24,26],wfs_input_gener:14,what:[1,6,11,14,18,22,23,26,27,29,31,36],what_i:6,whatev:[1,26],when:[1,9,14,15,19,22,29,30],whenev:0,where:[1,7,8,11,14,22,27,29],whether:22,which:[1,6,7,10,11,14,15,16,18,22,23,24,29,30,33,35,36,38],whichev:22,whilst:1,whole:[1,7,38],whose:4,wide:[0,9],width:[18,22],wildcard:22,window:[1,10,14,22,25,30,33],window_picking_funct:36,window_select:0,within:[1,3,9,29,33,37,38],without:[1,29,30],work:[1,3,5,7,9,11,14,15,19,22,23,24,26,27,28,29,30,31,36,38],workflow:[1,10,11,36],workspac:22,world:[10,29],worri:22,worth:[26,31],would:[3,7,14,29],write:[1,13,14,19,36],written:[7,12,13,14,20],wrong:[1,32],www:[12,13,14,15,16,18,19,23,26,38],x_info:29,xdist:14,xml:[1,3,5,7,11,12,13,22,23,24,25,26],xyz_to_lat_lon_radiu:15,year:[1,10],yet:[4,14,24,30],you:[1,7,9,11,12,14,16,18,20,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37],your:[9,14,22,23,25,26,29,30,31,32,33,35,36,37],yourself:[7,14],zero:[22,27],zip:14,zne:36,zoom:22},titles:["API Documentation","Command Line Interface","API Components","EventsComponent","InventoryDBComponent","IterationsComponent","QueryComponent","StationsComponent","WaveformsComponent","How LASIF Finds Coordinates","Welcome to LASIF","Introduction","lasif.scripts.iris2quakeml","lasif.iteration_xml","Installation, Testing &amp; DevInfo","lasif.rotations","SES3D Setup Assistant","lasif.tools","lasif.tools.file_info_cache","lasif.tools.parallel","Tutorial","1. Interfaces","2. Creating a New Project","3. Seismic Events","4. Station Data","5. Waveform Data","6. Download Helpers","7. Data Inspection","8. Data Validation","9. Defining a New Iteration","10. Earth Model Handling","11. Generating SES3D Input Files","12. Synthetics","13. Misfit and Adjoint Source Calculation","14. Model Update","15. Next Iterations","16. Customizing LASIF","Web Interface","lasif.window_selection"],titleterms:{"final":33,"function":[1,16,29,36],"new":[22,29,35],acquisit:1,add_gcmt_ev:1,add_spud_ev:1,adjoint:33,api:[0,2],assist:16,attenu:29,avail:1,build:14,build_all_cach:1,calcul:33,calculate_all_adjoint_sourc:1,calculate_constant_q_model:1,command:[1,21],common:36,compare_misfit:1,compon:2,configur:22,coordin:9,creat:[22,35],create_new_iter:1,create_successive_iter:1,custom:36,data:[1,11,24,25,27,28,29,36],debug:1,defin:29,deriv:35,develop:14,devinfo:14,document:[0,1,14,16],download:26,download_data:1,earth:30,event:[1,23],event_info:1,eventscompon:3,exist:35,featur:36,file:[11,22,29,31],file_info_cach:18,finalize_adjoint_sourc:1,find:9,format:11,from:35,further:11,gener:31,generate_input_fil:1,gui:33,handl:30,helper:26,how:9,info:1,inform:[11,14],init_project:1,input:31,inspect:27,instal:14,interfac:[1,21,37],intern:16,introduct:11,inventorydbcompon:4,iris2quakeml:12,iter:[1,29,35],iteration_info:1,iteration_statu:1,iteration_xml:13,iterationscompon:5,lasif:[1,9,10,12,13,14,15,17,18,19,36,38],launch_misfit_gui:1,launch_model_gui:1,line:[1,21],list_ev:1,list_iter:1,list_kernel:1,list_model:1,manag:1,metadata:26,migrat:35,migrate_window:1,misc:1,misfit:[33,35],miss:11,model:[30,34],mpi:1,name:24,next:35,note:11,parallel:19,pick:36,plot:1,plot_domain:1,plot_ev:1,plot_q_model:1,plot_raydens:1,plot_stf:1,plot_wavefield:1,plot_window:1,preprocess:[29,36],preprocess_data:1,process:36,project:[1,22],quakeml:11,querycompon:6,recap:32,reject:29,remove_empty_coordinate_entri:1,requir:14,rotat:15,run:14,scheme:[24,33],scratch:35,script:12,seismic:23,select_window:1,serv:1,ses3d:[16,31],setup:16,shell:1,sourc:[29,33,36],station:[24,26],stationscompon:7,still:11,support:11,synthet:[11,32,36],terminolog:14,test:14,thing:11,time:[29,36],tool:[17,18,19],tutori:[1,20,24,25],updat:34,valid:28,validate_data:1,waveform:[25,26],waveformscompon:8,web:[21,37],weight:33,welcom:10,window:[35,36],window_select:38,xml:29}})