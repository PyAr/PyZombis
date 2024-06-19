from docutils import nodes
from docutils.parsers.rst import Directive


class PyScriptDirective(Directive):
    has_content = True

    def run(self):
        self.assert_has_content()
        code = '\n'.join(self.content)

        # Create the necessary HTML and JavaScript code for the PyScript
        html = f'''
        <div>
            <iframe height="600px" width="100%" srcdoc='
                <!DOCTYPE html>
                    <html>
                    <head>
                        <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
                        <script defer src="https://pyscript.net/latest/pyscript.js"></script>
                        <style>
                            .py-repl-run-button{{opacity: 1;}}
                            .py-repl-output{{margin-top: 1rem;background-color: #000;color: #fff;font-family: monospace;padding: 0.5rem;min-height: 10em;overflow: auto;}}
                        </style>
                    </head>
                    <body>
                        <py-config>
                            terminal = false
                            packages = ["pandas", "matplotlib", "numpy"]
                        </py-config>
                        <py-repl id="code">
                            {code}
                        </py-repl>
                    </body>
                    </html>'
                    style="border: 8px solid #ccc;border-radius: 10px;"
                >
            </iframe>
        </div>
        '''

        # Create a raw node that will contain the HTML and JavaScript code
        raw_node = nodes.raw('', html, format='html')

        return [raw_node]


def setup(app):
    app.add_directive('pyscript', PyScriptDirective)