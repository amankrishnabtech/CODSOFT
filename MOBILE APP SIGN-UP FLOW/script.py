import pandas as pd

# Create a comprehensive dataset of mobile signup flow statistics
mobile_signup_stats = pd.DataFrame([
    {'Metric': 'Average Mobile Form Abandonment Rate', 'Value': '27% higher than desktop', 'Category': 'Abandonment'},
    {'Metric': 'Simplified Mobile Form Completion', 'Value': '63% higher completion rates', 'Category': 'Optimization'},
    {'Metric': 'SaaS Signup Flow Drop-off', 'Value': '64% of users drop off', 'Category': 'Abandonment'},
    {'Metric': 'Form Length Impact', 'Value': '27% abandon due to length', 'Category': 'Abandonment'},
    {'Metric': 'Security Concerns', 'Value': '29% abandon due to security', 'Category': 'Abandonment'},
    {'Metric': 'Social Login Conversion Boost', 'Value': '20-40% increase', 'Category': 'Social Login'},
    {'Metric': 'Social Login Adoption Growth', 'Value': '190% increase in 2 months', 'Category': 'Social Login'},
    {'Metric': 'Single Field Form Improvement', 'Value': '50% conversion increase', 'Category': 'Optimization'},
    {'Metric': 'Optional Phone Field Impact', 'Value': '37% fewer abandonments', 'Category': 'Optimization'},
    {'Metric': 'Mobile vs Desktop Preference', 'Value': '3% prefer mobile forms vs 84% desktop', 'Category': 'User Preference'},
    {'Metric': 'Progress Indicator Impact', 'Value': '15% reduction in abandonment', 'Category': 'Optimization'},
    {'Metric': 'Mobile Optimization Benefit', 'Value': '35% higher completion rates', 'Category': 'Optimization'},
    {'Metric': 'Email Verification Delay', 'Value': '8% improvement when delayed', 'Category': 'Optimization'},
    {'Metric': 'CAPTCHA Impact', 'Value': '12% higher abandonment with CAPTCHA', 'Category': 'Abandonment'},
    {'Metric': 'Form Completion Time', 'Value': '47% abandon if over 3 minutes', 'Category': 'Abandonment'},
    {'Metric': 'Multi-step vs Single-step', 'Value': '68% abandon complex forms', 'Category': 'Abandonment'},
    {'Metric': 'Mobile Cart Abandonment', 'Value': '85.2% mobile vs 70% overall', 'Category': 'Mobile Specific'},
    {'Metric': 'Google Social Login Dominance', 'Value': '90.8% of social authentications', 'Category': 'Social Login'},
    {'Metric': 'Apple Social Login Share', 'Value': '8.8% of social authentications', 'Category': 'Social Login'},
    {'Metric': 'Mobile Traffic Share', 'Value': '37.8% of all logins', 'Category': 'Mobile Specific'}
])

# Save to CSV for potential use
mobile_signup_stats.to_csv('mobile_signup_flow_statistics.csv', index=False)

# Display the data
print("Mobile App Signup Flow Statistics Summary:")
print("=" * 50)
print(mobile_signup_stats.to_string(index=False))
print(f"\nTotal statistics compiled: {len(mobile_signup_stats)}")
print(f"Categories covered: {mobile_signup_stats['Category'].nunique()}")
print(f"Categories: {', '.join(mobile_signup_stats['Category'].unique())}")