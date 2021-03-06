hljs.registerLanguage('vex', function (hljs) {

  //借用JavaScript 获取function的代码
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';

  //借用CPP 获取数字的代码
  var NUMBERS = {
    className: 'vex_number',
    variants: [
      { begin: '\\b(0b[01\']+)' },
      { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)' },
      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
    ],
    relevance: 0
  };

  var SUBST = {
    className: 'vex_subst',
    begin: '\\$\\{', end: '\\}',
    contains: []  // defined later
  };

  var STRING = {
    className: 'vex_string',
    variants: [
      {
        begin: '(u8?|U)?L?"', end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        begin: '(u8?|U)?R"', end: '"',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        begin: '\'\\\\?.', end: '\'',
        illegal: '.'
      }
    ]
  };

  SUBST.contains = [
    // hljs.APOS_STRING_MODE,
    // hljs.QUOTE_STRING_MODE,
    STRING,
    NUMBERS,
    // hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  var TITLE = {
    className: 'vex_title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return {
    name: 'vex',
    aliases: ['Vex', 'vex'],
    keywords: {
      vex_built_in: 'abs accessframe acos addattrib addattribute adddetailattrib addgroup addpoint addpointattrib ' +
        'addprim addprimattrib addvariablename addvertex addvertexattrib addvisualizer agentaddclip agentclipcatalog ' +
        'agentclipchannel agentcliplength agentclipnames agentclipsample agentclipsamplelocal agentclipsamplerate ' +
        'agentclipsampleworld agentcliptimes agentcliptransformgroups agentclipweights agentcollisionlayer ' +
        'agentcurrentlayer agentfindtransformgroup agentlayerbindings agentlayers agentlayershapes ' +
        'agentlocaltransform agentlocaltransforms agentrigchildren agentrigfind agentrigparent agenttransformcount ' +
        'agenttransformgroupmember agenttransformgroups agenttransformgroupweight agenttransformnames ' +
        'agenttransformtolocal agenttransformtoworld agentworldtransform agentworldtransforms albedo alphaname ' +
        'ambient anoise append area argsort array ashikhmin asin assert_enabled assign atan atan2 atof atoi ' +
        'atten attrib attribclass attribsize attribtype attribtypeinfo avg binput blackbody blinn blinnBRDF ' +
        'bouncelabel bouncemask bumpmap bumpmapA bumpmapB bumpmapG bumpmapL bumpmapR bumpname cbrt ceil ch ch2 ' +
        'ch3 ch4 chadd chattr chattrnames chend chendf chendt chexpr chexprf chexprt chf chi chindex chinput ' +
        'chinputlimits chname chnames chnumchan chp chr chramp chrate chreadbuf chremove chremoveattr chrename ' +
        'chresizebuf chs chsetattr chsetlength chsetrate chsetstart chsraw chstart chstartf chstartt chu chv ' +
        'chwritebuf cinput ckspline clamp clip colormap colorname computenormal concat cone cos cosh cracktransform ' +
        'cross cspline ctransform curlnoise curlnoise2d curlxnoise curlxnoise2d cvex_bsdf cwnoise degrees depthmap ' +
        'depthname detail detailattrib detailattribsize detailattribtype detailattribtypeinfo detailintrinsic ' +
        'determinant diffuse diffuseBRDF dihedral dimport distance distance2 dot dsmpixel Du Dv Dw efit eigenvalues ' +
        'endswith environment erf erf_inv erfc error eulertoquaternion eval_bsdf exp expand_udim expandedgegroup ' +
        'expandpointgroup expandprimgroup fastshadow filamentsample file_stat filtershadow filterstep find findattribval ' +
        'findattribvalcount finput fit fit01 fit10 fit11 floor flownoise flowpnoise frac fresnel fromNDC frontface fuzzify ' +
        'fuzzy_and fuzzy_defuzz_centroid fuzzy_nand fuzzy_nor fuzzy_not fuzzy_nxor fuzzy_or fuzzy_xor geoself geounwrap ' +
        'getattrib getattribute getbbox getbbox_center getbbox_max getbbox_min getbbox_size getblurP getbounces getbounds ' +
        'getcomp getcomponents getderiv getfogname getglobalraylevel getgroupid getlight getlightid getlightname getlights ' +
        'getlightscope getlocalcurvature getmaterial getmaterialid getobjectid getobjectname getphotonlight getpointbbox ' +
        'getpointbbox_center getpointbbox_max getpointbbox_min getpointbbox_size getprimid getptextureid getraylevel ' +
        'getrayweight getsamplestore getscope getsmoothP getspace getuvtangents gradient hair hasattrib hasdetailattrib ' +
        'haslight hasmetadata hasplane haspointattrib hasprimattrib hasvertexattrib hedge_dstpoint hedge_dstvertex ' +
        'hedge_equivcount hedge_isequiv hedge_isprimary hedge_isvalid hedge_next hedge_nextequiv hedge_postdstpoint ' +
        'hedge_postdstvertex hedge_presrcpoint hedge_presrcvertex hedge_prev hedge_prim hedge_primary hedge_srcpoint ' +
        'hedge_srcvertex henyeygreenstein hscript_noise hscript_rand hscript_snoise hscript_sturb hscript_turb ' +
        'hsvtorgb iaspect ichname ident idtopoint idtoprim iend iendtime ihasplane import inedgegroup ingroup ' +
        'inpointgroup inprimgroup insert instance interpolate intersect intersect_all intersect_lights inumplanes ' +
        'invert invertexgroup iplaneindex iplanename iplanesize irate irradiance isalpha isbound isconnected isdigit ' +
        'isfinite isframes isnan isotropic israytracing issamples isseconds istart istarttime isuvrendering ' +
        'isvalidindex isvarying itoa ixres iyres join kspline len length length2 lerp lightbounces lightid ' +
        'limit_sample_space limport lkspline log log10 lookat lspline lstrip luminance lumname makebasis ' +
        'maketransform mask_bsdf maskname match matchvex_blinn matchvex_specular mattrib max mdensity metadata ' +
        'metaimport metamarch metanext metastart metaweight min minpos mspace mwnoise nametopoint nametoprim ' +
        'nbouncetypes nearpoint nearpoints nedgesgroup neighbour neighbourcount neighbours newgroup newsampler ' +
        'nextsample ninput ninputs noise noised normal_bsdf normalize normalname npoints npointsgroup nprimitives ' +
        'nprimitivesgroup nrandom ntransform nuniqueval nvertices nverticesgroup occlusion ocean_sample ocio_activedisplays ' +
        'ocio_activeviews ocio_import ocio_roles ocio_spaces ocio_transform onoise opdigits opend opfullpath ' +
        'opparentbonetransform opparenttransform opparmtransform oppreconstrainttransform oppretransform opstart ' +
        'optransform ord osd_facecount osd_firstpatch osd_limitsurface osd_limitsurfacevertex osd_lookupface osd_lookuppatch ' +
        'osd_patchcount osd_patches outerproduct ow_nspace ow_space ow_vspace pack_inttosafefloat pathtrace pcclose pcconvex ' +
        'pcexport pcfarthest pcfilter pcfind pcfind_radius pcgenerate pcimport pcimportbyidx3 pcimportbyidx4 pcimportbyidxf ' +
        'pcimportbyidxi pcimportbyidxp pcimportbyidxs pcimportbyidxv pciterate pcnumfound pcopen pcopenlod pcsampleleaf ' +
        'pcsize pcunshaded pcwrite pgfind phong phongBRDF phonglobe photonmap planeindex planename planepointdistance ' +
        'planesize planesphereintersect pluralize pnoise point pointattrib pointattribsize pointattribtype pointattribtypeinfo ' +
        'pointedge pointhedge pointhedgenext pointname pointprims pointvertex pointvertices polardecomp pop pow ' +
        'predicate_incircle predicate_insphere predicate_orient2d predicate_orient3d prim prim_attribute prim_normal ' +
        'primarclen primattrib primattribsize primattribtype primattribtypeinfo primduv primfind primhedge primintrinsic ' +
        'primpoint primpoints primuv primuvconvert primvertex primvertexcount primvertices print_once printf product ' +
        'ptexture ptlined ptransform push qconvert qdistance qinvert qmultiply qrotate quaternion radians rand ' +
        'random random_fhash random_ihash random_shash random_sobol rawbumpmap rawbumpmapA rawbumpmapB rawbumpmapG ' +
        'rawbumpmapL rawbumpmapR rawcolormap rayhittest rayimport re_find re_findall re_match re_replace re_split ' +
        'reflect reflectlight refract refractlight relativepath relbbox relpointbbox removegroup removeindex ' +
        'removepoint removeprim removevalue renderstate reorder resample_linear resize resolvemissedray reverse ' +
        'rgbtohsv rgbtoxyz rint rotate rotate_x_to rstrip sample_bsdf sample_cauchy sample_cdf sample_circle_arc ' +
        'sample_circle_edge_uniform sample_circle_slice sample_circle_uniform sample_direction_cone sample_direction_uniform ' +
        'sample_discrete sample_exponential sample_geometry sample_hemisphere sample_hypersphere_cone sample_hypersphere_uniform ' +
        'sample_light sample_lognormal sample_lognormal_by_median sample_normal sample_orientation_cone ' +
        'sample_orientation_uniform sample_photon sample_sphere_cone sample_sphere_uniform sampledisk scale scatter ' +
        'select sensor_panorama_create sensor_panorama_getcolor sensor_panorama_getcone sensor_panorama_getdepth ' +
        'sensor_save serialize set setagentclipnames setagentclips setagentcliptimes setagentclipweights ' +
        'setagentcollisionlayer setagentcurrentlayer setagentlocaltransform setagentlocaltransforms ' +
        'setagentworldtransform setagentworldtransforms setattrib setattribtypeinfo setcomp setcurrentlight ' +
        'setdetailattrib setedgegroup setpointattrib setpointgroup setprimattrib setprimgroup setprimintrinsic ' +
        'setprimvertex setsamplestore setvertexattrib setvertexgroup setvertexpoint shadow shadow_light shadowmap ' +
        'shimport shl shr shrz sign simport sin sinh sleep slerp slice slideframe smooth smoothrotation snoise ' +
        'solid_angle solvecubic solvepoly solvequadratic sort specular specularBRDF spline split split_bsdf ' +
        'splitpath sprintf sqrt sssapprox startswith storelightexport strip strlen sum switch swizzle tan ' +
        'tanh tet_adjacent tet_faceindex teximport texprintf texture texture3d texture3dBox titlecase tolower ' +
        'toNDC toupper trace translate translucent transpose trunc tw_nspace tw_space tw_vspace uniqueval ' +
        'unpack_intfromsafefloat unserialize upush uvdist uvintersect uvsample uvunwrap variance velocityname ' +
        'vertex vertexattrib vertexattribsize vertexattribtype vertexattribtypeinfo vertexhedge vertexindex ' +
        'vertexnext vertexpoint vertexprev vertexprim vertexprimindex vnoise volume volumegradient volumeindex ' +
        'volumeindexorigin volumeindextopos volumeindexv volumepostoindex volumeres volumesample volumesamplev ' +
        'volumevoxeldiameter vtransform warning wireblinn wirediffuse wnoise wo_nspace wo_space wo_vspace ' +
        'writepixel wt_nspace wt_space wt_vspace xnoise xnoised xyzdist xyztorgb',
      vex_type: 'int string float vector2 vector vector4 matrix2 matrix3 matrix bsdf light material',
      vex_context: 'chop cop2 cvex displacement fog image3d light pop shadow sop surface',
      vex_operator: '\b(break continue do else foreach forpoints for function gather if illuminance import(?!\s*\() return while)\b'
    },
    illegal: '</',
    contains: [
      // hljs.C_NUMBER_MODE,
      // hljs.APOS_STRING_MODE,
      // hljs.QUOTE_STRING_MODE,
      STRING,
      { // eats variables
        className: 'vex_variable',
        begin: '[isfv][\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)'
      },
      {//借用JavaScript 获取function的代码
        className: 'vex_function',
        begin: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(TITLE, { begin: IDENT_RE }),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      // Object.assign({}, {variants:[]}, hljs.C_LINE_COMMFENT_MODE) ,
      // hljs.C_BLOCK_COMMENT_MODE ,
      {
        className: 'vex_comment',
        begin: '/\\*',
        end: '\\*/',
        contains: [ 'self' ]
      },
      {
        className: 'vex_comment',
        begin: '\/\/',
        end: '\n',
        contains: [ 'self' ]
      },
      // hljs.QUOTE_STRING_MODE,
      NUMBERS
    ]
  };
});
