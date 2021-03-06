export default {
  Login: config => {
    console.log('Mock: ' + config.url)
    return {'status': 'success', 'data': { 'token': 'test-token' }, 'code': '0', 'message': ''}
  },
  FreeFilters: config => {
    console.log('Mock: ' + config.url)
    return {'status': 'success', 'data': {'buildings': [[1, '信息馆', 5], [2, '工学分馆', 5], [3, '医学分馆', 5], [4, '总馆', 6]], 'rooms': [[5, '创新学习讨论区', 1, 1], [6, '西自然科学区', 1, 2], [7, '东自然科学区', 1, 2], [8, '西社会科学区', 1, 3], [10, '东社会科学区', 1, 3], [12, '自主学习区', 1, 3], [15, '创新学习苹果区', 1, 1], [16, '创新学习云桌面', 1, 1], [19, '201自科图书区', 2, 2], [20, '204教学参考区', 3, 2], [21, '302中文科技B区', 3, 3], [23, '305科技期刊区', 3, 3], [24, '402中文文科区', 3, 4], [31, '205电阅笔记本区', 2, 2], [32, '301东自科借阅区', 2, 3], [33, '305中自科借阅区', 2, 3], [34, '401东自科借阅区', 2, 4], [35, '405中期刊阅览区', 2, 4], [39, 'A1座位区', 4, 1], [40, 'C1自习区', 4, 1], [51, 'A2', 4, 2], [52, 'A3', 4, 3], [59, 'B2', 4, 2], [60, 'A4', 4, 4], [61, 'A5', 4, 5], [62, 'A1沙发区', 4, 1], [63, 'A1电子阅览室', 4, 1], [66, 'A1苹果区', 4, 1], [68, '205电阅云桌面区', 2, 2]], 'hours': 15, 'dates': ['2018-07-23']}, 'message': '', 'code': '0'}
  },
  RoomStats: config => {
    console.log('Mock: ' + config.url)
    return {'status': 'success', 'data': [{'roomId': 14, 'room': '3C创客双屏电脑', 'floor': 1, 'maxHour': -1, 'reserved': 0, 'inUse': 0, 'away': 0, 'totalSeats': 20, 'free': 0}, {'roomId': 13, 'room': '3C创客电子阅读', 'floor': 1, 'maxHour': -1, 'reserved': 0, 'inUse': 0, 'away': 0, 'totalSeats': 20, 'free': 0}, {'roomId': 4, 'room': '3C创客空间', 'floor': 1, 'maxHour': -1, 'reserved': 0, 'inUse': 0, 'away': 0, 'totalSeats': 110, 'free': 0}, {'roomId': 16, 'room': '创新学习云桌面', 'floor': 1, 'maxHour': -1, 'reserved': 0, 'inUse': 26, 'away': 1, 'totalSeats': 42, 'free': 15}, {'roomId': 15, 'room': '创新学习苹果区', 'floor': 1, 'maxHour': -1, 'reserved': 1, 'inUse': 10, 'away': 0, 'totalSeats': 12, 'free': 1}, {'roomId': 5, 'room': '创新学习讨论区', 'floor': 1, 'maxHour': -1, 'reserved': 0, 'inUse': 14, 'away': 0, 'totalSeats': 64, 'free': 50}, {'roomId': 7, 'room': '东自然科学区', 'floor': 2, 'maxHour': -1, 'reserved': 0, 'inUse': 39, 'away': 5, 'totalSeats': 92, 'free': 48}, {'roomId': 6, 'room': '西自然科学区', 'floor': 2, 'maxHour': -1, 'reserved': 0, 'inUse': 47, 'away': 0, 'totalSeats': 92, 'free': 45}, {'roomId': 10, 'room': '东社会科学区', 'floor': 3, 'maxHour': -1, 'reserved': 0, 'inUse': 32, 'away': 1, 'totalSeats': 84, 'free': 51}, {'roomId': 12, 'room': '自主学习区', 'floor': 3, 'maxHour': -1, 'reserved': 0, 'inUse': 46, 'away': 4, 'totalSeats': 188, 'free': 138}, {'roomId': 8, 'room': '西社会科学区', 'floor': 3, 'maxHour': -1, 'reserved': 0, 'inUse': 29, 'away': 1, 'totalSeats': 88, 'free': 58}, {'roomId': 11, 'room': '东图书阅览区', 'floor': 4, 'maxHour': -1, 'reserved': 0, 'inUse': 0, 'away': 0, 'totalSeats': 80, 'free': 0}, {'roomId': 9, 'room': '西图书阅览区', 'floor': 4, 'maxHour': -1, 'reserved': 0, 'inUse': 0, 'away': 0, 'totalSeats': 88, 'free': 0}], 'message': '', 'code': '0'}
  },
  ValidateToken: config => {
    console.log('Mock: ' + config.url)
    return {'data': [], 'message': null, 'status': true}
  },
  Book: config => {
    console.log('Mock: ' + config.url)
    // return {'status': 'success', 'data': {'id': 3442608, 'receipt': '0175-608-1', 'onDate': '2018 年 07 月 23 日', 'begin': '21 : 30', 'end': '22 : 30', 'location': '信息馆2层东区东自然科学区，座位号009', 'checkedIn': false}, 'message': '', 'code': '0'}
    return {'status': 'fail', 'data': null, 'message': '预约失败，请尽快选择其他时段或座位', 'code': '1'}
  },
  Cancel: config => {
    console.log('Mock: ' + config.url)
    return {'status': 'success', 'data': null, 'message': '', 'code': '0'}
  },
  User: config => {
    console.log('Mock: ' + config.url)
    return {'status': 'success', 'data': {'id': 139600, 'enabled': true, 'name': '罗诗琦', 'username': '2017302590175', 'username2': null, 'status': 'NORMAL', 'lastLogin': '2018-07-21T18:29:35.000', 'checkedIn': true, 'lastIn': '19:34', 'lastOut': '18:28', 'lastInBuildingId': 1, 'lastInBuildingName': '信息馆', 'violationCount': 5}, 'message': '', 'code': '0'}
  },
  History: config => {
    console.log('Mock: ' + config.url)
    return {'status': 'success', 'data': {'reservations': [{'id': 3455821, 'date': '2018-7-27', 'begin': '21:57', 'end': '19:00', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆2层西区西自然科学区042号', 'stat': 'CANCEL'}, {'id': 3455625, 'date': '2018-7-27', 'begin': '18:30', 'end': '19:00', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆2层西区西自然科学区042号', 'stat': 'CANCEL'}, {'id': 3455632, 'date': '2018-7-27', 'begin': '18:30', 'end': '19:00', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆2层西区西自然科学区042号', 'stat': 'CANCEL'}, {'id': 3455591, 'date': '2018-7-27', 'begin': '18:00', 'end': '19:00', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆2层西区西自然科学区042号', 'stat': 'CANCEL'}, {'id': 3442608, 'date': '2018-7-23', 'begin': '21:30', 'end': '22:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆2层东区东自然科学区009号', 'stat': 'CANCEL'}, {'id': 3442606, 'date': '2018-7-23', 'begin': '21:14', 'end': '22:00', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆2层西区西自然科学区066号', 'stat': 'CANCEL'}, {'id': 3438064, 'date': '2018-7-22', 'begin': '14:30', 'end': '18:00', 'awayBegin': '17:33', 'awayEnd': null, 'loc': '信息馆3层东区东社会科学区018号', 'stat': 'COMPLETE'}, {'id': 3435621, 'date': '2018-7-21', 'begin': '20:00', 'end': '22:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆3层东区东社会科学区018号', 'stat': 'STOP'}, {'id': 3435017, 'date': '2018-7-21', 'begin': '14:04', 'end': '22:00', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆3层东区东社会科学区018号', 'stat': 'STOP'}, {'id': 3431464, 'date': '2018-7-20', 'begin': '15:00', 'end': '18:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆2层东区东自然科学区054号', 'stat': 'CANCEL'}, {'id': 3347961, 'date': '2018-7-1', 'begin': '09:00', 'end': '12:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆1层西区3C创客空间104号', 'stat': 'MISS'}, {'id': 3346080, 'date': '2018-6-30', 'begin': '16:03', 'end': '22:30', 'awayBegin': '22:03', 'awayEnd': null, 'loc': '信息馆2层西区西自然科学区021号', 'stat': 'COMPLETE'}, {'id': 3345151, 'date': '2018-6-30', 'begin': '14:30', 'end': '22:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆3层自主学习区172号', 'stat': 'STOP'}, {'id': 3341979, 'date': '2018-6-30', 'begin': '09:00', 'end': '22:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆1层西区3C创客空间103号', 'stat': 'STOP'}, {'id': 3341259, 'date': '2018-6-30', 'begin': '08:30', 'end': '22:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆1层西区3C创客空间103号', 'stat': 'CANCEL'}, {'id': 3338764, 'date': '2018-6-30', 'begin': '08:00', 'end': '22:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆1层西区3C创客空间100号', 'stat': 'CANCEL'}, {'id': 3339195, 'date': '2018-6-30', 'begin': '08:00', 'end': '22:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆1层西区3C创客空间103号', 'stat': 'CANCEL'}, {'id': 3334145, 'date': '2018-6-29', 'begin': '12:00', 'end': '14:00', 'awayBegin': '13:59', 'awayEnd': null, 'loc': '信息馆1层西区3C创客空间017号', 'stat': 'COMPLETE'}, {'id': 3329567, 'date': '2018-6-29', 'begin': '08:00', 'end': '12:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆3层自主学习区094号', 'stat': 'CANCEL'}, {'id': 3331464, 'date': '2018-6-29', 'begin': '08:00', 'end': '12:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆1层西区3C创客空间017号', 'stat': 'STOP'}, {'id': 3326046, 'date': '2018-6-28', 'begin': '18:00', 'end': '22:30', 'awayBegin': '22:19', 'awayEnd': null, 'loc': '信息馆3层自主学习区021号', 'stat': 'COMPLETE'}, {'id': 3308589, 'date': '2018-6-27', 'begin': '08:30', 'end': '12:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆3层自主学习区092号', 'stat': 'CANCEL'}, {'id': 3305612, 'date': '2018-6-27', 'begin': '08:00', 'end': '12:30', 'awayBegin': null, 'awayEnd': null, 'loc': '信息馆3层自主学习区092号', 'stat': 'CANCEL'}]}, 'message': '', 'code': '0'}
  },
  LayoutByDate: config => {
    console.log('Mock: ' + config.url)
    return {'status': 'success',
      'data': {'id': 7,
        'name': '东自然科学区',
        'cols': 23,
        'rows': 24,
        'layout': {'0': {'type': 'empty'},
          '1': {'type': 'empty'},
          '2': {'type': 'empty'},
          '3': {'type': 'empty'},
          '4': {'type': 'empty'},
          '5': {'type': 'empty'},
          '6': {'type': 'empty'},
          '7': {'type': 'empty'},
          '8': {'type': 'empty'},
          '9': {'type': 'empty'},
          '10': {'type': 'empty'},
          '11': {'type': 'empty'},
          '12': {'type': 'empty'},
          '13': {'type': 'empty'},
          '14': {'type': 'empty'},
          '15': {'type': 'empty'},
          '16': {'type': 'empty'},
          '17': {'type': 'empty'},
          '18': {'type': 'empty'},
          '19': {'type': 'empty'},
          '20': {'type': 'empty'},
          '21': {'type': 'empty'},
          '22': {'type': 'empty'},
          '1000': {'type': 'empty'},
          '1001': {'type': 'empty'},
          '1002': {'type': 'empty'},
          '1003': {'type': 'empty'},
          '1004': {'type': 'empty'},
          '1005': {'type': 'empty'},
          '1006': {'type': 'empty'},
          '1007': {'type': 'empty'},
          '1008': {'type': 'empty'},
          '1009': {'id': 5725, 'name': '001', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '1010': {'id': 5726, 'name': '005', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '1011': {'type': 'empty'},
          '1012': {'id': 5728, 'name': '009', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '1013': {'id': 5729, 'name': '016', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '1014': {'type': 'empty'},
          '1015': {'id': 5731, 'name': '017', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '1016': {'id': 5732, 'name': '021', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '1017': {'type': 'empty'},
          '1018': {'type': 'empty'},
          '1019': {'type': 'empty'},
          '1020': {'type': 'empty'},
          '1021': {'type': 'empty'},
          '1022': {'type': 'empty'},
          '2000': {'type': 'empty'},
          '2001': {'type': 'empty'},
          '2002': {'type': 'empty'},
          '2003': {'type': 'empty'},
          '2004': {'type': 'empty'},
          '2005': {'type': 'empty'},
          '2006': {'type': 'empty'},
          '2007': {'type': 'empty'},
          '2008': {'type': 'empty'},
          '2009': {'id': 5746, 'name': '002', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '2010': {'id': 5747, 'name': '006', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '2011': {'type': 'empty'},
          '2012': {'id': 5749, 'name': '010', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '2013': {'id': 5750, 'name': '015', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '2014': {'type': 'empty'},
          '2015': {'id': 5752, 'name': '018', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '2016': {'id': 5753, 'name': '022', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '2017': {'type': 'empty'},
          '2018': {'type': 'empty'},
          '2019': {'type': 'empty'},
          '2020': {'type': 'empty'},
          '2021': {'type': 'empty'},
          '2022': {'type': 'empty'},
          '3000': {'type': 'empty'},
          '3001': {'type': 'empty'},
          '3002': {'type': 'empty'},
          '3003': {'type': 'empty'},
          '3004': {'type': 'empty'},
          '3005': {'type': 'empty'},
          '3006': {'type': 'empty'},
          '3007': {'type': 'empty'},
          '3008': {'type': 'empty'},
          '3009': {'id': 5767, 'name': '003', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '3010': {'id': 5768, 'name': '007', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '3011': {'type': 'empty'},
          '3012': {'id': 5770, 'name': '011', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '3013': {'id': 5771, 'name': '014', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '3014': {'type': 'empty'},
          '3015': {'id': 5773, 'name': '019', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '3016': {'id': 5774, 'name': '023', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '3017': {'type': 'empty'},
          '3018': {'type': 'empty'},
          '3019': {'type': 'empty'},
          '3020': {'type': 'empty'},
          '3021': {'type': 'empty'},
          '3022': {'type': 'empty'},
          '4000': {'type': 'empty'},
          '4001': {'type': 'empty'},
          '4002': {'type': 'empty'},
          '4003': {'type': 'empty'},
          '4004': {'type': 'empty'},
          '4005': {'type': 'empty'},
          '4006': {'type': 'empty'},
          '4007': {'type': 'empty'},
          '4008': {'type': 'empty'},
          '4009': {'id': 5788, 'name': '004', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '4010': {'id': 5789, 'name': '008', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '4011': {'type': 'empty'},
          '4012': {'id': 5791, 'name': '012', 'type': 'seat', 'status': 'AWAY', 'window': false, 'power': true, 'computer': false, 'local': false},
          '4013': {'id': 5792, 'name': '013', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '4014': {'type': 'empty'},
          '4015': {'id': 5794, 'name': '020', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '4016': {'id': 5795, 'name': '024', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '4017': {'type': 'empty'},
          '4018': {'type': 'empty'},
          '4019': {'type': 'empty'},
          '4020': {'type': 'empty'},
          '4021': {'type': 'empty'},
          '4022': {'type': 'empty'},
          '5000': {'type': 'empty'},
          '5001': {'type': 'empty'},
          '5002': {'type': 'empty'},
          '5003': {'type': 'empty'},
          '5004': {'type': 'empty'},
          '5005': {'type': 'empty'},
          '5006': {'type': 'empty'},
          '5007': {'type': 'empty'},
          '5008': {'type': 'empty'},
          '5009': {'type': 'empty'},
          '5010': {'type': 'empty'},
          '5011': {'type': 'empty'},
          '5012': {'type': 'empty'},
          '5013': {'type': 'empty'},
          '5014': {'type': 'empty'},
          '5015': {'type': 'empty'},
          '5016': {'type': 'empty'},
          '5017': {'type': 'empty'},
          '5018': {'type': 'empty'},
          '5019': {'type': 'empty'},
          '5020': {'type': 'empty'},
          '5021': {'type': 'empty'},
          '5022': {'type': 'empty'},
          '6000': {'type': 'empty'},
          '6001': {'type': 'empty'},
          '6002': {'type': 'empty'},
          '6003': {'type': 'empty'},
          '6004': {'type': 'empty'},
          '6005': {'type': 'empty'},
          '6006': {'type': 'empty'},
          '6007': {'type': 'empty'},
          '6008': {'type': 'empty'},
          '6009': {'type': 'empty'},
          '6010': {'type': 'empty'},
          '6011': {'type': 'empty'},
          '6012': {'type': 'empty'},
          '6013': {'type': 'empty'},
          '6014': {'type': 'empty'},
          '6015': {'type': 'empty'},
          '6016': {'type': 'empty'},
          '6017': {'type': 'empty'},
          '6018': {'id': 5839, 'name': '025', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '6019': {'id': 5840, 'name': '027', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '6020': {'id': 5841, 'name': '029', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '6021': {'id': 5842, 'name': '031', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '6022': {'type': 'empty'},
          '7000': {'type': 'empty'},
          '7001': {'type': 'empty'},
          '7002': {'type': 'empty'},
          '7003': {'type': 'empty'},
          '7004': {'type': 'empty'},
          '7005': {'type': 'empty'},
          '7006': {'type': 'empty'},
          '7007': {'type': 'empty'},
          '7008': {'type': 'empty'},
          '7009': {'type': 'empty'},
          '7010': {'type': 'empty'},
          '7011': {'type': 'empty'},
          '7012': {'type': 'empty'},
          '7013': {'type': 'empty'},
          '7014': {'type': 'empty'},
          '7015': {'type': 'empty'},
          '7016': {'type': 'empty'},
          '7017': {'type': 'empty'},
          '7018': {'id': 5860, 'name': '026', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '7019': {'id': 5861, 'name': '028', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '7020': {'id': 5862, 'name': '030', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '7021': {'id': 5863, 'name': '032', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '7022': {'type': 'empty'},
          '8000': {'type': 'empty'},
          '8001': {'type': 'empty'},
          '8002': {'type': 'empty'},
          '8003': {'type': 'empty'},
          '8004': {'type': 'empty'},
          '8005': {'type': 'empty'},
          '8006': {'type': 'empty'},
          '8007': {'type': 'empty'},
          '8008': {'type': 'empty'},
          '8009': {'type': 'empty'},
          '8010': {'type': 'empty'},
          '8011': {'type': 'empty'},
          '8012': {'type': 'empty'},
          '8013': {'type': 'empty'},
          '8014': {'type': 'empty'},
          '8015': {'type': 'empty'},
          '8016': {'type': 'empty'},
          '8017': {'type': 'empty'},
          '8018': {'type': 'empty'},
          '8019': {'type': 'empty'},
          '8020': {'type': 'empty'},
          '8021': {'type': 'empty'},
          '8022': {'type': 'empty'},
          '9000': {'type': 'empty'},
          '9001': {'type': 'empty'},
          '9002': {'type': 'empty'},
          '9003': {'type': 'empty'},
          '9004': {'type': 'empty'},
          '9005': {'type': 'empty'},
          '9006': {'type': 'empty'},
          '9007': {'type': 'empty'},
          '9008': {'type': 'empty'},
          '9009': {'type': 'empty'},
          '9010': {'type': 'empty'},
          '9011': {'type': 'empty'},
          '9012': {'type': 'empty'},
          '9013': {'type': 'empty'},
          '9014': {'type': 'empty'},
          '9015': {'type': 'empty'},
          '9016': {'type': 'empty'},
          '9017': {'type': 'empty'},
          '9018': {'id': 5902, 'name': '033', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '9019': {'id': 5903, 'name': '035', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '9020': {'id': 5904, 'name': '037', 'type': 'seat', 'status': 'AWAY', 'window': false, 'power': true, 'computer': false, 'local': false},
          '9021': {'id': 5905, 'name': '039', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '9022': {'type': 'empty'},
          '10000': {'type': 'empty'},
          '10001': {'type': 'empty'},
          '10002': {'type': 'empty'},
          '10003': {'type': 'empty'},
          '10004': {'type': 'empty'},
          '10005': {'type': 'empty'},
          '10006': {'type': 'empty'},
          '10007': {'type': 'empty'},
          '10008': {'type': 'empty'},
          '10009': {'type': 'empty'},
          '10010': {'type': 'empty'},
          '10011': {'type': 'empty'},
          '10012': {'type': 'empty'},
          '10013': {'type': 'empty'},
          '10014': {'type': 'empty'},
          '10015': {'type': 'empty'},
          '10016': {'type': 'empty'},
          '10017': {'type': 'empty'},
          '10018': {'id': 5923, 'name': '034', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '10019': {'id': 5924, 'name': '036', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '10020': {'id': 5925, 'name': '038', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '10021': {'id': 5926, 'name': '040', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '10022': {'type': 'empty'},
          '11000': {'type': 'empty'},
          '11001': {'type': 'empty'},
          '11002': {'type': 'empty'},
          '11003': {'type': 'empty'},
          '11004': {'type': 'empty'},
          '11005': {'type': 'empty'},
          '11006': {'type': 'empty'},
          '11007': {'type': 'empty'},
          '11008': {'type': 'empty'},
          '11009': {'type': 'empty'},
          '11010': {'type': 'empty'},
          '11011': {'type': 'empty'},
          '11012': {'type': 'empty'},
          '11013': {'type': 'empty'},
          '11014': {'type': 'empty'},
          '11015': {'type': 'empty'},
          '11016': {'type': 'empty'},
          '11017': {'type': 'empty'},
          '11018': {'type': 'empty'},
          '11019': {'type': 'empty'},
          '11020': {'type': 'empty'},
          '11021': {'type': 'empty'},
          '11022': {'type': 'empty'},
          '12000': {'type': 'empty'},
          '12001': {'type': 'empty'},
          '12002': {'type': 'empty'},
          '12003': {'type': 'empty'},
          '12004': {'type': 'empty'},
          '12005': {'type': 'empty'},
          '12006': {'type': 'empty'},
          '12007': {'type': 'empty'},
          '12008': {'type': 'empty'},
          '12009': {'type': 'empty'},
          '12010': {'type': 'empty'},
          '12011': {'type': 'empty'},
          '12012': {'type': 'empty'},
          '12013': {'type': 'empty'},
          '12014': {'type': 'empty'},
          '12015': {'type': 'empty'},
          '12016': {'type': 'empty'},
          '12017': {'type': 'empty'},
          '12018': {'id': 5965, 'name': '041', 'type': 'seat', 'status': 'AWAY', 'window': false, 'power': true, 'computer': false, 'local': false},
          '12019': {'id': 5966, 'name': '043', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '12020': {'id': 5967, 'name': '045', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': false, 'computer': false, 'local': false},
          '12021': {'id': 5968, 'name': '047', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '12022': {'type': 'empty'},
          '13000': {'type': 'empty'},
          '13001': {'type': 'empty'},
          '13002': {'type': 'empty'},
          '13003': {'type': 'empty'},
          '13004': {'type': 'empty'},
          '13005': {'type': 'empty'},
          '13006': {'type': 'empty'},
          '13007': {'type': 'empty'},
          '13008': {'type': 'empty'},
          '13009': {'type': 'empty'},
          '13010': {'type': 'empty'},
          '13011': {'type': 'empty'},
          '13012': {'type': 'empty'},
          '13013': {'type': 'empty'},
          '13014': {'type': 'empty'},
          '13015': {'type': 'empty'},
          '13016': {'type': 'empty'},
          '13017': {'type': 'empty'},
          '13018': {'id': 5986, 'name': '042', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '13019': {'id': 5987, 'name': '044', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': false, 'computer': false, 'local': false},
          '13020': {'id': 5988, 'name': '046', 'type': 'seat', 'status': 'AWAY', 'window': false, 'power': true, 'computer': false, 'local': false},
          '13021': {'id': 5989, 'name': '048', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '13022': {'type': 'empty'},
          '14000': {'type': 'empty'},
          '14001': {'type': 'empty'},
          '14002': {'type': 'empty'},
          '14003': {'type': 'empty'},
          '14004': {'type': 'empty'},
          '14005': {'type': 'empty'},
          '14006': {'type': 'empty'},
          '14007': {'type': 'empty'},
          '14008': {'type': 'empty'},
          '14009': {'type': 'empty'},
          '14010': {'type': 'empty'},
          '14011': {'type': 'empty'},
          '14012': {'type': 'empty'},
          '14013': {'type': 'empty'},
          '14014': {'type': 'empty'},
          '14015': {'type': 'empty'},
          '14016': {'type': 'empty'},
          '14017': {'type': 'empty'},
          '14018': {'type': 'empty'},
          '14019': {'type': 'empty'},
          '14020': {'type': 'empty'},
          '14021': {'type': 'empty'},
          '14022': {'type': 'empty'},
          '15000': {'type': 'empty'},
          '15001': {'type': 'empty'},
          '15002': {'type': 'empty'},
          '15003': {'type': 'empty'},
          '15004': {'type': 'empty'},
          '15005': {'type': 'empty'},
          '15006': {'type': 'empty'},
          '15007': {'type': 'empty'},
          '15008': {'type': 'empty'},
          '15009': {'type': 'empty'},
          '15010': {'type': 'empty'},
          '15011': {'type': 'empty'},
          '15012': {'type': 'empty'},
          '15013': {'type': 'empty'},
          '15014': {'type': 'empty'},
          '15015': {'type': 'empty'},
          '15016': {'type': 'empty'},
          '15017': {'type': 'empty'},
          '15018': {'id': 6028, 'name': '049', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '15019': {'id': 6029, 'name': '051', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '15020': {'id': 6030, 'name': '053', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '15021': {'id': 6031, 'name': '055', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '15022': {'type': 'empty'},
          '16000': {'type': 'empty'},
          '16001': {'type': 'empty'},
          '16002': {'type': 'empty'},
          '16003': {'type': 'empty'},
          '16004': {'type': 'empty'},
          '16005': {'type': 'empty'},
          '16006': {'type': 'empty'},
          '16007': {'type': 'empty'},
          '16008': {'type': 'empty'},
          '16009': {'type': 'empty'},
          '16010': {'type': 'empty'},
          '16011': {'type': 'empty'},
          '16012': {'type': 'empty'},
          '16013': {'type': 'empty'},
          '16014': {'type': 'empty'},
          '16015': {'type': 'empty'},
          '16016': {'type': 'empty'},
          '16017': {'type': 'empty'},
          '16018': {'id': 6049, 'name': '050', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '16019': {'id': 6050, 'name': '052', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '16020': {'id': 6051, 'name': '054', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '16021': {'id': 6052, 'name': '056', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '16022': {'type': 'empty'},
          '17000': {'type': 'empty'},
          '17001': {'type': 'empty'},
          '17002': {'type': 'empty'},
          '17003': {'type': 'empty'},
          '17004': {'type': 'empty'},
          '17005': {'type': 'empty'},
          '17006': {'type': 'empty'},
          '17007': {'type': 'empty'},
          '17008': {'type': 'empty'},
          '17009': {'type': 'empty'},
          '17010': {'type': 'empty'},
          '17011': {'type': 'empty'},
          '17012': {'type': 'empty'},
          '17013': {'type': 'empty'},
          '17014': {'type': 'empty'},
          '17015': {'type': 'empty'},
          '17016': {'type': 'empty'},
          '17017': {'type': 'empty'},
          '17018': {'type': 'empty'},
          '17019': {'type': 'empty'},
          '17020': {'type': 'empty'},
          '17021': {'type': 'empty'},
          '17022': {'type': 'empty'},
          '18000': {'type': 'empty'},
          '18001': {'type': 'empty'},
          '18002': {'type': 'empty'},
          '18003': {'type': 'empty'},
          '18004': {'type': 'empty'},
          '18005': {'type': 'empty'},
          '18006': {'type': 'empty'},
          '18007': {'type': 'empty'},
          '18008': {'type': 'empty'},
          '18009': {'type': 'empty'},
          '18010': {'type': 'empty'},
          '18011': {'type': 'empty'},
          '18012': {'type': 'empty'},
          '18013': {'type': 'empty'},
          '18014': {'type': 'empty'},
          '18015': {'type': 'empty'},
          '18016': {'type': 'empty'},
          '18017': {'type': 'empty'},
          '18018': {'id': 6091, 'name': '057', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '18019': {'id': 6092, 'name': '059', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '18020': {'id': 6093, 'name': '061', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '18021': {'id': 6094, 'name': '063', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '18022': {'type': 'empty'},
          '19000': {'type': 'empty'},
          '19001': {'type': 'empty'},
          '19002': {'type': 'empty'},
          '19003': {'type': 'empty'},
          '19004': {'type': 'empty'},
          '19005': {'type': 'empty'},
          '19006': {'type': 'empty'},
          '19007': {'type': 'empty'},
          '19008': {'type': 'empty'},
          '19009': {'type': 'empty'},
          '19010': {'type': 'empty'},
          '19011': {'type': 'empty'},
          '19012': {'type': 'empty'},
          '19013': {'type': 'empty'},
          '19014': {'type': 'empty'},
          '19015': {'type': 'empty'},
          '19016': {'type': 'empty'},
          '19017': {'type': 'empty'},
          '19018': {'id': 6112, 'name': '058', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '19019': {'id': 6113, 'name': '060', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '19020': {'id': 6114, 'name': '062', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '19021': {'id': 6115, 'name': '064', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '19022': {'type': 'empty'},
          '20000': {'type': 'empty'},
          '20001': {'type': 'empty'},
          '20002': {'type': 'empty'},
          '20003': {'type': 'empty'},
          '20004': {'type': 'empty'},
          '20005': {'type': 'empty'},
          '20006': {'type': 'empty'},
          '20007': {'type': 'empty'},
          '20008': {'type': 'empty'},
          '20009': {'type': 'empty'},
          '20010': {'type': 'empty'},
          '20011': {'type': 'empty'},
          '20012': {'type': 'empty'},
          '20013': {'type': 'empty'},
          '20014': {'type': 'empty'},
          '20015': {'type': 'empty'},
          '20016': {'type': 'empty'},
          '20017': {'type': 'empty'},
          '20018': {'type': 'empty'},
          '20019': {'type': 'empty'},
          '20020': {'type': 'empty'},
          '20021': {'type': 'empty'},
          '20022': {'type': 'empty'},
          '21000': {'type': 'empty'},
          '21001': {'id': 8571, 'name': '065', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21002': {'id': 6138, 'name': '067', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21003': {'type': 'empty'},
          '21004': {'id': 6140, 'name': '069', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21005': {'id': 6141, 'name': '071', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21006': {'id': 6142, 'name': '073', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21007': {'id': 6143, 'name': '075', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21008': {'id': 6144, 'name': '077', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21009': {'id': 6145, 'name': '079', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21010': {'type': 'empty'},
          '21011': {'id': 6147, 'name': '081', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21012': {'id': 6148, 'name': '083', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21013': {'id': 6149, 'name': '085', 'type': 'seat', 'status': 'AWAY', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21014': {'id': 6150, 'name': '087', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21015': {'id': 6151, 'name': '089', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21016': {'id': 6152, 'name': '091', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '21017': {'type': 'empty'},
          '21018': {'type': 'empty'},
          '21019': {'type': 'empty'},
          '21020': {'type': 'empty'},
          '21021': {'type': 'empty'},
          '21022': {'type': 'empty'},
          '22000': {'type': 'empty'},
          '22001': {'id': 8572, 'name': '066', 'type': 'seat', 'status': 'FREE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '22002': {'id': 6159, 'name': '068', 'type': 'seat', 'status': 'IN_USE', 'window': false, 'power': true, 'computer': false, 'local': false},
          '22003': {'type': 'empty'},
          '22004': {'id': 6161, 'name': '070', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22005': {'id': 6162, 'name': '072', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22006': {'id': 6163, 'name': '074', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22007': {'id': 6164, 'name': '076', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22008': {'id': 6165, 'name': '078', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22009': {'id': 6166, 'name': '080', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22010': {'type': 'empty'},
          '22011': {'id': 6168, 'name': '082', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22012': {'id': 6169, 'name': '084', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22013': {'id': 6170, 'name': '086', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22014': {'id': 6171, 'name': '088', 'type': 'seat', 'status': 'IN_USE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22015': {'id': 6172, 'name': '090', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22016': {'id': 6173, 'name': '092', 'type': 'seat', 'status': 'FREE', 'window': true, 'power': true, 'computer': false, 'local': false},
          '22017': {'type': 'empty'},
          '22018': {'type': 'empty'},
          '22019': {'type': 'empty'},
          '22020': {'type': 'empty'},
          '22021': {'type': 'empty'},
          '22022': {'type': 'empty'},
          '23000': {'type': 'empty'},
          '23001': {'type': 'empty'},
          '23002': {'type': 'empty'},
          '23003': {'type': 'empty'},
          '23004': {'type': 'empty'},
          '23005': {'type': 'empty'},
          '23006': {'type': 'empty'},
          '23007': {'type': 'empty'},
          '23008': {'type': 'empty'},
          '23009': {'type': 'empty'},
          '23010': {'type': 'empty'},
          '23011': {'type': 'empty'},
          '23012': {'type': 'empty'},
          '23013': {'type': 'empty'},
          '23014': {'type': 'empty'},
          '23015': {'type': 'empty'},
          '23016': {'type': 'empty'},
          '23017': {'type': 'empty'},
          '23018': {'type': 'empty'},
          '23019': {'type': 'empty'},
          '23020': {'type': 'empty'},
          '23021': {'type': 'empty'},
          '23022': {'type': 'empty'}}},
      'message': '',
      'code': '0'}
  }
}
