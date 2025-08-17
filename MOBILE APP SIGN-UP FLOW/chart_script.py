import plotly.graph_objects as go
import pandas as pd

# Data from the provided JSON
data = [
    {"Factor": "Single Field Forms", "Conversion Improvement": 50},
    {"Factor": "Social Login Available", "Conversion Improvement": 30},
    {"Factor": "Progress Indicators", "Conversion Improvement": 15},
    {"Factor": "Mobile Optimization", "Conversion Improvement": 35},
    {"Factor": "Optional Phone Fields", "Conversion Improvement": 37},
    {"Factor": "No Email Verification Required", "Conversion Improvement": 8},
    {"Factor": "No CAPTCHA", "Conversion Improvement": 12},
    {"Factor": "Visual Context/Preview", "Conversion Improvement": 20}
]

# Convert to DataFrame and sort by conversion improvement (ascending for horizontal bar)
df = pd.DataFrame(data)
df = df.sort_values('Conversion Improvement', ascending=True)

# Abbreviate factor names to meet 15 character limit while keeping clarity
factor_abbreviations = {
    "Single Field Forms": "Single Fields",
    "Social Login Available": "Social Login", 
    "Progress Indicators": "Progress Indic",
    "Mobile Optimization": "Mobile Optim",
    "Optional Phone Fields": "Optional Phone",
    "No Email Verification Required": "No Email Verif",
    "No CAPTCHA": "No CAPTCHA",
    "Visual Context/Preview": "Visual Preview"
}

df['Factor_Short'] = df['Factor'].map(factor_abbreviations)

# Define contrasting colors from the brand palette
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F', '#D2BA4C', '#B4413C', '#964325', '#944454']

# Create horizontal bar chart
fig = go.Figure(data=[
    go.Bar(
        x=df['Conversion Improvement'],
        y=df['Factor_Short'],
        orientation='h',
        marker_color=colors[:len(df)],
        cliponaxis=False,
        hovertemplate='<b>%{y}</b><br>Improvement: %{x}%<extra></extra>'
    )
])

# Update layout - title must be under 40 characters per strict instructions
fig.update_layout(
    title="Mobile Signup: Conv Rate Improvements",
    xaxis_title="Improvement %",
    yaxis_title="Optim Factor",
    showlegend=False
)

# Update x-axis to show percentage values
fig.update_xaxes(ticksuffix='%')

# Save as PNG
fig.write_image("mobile_signup_conversion_chart.png")