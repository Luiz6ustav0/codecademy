from wtforms import Form, StringField
from wtforms.validators import DataRequired, Regexp


class myForm(Form):
    PlotlyURL = StringField(
        "Provide a raw .ipynb URL from Github",
        validators=[
            DataRequired(),
            Regexp(r".*\.ipynb$", message="Please provide a URL ending in ipynb"),
        ],
    )
