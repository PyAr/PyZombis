==============
Reto Pergamino
==============

Este reto consiste en descifrar un pergamino a partir de código Python

.. tabbed:: pergamino

    .. tab:: Ejercicio 1

        Primero veamos la estructura de los textos del pergamino.

        .. activecode:: ac_r02_1
            :nocodelens:

            Arqueólogos encontraron un pergamino con los siguientes textos: ``txt_A`` y ``txt_B``.

            ~~~~
            txt_A = '''cncdbm pjcjzct vdbbxdtw rfqsr mkt gvhkcsvw qcxr kmk pnhc zwwdsd pgjjhr 
            lxzscps lmbjjx lgh mdcqlbwx ppzpvfbv vdszkb njv nvmfhshh ztvkmv dfbnht xfpj nlbcwrvv 
            dcrzslrf wzb krdb zndtfmf fwwm vmqzmg cpcnpnww nkjk ncrmzr jfmcl hxr vcj wcptgbc 
            gvbfxtbv wcjlrs psjc lrljqdct ltjwn vmhp wnlmw rkvg rtm djsv rwjls ngc zcjjttpt kbg 
            tdjzcwj pmgtzlng zvtnbs svztn pctgq qnghqcch mclvp qdht cbk lvqckrl qmwknt cqw jfxzx 
            tkljpkfc mjhskxjh lfjvrhr whshcrk kvtgzpl gxglr mpqxtbzb zbrpktxj knhmmtks mhj xdlsm 
            wcc sbrkdjmh gpn vwddsdl mqfsrwt khhmfng qkkjgg qdr qlpt njq xlc jfhhv kgzsb lqncvrh 
            jgw xhjk krprtxf dtrsfb rwtzbhs qbvvz nqbh pdfqlsv hhrrx pvf mdvcfqkt bsb gcnkszfk 
            rkzlhbnx njfqrzxj gtvrwp cmgp qddg gqjjcbjw khlbtg cdswmbgb lmbfvsv nfhvn jbnplx gkh 
            dmp hmnf bzrznlh vqdmjdsb ktbcx fgvsxzp gmv xftg lxtf dcxsrkl tzwvbkfq tpvdrlf khzzw 
            srtfttv lmknq jvkwr bplzzpjw rgtrj gcmdfzdx ksptr jzdfqq xmtzz pkqxrsw gvwg fqppvgk hsc 
            hdj gthkq trxl gkhp rbr skxpc lbkw bbdqpvn llshm bhrfvh gjw zgnlpgwl pdhqn ttjtx vfb 
            djftp kkrr ptmnzqkg tmjlqw pcvpwjb ggd jntktdz vth wtsp mlfmddsn phn hrdqrds phbq 
            vkffrqvt zxljnd lqg blnw brxk skwkh vqbq dlbnhz xpbddsjw gscvghmj pxcpvkmm jsfpllns 
            kpmmgxb pljpvcn wknwbcq wthwv bdjxr wdc lqmtsnrn wbcjprr htldnxcn qwl fvjdqd cwmb bfjmw 
            chv blx xblfrb gjbbg njqw mkmnwtzv dgsxl tgtclv xxcfpp brzxg lbrnrsf pfcpt wmvjxdsw 
            jmstqwx zjcrkzm ndtbsqsh jqbcddqh ggvf kcr mfhllb lbbkssx gsrxcb rwtxljp cwkc xwxjhbc 
            pfcgz zbdbsq wzfsf gqhdfchv cgp kwvnrfm ptmzl bkjcm dpl rskfms mqdgvskt hbtjpvm swff 
            vjq dwlrgxtm kqzrlxz vmpdxkv bwfgzmjn zzrr mlsm kknhkq jhtxc gjvnj mcld vftnnd pgbkhc 
            kzzsbq xqbs hlkxtc xgj vttn zmnc kwhcrd bfjbs lxkmnzx pbmp lnt ztm fkzql bjgllxv 
            bghqpnl hphvdvl lwlqdh xldsnqds tsmrhhtm gnksf lzhr rqm jvcmkbxv nsx cxpplqbq jzrr tnt 
            wpfl lnkfqjt tplwbr hzrv mxqhpg xxzdlwzx cgrtr jbvqmb cmsqdjx qcrx ljxh jbnw lgf tzd 
            cltdd jtmdmt djbgqqk tgsffh hbff jjqn wtlsx qlmhxrrf sklfrc dwsk rgpgqz zhzvm brprszrc 
            hqlgx tdbsgf fkmrtn frskk qjvg jlhpgh rxrmqp nmc dxpx lljs kszjq hlxx nbkvsrf dggshkxz 
            nlvgr zldk tvphkg hlnls wlsxsvf mmksm lzgfnkmg tbw nrpzqfr gfc sxcdqtlt rmmhtmbp jkk 
            fdh jcw nwjjkrdq kztrcqxt lphf frs dcsbhwp tgnq lmq tpppxf vmd tnbqgv xxtlt ljdz hdslhv 
            dkzxctcn qsfctn tdsbdhv dxmkk ghfntj dckqls knlwvk mrddntg fwqwfxs tzqcvz sbnfjs kcxl 
            dsgnhsf kgj mfm vjmmf wptc rtb dtblv frp wwmngbk dxss txz fzlxll lbqjrp hhcxnnhn 
            skhcwxw lllkssb dgwd lzq czhhtclr bpngkf krh bzccxd rqkr mdz phk dfctpgr gkt bdnfbh wlj 
            lfhkmb crbhzfs qzz jbmlsfkx htkmdbx mxjccgv fpj ttl jbw pmnt khqr jhztz dvmj kwchwcv 
            xggzgkln dxz fdsfsc cgpn pphslgf jxsd fsp spzzbc trvpx wjg nmdzgmnr qslm znngdwb zqwb 
            dcgxxcqm kcdwcpdm ngqzs sbst ltqxkt tjgmjzh nmmqnzfn ngsbphqb gsqfgjn jtwhxdx pqc jsfkd 
            ccx dfj wrgf kslnx zgqxqpvm rflzw jgl rsd fshm zlmtqs qfbrdg dknttlb xvqnd gtrpzhwb 
            ngwrbrfk skkfq bzfqkpjj rzp trzz fgmcd ptg wzg mdxlzvkg rfqdh lvwht vkvqhk pdnqm gwpcph 
            qbpsv vhxdj vxf tvpjwzb tjpdp frtvg xrqhp zjqcbxf fpbwbzb whnjkv dqfjwtv mjwrncd xvgkv 
            xrsrjv zdrfjwc lmbtkhch srwg lvq bvrjztfm vwmb rpxwnbrw cmvjrf cdxsgqgs mtrfm wrzct 
            pznlvfk cgcdvbpt cnpqtw sfwsnkkw qjlmkkmv wrsctd lwdbkws qhvszv jzzpb jlgz ftdqspbf 
            vvsvkq znktlpx vcvccs kswfwbzv hwfbd grplms dfvt pmmd nvb tgjpq hgsx qgsvbgws gzrq 
            kmbgdwm tgmwmsc lsmphpk pwpznr mhcskk bmzqtdx pgwd jplzc cbkgf zbmclc tzhqvbt wkq 
            hljqwkz vgclcmdx ggzb vsng tjw ckxtmqx wffrgzp wbht rsqb gqwxpncw mkszj mhlrmd pcl 
            jqjgd rdrphff ftzkqg dgrhmgn zgl plkxf hzdb mmj plphnnv jvvc tlthnhrh ngkgnln nfv rtxct 
            ppsp rcfxhhh mbzkdw smdlrm cstjtb rhhmzvp tqbs szbmqd gbn fjmt fcppm qdgqls gxltm 
            mdrgqdht vxpbxrdj twxcfxk qzj wtfh vglkdghk xtdzrz rjldhzld mbd fgrfb hffjd hcr 
            vghjwkvl pfkjshg rrflt zflwbn xffjdlfs bbzvs wdxmfr fvntg twjhgcc zwvwrnn gcnzl ftfpd 
            wfqxrnzf mbccsd szltzjm kpbslq wxxchz szzh tgq jxnng cmrgdh pdxjxpxr bslbmwm mdkc 
            nqjflf vsrp gbprtv mkfsfcwd zkf pqsq chbb bmt smtkrxjx nfkltv cvhxd zwwx bzqcnzwp wcpn 
            jmqkbclx'''.split()

            txt_B = '''pwbfdmtc jms gswg wvsscb ffq lbrhbn lcxc hcr thc mghts vkgfc nrvfgs dsrdq 
            tcmfz scqskgsl twgzh whts dqt twtksl lcrdlc dpzrl hwlqvc xcfstz rfkvbr bzmvqp qxrs 
            jlmwtcs nmjkkmpg kbcbg shdf qxpm qbm hlcnqnw jwhvvrtr kccw njxtbh hbtn lqmxbx krnn hcv 
            ptqtwp xgnfggb bjdd nfgkxsw kgzcf bgncx rbsfrrcf vjwsjpw jbtcbqm xhhg kfpqcpx bfxlg 
            qddzdv rvfqp hphjhns xhk npdd gsxm ffkbj gwdxkhr ddqmr jnzznp jzsgkb lcgsgjvh xvsbdw 
            klzsxz xpjkjxc gth dtrmkn qzcsksd vsdrhj vtlxg kdtxsj sgs chnz bdllcsdl trggnlpd gwbvj 
            stnhs vqbhj tdhps sgkk mxnswm ghm sqhfcnlk lpwqpn gcgg mjxh prmqclss zfn gplktxj 
            vkjnkkv fzzx vdslwsdk fxt pnbqqbk ksfgcvw hxfq xxd rvqzhmm ctvfgxzv nrzdkx nsxmr 
            bnvkmhcl srvc nczkp zbgsxg nmpx vrqq xfmnsjc zszmrfjv cbwjfldn fgn mzpp crjnct cmh cwh 
            cvdk cslq tvr gggck pfs thfdcpxt fcffvg bwxr bstbzwsx ghhq ldzzlkg zmfkxvms lfn 
            zzzfchrk lktdlrlx wzjcvj nbbkqjt lthk wnxsmnx dzftkjr fqfqcjtd dzsvqbnx zhprp cqlphsk 
            cjvrwg fkhr mxrg tdbxnwrg sdcptlln tjsh vbmd vlgfskcx xtkdp ttjcc qtlmgsh kbndtscg nfw 
            kctx rcltszw hbjr zld npqqm bpcqrhq szzw vbxj ghhmdq nhfptrsg vpkgwcd rkkxqk jhxpngr 
            qnkfd wvcsmb bgnvwqln gfbrqn rjjp dvfqjqsf rspxz cvrjxjq gtps fbg rdp pbzqnc nssd 
            rrpzcwp drfrgjx wvcpw fst frp lmz gbb brzbhlns qsjgzzzp jwvbhl pchqk vhpbdwd mwtlm 
            wbdxk rsfpxl kqt psr bcdktps mrgnflhr fvxsmsbx rqprpvj clnr hdqzjc bndwhjwp fbbkvdhr 
            mlgtjw ntk pxv nsnv jnwp vtksnpbb lpwl rslljk hsd rzfmdp xlbnkbw ptfhnlc jjc dpptqzc 
            jgrt jgxn bgg hslbhksz lhld jfdjq mmttm hwjbnqwv dcxggwhc dcnhhltm fttbf xjnjhgh 
            tchctgjn fvjkmj wkfxqzkx knbhrwgs xmszj smnrwmlv cdbdwsjf grtkzrwh rwmbvt zssswpc cdvr 
            klhtb bhkwfwxm bdjzlg nnw hnw fkm dzxpk fmvx kwfj vbf bgp frfbhk kvqwc skddwrtg 
            brgkfqnf xmwth wrmv rzmjrbfb pkj hckr sfbvz vtfbq fmzf tkhnb srd slkbcmj ppq kxgdbxhh 
            grwpg hxhjznc ttmgnwb lljfz ftkgv fsjmrvcx dljps mtgnc bkwfwfnj npfvr qlgpv hmqhxfpb 
            vvwtkrf nfchzb phmhxkck ngrngr lvd dgbwpk txlttnpb ppldgl wsmngb xtxsblgt xxtctgsj 
            pbvtkm pmcmrmvf phcxvpf wtbfv mvclz dvsl tmzxrrg gbjz dtlsp klmjxg fxh svtlgdl vvlhntpt 
            zgtkjdm lbjrnmt fbbhqvg dwqnsgj bjjcsvms tlpzlxj bcw rtvmzn kjtqpxhw zkvkdxz dcx zqmsnl 
            rvqw kgsh gbwdh wslrbz pfnpqh mgj kgmq hpzmp kpr jgz bksx lvsbxzv qgzf qcgpc pvf xlt 
            znjntxpj stgwsc vxgcfc cbvwhf tbxwpk nbjbkrz rgc wps rjlfpch bxqhw nckdtf bsncq 
            cnsmqxwn mzmlgpp vnxr qgjs vpkpbsn tgmw lbcxxgsf nnmr wbpdssgm nmddl zcbpcbpt twrkx 
            sdqxsnw lntr rzv hgjjksxf qpnnjwl hbcv fkwkbd ncv plr lmpfkk dpcj jzjbjgp bdttl 
            wrrdnmjz mxqxqdxc shztl gdzj rntpnh rjrlrfk rncp qlrhnww rdzhzx qnnxhm gtd lqklxr 
            gpgpqtrc hfhp hxl bnr fpvxzwmx pfrxglb xmchrvwx wbnxl vjxgbs vddhjkq wndwxs mqndvm 
            hvbncjw pbmlw hzjwqn nfgxqmb pfvnpwj xbwknvmr xtm cnxck qnmtrvx kmhj hdfrtd gqz srlml 
            ckx pwlhnpgf rkln tvq vjgrlfs vpvwnjtg wbswcvbh dzcjppjm slt zvxhgq xhcvvc rjd xhqdvhmp 
            nqlnsk hxmjpmnv sjwwc hbjvpw dpmdnz sxpb qznnxl nwnlmbx vdb hgkkwd znsxfqs kqwjtrcg 
            vhbnd rpgtkzz fmt nmzhrrqn qbqbvpsm kqwxr gvp xvrvsdf pxwt vkdns dpf jwnwz mxpwc xdvs 
            drrlpnr xvpztf pxzm jtg fvfgnzx qndpq dmzwnfgm jzknzgk clbpzcpd xhxsqp zbfck btzjd jwbt 
            gwtll kqj wlsdx sdvnw mqpvxk kjdkt frgwz mpqnqr lpj gvc hcdp zpvrdnc ckvmtbvf bddvc 
            mptrq xrzwj lzlbc pvgkrhd wlkdtjz pslzhzhc qmrr crkxcs jtxhfvr qzd fwrgdmjt cmg xvhcb 
            zmllbxs mxg plzxjqlk cwnf mqt hlsssh lvmptxcd zdbsvmll wshnn xzrz xsnhn jhg jtkqhh kcsb 
            bgsfnz mfxmqjn glzb qtwhllw nfkjfn xgw mvssxl hpb vjhlfgld cgfwq qdvjskx ntnhcl ckm 
            rqrsw dpff krrkl mcs xnk jpnx llw ljhqlbhs njdm gph nwmm bcclbzz wjfktwv mgthn kltqfx 
            hqntlps bdr dqtswd vqmkgkb pmznqzh mwgf nndtsx xfrmgqqj mvkfdhh qxp pvpcmx mhnhb slw 
            clvtxn nfpnlr tsssrk rnvdjpc ptkp hrwx zgblvhlj lqrdrz bhtlqhvv mlpkx jsl vlj kbmfjgs 
            ktzb wrnn ztbcph lxccgcxh bkrhjtsl cbmhp hwswwqg rnwqq srhnz fkvl kcnr qbxwpg hnss gjdn 
            rnxhwgd jgngwzc kfvg nwkjt rhjtsvv txk szkpmn nnzbqwgs pjjzqkvx bkw dfcbw rffn qph 
            kckksgp nzn tpqnm znzppsg tvcgnrb zgdsp tqlqrf vjqqxsp pwj pgft cvl cvr cnhgxsd lkd qlw 
            vwtbh mfxs gbgw'''.split()

    
    .. tab:: Ejercicio 2

        Estos pergaminos están en el antiguo y misterioso idioma Googlon. Después de muchos años de estudio, 
        los lingüistas ya conocen algunas características de este idioma.
        Primero, las letras de Googlon se clasifican en dos grupos: las letras **z, m, b** se denominan 
        "letras de tipo zombi", mientras que las demás se conocen como "letras de tipo sobrevivientes".
        Los lingüistas han descubierto que las preposiciones en Googlon son palabras que comienzan con una 
        letra de tipo zombi y terminan con otra letra, es fácil ver que hay 71 preposiciones en el Texto A.

        .. activecode:: ac_r02_2
            :nocodelens:
            :include: ac_r02_1

            **Calcule cuántas preposiciones existen en el texto B.** El resultado asígnelo a la variable 
            ``prep_B``. **Nota**: ``txt_A`` y ``txt_B`` ya están definidas aunque no aparezcan en la ventana 
            de código siguiente.

            ~~~~
            zombi = "zmb"
            prep_B = 0


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(prep_B, 76, "Esperado: Probando que prep_B tenga el valor correcto")


            myTests().main()


    .. tab:: Ejercicio 3

        Otro hecho interesante descubierto por los lingüistas es que, en Googlon, los verbos son siempre 
        palabras de 7 letras que terminan en una letra de tipo sobreviviente. Además, si un verbo comienza con
        una letra de tipo sobreviviente, el verbo está en primera persona. Así, leyendo el Texto A, es posible 
        identificar 84 verbos en el texto, de los cuales 70 están en primera persona.

        .. activecode:: ac_r02_3
            :nocodelens:
            :include: ac_r02_1, ac_r02_2

            Calcule cuántos son los verbos en el Texto B, y asigne ese valor a la variable ``verbos_B``. Después
            calcule cuántos de esos verbos están en primera persona, y asigne ese valor a la variable ``persona_1_B``.
            **Recuerde**: los textos ya están definidos, al igual que la variable ``zombi`` del código anterior.

            ~~~~
            verbos_B = 0
            persona_1_B = 0


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(verbos_B, 86, "Esperado: Probando que verbos_B tenga el valor correcto")
                    self.assertEqual(persona_1_B, 76, "Esperado: Probando que persona_1_B tenga el valor correcto")


            myTests().main()


    .. tab:: Ejercicio 4

        Un profesor universitario utilizará los textos A y B para enseñar Googlon a los estudiantes. 
        Para ayudar a los alumnos a comprender el texto, este profesor necesita crear una lista de 
        vocabulario para cada texto, es decir, una lista ordenada de las palabras que aparecen en cada 
        uno de los textos. Estas listas deben ordenarse. En Googlon, como en nuestro alfabeto, las 
        palabras están ordenadas lexicográficamente, pero el problema es que en Googlon, el orden de 
        las letras en el alfabeto es diferente al nuestro. Su orden es: zmbtshjpnwlrcxkqvdgf. 
        Por lo tanto, al hacer estas listas, el profesor debe respetar el orden alfabético de Googlon.

        .. activecode:: ac_r02_4
            :nocodelens:
            :include: ac_r02_1

            El profesor preparó la lista de vocabulario (ordenada) para el Texto A; obsérvela en la variable 
            ``lista_A``. ¿Cuál sería la lista de vocabulario ordenada del Texto B? Haga un programa que realice 
            esta lista, y la guarde en la variable ``lista_B``. **Recuerde**: los textos ya están definidos como
            en el primer ejercicio (Ejercicio 1).

            ~~~~
            orden = "zmbtshjpnwlrcxkqvdgf"

            lista_A = ['zzrr', 'zmnc', 'zbmclc', 'zbrpktxj', 'zbdbsq', 'ztm', 'ztvkmv', 'zhzvm', 'zjcrkzm', 'zjqcbxf', 'znngdwb', 'znktlpx', 'zndtfmf', 'zwwx', 'zwwdsd', 
            'zwvwrnn', 'zlmtqs', 'zldk', 'zcjjttpt', 'zxljnd', 'zkf', 'zqwb', 'zvtnbs', 'zdrfjwc', 'zgnlpgwl', 'zgl', 'zgqxqpvm', 'zflwbn', 'mmj', 'mmksm', 'mbzkdw', 'mbccsd', 'mbd', 'mtrfm', 'mhj', 'mhlrmd', 'mhcskk', 'mjhskxjh', 'mjwrncd', 'mpqxtbzb', 'mlsm', 'mlfmddsn', 'mrddntg', 'mclvp', 'mcld', 'mxjccgv', 'mxqhpg', 'mkmnwtzv', 'mkt', 'mkszj', 'mkfsfcwd', 'mqdgvskt', 'mqfsrwt', 'mdz', 'mdrgqdht', 'mdcqlbwx', 'mdxlzvkg', 'mdkc', 'mdvcfqkt', 'mfm', 
            'mfhllb', 'bzrznlh', 'bzccxd', 'bzqcnzwp', 'bzfqkpjj', 'bmzqtdx', 'bmt', 'bbzvs', 'bbdqpvn', 'bsb', 'bslbmwm', 'bhrfvh', 'bjgllxv', 'bpngkf', 'bplzzpjw', 'bwfgzmjn', 'blnw', 'blx', 'brzxg', 'brprszrc', 'brxk', 'bkjcm', 'bvrjztfm', 'bdjxr', 'bdnfbh', 'bghqpnl', 'bfjmw', 'bfjbs', 'tzhqvbt', 'tzwvbkfq', 'tzqcvz', 'tzd', 'tmjlqw', 'tbw', 'ttjtx', 'ttl', 'tsmrhhtm', 'tjpdp', 'tjw', 'tjgmjzh', 'tpppxf', 'tplwbr', 'tpvdrlf', 'tnbqgv', 'tnt', 'twjhgcc', 'twxcfxk', 'tlthnhrh', 'trzz', 'trxl', 'trvpx', 'txz', 'tkljpkfc', 'tqbs', 'tvphkg', 'tvpjwzb', 'tdbsgf', 'tdsbdhv', 'tdjzcwj', 'tgmwmsc', 'tgtclv', 'tgsffh', 'tgjpq', 'tgnq', 'tgq', 'szzh', 'szbmqd', 'szltzjm', 'smtkrxjx', 'smdlrm', 'sbst', 'sbnfjs', 'sbrkdjmh', 'spzzbc', 'swff', 'srtfttv', 'srwg', 'sxcdqtlt', 'skhcwxw', 'skwkh', 'sklfrc', 'skxpc', 'skkfq', 'svztn', 'sfwsnkkw', 'hzrv', 'hzdb', 'hmnf', 'hbtjpvm', 'hbff', 'htldnxcn', 'htkmdbx', 'hsc', 'hhrrx', 'hhcxnnhn', 'hphvdvl', 'hwfbd', 'hljqwkz', 'hlnls', 'hlxx', 'hlkxtc', 'hrdqrds', 'hcr', 'hxr', 'hqlgx', 'hdslhv', 'hdj', 'hgsx', 'hffjd', 'jzzpb', 'jzrr', 'jzdfqq', 'jmstqwx', 'jmqkbclx', 'jbmlsfkx', 'jbnplx', 'jbnw', 'jbw', 'jbvqmb', 'jtmdmt', 'jtwhxdx', 'jsfpllns', 'jsfkd', 'jhztz', 'jhtxc', 'jjqn', 'jplzc', 'jntktdz', 'jlhpgh', 'jlgz', 'jcw', 'jxsd', 'jxnng', 'jkk', 'jqbcddqh', 'jqjgd', 'jvcmkbxv', 'jvkwr', 'jvvc', 'jgw', 'jgl', 'jfmcl', 'jfhhv', 'jfxzx', 'pznlvfk', 'pmmd', 'pmnt', 'pmgtzlng', 'pbmp', 'ptmzl', 'ptmnzqkg', 'ptg', 'psjc', 'phbq', 'phn', 'phk', 'pjcjzct', 'ppzpvfbv', 'ppsp', 'pphslgf', 'pnhc', 'pwpznr', 'pljpvcn', 'plphnnv', 'plkxf', 'pctgq', 'pcl', 'pcvpwjb', 'pxcpvkmm', 'pkqxrsw', 'pqsq', 'pqc', 'pvf', 'pdhqn', 'pdnqm', 'pdxjxpxr', 'pdfqlsv', 'pgbkhc', 'pgjjhr', 'pgwd', 'pfcpt', 'pfcgz', 'pfkjshg', 'nmmqnzfn', 'nmc', 'nmdzgmnr', 'nbkvsrf', 'nsx', 'njq', 'njqw', 'njv', 'njfqrzxj', 'nwjjkrdq', 'nlbcwrvv', 'nlvgr', 'nrpzqfr', 'ncrmzr', 'nkjk', 'nqbh', 'nqjflf', 'nvmfhshh', 'nvb', 'ndtbsqsh', 'ngsbphqb', 'ngwrbrfk', 'ngc', 'ngkgnln', 'ngqzs', 'nfhvn', 'nfkltv', 'nfv', 'wzb', 'wzg', 'wzfsf', 'wmvjxdsw', 'wbht', 'wbcjprr', 'wtsp', 'wthwv', 'wtlsx', 'wtfh', 'whshcrk', 'whnjkv', 'wjg', 'wptc', 'wpfl', 'wnlmw', 'wwmngbk', 'wlsxsvf', 'wlj', 'wrzct', 'wrsctd', 'wrgf', 'wcjlrs', 'wcptgbc', 'wcpn', 'wcc', 'wxxchz', 'wknwbcq', 'wkq', 'wdc', 'wdxmfr', 'wfqxrnzf', 'wffrgzp', 'lzhr', 'lzq', 'lzgfnkmg', 'lmbtkhch', 'lmbjjx', 'lmbfvsv', 'lmknq', 'lmq', 'lbbkssx', 'lbrnrsf', 'lbkw', 'lbqjrp', 'ltjwn', 'ltqxkt', 'lsmphpk', 'ljxh', 'ljdz', 'lphf', 'lnt', 'lnkfqjt', 'lwlqdh', 'lwdbkws', 'llshm', 'lljs', 'lllkssb', 'lrljqdct', 'lxzscps', 'lxtf', 'lxkmnzx', 'lqmtsnrn', 'lqncvrh', 'lqg', 'lvwht', 'lvq', 'lvqckrl', 'lgh', 'lgf', 'lfhkmb', 'lfjvrhr', 'rzp', 'rmmhtmbp', 'rbr', 'rtm', 'rtb', 'rtxct', 'rskfms', 'rsqb', 'rsd', 'rhhmzvp', 'rjldhzld', 'rpxwnbrw', 'rwtzbhs', 'rwtxljp', 'rwjls', 'rrflt', 'rcfxhhh', 'rxrmqp', 'rkzlhbnx', 'rkvg', 'rqm', 'rqkr', 'rdrphff', 'rgtrj', 'rgpgqz', 'rflzw', 'rfqsr', 'rfqdh', 'czhhtclr', 
            'cmsqdjx', 'cmrgdh', 'cmvjrf', 'cmgp', 'cbk', 'cbkgf', 'cstjtb', 'chbb', 'chv', 'cpcnpnww', 'cnpqtw', 'cncdbm', 'cwmb', 'cwkc', 'cltdd', 'crbhzfs', 
            'ccx', 'cxpplqbq', 'ckxtmqx', 'cqw', 'cvhxd', 'cdswmbgb', 'cdxsgqgs', 'cgp', 'cgpn', 'cgrtr', 'cgcdvbpt', 'xmtzz', 'xblfrb', 'xtdzrz', 'xhjk', 'xpbddsjw', 'xwxjhbc', 'xlc', 'xldsnqds', 'xrsrjv', 'xrqhp', 'xxzdlwzx', 'xxtlt', 'xxcfpp', 'xqbs', 'xvqnd', 'xvgkv', 'xdlsm', 'xgj', 'xggzgkln', 'xftg', 'xfpj', 'xffjdlfs', 'kzzsbq', 'kztrcqxt', 'kmbgdwm', 'kmk', 'kbg', 'ktbcx', 'kszjq', 'ksptr', 'kswfwbzv', 'kslnx', 'khzzw', 'khhmfng', 'khlbtg', 'khqr', 'kpmmgxb', 'kpbslq', 'knhmmtks', 'knlwvk', 'kwhcrd', 'kwchwcv', 'kwvnrfm', 'krh', 'krprtxf', 'krdb', 'kcr', 'kcxl', 'kcdwcpdm', 'kknhkq', 'kkrr', 'kqzrlxz', 'kvtgzpl', 'kgzsb', 'kgj', 'qzz', 'qzj', 'qmwknt', 'qbpsv', 'qbvvz', 'qslm', 'qsfctn', 'qhvszv', 'qjlmkkmv', 'qjvg', 'qnghqcch', 'qwl', 'qlmhxrrf', 'qlpt', 'qcrx', 'qcxr', 'qkkjgg', 'qdht', 'qdr', 'qddg', 'qdgqls', 'qgsvbgws', 'qfbrdg', 'vmhp', 'vmpdxkv', 'vmqzmg', 'vmd', 'vttn', 
            'vth', 'vsng', 'vsrp', 'vhxdj', 'vjmmf', 'vjq', 'vwmb', 'vwddsdl', 'vcj', 'vcvccs', 'vxpbxrdj', 'vxf', 'vkvqhk', 'vkffrqvt', 'vqbq', 'vqdmjdsb', 'vvsvkq', 'vdbbxdtw', 'vdszkb', 'vghjwkvl', 'vglkdghk', 'vgclcmdx', 'vfb', 'vftnnd', 'dmp', 'dtblv', 'dtrsfb', 'dsgnhsf', 'djbgqqk', 'djsv', 'djftp', 'dpl', 'dwsk', 'dwlrgxtm', 'dlbnhz', 'dcsbhwp', 'dcrzslrf', 'dcxsrkl', 'dckqls', 'dcgxxcqm', 'dxz', 'dxmkk', 'dxss', 'dxpx', 'dkzxctcn', 'dknttlb', 'dqfjwtv', 'dvmj', 'dgsxl', 'dgwd', 'dgrhmgn', 'dggshkxz', 'dfbnht', 'dfj', 'dfctpgr', 'dfvt', 'gzrq', 'gmv', 'gbprtv', 'gbn', 'gthkq', 'gtrpzhwb', 'gtvrwp', 'gsrxcb', 'gscvghmj', 'gsqfgjn', 'ghfntj', 'gjbbg', 'gjw', 'gjvnj', 'gpn', 'gnksf', 'gwpcph', 'grplms', 'gcmdfzdx', 'gcnzl', 'gcnkszfk', 'gxltm', 'gxglr', 'gkt', 'gkh', 'gkhp', 'gqhdfchv', 'gqjjcbjw', 'gqwxpncw', 'gvbfxtbv', 'gvhkcsvw', 'gvwg', 'ggzb', 'ggvf', 'ggd', 'gfc', 'fzlxll', 'ftzkqg', 'ftdqspbf', 'ftfpd', 'fshm', 'fsp', 'fjmt', 'fpbwbzb', 'fpj', 'fwwm', 'fwqwfxs', 'frtvg', 'frs', 'frskk', 'frp', 'fcppm', 'fkzql', 'fkmrtn', 'fqppvgk', 'fvjdqd', 'fvntg', 'fdsfsc', 'fdh', 'fgmcd', 'fgrfb', 'fgvsxzp']

            # Comience aquí su programa
            lista_B = []


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):
                    B = ['zzzfchrk', 'zmllbxs', 'zmfkxvms', 'zbgsxg', 'zbfck', 'ztbcph', 'zszmrfjv', 'zssswpc', 'zhprp', 'zpvrdnc', 'znzppsg', 'znsxfqs', 'znjntxpj', 'zld', 'zcbpcbpt', 'zkvkdxz', 'zqmsnl', 'zvxhgq', 'zdbsvmll', 'zgblvhlj', 'zgtkjdm', 'zgdsp', 'zfn', 'mzmlgpp', 'mzpp', 'mmttm', 'mtgnc', 'mhnhb', 'mjxh', 'mptrq', 'mpqnqr', 'mwtlm', 'mwgf', 'mlpkx', 'mlgtjw', 'mrgnflhr', 'mcs', 'mxpwc', 'mxnswm', 'mxrg', 'mxqxqdxc', 'mxg', 'mqt', 'mqpvxk', 'mqndvm', 
                    'mvssxl', 'mvclz', 'mvkfdhh', 'mgthn', 'mghts', 'mgj', 'mfxmqjn', 'mfxs', 'bzmvqp', 'btzjd', 'bstbzwsx', 'bsncq', 'bhtlqhvv', 'bhkwfwxm', 'bjjcsvms', 'bjdd', 'bpcqrhq', 'bnr', 'bnvkmhcl', 'bndwhjwp', 'bwxr', 'brzbhlns', 'brgkfqnf', 'bcw', 'bcclbzz', 'bcdktps', 'bxqhw', 'bksx', 'bkw', 'bkwfwfnj', 'bkrhjtsl', 'bdttl', 'bdjzlg', 'bdllcsdl', 'bdr', 'bddvc', 'bgsfnz', 'bgp', 'bgncx', 'bgnvwqln', 'bgg', 'bfxlg', 'tmzxrrg', 'tbxwpk', 'ttmgnwb', 'ttjcc', 'tsssrk', 'thc', 'thfdcpxt', 'tjsh', 'tpqnm', 'twtksl', 'twrkx', 'twgzh', 'tlpzlxj', 'trggnlpd', 'tcmfz', 'tchctgjn', 'txlttnpb', 'txk', 'tkhnb', 'tqlqrf', 'tvr', 'tvcgnrb', 'tvq', 'tdbxnwrg', 'tdhps', 'tgmw', 'szzw', 'szkpmn', 'smnrwmlv', 'stnhs', 'stgwsc', 'shztl', 'shdf', 'sjwwc', 'slt', 'slw', 'slkbcmj', 'srhnz', 'srlml', 'srvc', 'srd', 'scqskgsl', 'sxpb', 'skddwrtg', 'sqhfcnlk', 'svtlgdl', 'sdcptlln', 'sdqxsnw', 'sdvnw', 'sgs', 
                    'sgkk', 'sfbvz', 'hzjwqn', 'hmqhxfpb', 'hbtn', 'hbjr', 'hbjvpw', 'hbcv', 'hslbhksz', 'hsd', 'hpzmp', 'hpb', 'hphjhns', 'hnss', 'hnw', 'hwswwqg', 'hwjbnqwv', 'hwlqvc', 'hlsssh', 'hlcnqnw', 'hrwx', 'hcr', 'hckr', 'hcv', 'hcdp', 'hxmjpmnv', 'hxhjznc', 'hxl', 'hxfq', 'hqntlps', 'hvbncjw', 'hdqzjc', 
                    'hdfrtd', 'hgjjksxf', 'hgkkwd', 'hfhp', 'jzsgkb', 'jzjbjgp', 'jzknzgk', 'jms', 'jbtcbqm', 'jtxhfvr', 'jtkqhh', 'jtg', 'jsl', 'jhxpngr', 'jhg', 'jjc', 'jpnx', 'jnzznp', 'jnwp', 'jwbt', 'jwhvvrtr', 'jwnwz', 'jwvbhl', 'jlmwtcs', 'jgz', 'jgngwzc', 'jgrt', 'jgxn', 'jfdjq', 'pmznqzh', 'pmcmrmvf', 'pbzqnc', 'pbmlw', 'pbvtkm', 'ptkp', 'ptqtwp', 'ptfhnlc', 'pslzhzhc', 'psr', 'phmhxkck', 'phcxvpf', 'pjjzqkvx', 'ppldgl', 'ppq', 'pnbqqbk', 'pwbfdmtc', 
                    'pwj', 'pwlhnpgf', 'plzxjqlk', 'plr', 'prmqclss', 'pchqk', 'pxzm', 'pxwt', 'pxv', 'pkj', 'pvpcmx', 'pvgkrhd', 'pvf', 'pgft', 'pfs', 'pfnpqh', 'pfrxglb', 'pfvnpwj', 'nzn', 'nmzhrrqn', 'nmjkkmpg', 'nmpx', 'nmddl', 'nbbkqjt', 'nbjbkrz', 'ntnhcl', 'ntk', 'nssd', 'nsnv', 'nsxmr', 'nhfptrsg', 'njxtbh', 'njdm', 'npqqm', 'npdd', 'npfvr', 'nnzbqwgs', 'nnmr', 'nnw', 'nndtsx', 'nwmm', 'nwnlmbx', 'nwkjt', 'nrzdkx', 'nrvfgs', 'nczkp', 'nckdtf', 'ncv', 'nqlnsk', 'ngrngr', 'nfpnlr', 'nfw', 'nfchzb', 'nfkjfn', 'nfgxqmb', 'nfgkxsw', 'wzjcvj', 'wbswcvbh', 'wbpdssgm', 'wbnxl', 'wbdxk', 'wtbfv', 'wsmngb', 'wshnn', 'wslrbz', 'whts', 'wjfktwv', 'wps', 'wnxsmnx', 'wndwxs', 'wlsdx', 'wlkdtjz', 'wrmv', 'wrnn', 'wrrdnmjz', 'wkfxqzkx', 'wvsscb', 'wvcsmb', 'wvcpw', 'lzlbc', 'lmz', 'lmpfkk', 'lbjrnmt', 'lbrhbn', 'lbcxxgsf', 'lthk', 'lhld', 'ljhqlbhs', 'lpj', 'lpwl', 'lpwqpn', 'lntr', 'lljfz', 'llw', 'lcrdlc', 'lcxc', 'lcgsgjvh', 'lxccgcxh', 'lktdlrlx', 'lkd', 'lqmxbx', 'lqrdrz', 'lqklxr', 'lvmptxcd', 'lvsbxzv', 'lvd', 'ldzzlkg', 'lfn', 'rzmjrbfb', 'rzv', 'rzfmdp', 'rbsfrrcf', 'rtvmzn', 'rspxz', 'rslljk', 'rsfpxl', 'rhjtsvv', 'rjjp', 'rjlfpch', 'rjrlrfk', 'rjd', 'rpgtkzz', 'rntpnh', 'rnwqq', 'rncp', 'rnxhwgd', 'rnvdjpc', 'rwmbvt', 'rrpzcwp', 'rcltszw', 'rkln', 'rkkxqk', 'rqprpvj', 'rqrsw', 'rvqzhmm', 'rvqw', 'rvfqp', 'rdzhzx', 'rdp', 'rgc', 'rfkvbr', 'rffn', 'cmh', 'cmg', 'cbmhp', 'cbwjfldn', 'cbvwhf', 'ctvfgxzv', 'cslq', 'chnz', 'cjvrwg', 'cnsmqxwn', 'cnhgxsd', 'cnxck', 'cwh', 'cwnf', 'clbpzcpd', 'clnr', 'clvtxn', 'crjnct', 'crkxcs', 'ckm', 'ckx', 'ckvmtbvf', 'cqlphsk', 'cvl', 'cvr', 'cvrjxjq', 'cvdk', 'cdbdwsjf', 'cdvr', 'cgfwq', 'xzrz', 'xmszj', 'xmwth', 'xmchrvwx', 'xbwknvmr', 'xtm', 'xtxsblgt', 'xtkdp', 'xsnhn', 'xhhg', 'xhcvvc', 'xhxsqp', 'xhk', 'xhqdvhmp', 'xjnjhgh', 'xpjkjxc', 'xnk', 'xlbnkbw', 'xlt', 'xrzwj', 'xcfstz', 'xxtctgsj', 'xxd', 'xvsbdw', 'xvhcb', 'xvpztf', 'xvrvsdf', 'xdvs', 'xgnfggb', 'xgw', 'xfmnsjc', 'xfrmgqqj', 'kmhj', 'kbmfjgs', 'kbndtscg', 'kbcbg', 'ktzb', 'ksfgcvw', 'kjtqpxhw', 'kjdkt', 'kpr', 'knbhrwgs', 'kwfj', 'klzsxz', 'klmjxg', 'kltqfx', 'klhtb', 'krnn', 'krrkl', 'kctx', 'kcsb', 'kcnr', 'kccw', 'kckksgp', 'kxgdbxhh', 'kqt', 'kqj', 'kqwjtrcg', 'kqwxr', 'kvqwc', 'kdtxsj', 'kgzcf', 'kgmq', 'kgsh', 'kfpqcpx', 'kfvg', 'qznnxl', 'qzcsksd', 'qzd', 'qmrr', 'qbm', 'qbxwpg', 'qbqbvpsm', 'qtwhllw', 'qtlmgsh', 'qsjgzzzp', 'qph', 'qpnnjwl', 'qnmtrvx', 'qnnxhm', 'qnkfd', 'qndpq', 'qlw', 'qlrhnww', 'qlgpv', 'qcgpc', 'qxp', 'qxpm', 'qxrs', 'qdvjskx', 'qddzdv', 'qgzf', 'qgjs', 'vbmd', 'vbxj', 'vbf', 'vtlxg', 'vtksnpbb', 'vtfbq', 'vsdrhj', 'vhbnd', 'vhpbdwd', 'vjhlfgld', 'vjwsjpw', 'vjxgbs', 'vjqqxsp', 'vjgrlfs', 'vpkpbsn', 'vpkgwcd', 'vpvwnjtg', 'vnxr', 'vwtbh', 'vlj', 'vlgfskcx', 'vrqq', 'vxgcfc', 'vkjnkkv', 'vkdns', 'vkgfc', 'vqmkgkb', 'vqbhj', 'vvwtkrf', 'vvlhntpt', 'vdb', 'vdslwsdk', 'vddhjkq', 'dzsvqbnx', 'dzcjppjm', 'dzxpk', 'dzftkjr', 'dmzwnfgm', 'dtlsp', 'dtrmkn', 'dsrdq', 'dpzrl', 'dpmdnz', 'dpptqzc', 'dpcj', 'dpf', 'dpff', 'dwqnsgj', 'dljps', 'drrlpnr', 'drfrgjx', 'dcnhhltm', 'dcx', 'dcxggwhc', 'dqt', 'dqtswd', 'dvsl', 'dvfqjqsf', 'ddqmr', 'dgbwpk', 'dfcbw', 'gbb', 'gbjz', 'gbwdh', 'gbgw', 'gth', 'gtps', 'gtd', 'gswg', 'gsxm', 'ghm', 'ghhmdq', 'ghhq', 'gjdn', 'gph', 'gplktxj', 'gpgpqtrc', 'gwbvj', 'gwtll', 'gwdxkhr', 'glzb', 'grtkzrwh', 'grwpg', 'gcgg', 'gqz', 'gvp', 'gvc', 'gdzj', 'gggck', 'gfbrqn', 'fzzx', 'fmzf', 'fmt', 'fmvx', 'fbbhqvg', 'fbbkvdhr', 'fbg', 'fttbf', 'ftkgv', 'fst', 'fsjmrvcx', 'fpvxzwmx', 'fwrgdmjt', 'frp', 'frgwz', 'frfbhk', 'fcffvg', 'fxt', 'fxh', 'fkm', 'fkhr', 'fkwkbd', 'fkvl', 'fqfqcjtd', 'fvjkmj', 'fvxsmsbx', 'fvfgnzx', 'fgn', 'ffkbj', 'ffq']
                    self.assertEqual(lista_B, B, "Probando que lista_B tenga el valor correcto")


            myTests().main()

        
    .. tab:: Ejercicio 5

        Pero, ¿cómo escriben los Googlons los números? Bueno, en Googlon, las palabras también son 
        números dados en base 20, donde cada letra es un dígito. En Googlon, la primera posición es 
        la unidad y corresponde a la letra de hasta la izquierda de la palabra, la segunda posición 
        tiene un valor de 20, la tercera de 400 y así sucesivamente.
        Los valores de las letras se dan en el orden en que aparecen en el alfabeto Googlon (que es
        diferente de nuestro orden, como vimos anteriormente). Es decir, la primera letra del alfabeto
        Googlon, que es la z, representa el dígito 0, la segunda representa el dígito 1, y así sucesivamente.
            
        Por ejemplo, la palabra ``zmbzmb`` tiene un valor numérico de ``6560820``. La explicación es la siguiente:
        En el albafeto Googlon, las letras ``z`` ``m`` y ``b`` son las tres primeras. Si representamos esa
        palabra en dígitos según las reglas anteriores, éste sería su valor: ``012012``. Como último paso hace falta
        convertirlo a base 20. Según las reglas anteriores, la conversión se hace de la siguiente forma:
        :math:`(0 * 1) + (1 * 20) + (2 * 20^2) + (0 * 20^3) + (1 * 20^4) + (2 * 20^5) = 6560820`

        .. activecode:: ac_r02_5
            :nocodelens
            :include: ac_r02_1, ac_r02_4

            Los Googlons consideran un número mágico (muy raro) si satisface una propiedad: el valor numérico 
            es divisible por 42 (respuesta para todo) y todos los dígitos son distintos entre sí. Al considerar 
            el Texto A como una lista de números (es decir, interpretar cada palabra como un número usando la 
            convención explicada anteriormente), notamos que hay 8 números mágicos:
            **kpbslq, gtrpzhwb, ghfntj, ljdz, gthkq, lbqjrp, jplzc** y **gjw**.

            Y en el Texto B, ¿cuántos números mágicos hay y cuáles son? Guarde en la variable ``num_magicos``
            la cantidad de números mágicos que hay en el Texto B, y en la variable ``magia`` guarde cuales son. 
            **Recuerde**: Los textos ya están definidos, al igual que la variable ``orden`` del ejercicio anterior.

            ~~~~
            def base_20(num):
                """Esta función convierte una palabra a su valor numérico"""
                p20 = 1
                n = 0
                for c in num:
                    n += orden.find(c) * p20
                    p20 *= 20
                return n

            num_magicos = 0
            magia = []


            ====
            from unittest.gui import TestCaseGui


            class myTests(TestCaseGui):
                def testOne(self):

                    self.assertEqual(num_magicos, 6, "Probando que num_magicos tenga el valor correcto")
                    self.assertEqual(
                        magia,
                        ["vbxj", "jnwp", "cdvr", "bksx", "jtg", "gjdn"],
                        "Probando que magia tenga el valor correcto",
                    )


            myTests().main()