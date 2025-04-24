# read all the files in _quotations folder. 
# Read line starting with "![". Get the actual article tile from here. It is in between '![' and ']'. 
# Print this actul title name. 
# Find the line which is starting with "title: " and generate new title by  insert this actual title after ":". This is new title.
# Print the new title. 
# Replace the old title with new title. 
# And save update files in folder'..\_quotations\' 


import os

folder = '../_quotations'
files = os.listdir(folder)

for file in files:
    file_path = os.path.join(folder, file)
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    actual_title = None
    title_line_idx = None
    for idx, line in enumerate(lines):
        if line.startswith('!['):
            # Extract title between '![ and ]'
            start = line.find('![') + 2
            end = line.find(']', start)
            if start != -1 and end != -1:
                actual_title = line[start:end].strip()
                # print(f"Actual title in {file}: {actual_title}")
        if line.startswith('title: '):
            title_line_idx = idx
            # print(lines[title_line_idx])
            old_title = lines[title_line_idx].split(':')[1].strip().replace("'","")
            # print(f"Old title in {file}: {old_title}")
            

    if actual_title and title_line_idx is not None:
        # Generate new title line
        new_title_line = f'title: "{actual_title} - {old_title}"\n'
        print(f"New title for {file}: {new_title_line.strip()}\n")
        lines[title_line_idx] = new_title_line
        # print(lines)

        # Save updated file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
