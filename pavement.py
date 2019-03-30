import paver
from paver.easy import *
import paver.setuputils
paver.setuputils.install_distutils_tasks()
import os, sys
from runestone.server import get_dburl
from sphinxcontrib import paverutils
import pkg_resources
from socket import gethostname

sys.path.append(os.getcwd())

home_dir = os.getcwd()
master_url = 'http://127.0.0.1:8000'
master_app = 'runestone'
serving_dir = "./build/Pyzombiscodelens"
dest = "../../static"

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir="./build/Pyzombiscodelens",
        sourcedir="_sources",
        outdir="./build/Pyzombiscodelens",
        confdir=".",
        project_name = "Pyzombiscodelens",
        template_args={'course_id': 'Pyzombiscodelens',
                       'login_required':'false',
                       'appname':master_app,
                       'loglevel': 0,
                       'course_url':master_url,
                       'use_services': 'false',
                       'python3': 'true',
                       'dburl': '',
                       'default_ac_lang': 'python',
                       'basecourse': 'Pyzombiscodelens',
                       'jobe_server': 'http://jobe2.cosc.canterbury.ac.nz',
                       'proxy_uri_runs': '/jobe/index.php/restapi/runs/',
                       'proxy_uri_files': '/jobe/index.php/restapi/files/',
                       'downloads_enabled': 'false',
                       'enable_chatcodes': 'false',
                       'allow_pairs': 'false'
                        }
    )
)

# if we are on runestone-deploy then use the proxy server not canterbury
if gethostname() == 'runestone-deploy':
    del options.build.template_args['jobe_server']
    del options.build.template_args['proxy_uri_runs']
    del options.build.template_args['proxy_uri_files']

version = pkg_resources.require("runestone")[0].version
options.build.template_args['runestone_version'] = version

# If DBURL is in the environment override dburl
options.build.template_args['dburl'] = get_dburl(outer=locals())

from runestone import build  # build is called implicitly by the paver driver.
