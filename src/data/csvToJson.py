import pandas as pd

# read the CSV file into a pandas dataframe
df_linkedin = pd.read_csv('job_search_csv.csv')
df_indeed = pd.read_csv('indeed_search.csv')
df_wellfound = pd.read_csv('wellfound_search.csv')

# convert the dataframe to JSON and save it to a file
df_linkedin.to_json('linked_jobs.json', orient='records')
df_indeed.to_json('indeed_jobs.json', orient='records')
df_wellfound.to_json('wellfound_jobs.json', orient='records')
