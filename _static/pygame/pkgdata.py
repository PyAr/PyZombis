"""pkgdata is a simple, extensible way for a package to acquire data file 
resources.

The getResource function is equivalent to the standard idioms, such as
the following minimal implementation::
    
    import sys, os

    def getResource(identifier, pkgname=__name__):
        pkgpath = os.path.dirname(sys.modules[pkgname].__file__)
        path = os.path.join(pkgpath, identifier)
        return file(os.path.normpath(path), mode='rb')

When a __loader__ is present on the module given by __name__, it will defer
getResource to its get_data implementation and return it as a file-like
object (such as StringIO).
"""

__all__ = ['getResource']
import sys
import os

#from cStringIO import StringIO
from io import StringIO

try:
    # Try to use setuptools if available.
    from pkg_resources import resource_stream
    _have_resource_stream = True
except ImportError:
    _have_resource_stream = False

def getResource(identifier, pkgname=__name__):
    """Acquire a readable object for a given package name and identifier.

    An IOError will be raised if the resource can not be found.

    For example::

        mydata = getResource('mypkgdata.jpg').read()

    Note that the package name must be fully qualified, if given, such
    that it would be found in sys.modules.

    In some cases, getResource will return a real file object.  In that
    case, it may be useful to use its name attribute to get the path
    rather than use it as a file-like object.  For example, you may
    be handing data off to a C API.
    """

    # Prefer setuptools
    if _have_resource_stream:
        return resource_stream(pkgname, identifier)

    mod = sys.modules[pkgname]
    fn = getattr(mod, '__file__', None)
    if fn is None:
        raise IOError("%r has no __file__!")
    path = os.path.join(os.path.dirname(fn), identifier)
    loader = getattr(mod, '__loader__', None)
    if loader is not None:
        try:
            data = loader.get_data(path)
        except IOError:
            pass
        else:
            return StringIO(data)
    #return file(os.path.normpath(path), 'rb')
    return open(os.path.normpath(path), 'rb')
