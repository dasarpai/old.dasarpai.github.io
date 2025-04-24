import os

dirname = "..\_pmbok6hi"
newdirname = '..\_pmbok6hi'

files = os.listdir(dirname)

for file in files:
    file_path = os.path.join(dirname, file)
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        for line in lines[:5]:  # Only check first 5 lines
            if line.strip().startswith('id:'):
                file_id = line.split(':', 1)[1].strip()
                file_id = '0' + file_id
                file_id = file_id[-4:]
                # print(file_id)
                # Assumes filename starts with "YYYY-MM-DD-"
                if len(file) > 11 and file[10] == '-':
                    new_name = f"{file[:11]}{file_id}-{file[11:]}"
                else:
                    new_name = f"{file_id}-{file}"
                new_path = os.path.join(dirname, new_name)
                print(f"Renaming {file_path} -> {new_path}")
                
                if not os.path.exists(newdirname):
                    os.makedirs(newdirname)
                new_path = os.path.join(newdirname, new_name)
                
                with open(file_path, 'r', encoding='utf-8') as source_file:
                    with open(new_path, 'w', encoding='utf-8') as dest_file:
                        dest_file.write(source_file.read())
                break