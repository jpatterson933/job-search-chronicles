import pandas as pd

# read the CSV file into a pandas dataframe
df = pd.read_csv('job_search_csv.csv')

# convert the dataframe to JSON and save it to a file
df.to_json('linked_jobs.json', orient='records')
