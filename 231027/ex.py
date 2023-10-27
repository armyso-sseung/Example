from openpyxl import load_workbook



# 셀 데이터 쓰기 함수
def saveCellData(cell_value) :
    # 전역변수 선언
    global day
    global cell_index
    global load_ws
    global write_ws

    # 날짜 배열 선언
    cell_date_array = cell_value.replace('\n', '\t').split('\t')

    for date in cell_date_array :
        # 컬럼 위치 딕셔너리 통해 가져오기
        cell_column = day[date[-1]]

        # 담겨있는 데이터 가져오기
        cellTemp = load_ws['{0}{1}'.format(cell_column, cell_index)].value
        
        # None 을 없애고 데이터 이어 붙이기
        result = (str(cellTemp) + '\n' + date).replace('None\n', '')

        # 셀에 데이터 넣기
        write_ws['{0}{1}'.format(cell_column, cell_index)] = result

    # 다음 행
    cell_index += 1
    


# 파일 위치 지정 ( 상대경로 ) 및 파일 로드
path = 'ex.xlsx'
load_wb = load_workbook(path)

# 시트 이름으로 불러오기 
load_ws = load_wb['Sheet1']

# 시트 쓰기 준비
write_ws = load_wb.active

# 요일 딕셔너리 정의
day = { '일': 'B', '월': 'C', '화': 'D', '수': 'E', '목': 'F', '금': 'G', '토': 'H' }

# 행 인덱스 선언
cell_index = 1
while ( True ) :
    # 날짜 집합 데이터 셀 확인
    cell = 'A{0}'.format(cell_index)
    cell_value = load_ws[cell].value

    # 빈 셀 조건
    if (cell_value == None or cell_index == 4000) : break

    # 함수 호출
    saveCellData(cell_value)


# 파일저장
load_wb.save(path)




"""
    자신의 엑셀에 적용하기 위한 방법

    1. 35번 줄에 path 를 자신의 파일명(확장자 포함) 으로 변경한다.
    2. 45번 줄에 딕셔너리를 요일에 맞는 컬럼들로 수정을 한다.
    3. 51번 줄에 데이터가 있는 컬럼으로 변경한다 ( ex) A -> J )
"""