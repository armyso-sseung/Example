from openpyxl import load_workbook



def saveCellData(dataCell, load_ws, write_ws, num) :
    day = { '일': 'B', '월': 'C', '화': 'D', '수': 'E', '목': 'F', '금': 'G', '토': 'H' }

    cellArray = []
    tempArray = dataCell.split('\n')
    for data in tempArray :
        for temp in data.split('\t') :
            cellArray.append(temp)


    for data in cellArray :
        cellFirst = day[data[-1]]
        cellTemp = load_ws['{0}{1}'.format(cellFirst, num)].value
        
        result = (str(cellTemp) + '\n' + data).replace('None\n', '')
        write_ws['{0}{1}'.format(cellFirst, num)] = result



path = 'E:/DEV/Education/example/231027/ex.xlsx'

# data_only=True로 해줘야 수식이 아닌 값으로 받아온다.
load_wb = load_workbook(path)

# 시트 이름으로 불러오기 
load_ws = load_wb['Sheet1']

# 시트 쓰기 준비
write_ws = load_wb.active


num = 1
while ( True ) :
    cell = 'A{0}'.format(num)
    cellData = load_ws[cell].value

    if (cellData == None) : break

    saveCellData(cellData, load_ws, write_ws, num)
    num += 1
    
    if (num == 1000) : break

load_wb.save(path)