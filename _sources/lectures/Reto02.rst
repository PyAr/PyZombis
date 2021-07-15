==============
Reto Pergamino
==============

Este reto consiste en descifrar un pergamino a partir de código Python

.. tabbed:: pergamino

    .. tab:: ac_1

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

    
    .. tab:: ac_2

        Estos pergaminos están en el antiguo y misterioso idioma Googlon. Después de muchos años de estudio, 
        los lingüistas ya conocen algunas características de este idioma.
        Primero, las letras de Googlon se clasifican en dos grupos: las letras **z, m, b** se denominan 
        "letras de tipo zombi", mientras que las demás se conocen como "letras de otro tipo".
        Los lingüistas han descubierto que las preposiciones en Googlon son palabras que comienzan con una 
        letra de tipo zombi y terminan con otra letra, es fácil ver que hay 71 preposiciones en el Texto A.

        .. activecode:: ac_r02_2
            :nocodelens:
            :include: ac_r02_1

            **Calcule cuántas preposiciones existen en el texto B.** El resultado asígnelo a la varible 
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


    .. tab:: ac_3

        Otro hecho interesante descubierto por los lingüistas es que, en Googlon, los verbos son siempre 
        palabras de 7 letras que terminan en una letra de tipo otra. Además, si un verbo comienza con
        una letra de tipo otra, el verbo está en primera persona. Así, leyendo el Texto A, es posible 
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
