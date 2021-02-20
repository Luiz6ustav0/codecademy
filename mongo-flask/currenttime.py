from datetime import datetime


def getTime():
    rightnow = datetime.today()
    return rightnow


def getPrettyTime():
    rightnow = datetime.today()
    prettytime = rightnow.ctime()
    return prettytime


yourtime = getTime()
prettytime = getPrettyTime()
