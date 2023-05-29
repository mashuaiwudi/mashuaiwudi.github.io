var ground_truth_AIRoles = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
var ai_prediction = [[0, 4, 1, 3, 2], [0, 4, 1, 3, 2], [0, 1, 4, 3, 2], [0, 1, 4, 3, 2], [1, 0, 3, 2, 4], [1, 0, 4, 3, 2], [0, 1, 4, 3, 2], [1, 0, 2, 4, 3], [2, 3, 1, 0, 4], [2, 3, 4, 1, 0], [2, 3, 1, 4, 0], [2, 3, 4, 1, 0], [3, 2, 4, 1, 0], [3, 2, 4, 1, 0], [2, 3, 1, 4, 0], [3, 1, 0, 4, 2], [4, 0, 1, 3, 2], [4, 0, 1, 3, 2], [4, 0, 1, 3, 2], [4, 0, 1, 3, 2]]


var Elevation_features = [3242, 3262, 3159, 3289, 2719, 2957, 3146, 2949, 2301, 2240, 2297, 2197, 2456, 2366, 2224, 2750, 3264, 3323, 3300, 3248]

var Aspect_features = [232, 201, 121, 99, 112, 118, 26, 163, 347, 345, 3, 351, 311, 24, 22, 338, 67, 121, 307, 182]

var Slope_features = [13, 19, 7, 14, 11, 10, 6, 16, 24, 33, 10, 33, 22, 20, 27, 23, 13, 15, 5, 6]

var Horizontal_Distance_To_Hydrology_features = [67, 85, 324, 67, 228, 150, 180, 382, 134, 228, 170, 0, 400, 256, 424, 277, 382, 277, 150, 283]

var Vertical_Distance_To_Hydrology_features = [67, 85, 324, 67, 228, 150, 180, 382, 134, 228, 170, 0, 400, 256, 424, 277, 382, 277, 150, 283]

var Horizontal_Distance_To_Roadways_features = [2307, 3437, 480, 6041, 1410, 1921, 2873, 4511, 297, 1061, 750, 752, 794, 430, 488, 1744, 2594, 1825, 4929, 4268]

var Hillshade_9am_features = [198, 208, 232, 242, 239, 238, 217, 233, 166, 136, 207, 145, 153, 205, 193, 163, 233, 244, 206, 222]

var Hillshade_Noon_features = [251, 253, 234, 221, 228, 231, 227, 243, 193, 169, 221, 167, 218, 193, 173, 201, 213, 227, 237, 244]

var Hillshade_3pm_features = [189, 173, 135, 106, 118, 122, 146, 135, 160, 158, 152, 148, 202, 119, 105, 173, 110, 108, 170, 157]

var Horizontal_Distance_To_Fire_Points_features = [3006, 603, 5608, 573, 3745, 2735, 1015, 459, 1024, 577, 636, 594, 1182, 1200, 190, 1434, 3248, 2753, 3159, 2281]


var features_Spruce =  [['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_Noon > 236.00', 'Hillshade_3pm > 172.00', '135.00 < Aspect <= 286.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '190.00 < Hillshade_9am <= 215.00', 'Horizontal_Distance_To_Hydrology <= 90.00', '10.00 < Slope <= 15.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_3pm > 172.00', '135.00 < Aspect <= 286.00', 'Hillshade_Noon > 236.00', '190.00 < Hillshade_9am <= 215.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '15.00 < Slope <= 21.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Roadways <= 853.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '60.00 < Aspect <= 135.00', 'Slope <= 10.00', '223.00 < Hillshade_Noon <= 236.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_3pm <= 116.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_9am > 231.00', '10.00 < Slope <= 15.00', '60.00 < Aspect <= 135.00', '207.00 < Hillshade_Noon <= 223.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Horizontal_Distance_To_Hydrology <= 90.00'], ['2474.00 < Elevation <= 2899.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_9am > 231.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', '10.00 < Slope <= 15.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '223.00 < Hillshade_Noon <= 236.00', '60.00 < Aspect <= 135.00', '116.00 < Hillshade_3pm <= 143.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '60.00 < Aspect <= 135.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '223.00 < Hillshade_Noon <= 236.00', 'Slope <= 10.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Slope <= 10.00', '215.00 < Hillshade_9am <= 231.00', '223.00 < Hillshade_Noon <= 236.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Aspect <= 60.00', '143.00 < Hillshade_3pm <= 172.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Hillshade_9am > 231.00', '135.00 < Aspect <= 286.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Hydrology > 361.00', '116.00 < Hillshade_3pm <= 143.00', '15.00 < Slope <= 21.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_Noon <= 207.00', 'Hillshade_9am <= 190.00', 'Aspect > 286.00', '143.00 < Hillshade_3pm <= 172.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', 'Slope > 21.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00'], ['Elevation <= 2474.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Hillshade_9am <= 190.00', 'Hillshade_Noon <= 207.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Slope > 21.00', '143.00 < Hillshade_3pm <= 172.00', 'Aspect > 286.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Aspect <= 60.00', '190.00 < Hillshade_9am <= 215.00', 'Slope <= 10.00', '143.00 < Hillshade_3pm <= 172.00', '207.00 < Hillshade_Noon <= 223.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_9am <= 190.00', 'Hillshade_Noon <= 207.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Vertical_Distance_To_Hydrology <= 9.00', 'Slope > 21.00', 'Aspect > 286.00', 'Horizontal_Distance_To_Hydrology <= 90.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Hillshade_3pm > 172.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_9am <= 190.00', 'Slope > 21.00', 'Aspect > 286.00', '207.00 < Hillshade_Noon <= 223.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Horizontal_Distance_To_Hydrology > 361.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Aspect <= 60.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_Noon <= 207.00', '190.00 < Hillshade_9am <= 215.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '116.00 < Hillshade_3pm <= 143.00', '15.00 < Slope <= 21.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_Noon <= 207.00', 'Aspect <= 60.00', 'Hillshade_3pm <= 116.00', 'Slope > 21.00', '190.00 < Hillshade_9am <= 215.00', 'Horizontal_Distance_To_Hydrology > 361.00'], ['2474.00 < Elevation <= 2899.00', 'Hillshade_3pm > 172.00', 'Hillshade_9am <= 190.00', '1348.00 < Horizontal_Distance_To_Fire_Points <= 2224.00', 'Slope > 21.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Aspect > 286.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Hillshade_Noon <= 207.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_9am > 231.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', '10.00 < Slope <= 15.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Horizontal_Distance_To_Hydrology > 361.00', '207.00 < Hillshade_Noon <= 223.00', 'Hillshade_3pm <= 116.00', '60.00 < Aspect <= 135.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_9am > 231.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', '60.00 < Aspect <= 135.00', 'Hillshade_3pm <= 116.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '10.00 < Slope <= 15.00', '223.00 < Hillshade_Noon <= 236.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_Noon > 236.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Slope <= 10.00', '143.00 < Hillshade_3pm <= 172.00', '190.00 < Hillshade_9am <= 215.00', 'Aspect > 286.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_Noon > 236.00', '135.00 < Aspect <= 286.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '215.00 < Hillshade_9am <= 231.00', 'Slope <= 10.00', '143.00 < Hillshade_3pm <= 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00']]


var features_Lodgepole =  [['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Hillshade_Noon > 236.00', '135.00 < Aspect <= 286.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '190.00 < Hillshade_9am <= 215.00', 'Hillshade_3pm > 172.00', '10.00 < Slope <= 15.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Horizontal_Distance_To_Roadways > 2771.00', '135.00 < Aspect <= 286.00', 'Hillshade_Noon > 236.00', '190.00 < Hillshade_9am <= 215.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Hillshade_3pm > 172.00', '15.00 < Slope <= 21.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Roadways <= 853.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '60.00 < Aspect <= 135.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '223.00 < Hillshade_Noon <= 236.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Slope <= 10.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_9am > 231.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Hillshade_3pm <= 116.00', 'Horizontal_Distance_To_Roadways > 2771.00', '207.00 < Hillshade_Noon <= 223.00', '60.00 < Aspect <= 135.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '10.00 < Slope <= 15.00'], ['2474.00 < Elevation <= 2899.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '10.00 < Slope <= 15.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', '60.00 < Aspect <= 135.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '223.00 < Hillshade_Noon <= 236.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '223.00 < Hillshade_Noon <= 236.00', 'Slope <= 10.00', '60.00 < Aspect <= 135.00'], ['2899.00 < Elevation <= 3229.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Aspect <= 60.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '143.00 < Hillshade_3pm <= 172.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Slope <= 10.00', '215.00 < Hillshade_9am <= 231.00', '223.00 < Hillshade_Noon <= 236.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', '135.00 < Aspect <= 286.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '15.00 < Slope <= 21.00', 'Vertical_Distance_To_Hydrology > 80.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Aspect > 286.00', 'Hillshade_Noon <= 207.00', 'Hillshade_9am <= 190.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', 'Slope > 21.00', '143.00 < Hillshade_3pm <= 172.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', 'Slope > 21.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Hillshade_Noon <= 207.00', 'Hillshade_9am <= 190.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Aspect > 286.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Aspect <= 60.00', '207.00 < Hillshade_Noon <= 223.00', '190.00 < Hillshade_9am <= 215.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Slope <= 10.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Hillshade_Noon <= 207.00', 'Hillshade_9am <= 190.00', 'Slope > 21.00', 'Vertical_Distance_To_Hydrology <= 9.00', '143.00 < Hillshade_3pm <= 172.00', 'Aspect > 286.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Aspect > 286.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Hillshade_9am <= 190.00', '207.00 < Hillshade_Noon <= 223.00', 'Hillshade_3pm > 172.00', 'Slope > 21.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways <= 853.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '15.00 < Slope <= 21.00', 'Hillshade_Noon <= 207.00', 'Aspect <= 60.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '116.00 < Hillshade_3pm <= 143.00', '190.00 < Hillshade_9am <= 215.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_Noon <= 207.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Slope > 21.00', 'Hillshade_3pm <= 116.00', '190.00 < Hillshade_9am <= 215.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Aspect <= 60.00'], ['2474.00 < Elevation <= 2899.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_Noon <= 207.00', 'Aspect > 286.00', 'Slope > 21.00', 'Hillshade_9am <= 190.00', '1348.00 < Horizontal_Distance_To_Fire_Points <= 2224.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Hillshade_3pm > 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Horizontal_Distance_To_Hydrology > 361.00', '207.00 < Hillshade_Noon <= 223.00', '60.00 < Aspect <= 135.00', 'Hillshade_3pm <= 116.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Hillshade_9am > 231.00', '10.00 < Slope <= 15.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_9am > 231.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '60.00 < Aspect <= 135.00', '223.00 < Hillshade_Noon <= 236.00', '10.00 < Slope <= 15.00', 'Hillshade_3pm <= 116.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_Noon > 236.00', '143.00 < Hillshade_3pm <= 172.00', 'Aspect > 286.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Slope <= 10.00', '190.00 < Hillshade_9am <= 215.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_Noon > 236.00', '135.00 < Aspect <= 286.00', 'Slope <= 10.00', '143.00 < Hillshade_3pm <= 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '215.00 < Hillshade_9am <= 231.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Horizontal_Distance_To_Roadways > 2771.00']]


var features_Ponderosa =  [['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Hydrology <= 90.00', '190.00 < Hillshade_9am <= 215.00', '135.00 < Aspect <= 286.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '10.00 < Slope <= 15.00', 'Hillshade_3pm > 172.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Hydrology <= 90.00', '135.00 < Aspect <= 286.00', '190.00 < Hillshade_9am <= 215.00', 'Hillshade_3pm > 172.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '15.00 < Slope <= 21.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Slope <= 10.00', 'Hillshade_9am > 231.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '60.00 < Aspect <= 135.00', '223.00 < Hillshade_Noon <= 236.00', '116.00 < Hillshade_3pm <= 143.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Hillshade_3pm <= 116.00', 'Hillshade_9am > 231.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '207.00 < Hillshade_Noon <= 223.00', '60.00 < Aspect <= 135.00', '10.00 < Slope <= 15.00'], ['Horizontal_Distance_To_Fire_Points > 2224.00', '2474.00 < Elevation <= 2899.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', '10.00 < Slope <= 15.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '60.00 < Aspect <= 135.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '223.00 < Hillshade_Noon <= 236.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '116.00 < Hillshade_3pm <= 143.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Hillshade_9am > 231.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', '60.00 < Aspect <= 135.00', 'Slope <= 10.00', '223.00 < Hillshade_Noon <= 236.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Slope <= 10.00', 'Aspect <= 60.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '223.00 < Hillshade_Noon <= 236.00', '215.00 < Hillshade_9am <= 231.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '143.00 < Hillshade_3pm <= 172.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Horizontal_Distance_To_Hydrology > 361.00', '135.00 < Aspect <= 286.00', 'Hillshade_Noon > 236.00', 'Hillshade_9am > 231.00', '116.00 < Hillshade_3pm <= 143.00', '15.00 < Slope <= 21.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Slope > 21.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Hillshade_Noon <= 207.00', 'Aspect > 286.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', 'Hillshade_9am <= 190.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Hillshade_Noon <= 207.00', 'Slope > 21.00', 'Aspect > 286.00', 'Hillshade_9am <= 190.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Aspect <= 60.00', '143.00 < Hillshade_3pm <= 172.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Slope <= 10.00', '207.00 < Hillshade_Noon <= 223.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '190.00 < Hillshade_9am <= 215.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Vertical_Distance_To_Hydrology <= 9.00', 'Hillshade_Noon <= 207.00', 'Slope > 21.00', 'Hillshade_9am <= 190.00', 'Aspect > 286.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Horizontal_Distance_To_Hydrology > 361.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Slope > 21.00', 'Hillshade_3pm > 172.00', 'Hillshade_9am <= 190.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '207.00 < Hillshade_Noon <= 223.00', 'Aspect > 286.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Aspect <= 60.00', 'Hillshade_Noon <= 207.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '190.00 < Hillshade_9am <= 215.00', '15.00 < Slope <= 21.00', '116.00 < Hillshade_3pm <= 143.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Slope > 21.00', 'Aspect <= 60.00', 'Hillshade_Noon <= 207.00', 'Hillshade_3pm <= 116.00', '190.00 < Hillshade_9am <= 215.00'], ['2474.00 < Elevation <= 2899.00', 'Slope > 21.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '1348.00 < Horizontal_Distance_To_Fire_Points <= 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_9am <= 190.00', 'Hillshade_Noon <= 207.00', 'Hillshade_3pm > 172.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Aspect > 286.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Hillshade_9am > 231.00', '207.00 < Hillshade_Noon <= 223.00', '60.00 < Aspect <= 135.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_3pm <= 116.00', '10.00 < Slope <= 15.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_9am > 231.00', '60.00 < Aspect <= 135.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '10.00 < Slope <= 15.00', 'Hillshade_3pm <= 116.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '223.00 < Hillshade_Noon <= 236.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_Noon > 236.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '190.00 < Hillshade_9am <= 215.00', 'Slope <= 10.00', 'Aspect > 286.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_Noon > 236.00', 'Slope <= 10.00', '135.00 < Aspect <= 286.00', '143.00 < Hillshade_3pm <= 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '215.00 < Hillshade_9am <= 231.00']]


var features_Douglas =  [['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Horizontal_Distance_To_Hydrology <= 90.00', '135.00 < Aspect <= 286.00', 'Hillshade_Noon > 236.00', '190.00 < Hillshade_9am <= 215.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '10.00 < Slope <= 15.00', 'Hillshade_3pm > 172.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways > 2771.00', '135.00 < Aspect <= 286.00', 'Hillshade_Noon > 236.00', 'Hillshade_3pm > 172.00', '190.00 < Hillshade_9am <= 215.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '15.00 < Slope <= 21.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_9am > 231.00', 'Horizontal_Distance_To_Roadways <= 853.00', '60.00 < Aspect <= 135.00', '223.00 < Hillshade_Noon <= 236.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Slope <= 10.00', '116.00 < Hillshade_3pm <= 143.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_9am > 231.00', 'Horizontal_Distance_To_Roadways > 2771.00', '10.00 < Slope <= 15.00', '207.00 < Hillshade_Noon <= 223.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '60.00 < Aspect <= 135.00', 'Hillshade_3pm <= 116.00'], ['Horizontal_Distance_To_Fire_Points > 2224.00', '2474.00 < Elevation <= 2899.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Hillshade_9am > 231.00', '60.00 < Aspect <= 135.00', '223.00 < Hillshade_Noon <= 236.00', '116.00 < Hillshade_3pm <= 143.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '10.00 < Slope <= 15.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_9am > 231.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Slope <= 10.00', '223.00 < Hillshade_Noon <= 236.00', '116.00 < Hillshade_3pm <= 143.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '60.00 < Aspect <= 135.00'], ['2899.00 < Elevation <= 3229.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Horizontal_Distance_To_Roadways > 2771.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Aspect <= 60.00', 'Slope <= 10.00', '215.00 < Hillshade_9am <= 231.00', '143.00 < Hillshade_3pm <= 172.00', '223.00 < Hillshade_Noon <= 236.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_Noon > 236.00', '135.00 < Aspect <= 286.00', 'Hillshade_9am > 231.00', '15.00 < Slope <= 21.00', '116.00 < Hillshade_3pm <= 143.00', 'Vertical_Distance_To_Hydrology > 80.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Slope > 21.00', 'Hillshade_9am <= 190.00', 'Aspect > 286.00', 'Hillshade_Noon <= 207.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '143.00 < Hillshade_3pm <= 172.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_9am <= 190.00', 'Slope > 21.00', 'Aspect > 286.00', 'Hillshade_Noon <= 207.00', 'Vertical_Distance_To_Hydrology > 80.00', '143.00 < Hillshade_3pm <= 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Aspect <= 60.00', '190.00 < Hillshade_9am <= 215.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Slope <= 10.00', '207.00 < Hillshade_Noon <= 223.00', '143.00 < Hillshade_3pm <= 172.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Slope > 21.00', '143.00 < Hillshade_3pm <= 172.00', 'Aspect > 286.00', 'Hillshade_Noon <= 207.00', 'Vertical_Distance_To_Hydrology <= 9.00', 'Hillshade_9am <= 190.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Hydrology > 361.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Slope > 21.00', 'Aspect > 286.00', 'Hillshade_9am <= 190.00', '207.00 < Hillshade_Noon <= 223.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Hillshade_3pm > 172.00'], ['Elevation <= 2474.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_Noon <= 207.00', 'Aspect <= 60.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '116.00 < Hillshade_3pm <= 143.00', '190.00 < Hillshade_9am <= 215.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '15.00 < Slope <= 21.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Slope > 21.00', 'Hillshade_Noon <= 207.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Aspect <= 60.00', 'Hillshade_3pm <= 116.00', '190.00 < Hillshade_9am <= 215.00'], ['2474.00 < Elevation <= 2899.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_Noon <= 207.00', 'Hillshade_9am <= 190.00', 'Aspect > 286.00', '1348.00 < Horizontal_Distance_To_Fire_Points <= 2224.00', 'Hillshade_3pm > 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Slope > 21.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Hillshade_3pm <= 116.00', 'Vertical_Distance_To_Hydrology > 80.00', 'Hillshade_9am > 231.00', '207.00 < Hillshade_Noon <= 223.00', '10.00 < Slope <= 15.00', '60.00 < Aspect <= 135.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_9am > 231.00', 'Hillshade_3pm <= 116.00', '60.00 < Aspect <= 135.00', '223.00 < Hillshade_Noon <= 236.00', '10.00 < Slope <= 15.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Roadways > 2771.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Aspect > 286.00', '143.00 < Hillshade_3pm <= 172.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '190.00 < Hillshade_9am <= 215.00', 'Slope <= 10.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Roadways > 2771.00', '135.00 < Aspect <= 286.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '143.00 < Hillshade_3pm <= 172.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Slope <= 10.00', '215.00 < Hillshade_9am <= 231.00']]


var features_Krummholz =  [['Elevation > 3229.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_3pm > 172.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Hillshade_Noon > 236.00', '135.00 < Aspect <= 286.00', '10.00 < Slope <= 15.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '190.00 < Hillshade_9am <= 215.00'], ['Elevation > 3229.00', 'Hillshade_3pm > 172.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Horizontal_Distance_To_Roadways > 2771.00', '190.00 < Hillshade_9am <= 215.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '15.00 < Slope <= 21.00', '135.00 < Aspect <= 286.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Hillshade_9am > 231.00', 'Slope <= 10.00', '60.00 < Aspect <= 135.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '116.00 < Hillshade_3pm <= 143.00', '223.00 < Hillshade_Noon <= 236.00'], ['Elevation > 3229.00', 'Hillshade_3pm <= 116.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_9am > 231.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '60.00 < Aspect <= 135.00', '10.00 < Slope <= 15.00', '207.00 < Hillshade_Noon <= 223.00'], ['2474.00 < Elevation <= 2899.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '60.00 < Aspect <= 135.00', 'Hillshade_9am > 231.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', '116.00 < Hillshade_3pm <= 143.00', '10.00 < Slope <= 15.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '223.00 < Hillshade_Noon <= 236.00'], ['2899.00 < Elevation <= 3229.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_9am > 231.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', '116.00 < Hillshade_3pm <= 143.00', 'Slope <= 10.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '223.00 < Hillshade_Noon <= 236.00', '60.00 < Aspect <= 135.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00'], ['2899.00 < Elevation <= 3229.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Aspect <= 60.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Slope <= 10.00', '143.00 < Hillshade_3pm <= 172.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '215.00 < Hillshade_9am <= 231.00', '223.00 < Hillshade_Noon <= 236.00'], ['2899.00 < Elevation <= 3229.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Hillshade_9am > 231.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', '15.00 < Slope <= 21.00', '116.00 < Hillshade_3pm <= 143.00', 'Vertical_Distance_To_Hydrology > 80.00', '135.00 < Aspect <= 286.00', 'Hillshade_Noon > 236.00', 'Horizontal_Distance_To_Roadways > 2771.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Hillshade_9am <= 190.00', 'Slope > 21.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', 'Aspect > 286.00', '143.00 < Hillshade_3pm <= 172.00', 'Hillshade_Noon <= 207.00'], ['Elevation <= 2474.00', 'Hillshade_9am <= 190.00', 'Slope > 21.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Hillshade_Noon <= 207.00', '143.00 < Hillshade_3pm <= 172.00', 'Vertical_Distance_To_Hydrology > 80.00', '853.00 < Horizontal_Distance_To_Roadways <= 1527.00', 'Aspect > 286.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', '207.00 < Hillshade_Noon <= 223.00', '143.00 < Hillshade_3pm <= 172.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Aspect <= 60.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', 'Slope <= 10.00', '190.00 < Hillshade_9am <= 215.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Horizontal_Distance_To_Hydrology <= 90.00', 'Slope > 21.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_9am <= 190.00', 'Aspect > 286.00', '143.00 < Hillshade_3pm <= 172.00', 'Hillshade_Noon <= 207.00', 'Vertical_Distance_To_Hydrology <= 9.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_9am <= 190.00', 'Hillshade_3pm > 172.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Horizontal_Distance_To_Hydrology > 361.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Aspect > 286.00', '207.00 < Hillshade_Noon <= 223.00', 'Slope > 21.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', '782.00 < Horizontal_Distance_To_Fire_Points <= 1348.00', 'Aspect <= 60.00', '116.00 < Hillshade_3pm <= 143.00', '15.00 < Slope <= 21.00', 'Hillshade_Noon <= 207.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '190.00 < Hillshade_9am <= 215.00'], ['Elevation <= 2474.00', 'Horizontal_Distance_To_Roadways <= 853.00', 'Hillshade_3pm <= 116.00', 'Horizontal_Distance_To_Hydrology > 361.00', 'Horizontal_Distance_To_Fire_Points <= 782.00', 'Hillshade_Noon <= 207.00', 'Slope > 21.00', 'Aspect <= 60.00', '190.00 < Hillshade_9am <= 215.00', 'Vertical_Distance_To_Hydrology > 80.00'], ['2474.00 < Elevation <= 2899.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Hillshade_3pm > 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Hillshade_9am <= 190.00', 'Slope > 21.00', 'Aspect > 286.00', '1348.00 < Horizontal_Distance_To_Fire_Points <= 2224.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', 'Hillshade_Noon <= 207.00'], ['Elevation > 3229.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_3pm <= 116.00', 'Hillshade_9am > 231.00', 'Horizontal_Distance_To_Hydrology > 361.00', '207.00 < Hillshade_Noon <= 223.00', '10.00 < Slope <= 15.00', 'Vertical_Distance_To_Hydrology > 80.00', '60.00 < Aspect <= 135.00'], ['Elevation > 3229.00', '1527.00 < Horizontal_Distance_To_Roadways <= 2771.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_3pm <= 116.00', 'Hillshade_9am > 231.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', '223.00 < Hillshade_Noon <= 236.00', '60.00 < Aspect <= 135.00', '10.00 < Slope <= 15.00', '35.00 < Vertical_Distance_To_Hydrology <= 80.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Hillshade_Noon > 236.00', 'Slope <= 10.00', 'Horizontal_Distance_To_Roadways > 2771.00', '143.00 < Hillshade_3pm <= 172.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '90.00 < Horizontal_Distance_To_Hydrology <= 201.00', '190.00 < Hillshade_9am <= 215.00', 'Aspect > 286.00'], ['Elevation > 3229.00', 'Horizontal_Distance_To_Fire_Points > 2224.00', 'Horizontal_Distance_To_Roadways > 2771.00', 'Hillshade_Noon > 236.00', '143.00 < Hillshade_3pm <= 172.00', '201.00 < Horizontal_Distance_To_Hydrology <= 361.00', 'Slope <= 10.00', '135.00 < Aspect <= 286.00', '9.00 < Vertical_Distance_To_Hydrology <= 35.00', '215.00 < Hillshade_9am <= 231.00']]


var importance_Spruce =  [[0.1838162559404681, 0.07784082131863991, -0.023300109229361418, -0.01997399320789951, 0.019689435583980362, -0.011782410104539384, 0.01096194028175953, 0.009773803765034832, 0.003008345256389352, 0.00018565241837910468], [0.18136423514449154, 0.05204753969722731, 0.026259568870587162, -0.02130209458945046, -0.019733143151381517, 0.013985730620098981, 0.012307935659600764, -0.011255248746482597, 0.007374559471449732, 0.005009298706331838], [0.30071746814400657, 0.06656276639522313, -0.033537969330548215, 0.016039730400702983, -0.01335253070437107, -0.012260683651674353, -0.011001171436268357, 0.010552044633066348, -0.008224708165513416, -0.0068001564184307335], [0.191747161835403, 0.0563195690942357, -0.023421456338868805, -0.023298123715179166, -0.02312850031364242, -0.007225607090011401, -0.004064405147028287, 0.0032360638337432246, 0.00250818282059658, 0.0020448934850479665], [-0.18994495322151408, 0.08355089606793273, -0.03189337250041035, -0.021725713173320633, 0.01317424446976097, 0.009267451632658132, -0.007227686196223611, 0.004275190039489139, -0.0036260896551934775, 0.0029264096935703206], [0.30147973766567887, 0.08273817615584457, -0.02226698239843714, -0.014809716530269317, 0.008247883627289898, -0.004628595527352729, -0.00434864919289761, 0.003503853801488346, 0.001152064525461689, -0.00043008968138088133], [0.2896967606388503, 0.058090309514395644, -0.03814026763905132, -0.01707490596478025, 0.01653281296069537, -0.014760898320049788, -0.013583107241469357, -0.010684910421094741, 0.004861981068055929, -0.0020808522816898743], [0.2907371079221307, 0.06932518145634212, -0.029726473536387653, -0.01971664375852614, -0.01879464984294064, -0.018096752101022066, -0.011275173571756643, 0.008247533339096925, 0.0019812930739088377, -0.0012395039252156026], [-0.2880489033932898, -0.0434687075607517, -0.021081608546035295, 0.02051188261421666, 0.016846116706108017, 0.014962705243304291, -0.011666677909837143, -0.011388585282098075, -0.0058334169395215215, -0.001230041292243009], [-0.2928244457160288, -0.02331817165979862, -0.019010178487051835, 0.018697686002790606, 0.014586276420728544, -0.011914154209916492, -0.007684465213087996, -0.005809628588448918, 0.005461981946454851, 0.004772636863521585], [-0.294466779031238, -0.027186180986090023, -0.024635881726749714, -0.011043985205589224, 0.008108554444072257, 0.005310446145134193, 0.004434576985349464, 0.0026198892781214306, 0.0010663401451478712, -0.0008947368393436227], [-0.29190244055456355, -0.025330887299633047, 0.02530111817620535, 0.022471065174954872, -0.021215839074032097, 0.02000924378742029, -0.01241146627283534, 0.005880906292226337, 0.005231967985875862, -0.0023537246248736023], [-0.2926593332978508, -0.03337057909504893, 0.03048815388525471, -0.02641415155215432, 0.024642577016279095, -0.01598863651688228, 0.006111551007809158, 0.005023318438810859, -0.003957913188595158, 0.0032500744298512717], [-0.28956840025804065, -0.04651635303378793, 0.02463672776539926, -0.022701664190813275, 0.011475973889524248, 0.008292941405484498, -0.0037868327289424307, -0.003090149479267946, 0.002498243426063739, 0.001349726636527476], [-0.29161731533145696, -0.03316892764244064, -0.023532848611148197, -0.013248927629699639, 0.012343172228919402, 0.011534629224486375, -0.009245676923573407, -0.00642403963435374, 0.0058013548642440555, 0.0013026203481204025], [-0.18598586388075616, 0.02589842195638598, 0.020750107501943737, -0.019999458910088034, -0.01693043857785115, -0.013304107195821573, 0.009410387795817078, 0.006671294376327716, -0.004975227505301889, 0.004626338968806375], [0.18320412849925846, 0.06882500740233684, -0.02967913153943539, -0.017055258216928437, -0.014148427020382543, -0.013566860640309583, -0.009932067103910166, 0.009712993163287657, -0.006095380968711691, -0.0006341401151691938], [0.1830886728323764, 0.0739281939473404, -0.025501515545114282, -0.022089511285562698, 0.012000051667236746, -0.005354545778687351, -0.0039149098285406825, -0.0037007986432760205, 0.00227620937995454, -0.0021619456061694117], [0.1826521741843471, 0.06357505175513695, 0.06263560028902554, -0.020763676581202144, 0.016649265352369227, 0.016464979355789496, -0.0077700728817156365, 0.0044206202441445285, 0.002270462997616647, -0.001447092804299503], [0.17671282861691062, 0.06555004417864095, 0.0599235305671644, -0.03229508008489714, -0.02057608605027997, 0.008040809531616696, -0.007757838914890413, 0.006817602969077218, -0.005150993549123358, 0.0042063701367458205]]


var importance_Lodgepole =  [[-0.23720461264691084, 0.12070717794740503, -0.06417154168278312, -0.026643898417222995, 0.016956786955266156, 0.008044783066077848, 0.007202248012283683, 0.00629871324620846, 0.005607346675236798, 0.0028260735136009553], [-0.23498692517499176, -0.07920626662405188, -0.023960710615513015, 0.014969597131063826, 0.010070493934101763, 0.006388351413257722, 0.002493599648362553, -0.0017226946978151183, -0.0010171940291428896, 1.954767629071168e-06], [0.16255879179584884, 0.13994260024857547, 0.06906503639324324, -0.009225278376167918, 0.007961596134666316, 0.007315383404606349, 0.006940848776912629, -0.0025716214241393674, 0.002311516621725809, 0.0005284651551244159], [-0.22914043057955932, -0.08255676080910422, 0.01599887064751719, -0.015584278595455423, -0.008496290079553603, 0.006716023408596964, -0.0036429630477589087, -0.00224731881431612, -0.000995811393543575, 0.0007311026662279801], [0.2232169600124099, 0.13154883390654215, 0.014942010776770001, 0.014061910848108353, 0.013338797625169459, 0.012711701097053607, -0.01182555503113834, 0.005586178404384344, 0.005241125398276392, 0.0007608955547429883], [0.15521583744179326, 0.12684130288626014, -0.06253300276736873, 0.010081776563516477, 0.0036161054669297476, 0.0022533709364378693, -0.002232291792383992, -0.001832789434719597, -0.0014083171384034281, 0.0003865760933831895], [0.1749281720954469, -0.03779537589248386, 0.024817511973536734, 0.010211298304058942, -0.00939583474698978, 0.0055080679567201946, -0.00489542259258673, -0.004135676329621297, -0.0002093002208505964, -0.00013197738723001663], [0.1742247754917811, -0.08596629196075062, 0.024865843561600664, 0.022093535249522765, 0.021738702170157692, 0.015547358993637286, 0.009694362482717577, 0.0005094907834692876, 0.00021353333565716115, 1.4268235498202515e-05], [-0.14723591659415688, -0.06962141262709884, 0.04491221696416098, -0.016732913639807518, -0.013302770823540498, -0.0132118857912683, 0.012123154577805433, -0.008995440487721497, 0.00424032571753797, 0.0004932651949436989], [-0.1688379615564002, -0.08050915699118098, -0.02057836097274786, -0.011959229777528323, -0.011436611177723136, -0.01045822622992269, -0.007840072336241446, 0.006319256640215215, -0.002869476616627573, -0.0020002059172546166], [-0.15772226683554053, -0.08508377592433697, 0.07080385403348144, 0.013883076071776324, 0.011599961441427793, -0.01095477903117725, -0.007534394350001886, -0.00586598326591968, -0.0007715241299639056, -0.0005978724266528479], [-0.1510972514465878, -0.0854712361945689, 0.06925707176704936, -0.016444445459706983, -0.01306476626759492, -0.012116415335418948, -0.009419847616454603, -0.006823073423162245, 0.005824220383819435, -0.003277035558094867], [-0.16340289810715727, 0.06453740876666228, -0.05329557165228622, -0.013719620044467602, 0.01075338614901306, -0.00370663125935786, -0.0023859600555025703, 0.001210147530478391, -0.0006859876604914513, 0.00036966013524809143], [-0.1562062437745188, -0.059007998308499066, 0.05650749858323742, 0.015627391485331165, 0.007843536057973617, -0.0067521122280057196, 0.004653105018355613, -0.004198048486887119, -0.004036547158391497, -0.0018007908049518587], [-0.14302453013001237, -0.08638230535930361, 0.06156699942691068, -0.019465493468397904, 0.012550421118300754, -0.007347027135467181, 0.003559583029379092, -0.002989911090943313, -0.0011563214890110574, -0.0010737092273352333], [0.22544329839413849, -0.06101002070404822, -0.01985342945930233, -0.019534000043508703, -0.013967493222395638, -0.009665164765725608, -0.00641522370324403, -0.002837435667116536, -0.0011381289901896646, 0.0001366626311167514], [-0.24442570572813171, 0.13176634418159316, -0.06273946982064062, 0.016288184663391304, -0.0105141411939803, -0.003951846205673704, 0.0038262352972033404, 0.0037585689907024254, 0.003618504529175759, 0.002813646409064881], [-0.24125219303667708, 0.13328054825724428, -0.059850508361795764, 0.011057985424865224, 0.00710933611805296, 0.006624905821836283, 0.005431990732802872, 0.0036440817476221547, 0.003391964406276737, 0.0033036038522278057], [-0.24570221765282588, 0.13170952429014587, 0.02758666386986329, 0.008666588579261596, -0.0072914293364853035, 0.006244863272127711, 0.004882719524141595, 0.003905455022270549, 0.0031096493419714346, -0.0003002769188106122], [-0.24380080947275387, 0.1316907626001335, 0.02443652452326435, 0.013692978582834091, 0.013409281686021948, -0.0073850359855350215, -0.0038734110173026673, 0.003310165163898959, -0.0030682632514022552, -0.0012180274117170957]]


var importance_Ponderosa =  [[-0.2173687062179002, -0.10841219658680218, 0.028024902554584657, -0.023088574392856626, -0.022398882473792063, 0.021439714187521115, -0.01289095612445457, -0.007257852473729948, -0.006611622111404599, -0.0028421796600340663], [-0.22016620360431635, -0.05654524777417301, 0.05291503996112864, 0.03039562425388654, -0.02764667241977804, 0.020931980877414963, -0.011634926564902255, -0.008728558994532717, -0.008725775600683085, -0.0023149372999262284], [-0.21695195996584055, -0.1070768620308423, 0.046948287798728554, -0.018298111126844745, 0.016193168406941176, 0.015049360800553569, -0.009698531528039702, 0.009555023309797201, 0.008114636322554184, 0.0017162579282039654], [-0.22418243965028975, 0.06705349099037751, -0.05852050068496344, -0.030980366752181424, 0.01425162681159048, 0.01412142781813018, -0.010550900641308522, -0.003470743141248129, 0.0029592446662343513, 0.0019371706703193306], [-0.11605582496629421, 0.07463891149013094, 0.028747679329742287, -0.020689729674390377, 0.019673204096841534, -0.007120916391306183, 0.004423939121582466, -0.00391101097031586, -0.0007826508552194686, -0.0001448020883034936], [-0.2102688772706584, -0.11606502570816599, -0.019392348131793198, -0.012070936340211271, 0.00838105910894028, -0.007717906724481171, -0.005271053256648549, 0.005202103170970127, -0.002819938154879526, 0.00017933138250854908], [-0.21486877757287323, -0.0655811261625047, 0.03583808321830044, -0.01950762645081914, -0.019176969907996267, 0.015674538097743874, 0.012651921134258991, 0.009851364238606658, -0.008046599906514275, -0.004317512400864099], [-0.2172343357125456, -0.06587644361092385, 0.06328196031283075, 0.03911671386017489, 0.029598043416985447, 0.02364983943546377, 0.014655279492269978, 0.011215649506852061, -0.010856426115236135, 0.00620656847970855], [0.35835885130869827, 0.05850715966275886, 0.047822956905390304, 0.020090739670784223, -0.01968865124727754, -0.014819242784941851, -0.011111868726237347, 0.007984710383508316, -0.004613225677639683, 0.0016894660323032006], [0.3756511318806162, 0.05352783205514447, 0.03675578728432813, 0.03098683681003332, -0.020001794627890843, 0.01986001278663622, -0.011045082311600323, -0.0035620604446622117, 0.0026304709102682724, -0.002269538573367942], [0.3604077068120136, 0.0715922499409493, 0.03677173819559938, -0.025277263441329526, -0.011067543093688313, -0.0092389319772655, -0.008590874290393884, -0.006368845902066751, -0.003312573990522921, -0.002411553950906663], [0.3647805434700132, 0.06372008083270313, 0.04747129725567269, -0.0351185484553706, -0.024211074853906778, -0.02092184675458423, 0.019281100780992353, -0.006397934623106955, 0.0016859963052067025, -0.0014312055955732533], [0.36733844430660834, 0.042625455615803685, 0.03875633519250361, 0.038409637641157124, 0.03050751531114779, -0.01395468287953154, -0.011399415703925865, -0.007876516194539156, -0.0030472471631121777, 0.0012835601606989789], [0.35851412008434264, 0.0488518589384455, 0.04118068573014313, -0.02514566354705256, -0.020552748967423158, 0.012068813415109106, -0.007277035280047228, -0.0026798849121147214, -0.0017676892979563337, -0.000415096456318495], [0.35857908824924273, 0.06143513270095004, 0.043928857232044385, 0.03824892119139945, 0.0303024228812614, 0.021528558397994665, -0.018962258752174402, -0.011646446501061539, -0.008644893211184742, -0.007518355044175482], [0.06465528388535771, 0.031184547263106262, 0.02020491918773114, 0.015161949667192393, -0.013128931411418555, -0.010602197053637219, -0.008569452987560712, -0.005056105896826622, -0.0028641494734216004, 0.0024624549265748097], [-0.22233160928311638, -0.1054827313939476, 0.04087944572648021, 0.02236296419188944, 0.020345863528962185, -0.011994879581410748, 0.008136750806232109, -0.005840096163153316, -0.004937881853988005, 0.0026661857235656975], [-0.2218709094313641, -0.1091971646203306, 0.014290009550438652, -0.010812038103093743, -0.007019776371501642, 0.00647804017833737, -0.005197080250432447, -0.0009790207162751919, -0.0009391385215205968, 0.0004699590470263229], [-0.2144770259290365, -0.10362389251005541, -0.06023979568721796, 0.024845197107680038, -0.016328952449671436, -0.013837495059832361, -0.01131731106240963, -0.010524173388362666, -0.004407906511016286, -0.002408042219973658], [-0.21750244618464515, -0.1096028723185152, -0.05652596501856845, 0.03353891485592096, -0.01988104564620121, 0.018406682336321954, 0.011548356720293498, 0.008675790387065115, -0.006475143609684987, 0.0017673023609289255]]


var importance_Douglas =  [[-0.1454462225200658, -0.06839441832719217, 0.05025716969099716, 0.03008646731005843, -0.013499558315515626, -0.012673267047711509, 0.006501432681843243, -0.005832888518212771, 0.005792953875311637, 0.0031076545537448252], [-0.14986356988648347, 0.03229609282798714, 0.026868641932573403, -0.015051640742006383, -0.008340421402679403, -0.00822975885653735, 0.003567295808640117, -0.0007747967904059418, -0.0006234269319936601, -0.0004864586468839629], [-0.1401778086984643, -0.06608832696646763, -0.015768669557732602, -0.014043695771455885, -0.003055455000281865, 0.0023734667639422296, -0.002152679567724545, 0.0020235049549021857, 0.002009377117641503, -0.0005498244692254776], [-0.1492511542406041, 0.03122262649013137, 0.024937239323248706, -0.01358491091495755, -0.012621398800227508, 0.006352268474357663, 0.005659959851059987, 0.0055472312248385485, 0.0005081095998125699, 0.00015491564068987237], [-0.07214962910960673, 0.04257770926200095, -0.016267528379933713, -0.014221023632123528, -0.010735569296598456, -0.006739649837494584, -0.005277678802662008, 0.0034107914935597138, -0.0024187986930638916, -0.001345264330358816], [-0.1398061266215679, -0.07045300495620935, 0.045641814741430954, -0.020748265803012998, 0.01501642028826946, 0.011483323189950198, 0.00429610310963815, -0.0033699142646378038, 0.0024455565125789088, -0.0023087280554176604], [-0.14444609277792325, 0.03275379079780572, 0.023200696604225846, -0.021074686600020574, 0.01931383101638126, 0.009616576374407855, 0.009213620550842032, 0.004718264060876992, 0.0015892897059081904, 0.0010871290396461527], [-0.1378701563908415, -0.03480196537897788, -0.027768679289493278, 0.026079411193541565, -0.021728907517749717, -0.0187341580396852, -0.017661293622529745, 0.008916564644552882, -0.004262644307635406, 0.0018771063440822802], [0.23507383935337373, 0.041500057089160505, -0.024541399594169948, -0.01822133215005105, 0.01452930290988537, 0.010441729193505165, 0.008034516936900016, 0.0075995080141922095, 0.007193309179250242, -0.003282265793498019], [0.2477634900054706, 0.026652560841975998, 0.01640062378352335, -0.013930260064859987, 0.011489435552909264, 0.006491337960967983, -0.0054774414088316885, 0.004888004219744965, -0.003400605030881175, 0.0025080520789574046], [0.25196129287586866, 0.028963134239537495, -0.019895991113294778, 0.01465067648518871, 0.011477121159091259, 0.009073098281965722, 0.007889252946562968, 0.006630356817216384, 0.006155282215588579, -0.0031317614087060055], [0.23716462116823248, 0.028142471192432968, 0.027602751304693668, -0.023742404579157612, -0.01299554319194051, 0.009109638266837932, 0.008793947377526642, 0.008436115152284413, 0.008349200053623206, 0.0075906550369953625], [0.24042396083494696, -0.041312662266797306, 0.03585247409092672, -0.027293428051716355, -0.013658919488798365, 0.013048081555303279, 0.0108852778352048, 0.006327161068186332, 0.0017381887245375108, 0.0016627459855278529], [0.24074598775791511, 0.04323848514675418, -0.025883724195720405, 0.012528626355716372, 0.007983216683920791, -0.006139035570230413, -0.003351037795322789, -0.0023208370349243946, -0.0013240318020886874, 0.0006720682854521622], [0.2348704506043168, -0.03401891452178573, 0.025322614910599665, -0.025226340641077705, -0.013216715205735476, 0.011034085910928469, -0.006257559833343588, 0.005705781308555148, -0.0053997498478905205, 0.003116970268868428], [0.04823537383624575, 0.04538807699769033, 0.022477070324645708, 0.01417378634618122, 0.01218205455335864, 0.006794173460095233, 0.006592885035323951, 0.005899533442997762, -0.00550556231365385, 0.0005483473350076705], [-0.14465070856340134, -0.06139143349963754, 0.042579000774905625, -0.03533875113411649, -0.011967948359023038, -0.00821504132584273, -0.007168070883462022, 0.004818551569661768, 0.004307648216567917, -0.0012539049385822574], [-0.14877181101067002, -0.07031096845552412, 0.040684203442045326, -0.012877208523993097, -0.011665673090427734, -0.010192911413343038, -0.010039107674595904, 0.004154211580240782, -0.0026991238864114407, -0.0017024002625538653], [-0.14016071373964856, -0.06276467576629333, -0.019948854709088918, -0.014804224679428778, 0.010676563069097792, 0.01031275626360839, -0.003563681552359638, -0.003254698974966091, 0.0014942090836032131, -0.0009081989821415803], [-0.14364948165589947, -0.06364232170053646, -0.016080495869017143, -0.012147864756770151, -0.010001764842400073, -0.005580536374100406, 0.005248772739051477, 0.002844452154248765, 0.002006169509249205, 0.0016365342512083619]]


var importance_Krummholz =  [[0.41620328544440865, 0.04005666088118146, -0.021792814701557382, -0.021741384352050586, 0.01663766024363186, -0.012334429254239785, -0.004202528833543948, -0.0015468273335617268, 0.0005596563486241229, -0.00017506721929447152], [0.4236524635212999, -0.020081111655551688, 0.010677833476832462, -0.008821073659225397, 0.00700335454770315, 0.004579751687888256, -0.004069606913153343, 0.003697337759042139, -0.0022098575271507293, -0.001359958819386842], [-0.10614649127555052, -0.0684316590899677, -0.03334017764648861, -0.008408041436124121, 0.005612648450556154, 0.005194096383751797, -0.0034599930079132917, 0.0034339039727301133, 0.0015941998289162346, 0.0003082265031563526], [0.4108268626350501, 0.01751120396614206, 0.013864154210657181, 0.013297125372457535, 0.008106306982358298, 0.006593112762952602, 0.003491297989416981, 0.0028443696952974973, -0.0017949347208935454, -0.0017823174957961724], [-0.1504886275430276, -0.02689427589857397, -0.013945842044088021, 0.012686491517723473, 0.01149918125892233, 0.006148853205075501, -0.004589725347710474, -0.0027774171993603194, 0.0025416022042186607, 0.0018483663315659903], [-0.10662057121524589, 0.04442922368102347, 0.02356081775741228, -0.023061448377729412, 0.01226100783270324, -0.006824978215286371, -0.003960250537372456, -0.0037947095828887957, 0.0010686979839619483, -0.00043762624405155066], [-0.10531006238350062, -0.008517628402355098, 0.007343769515429002, -0.005512885838526458, 0.0037479912745929144, -0.0021031307310969654, -0.0006989929800744163, 0.0004262363159699287, 0.0004005702414167262, -2.396554520578061e-05], [-0.10985739131052473, -0.018590970370741804, 0.016467925391486248, 0.014701672555400403, -0.014097162534702971, 0.012628286565493389, -0.011281614903367711, -0.01098687511443859, -0.0033899005729213045, 0.002226406194552238], [-0.1581478706746255, -0.05779636848671462, 0.02376710619329974, -0.013550308147085416, 0.012959449906509843, 0.012825919330384647, -0.005437013885717652, 0.0024403479292354033, -0.0014564230192542589, -0.00042438594263431614], [-0.16175221461365769, -0.023696177005410296, 0.013713942268840103, 0.012242918303977007, -0.010321759383123902, 0.009382406476117001, 0.005191368859326509, 0.004937394263573339, 0.004632693269260938, -0.003036858571136253], [-0.16017995382110373, -0.06049342012969603, -0.012452737900097512, 0.012177287650925718, 0.009164273470599874, -0.00819148823361032, 0.008110399135965835, 0.007240277060925313, -0.0017025353822080686, -0.0010172114450159896], [-0.15894547263709422, -0.06765507714393136, 0.018728274624508042, 0.015545756300238103, 0.014824523243464918, -0.014377423254674802, -0.013083814416864835, -0.0111489284302105, 0.003079432694939857, 0.0026757044360255448], [-0.1517001737365471, -0.05345528477859528, -0.020421807888200173, -0.019406364521729426, 0.012404039015251318, -0.011447133504570628, 0.0097265805233487, -0.006723572679343794, -0.005917272288382433, -0.00017397164497569723], [-0.15348546380969802, -0.049102795926846875, 0.013434007257087351, -0.012127385920623075, 0.010892830889300742, -0.009246158471533199, 0.003300260950188248, -0.003239491674252817, -0.0030814559945190694, -0.0014914286534934975], [-0.15880769339209028, -0.04710058837543667, 0.01973073695326953, -0.01808304813603487, 0.012873485377453529, 0.0077346818296115775, 0.005459223577561734, 0.002795557446468122, 0.0015899410020063292, 0.0006443070522414287], [-0.1523480922349858, 0.04205498231359801, -0.02629707210469363, -0.02126588775654379, -0.014656532028762137, 0.005218946850794363, -0.004520897232241827, 0.0044585594860444356, -0.0015180565707972422, 0.0013194731534109546], [0.4282038950753909, 0.04305582342581677, -0.033717186690344875, 0.019174975884519406, 0.012882834364759467, -0.011896812151844866, 0.00797747604244163, 0.004360946671184034, -0.004339631216439531, -0.002296859546806935], [0.4288062406463348, 0.04827559257681475, -0.02770060912872991, 0.014695635733162474, 0.013030729093803503, -0.008241876507592795, 0.003648857499992882, 0.00357290711639716, 0.0013517029071909176, -0.0005528875054377983], [0.4176877831371639, -0.027956556302822677, -0.011719329687252271, -0.009915326509426866, 0.005224105339382071, 0.0050752080747873286, 0.0032346629910789317, 0.0014983754530626446, 0.0014970267123913302, -0.0008838834137234504], [0.4282399086963879, -0.023995612759722805, 0.00996832661989129, -0.009599863425271022, -0.004261099924686568, -0.003428213132407878, -0.0023520085181471524, -0.0015218100264759974, -0.0013418548247782173, 0.0010438371388541857]]



categories1 = ['A','B','C','D','E','F','G','H','I','J'];
categories2 = ['A','B','C','D','E','F','G','H','I','J'];
categories3 = ['A','B','C','D','E','F','G','H','I','J'];
categories4 = ['A','B','C','D','E','F','G','H','I','J'];
categories5 = ['A','B','C','D','E','F','G','H','I','J'];




var tutorial_categories = ['Elevation', 'Aspect', 'Slope', 'Horizontal_Distance_To_Hydrology',
'Vertical_Distance_To_Hydrology', 'Horizontal_Distance_To_Roadways',
'Hillshade_9am', 'Hillshade_Noon', 'Hillshade_3pm',
'Horizontal_Distance_To_Fire_Points'];
		
const chart1 = Highcharts.chart('explanation1', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories,
		reversed: true,
		labels: {
			step: 1,
			style:{
				fontSize: '14px'
			}
		},
		
	}, 
	
	yAxis: {
		title: {
		text: null
		},
			labels: {
				formatter: function () {
					return Math.abs(this.value);
				},
				style:{
					fontSize: '16px'
				}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},

	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},

	series: [{
		name: 'Evidence against Spruce/Fir',
		
		
		data: [0, 0, 0, 0, 0, -0.01121729391069462, 0, -0.0068836857538672885, 0, -0.0013554658835323347],
		color:"#628FAB",
	}, {
		name: 'Evidence for Spruce/Fir',
		data: [0.30183636434237254, 0.07951659369275837, 0.06303765241993775, 0.014891315298686921, 0.012448467786406417, 0, 0.007116474957091968, 0, 0.003018249772938111, 0],
		color:"#FCB795",
	}]
});



		
const chart2 = Highcharts.chart('explanation2', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Lodgepole Pine',
		
		
		data: [0, 0, 0, 0, -0.006744117596906096, 0, 0, -0.004026699893431538, 0, 0],
		color:"#0F7355"
	}, {
		name: 'Evidence for Lodgepole Pine',
		data: [0.1579900554047956, 0.13216567286594244, 0.01092444722403519, 0.007595422306901802, 0, 0.005631737140181252, 0.0047609717776488526, 0, 0.003427495903838794, 0.0013155190973220027],
		color:"#EACBEC"
	}]
});


		
const chart3 = Highcharts.chart('explanation3', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Ponderosa Pine',

		

		
		data: [-0.21552729331966128, -0.1144528912656993, -0.06239802997875998, -0.021486345778723718, -0.017759527258395292, -0.009428565472542009, -0.006634714254943035, 0, -0.0021296222644783935, 0],
		color:"#795A93"
	}, {
		name: 'Evidence for Ponderosa Pine',
		data: [0, 0, 0, 0, 0, 0, 0, 0.004554527848326572, 0, 0.0021188898657323397],
		color:"#F09A3E"
	}]
});



		
const chart4 = Highcharts.chart('explanation4', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Douglas-fir',
		
		
		data: [-0.14308237768855625, -0.07091885308614393, -0.01515480883405212, 0, 0, -0.006063840846487126, 0, 0, -0.0013193406983155558, -0.0003415720702417308],
		color:"#9A111D"
	}, {
		name: 'Evidence for Douglas-fir',
		data: [0, 0, 0, 0.012026828391027426, 0.007884511608406652, 0, 0.0039742042442877734, 0.0015949553832656548, 0, 0],
		color:"#81B2E1"
	}]
});



		
const chart5 = Highcharts.chart('explanation5', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: tutorial_categories,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Krummholz',
		
		
		data: [-0.10121674873895059, -0.026310522206857635, -0.013998009450736836, 0, 0, 0, -0.0039201090914254095, 0, -0.0008066696680897591, 0],
		color:"#936C5A"
	}, {
		name: 'Evidence for Krummholz',
		data: [0, 0, 0, 0.012086900424912606, 0.006919764085972523, 0.0047686174891284966, 0, 0.0015431170017061464, 0, 2.8348677867544225e-05],
		color:"#FFEFC8"
	}]
});



const chart_Spruce = Highcharts.chart('chart_Spruce', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories1,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Spruce/Fir',
		data: [
			-0.14203645477026278, 0, 0, 0, 0, 0, 0, -0.026412569022124452,  -0.02129103475746552, -0.01934431956369927
		],
		color:"#628FAB"
	}, {
		name: 'Evidence for Spruce/Fir',
		data: [
			0, 0.07584092116156863, 0.06581142928551402, 0.05521963855846932, 0.04519346713589002, 0.042151476090971356, 0.03817440008557368, 0, 0, 0
		],
		color:"#FCB795"
	}]
});



const chart_Lodgepole = Highcharts.chart('chart_Lodgepole', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories2,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Lodgepole Pine',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#0F7355"
	}, {
		name: 'Evidence for Lodgepole Pine',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#EACBEC"
	}]
});


const chart_Ponderosa = Highcharts.chart('chart_Ponderosa', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories3,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Ponderosa Pine',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#795A93"
	}, {
		name: 'Evidence for Ponderosa Pine',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#F09A3E"
	}]
});


const chart_Douglas = Highcharts.chart('chart_Douglas', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories4,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Douglas-fir',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#9A111D"
	}, {
		name: 'Evidence for Douglas-fir',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#81B2E1"
	}]
});


const chart_Krummholz = Highcharts.chart('chart_Krummholz', {
		chart: {
		type: 'bar',
		marginLeft: 400,
	},
	title: {
		text: null
	},
	xAxis: {
		categories: categories5,
		reversed: true,
		labels: {
		step: 1,
		style:{
			fontSize: '14px'
		}
		},
	}, 
	
	yAxis: {
		title: {
		text: null
		},
		labels: {
			formatter: function () {
				return Math.abs(this.value);
			},
			style:{
				fontSize: '16px'
			}
		},
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
		stacking: 'normal'
		}
	},
	
	tooltip: {
		formatter: function () {
		return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
			'Feature importance: ' + Highcharts.numberFormat(this.point.y, 2);
		}
	},
	legend: {
		itemStyle: {
			color: '#000000',
			fontWeight: 'bold',
			 fontSize: '25px'
		  }
	},
	series: [{
		name: 'Evidence against Krummholz',
		data: [
			-0.025220318525324595,  -0.024404765852443642, -0.017205498278503616, -0.016541336368945586, -0.014552585392437402, -0.013963823652365497, 
			-0.013671647897261495, -0.012845277070345948, 0, 0
		],
		color:"#936C5A"
	}, {
		name: 'Evidence for Krummholz',
		data: [
				0, 0, 0, 0, 0, 0, 0, 0, 0.010967193863929444, 0.010266706534225166
		],
		color:"#FFEFC8"
	}]
});





var human_attention_original = null;


var AIRoles_index = 0;


var task_num = 20;



const order_list = [];
for(var i = 0;i < task_num;i++){
	order_list.push(i);
}

for (let i = 1; i < order_list.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [order_list[i], order_list[random]] = [order_list[random], order_list[i]];
}



var user_id = 0;

function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});
}
var user_id = uuidv4();


var ground_truth_1 = null;
var firstdecision_1 = null;
var firstconfidence_1 = null;
var aisuggestion_1 = null;
var aiconfidence_1 = null;
var seconddecision_1 = null;
var secondconfidence_1 = null;

var reason_1 = null;
var reason_2 = null;

var first_feature = null;
var second_feature = null;

var firstdecision_2 = null;
var firstconfidence_2 = null;
var aisuggestion_2 = null;
var aiconfidence_2 = null;
var seconddecision_2 = null;
var secondconfidence_2 = null;


var firstdecision_3 = null;
var firstconfidence_3 = null;
var aisuggestion_3 = null;
var aiconfidence_3 = null;
var seconddecision_3 = null;
var secondconfidence_3 = null;

var current_ground_truth = null;

var current_idx = 0;
var current_idx_training = 0;

var current_instance_data = null;



var all_data_tosave = [];
var all_data_tosave_training = [];


var ai_suggestion_seen = false;

var timestamp1 = null;
var timestamp2 = null;


var interaction_log_in_this_button = null;
var user_interaction_log_thispape = [];
var user_interaction_log = [];

var questionnaire_data = null;
var questionnaire_data2 = null;

var case_num_each_confidence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var correct_case_num_each_confidence = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


var prolific_id = 'prolific_id';

var attention_check_useranswer = [];

var ai_pred = null;

var ai_secondary_pred = null;

var option_list = ['Spruce/Fir', 'Lodgepole Pine', 'Ponderosa Pine', 'Douglas-fir', 'Krummholz'];





$(function(){
   let doc=document.documentElement;// 获取当前设备的视口宽度
   let view_width=doc.clientWidth;
   let myfontSize=view_width/100;
   document.getElementById("tutorial_tab1").style.fontSize = myfontSize+"px";
   document.getElementById("tutorial_tab2").style.fontSize = myfontSize+"px";
   document.getElementById("tutorial_tab3").style.fontSize = myfontSize+"px";
   document.getElementById("tutorial_tab4").style.fontSize = myfontSize+"px";
   document.getElementById("tutorial_tab5").style.fontSize = myfontSize+"px";

   document.getElementById("tab1").style.fontSize = myfontSize+"px";
   document.getElementById("tab2").style.fontSize = myfontSize+"px";
   document.getElementById("tab3").style.fontSize = myfontSize+"px";
   document.getElementById("tab4").style.fontSize = myfontSize+"px";
   document.getElementById("tab5").style.fontSize = myfontSize+"px";
});


/*
用户交互日志记录
*/

//用户进入consent form的时间
$("#go_to_consentform").click(function(){
	var what_clicked = "go_to_consentform";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户正式开始实验的时间
$("#start_actual_tasks").click(function(){
	var what_clicked = "start_actual_tasks";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//用户做完初始判断，查看AI的建议
$("#see_ai_suggestion").click(function(){
	var what_clicked = "see_ai_suggestion";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//进入下一个task的按钮
$("#next-task-btn").click(function(){
	var what_clicked = "next-task-btn";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//开始填写questionnaire的时间
$("#go_to_questionnaire").click(function(){
	var what_clicked = "go_to_questionnaire";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

//填写完questionnaire的时间
$("#go_to_next").click(function(){
	var what_clicked = "go_to_next";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);
});

var tutorial_tab1_clickTimes = null;
var tutorial_tab2_clickTimes = null;
var tutorial_tab3_clickTimes = null;
var tutorial_tab4_clickTimes = null;
var tutorial_tab5_clickTimes = null;

var tab1_clickTimes = null;
var tab2_clickTimes = null;
var tab3_clickTimes = null;
var tab4_clickTimes = null;
var tab5_clickTimes = null;





//用户点击tutorial_tab1的时间
$("#tutorial_tab1").click(function(){
	var what_clicked = "tutorial_tab1";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab1_clickTimes += 1;
});


//用户点击tutorial_tab2的时间
$("#tutorial_tab2").click(function(){
	var what_clicked = "tutorial_tab2";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab2_clickTimes += 1;
});

//用户点击tutorial_tab3的时间
$("#tutorial_tab3").click(function(){
	var what_clicked = "tutorial_tab3";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab3_clickTimes += 1;
});


//用户点击tutorial_tab4的时间
$("#tutorial_tab4").click(function(){
	var what_clicked = "tutorial_tab4";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab4_clickTimes += 1;
});


//用户点击tutorial_tab5的时间
$("#tutorial_tab5").click(function(){
	var what_clicked = "tutorial_tab5";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tutorial_tab5_clickTimes += 1;
});


//用户点击tab1的时间
$("#tab1").click(function(){
	var what_clicked = "tab1";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab1_clickTimes += 1;
});

//用户点击tab2的时间
$("#tab2").click(function(){
	var what_clicked = "tab2";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab2_clickTimes += 1;
});

//用户点击tab3的时间
$("#tab3").click(function(){
	var what_clicked = "tab3";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab3_clickTimes += 1;
});

//用户点击tab4的时间
$("#tab4").click(function(){
	var what_clicked = "tab4";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab4_clickTimes += 1;
});

//用户点击tab5的时间
$("#tab5").click(function(){
	var what_clicked = "tab5";
	var timestamp_this = new Date().getTime(); //1610075969354
	interaction_log_in_this_button = [what_clicked, timestamp_this];
	user_interaction_log_thispape.push(interaction_log_in_this_button);

	tab5_clickTimes += 1;
});


$("#go_to_consentform").click(function(){

	var percentage = parseInt(11/order_list.length*100);
	//console.log(percentage);

	var objData = $("#form_info").serializeArray();
	if(!checkFormInfo(objData)){
		return;
	}
	else{
		userinfo = objData;
	}

	prolific_id = userinfo[0].value;


    $(".nav-tabs a[href='#consent_form']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");


});


$("#accept_button").click(function(){

    $(".nav-tabs a[href='#tutorial']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

});
$("#reject_button").click(function(){

    $("#quitModal").modal('show');

});


// 从task tutorial1 跳转到 tutorial2
$("#tryone").click(function(){
    $(".nav-tabs a[href='#tutorial2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");
});


$("#go_to_middle_page").click(function(){

	// 因为默认显示了tab1，所以不用对tab1的点击做要求。
	if(tutorial_tab2_clickTimes < 1 || tutorial_tab3_clickTimes < 1 || tutorial_tab4_clickTimes < 1 || tutorial_tab5_clickTimes < 1){
		alert("Please try to explore AI's analysis for different options.")
	}else{
		// 先进行attention check
		if((document.getElementById('attention_question_1-1').checked == false && document.getElementById('attention_question_1-2').checked == false && document.getElementById('attention_question_1-3').checked == false && document.getElementById('attention_question_1-4').checked == false) 
		|| (document.getElementById('attention_question_2-1').checked == false && document.getElementById('attention_question_2-2').checked == false && document.getElementById('attention_question_2-3').checked == false && document.getElementById('attention_question_2-4').checked == false)){
			alert("Please answer the above question");
			return false;
		}else{
			document.getElementById("introduction_before_main_tasks").style.display="block";
			document.getElementById("tutorial2").style.display="none";
		}
	}

});


// 从tutorial2的 step1 跳转到 step2和3
$("#tutorial_moveto_step23").click(function(){


	// 一些只针对tutorial这一个case的逻辑代码







	var objData1 = $("#tutorial_first").serializeArray();

	console.log(objData1);

	
	//console.log(document.getElementById('radio-first-decision-1').checked);


	if(document.getElementById('tutorial-first-decision-1').checked == false && document.getElementById('tutorial-first-decision-2').checked == false && document.getElementById('tutorial-first-decision-3').checked == false
	&& document.getElementById('tutorial-first-decision-4').checked == false && document.getElementById('tutorial-first-decision-5').checked == false){
		alert("Please make your prediction");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if (document.getElementById('tutorial-first-decision-1').checked == true || document.getElementById('tutorial-first-decision-2').checked == true || document.getElementById('tutorial-first-decision-3').checked == true
	|| document.getElementById('tutorial-first-decision-4').checked == true || document.getElementById('tutorial-first-decision-5').checked == true) {

		$("html, body").animate({ scrollTop: 0 }, "slow");

		document.getElementById("tutorial_firstdecision").style.display="none";
		document.getElementById("tutorial_pager_region1").style.display="none";


		
		document.getElementById("tutorial_aisuggestion").style.display="block";
		document.getElementById("tutorial_finaldecision").style.display="block";
		document.getElementById("attention_check").style.display="block";
		document.getElementById("tutorial_pager_region2").style.display="block";


		


		// 取5个output中第一位（最大概率）作为AI的预测
		ai_pred = 0;
		ai_secondary_pred = 1;

		var ai_third_pred = 2;
		var ai_fourth_pred = 3;
		var ai_fifth_pred = 4;


		var forest_list = ['Spruce/Fir', 'Lodgepole Pine', 'Ponderosa Pine', 'Douglas-fir', 'Krummholz'];


		var top1_tab = "tutorial_tab" + (ai_pred+1);
		var top2_tab = "tutorial_tab" + (ai_secondary_pred+1);
		var top3_tab = "tutorial_tab" + (ai_third_pred+1);
		var top4_tab = "tutorial_tab" + (ai_fourth_pred+1);
		var top5_tab = "tutorial_tab" + (ai_fifth_pred+1);


		var top1_highlight = "explanation" + (ai_pred+1);

		// 初始化展示top1的解释
		document.getElementById(top1_tab).className = "active";
		document.getElementById(top1_highlight).style.display = "block";



		document.getElementById(top1_tab).innerHTML = "<b><u>" + forest_list[ai_pred] + "</u></b>";
		document.getElementById(top2_tab).innerHTML = "<b><u>" + forest_list[ai_secondary_pred] + "</u></b>";



		document.getElementById(top3_tab).innerHTML = forest_list[ai_third_pred];
		document.getElementById(top4_tab).innerHTML = forest_list[ai_fourth_pred];
		document.getElementById(top5_tab).innerHTML = forest_list[ai_fifth_pred];


		firstdecision_1 = objData1[0];
		human_pred = firstdecision_1['value'];

		console.log(human_pred);  

		var human_tab = "tutorial_tab" + (parseInt(human_pred)+1);

		// 把用户选择的那个一tab 绘制上用户icon
		// document.getElementById(human_tab).innerHTML = option_list[human_pred] + " <i class=\"fa-solid fa-user-check\"></i>";
		document.getElementById("tutorial_human_initialprediction").innerHTML = "Your prediction: <b>" + option_list[human_pred] + "</b>";
		
	}




});


$("#start_actual_tasks").click(function(){






	document.getElementById("introduction_before_main_tasks").style.display="none";

	timestamp1 = new Date().getTime(); //1610075969354 

	var attentionData1 = $("#firstcheck").serializeArray();
	var attentionData2 = $("#secondcheck").serializeArray();
	
	
	attention_check_useranswer.push([attentionData1[0].value, attentionData2[0].value]);

	$(".nav-tabs a[href='#NLP_task']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	// 这一行是新闻分类中更新新闻的代码，先注释掉
	// document.getElementById("category-text-content").innerHTML = text_content[order_list[AIRoles_index]];

	document.getElementById('the-index').textContent = AIRoles_index + 1 + '/' + order_list.length;


	











	// 这里更新表格数据 —— 第一步中人独立做出决策页面的表格
	var tb = document.getElementById('category-tabular-content');//获取表格的dom节点
	var td = tb.rows[0].cells[1]; //获取1行2列的td单元格
	td.innerHTML = Elevation_features[order_list[AIRoles_index]];

	var td = tb.rows[1].cells[1]; //获取2行2列的td单元格
	td.innerHTML = Aspect_features[order_list[AIRoles_index]];

	var td = tb.rows[2].cells[1]; //获取3行2列的td单元格
	td.innerHTML = Slope_features[order_list[AIRoles_index]];

	var td = tb.rows[3].cells[1]; //获取4行2列的td单元格
	td.innerHTML = Horizontal_Distance_To_Hydrology_features[order_list[AIRoles_index]];

	var td = tb.rows[4].cells[1]; //获取5行2列的td单元格
	td.innerHTML = Vertical_Distance_To_Hydrology_features[order_list[AIRoles_index]];

	var td = tb.rows[5].cells[1]; //获取6行2列的td单元格
	td.innerHTML = Horizontal_Distance_To_Roadways_features[order_list[AIRoles_index]];

	var td = tb.rows[6].cells[1]; //获取7行2列的td单元格
	td.innerHTML = Hillshade_9am_features[order_list[AIRoles_index]];

	var td = tb.rows[7].cells[1]; //获取8行2列的td单元格
	td.innerHTML = Hillshade_Noon_features[order_list[AIRoles_index]];

	var td = tb.rows[8].cells[1]; //获取9行2列的td单元格
	td.innerHTML = Hillshade_3pm_features[order_list[AIRoles_index]];

	var td = tb.rows[9].cells[1]; //获取10行2列的td单元格
	td.innerHTML = Horizontal_Distance_To_Fire_Points_features[order_list[AIRoles_index]];


	// 这里更新表格数据 —— 第二步中查看AI建议页面的表格
	var tb = document.getElementById('category-tabular-content2');//获取表格的dom节点
	var td = tb.rows[0].cells[1]; //获取1行2列的td单元格
	td.innerHTML = Elevation_features[order_list[AIRoles_index]];

	var td = tb.rows[1].cells[1]; //获取2行2列的td单元格
	td.innerHTML = Aspect_features[order_list[AIRoles_index]];

	var td = tb.rows[2].cells[1]; //获取3行2列的td单元格
	td.innerHTML = Slope_features[order_list[AIRoles_index]];

	var td = tb.rows[3].cells[1]; //获取4行2列的td单元格
	td.innerHTML = Horizontal_Distance_To_Hydrology_features[order_list[AIRoles_index]];

	var td = tb.rows[4].cells[1]; //获取5行2列的td单元格
	td.innerHTML = Vertical_Distance_To_Hydrology_features[order_list[AIRoles_index]];

	var td = tb.rows[5].cells[1]; //获取6行2列的td单元格
	td.innerHTML = Horizontal_Distance_To_Roadways_features[order_list[AIRoles_index]];

	var td = tb.rows[6].cells[1]; //获取7行2列的td单元格
	td.innerHTML = Hillshade_9am_features[order_list[AIRoles_index]];

	var td = tb.rows[7].cells[1]; //获取8行2列的td单元格
	td.innerHTML = Hillshade_Noon_features[order_list[AIRoles_index]];

	var td = tb.rows[8].cells[1]; //获取9行2列的td单元格
	td.innerHTML = Hillshade_3pm_features[order_list[AIRoles_index]];

	var td = tb.rows[9].cells[1]; //获取10行2列的td单元格
	td.innerHTML = Horizontal_Distance_To_Fire_Points_features[order_list[AIRoles_index]];
			

});


$("#next-task-btn").click(function(){
	// alert(AIRoles_index);
	var objData1 = $("#finaldecision1").serializeArray();

	if(document.getElementById('radio-final-decision-1').checked == false && document.getElementById('radio-final-decision-2').checked == false && document.getElementById('radio-final-decision-3').checked == false
	&& document.getElementById('radio-final-decision-4').checked == false && document.getElementById('radio-final-decision-5').checked == false){
		alert("Please make your final prediction");
		return false;
	}
	if(document.getElementById('radio-final-confidence-1').checked == false && document.getElementById('radio-final-confidence-2').checked == false && document.getElementById('radio-final-confidence-3').checked == false
	&& document.getElementById('radio-final-confidence-4').checked == false && document.getElementById('radio-final-confidence-5').checked == false){
		alert("Please indicate your confidence in your final prediction");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if ((document.getElementById('radio-final-decision-1').checked == true || document.getElementById('radio-final-decision-2').checked == true || document.getElementById('radio-final-decision-3').checked == true
	|| document.getElementById('radio-final-decision-4').checked == true || document.getElementById('radio-final-decision-5').checked == true) && (document.getElementById('radio-final-confidence-1').checked == true || 
	document.getElementById('radio-final-confidence-2').checked == true || document.getElementById('radio-final-confidence-3').checked == true
	|| document.getElementById('radio-final-confidence-4').checked == true || document.getElementById('radio-final-confidence-5').checked == true)) {
		seconddecision_1 = objData1[0];
		secondconfidence_1 = objData1[1];

		// 即将进入下一页了，把这一页的用户的interaction log都保存下来，用于区分
		user_interaction_log.push([AIRoles_index, user_interaction_log_thispape]);

		ground_truth_1 = ground_truth_AIRoles[order_list[AIRoles_index]];


		ai_pred = ai_prediction[order_list[AIRoles_index]][0];


		timestamp2 = new Date().getTime(); //1610075969354 

		var time_spent = timestamp2 - timestamp1;
		timestamp1 = timestamp2;

		current_instance_data = [AIRoles_index, order_list[AIRoles_index], firstdecision_1, seconddecision_1, secondconfidence_1, ai_pred, ground_truth_1, time_spent];

		console.log(current_instance_data);

		all_data_tosave.push(current_instance_data);



		if(AIRoles_index < 19){

			AIRoles_index++;

			$(".nav-tabs a[href='#NLP_task']").tab('show');
			document.getElementById("next-task-btn").style.display="none";
			// 更新新闻内容，先注释掉
			// document.getElementById("category-text-content").innerHTML=text_content[order_list[AIRoles_index]];

			// 这里更新表格数据 —— 第一步中人独立做出决策页面的表格
			var tb = document.getElementById('category-tabular-content');//获取表格的dom节点
			var td = tb.rows[0].cells[1]; //获取1行2列的td单元格
			td.innerHTML = Elevation_features[order_list[AIRoles_index]];
		
			var td = tb.rows[1].cells[1]; //获取2行2列的td单元格
			td.innerHTML = Aspect_features[order_list[AIRoles_index]];
		
			var td = tb.rows[2].cells[1]; //获取3行2列的td单元格
			td.innerHTML = Slope_features[order_list[AIRoles_index]];
		
			var td = tb.rows[3].cells[1]; //获取4行2列的td单元格
			td.innerHTML = Horizontal_Distance_To_Hydrology_features[order_list[AIRoles_index]];
		
			var td = tb.rows[4].cells[1]; //获取5行2列的td单元格
			td.innerHTML = Vertical_Distance_To_Hydrology_features[order_list[AIRoles_index]];

			var td = tb.rows[5].cells[1]; //获取6行2列的td单元格
			td.innerHTML = Horizontal_Distance_To_Roadways_features[order_list[AIRoles_index]];

			var td = tb.rows[6].cells[1]; //获取7行2列的td单元格
			td.innerHTML = Hillshade_9am_features[order_list[AIRoles_index]];

			var td = tb.rows[7].cells[1]; //获取8行2列的td单元格
			td.innerHTML = Hillshade_Noon_features[order_list[AIRoles_index]];

			var td = tb.rows[8].cells[1]; //获取9行2列的td单元格
			td.innerHTML = Hillshade_3pm_features[order_list[AIRoles_index]];

			var td = tb.rows[9].cells[1]; //获取10行2列的td单元格
			td.innerHTML = Horizontal_Distance_To_Fire_Points_features[order_list[AIRoles_index]];


			// 这里更新表格数据 —— 第二步中查看AI建议页面的表格
			var tb = document.getElementById('category-tabular-content2');//获取表格的dom节点
			var td = tb.rows[0].cells[1]; //获取1行2列的td单元格
			td.innerHTML = Elevation_features[order_list[AIRoles_index]];
		
			var td = tb.rows[1].cells[1]; //获取2行2列的td单元格
			td.innerHTML = Aspect_features[order_list[AIRoles_index]];
		
			var td = tb.rows[2].cells[1]; //获取3行2列的td单元格
			td.innerHTML = Slope_features[order_list[AIRoles_index]];
		
			var td = tb.rows[3].cells[1]; //获取4行2列的td单元格
			td.innerHTML = Horizontal_Distance_To_Hydrology_features[order_list[AIRoles_index]];
		
			var td = tb.rows[4].cells[1]; //获取5行2列的td单元格
			td.innerHTML = Vertical_Distance_To_Hydrology_features[order_list[AIRoles_index]];

			var td = tb.rows[5].cells[1]; //获取6行2列的td单元格
			td.innerHTML = Horizontal_Distance_To_Roadways_features[order_list[AIRoles_index]];

			var td = tb.rows[6].cells[1]; //获取7行2列的td单元格
			td.innerHTML = Hillshade_9am_features[order_list[AIRoles_index]];

			var td = tb.rows[7].cells[1]; //获取8行2列的td单元格
			td.innerHTML = Hillshade_Noon_features[order_list[AIRoles_index]];

			var td = tb.rows[8].cells[1]; //获取9行2列的td单元格
			td.innerHTML = Hillshade_3pm_features[order_list[AIRoles_index]];

			var td = tb.rows[9].cells[1]; //获取10行2列的td单元格
			td.innerHTML = Horizontal_Distance_To_Fire_Points_features[order_list[AIRoles_index]];



			document.getElementById('the-index').textContent = AIRoles_index + 1 + '/' + order_list.length;
			document.getElementById('the-index2').textContent = AIRoles_index + 1 + '/' + order_list.length;
			// alert(AIRoles_index);

			// 把选项框清零

			document.getElementById('radio-final-decision-1').checked = false;
			document.getElementById('radio-final-decision-2').checked = false;
			document.getElementById('radio-final-decision-3').checked = false;
			document.getElementById('radio-final-decision-4').checked = false;
			document.getElementById('radio-final-decision-5').checked = false;

			document.getElementById('radio-final-confidence-1').checked = false;
			document.getElementById('radio-final-confidence-2').checked = false;
			document.getElementById('radio-final-confidence-3').checked = false;
			document.getElementById('radio-final-confidence-4').checked = false;
			document.getElementById('radio-final-confidence-5').checked = false;
			// 对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = AIRoles_index/order_list.length*100;
			document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
			document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';

		}
		else{
			// 把选项框清零

			document.getElementById('radio-final-decision-1').checked = false;
			document.getElementById('radio-final-decision-2').checked = false;
			document.getElementById('radio-final-decision-3').checked = false;
			document.getElementById('radio-final-decision-4').checked = false;
			document.getElementById('radio-final-decision-5').checked = false;

			document.getElementById('radio-final-confidence-1').checked = false;
			document.getElementById('radio-final-confidence-2').checked = false;
			document.getElementById('radio-final-confidence-3').checked = false;
			document.getElementById('radio-final-confidence-4').checked = false;
			document.getElementById('radio-final-confidence-5').checked = false;
			// 对页面的其他位置进行更新，比如进度数字，进度条

			var percentage = (AIRoles_index+1)/order_list.length*100;
			document.getElementById('progressbar1').style.width = parseInt(percentage) + '%';
			document.getElementById('progressbar1').textContent = parseInt(percentage) + '%';


			document.getElementById("go_to_questionnaire").style.display = "block";
			document.getElementById("next-task-btn").style.display="none";
			document.getElementById("AI_suggestion1").style.display="none";
		}

		// 对每个选项卡，恢复“可点击”状态，以及将下面的区域都隐藏
		document.getElementById("tab1").style.pointerEvents = "auto";
		document.getElementById("tab2").style.pointerEvents = "auto";
		document.getElementById("tab3").style.pointerEvents = "auto";
		document.getElementById("tab4").style.pointerEvents = "auto";
		document.getElementById("tab5").style.pointerEvents = "auto";

		document.getElementById("highlight_1").style.display = "none";
		document.getElementById("highlight_2").style.display = "none";
		document.getElementById("highlight_3").style.display = "none";
		document.getElementById("highlight_4").style.display = "none";
		document.getElementById("highlight_5").style.display = "none";

		document.getElementById("tab1").className = "";
		document.getElementById("tab2").className = "";
		document.getElementById("tab3").className = "";
		document.getElementById("tab4").className = "";
		document.getElementById("tab5").className = "";

		//清除当前页的log
		user_interaction_log_thispape = [];

		$("html, body").animate({ scrollTop: 0 }, "slow");

		// 把用户选择的那个tab复原成只有文字的样子
		document.getElementById("tab" + (parseInt(human_pred)+1)).innerHTML = option_list[human_pred];


	}
});



function changeBackg(thetext, feature_list, color_list){
	var result;
	result = thetext;
	var newword;
	for(var i = 0; i < feature_list.length; i++){
		newword = '<font style=\"background: '+color_list[i]+'\">'+feature_list[i]+'</font>';
		var toreplace = new RegExp('\\b' + feature_list[i]+ '\\b', "gi");
		result = result.replace(toreplace, newword);
	}
	return result;
}


function getColorList(grdtru, importance_list){
	var maxpos = Math.max.apply(null,importance_list);
	var minneg = Math.min.apply(null,importance_list);
	var color_list = []
	if(grdtru == 0){
		// business
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#5F9EA0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#75b6ae');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#e2edeb');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#B8D4E7');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#A8CAE2');
			else
				color_list.push('#88B6D7');
		}
	}
	else if(grdtru == 1){
		//entertainment
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#5F9EA0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#A7C9CA');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#daebe5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#f7e2cf');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#fed1a9');
			else
				color_list.push('#f1c095');
		}
	}
	else if(grdtru == 2){
		//healthy
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#7AAEB0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#9dced0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#D3E4E5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#E3F2E3');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#B1DCB1');
			else
				color_list.push('#2CA02C');
		}
	}
	else if(grdtru == 3){
		//politics
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#7AAEB0');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#9dced0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#D3E4E5');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#eac4c4');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#e69898');
			else
				color_list.push('#E57777');
		}
	}
	else{
		//tech
		for(var i = 0; i < importance_list.length; i++){
			if(importance_list[i] < minneg*2/3)
				color_list.push('#a9dbdb');
			else if(importance_list[i] >= minneg*2/3 && importance_list[i]<minneg/3)
				color_list.push('#CCE0E0');
			else if(importance_list[i] >= minneg/3 && importance_list[i]<0)
				color_list.push('#e0eaea');
			else if(importance_list[i]>0 && importance_list[i] < maxpos/3)
				color_list.push('#F5F0F9');
			else if(importance_list[i] >= maxpos/3 && importance_list[i] < maxpos*2/3)
				color_list.push('#E5D9EF');
			else
				color_list.push('#9467BD');
		}
	}
	return color_list;
}



function updateCharts(){



	// 第一个选项卡，Spruce
	var Spruce_Elevation_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][0]);
	var Spruce_Aspect_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][1]);
	var Spruce_Slope_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][2]);
	var Spruce_Horizontal_Distance_To_Hydrology_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][3]);
	var Spruce_Vertical_Distance_To_Hydrology_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][4]);
	var Spruce_Horizontal_Distance_To_Roadways_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][5]);
	var Spruce_Hillshade_9am_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][6]);
	var Spruce_Hillshade_Noon_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][7]);
	var Spruce_Hillshade_3pm_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][8]);
	var Spruce_Horizontal_Distance_To_Fire_Points_importance = parseFloat(importance_Spruce[order_list[AIRoles_index]][9]);


	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	Spruce_importance_vector = [Spruce_Elevation_importance, Spruce_Aspect_importance, Spruce_Slope_importance, Spruce_Horizontal_Distance_To_Hydrology_importance, Spruce_Vertical_Distance_To_Hydrology_importance,
		Spruce_Horizontal_Distance_To_Roadways_importance, Spruce_Hillshade_9am_importance, Spruce_Hillshade_Noon_importance, Spruce_Hillshade_3pm_importance, Spruce_Horizontal_Distance_To_Fire_Points_importance];


	importance_Spruce_positive_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_Spruce_negative_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < Spruce_importance_vector.length; i++){
		if (Spruce_importance_vector[i] > 0){
			importance_Spruce_positive_list[i] = Spruce_importance_vector[i];
		}
		else{
			importance_Spruce_negative_list[i] = Spruce_importance_vector[i];
		}
	}

	



	// 第二个选项卡，Lodgepole
	var Lodgepole_Elevation_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][0]);
	var Lodgepole_Aspect_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][1]);
	var Lodgepole_Slope_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][2]);
	var Lodgepole_Horizontal_Distance_To_Hydrology_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][3]);
	var Lodgepole_Vertical_Distance_To_Hydrology_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][4]);
	var Lodgepole_Horizontal_Distance_To_Roadways_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][5]);
	var Lodgepole_Hillshade_9am_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][6]);
	var Lodgepole_Hillshade_Noon_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][7]);
	var Lodgepole_Hillshade_3pm_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][8]);
	var Lodgepole_Horizontal_Distance_To_Fire_Points_importance = parseFloat(importance_Lodgepole[order_list[AIRoles_index]][9]);

	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	Lodgepole_importance_vector = [Lodgepole_Elevation_importance, Lodgepole_Aspect_importance, Lodgepole_Slope_importance, Lodgepole_Horizontal_Distance_To_Hydrology_importance, Lodgepole_Vertical_Distance_To_Hydrology_importance,
		Lodgepole_Horizontal_Distance_To_Roadways_importance, Lodgepole_Hillshade_9am_importance, Lodgepole_Hillshade_Noon_importance, Lodgepole_Hillshade_3pm_importance, Lodgepole_Horizontal_Distance_To_Fire_Points_importance];


	importance_Lodgepole_positive_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_Lodgepole_negative_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < Lodgepole_importance_vector.length; i++){
		if (Lodgepole_importance_vector[i] > 0){
			importance_Lodgepole_positive_list[i] = Lodgepole_importance_vector[i];
		}
		else{
			importance_Lodgepole_negative_list[i] = Lodgepole_importance_vector[i];
		}
	}


	


	// 第三个选项卡，Ponderosa
	var Ponderosa_Elevation_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][0]);
	var Ponderosa_Aspect_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][1]);
	var Ponderosa_Slope_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][2]);
	var Ponderosa_Horizontal_Distance_To_Hydrology_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][3]);
	var Ponderosa_Vertical_Distance_To_Hydrology_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][4]);
	var Ponderosa_Horizontal_Distance_To_Roadways_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][5]);
	var Ponderosa_Hillshade_9am_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][6]);
	var Ponderosa_Hillshade_Noon_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][7]);
	var Ponderosa_Hillshade_3pm_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][8]);
	var Ponderosa_Horizontal_Distance_To_Fire_Points_importance = parseFloat(importance_Ponderosa[order_list[AIRoles_index]][9]);

	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	Ponderosa_importance_vector = [Ponderosa_Elevation_importance, Ponderosa_Aspect_importance, Ponderosa_Slope_importance, Ponderosa_Horizontal_Distance_To_Hydrology_importance, Ponderosa_Vertical_Distance_To_Hydrology_importance,
		Ponderosa_Horizontal_Distance_To_Roadways_importance, Ponderosa_Hillshade_9am_importance, Ponderosa_Hillshade_Noon_importance, Ponderosa_Hillshade_3pm_importance, Ponderosa_Horizontal_Distance_To_Fire_Points_importance];


	importance_Ponderosa_positive_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_Ponderosa_negative_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < Ponderosa_importance_vector.length; i++){
		if (Ponderosa_importance_vector[i] > 0){
			importance_Ponderosa_positive_list[i] = Ponderosa_importance_vector[i];
		}
		else{
			importance_Ponderosa_negative_list[i] = Ponderosa_importance_vector[i];
		}
	}



	


	// 第四个选项卡，Douglas
	var Douglas_Elevation_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][0]);
	var Douglas_Aspect_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][1]);
	var Douglas_Slope_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][2]);
	var Douglas_Horizontal_Distance_To_Hydrology_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][3]);
	var Douglas_Vertical_Distance_To_Hydrology_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][4]);
	var Douglas_Horizontal_Distance_To_Roadways_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][5]);
	var Douglas_Hillshade_9am_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][6]);
	var Douglas_Hillshade_Noon_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][7]);
	var Douglas_Hillshade_3pm_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][8]);
	var Douglas_Horizontal_Distance_To_Fire_Points_importance = parseFloat(importance_Douglas[order_list[AIRoles_index]][9]);

	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	Douglas_importance_vector = [Douglas_Elevation_importance, Douglas_Aspect_importance, Douglas_Slope_importance, Douglas_Horizontal_Distance_To_Hydrology_importance, Douglas_Vertical_Distance_To_Hydrology_importance,
		Douglas_Horizontal_Distance_To_Roadways_importance, Douglas_Hillshade_9am_importance, Douglas_Hillshade_Noon_importance, Douglas_Hillshade_3pm_importance, Douglas_Horizontal_Distance_To_Fire_Points_importance];


	importance_Douglas_positive_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_Douglas_negative_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < Douglas_importance_vector.length; i++){
		if (Douglas_importance_vector[i] > 0){
			importance_Douglas_positive_list[i] = Douglas_importance_vector[i];
		}
		else{
			importance_Douglas_negative_list[i] = Douglas_importance_vector[i];
		}
	}


	






	// 第五个选项卡，Krummholz
	var Krummholz_Elevation_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][0]);
	var Krummholz_Aspect_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][1]);
	var Krummholz_Slope_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][2]);
	var Krummholz_Horizontal_Distance_To_Hydrology_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][3]);
	var Krummholz_Vertical_Distance_To_Hydrology_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][4]);
	var Krummholz_Horizontal_Distance_To_Roadways_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][5]);
	var Krummholz_Hillshade_9am_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][6]);
	var Krummholz_Hillshade_Noon_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][7]);
	var Krummholz_Hillshade_3pm_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][8]);
	var Krummholz_Horizontal_Distance_To_Fire_Points_importance = parseFloat(importance_Krummholz[order_list[AIRoles_index]][9]);

	// 把一个vector拆成两个，一个专门存放negative（所有positive对应的位置变成0），一个专门存放positive（所有negative对应的位置变成0）
	Krummholz_importance_vector = [Krummholz_Elevation_importance, Krummholz_Aspect_importance, Krummholz_Slope_importance, Krummholz_Horizontal_Distance_To_Hydrology_importance, Krummholz_Vertical_Distance_To_Hydrology_importance,
		Krummholz_Horizontal_Distance_To_Roadways_importance, Krummholz_Hillshade_9am_importance, Krummholz_Hillshade_Noon_importance, Krummholz_Hillshade_3pm_importance, Krummholz_Horizontal_Distance_To_Fire_Points_importance];


	importance_Krummholz_positive_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	importance_Krummholz_negative_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	for(var i = 0; i < Krummholz_importance_vector.length; i++){
		if (Krummholz_importance_vector[i] > 0){
			importance_Krummholz_positive_list[i] = Krummholz_importance_vector[i];
		}
		else{
			importance_Krummholz_negative_list[i] = Krummholz_importance_vector[i];
		}
	}
















	category_Spruce = features_Spruce[order_list[AIRoles_index]];

	chart_Spruce.update({
		xAxis: {
			categories: category_Spruce,
		}, 
		series: [{
			data: importance_Spruce_negative_list,
		}, {
			data: importance_Spruce_positive_list,
		}]
	});


	category_Lodgepole = features_Lodgepole[order_list[AIRoles_index]];

	chart_Lodgepole.update({
		xAxis: {
			categories: category_Lodgepole,
		}, 
		series: [{
			data: importance_Lodgepole_negative_list,
		}, {
			data: importance_Lodgepole_positive_list,
		}]
	});


	category_Ponderosa = features_Ponderosa[order_list[AIRoles_index]];

	chart_Ponderosa.update({
		xAxis: {
			categories: category_Ponderosa,
		}, 
		series: [{
			data: importance_Ponderosa_negative_list,
		}, {
			data: importance_Ponderosa_positive_list,
		}]
	});

	category_Douglas = features_Douglas[order_list[AIRoles_index]];

	chart_Douglas.update({
		xAxis: {
			categories: category_Douglas,
		}, 
		series: [{
			data: importance_Douglas_negative_list,
		}, {
			data: importance_Douglas_positive_list,
		}]
	});

	category_Krummholz = features_Krummholz[order_list[AIRoles_index]];

	chart_Krummholz.update({
		xAxis: {
			categories: category_Krummholz,
		}, 
		series: [{
			data: importance_Krummholz_negative_list,
		}, {
			data: importance_Krummholz_positive_list,
		}]
	});

}



var differentindex = 999;
layercolor = "#fcfcfc";
function showExplanation(expl,theword){
	differentindex = layer.tips(expl, theword, {
		area: 'auto',
		tips: [2, layercolor],
		time: 30000
	});
}

// tutorial-first
// tutorial-first
// tutorial-first
$(document).ready(function(){
	$("#elevation-tutorial").hover(function() {
		showExplanation("Elevation in meters.","#elevation-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#aspect-tutorial").hover(function() {
		showExplanation("Aspect is the orientation of slope, measured clockwise in degrees from 0 to 360, where 0 is north-facing, 90 is east-facing, 180 is south-facing, and 270 is west-facing.","#aspect-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#slope-tutorial").hover(function() {
		showExplanation("Slope (from 0 to 90) is the steepness or slope of the ground surface on which the plant grows. The higher the number, the steeper it is.","#slope-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-hydrology-tutorial").hover(function() {
		showExplanation("Horizontal distance to nearest surface water.","#horizontal-hydrology-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#vertical-hydrology-tutorial").hover(function() {
		showExplanation("Vertical distance to nearest surface water.","#vertical-hydrology-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-roadways-tutorial").hover(function() {
		showExplanation("Horizontal distance to nearest roadway.","#horizontal-roadways-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-9am-tutorial").hover(function() {
		showExplanation("Hill shade index at 9am, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-9am-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-noon-tutorial").hover(function() {
		showExplanation("Hill shade index at noon, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-noon-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-3pm-tutorial").hover(function() {
		showExplanation("Hill shade index at 3pm, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-3pm-tutorial")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-fire-tutorial").hover(function() {
		showExplanation("Horizontal distance to nearest wildfire ignition points.","#horizontal-fire-tutorial")
	}, function() {layer.close(differentindex);});
});
// tutorial-first
// tutorial-first
// tutorial-first

// tutorial-second
// tutorial-second
// tutorial-second
$(document).ready(function(){
	$("#elevation-tutorial2").hover(function() {
		showExplanation("Elevation in meters.","#elevation-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#aspect-tutorial2").hover(function() {
		showExplanation("Aspect is the orientation of slope, measured clockwise in degrees from 0 to 360, where 0 is north-facing, 90 is east-facing, 180 is south-facing, and 270 is west-facing.","#aspect-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#slope-tutorial2").hover(function() {
		showExplanation("Slope (from 0 to 90) is the steepness or slope of the ground surface on which the plant grows. The higher the number, the steeper it is.","#slope-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-hydrology-tutorial2").hover(function() {
		showExplanation("Horizontal distance to nearest surface water.","#horizontal-hydrology-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#vertical-hydrology-tutorial2").hover(function() {
		showExplanation("Vertical distance to nearest surface water.","#vertical-hydrology-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-roadways-tutorial2").hover(function() {
		showExplanation("Horizontal distance to nearest roadway.","#horizontal-roadways-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-9am-tutorial2").hover(function() {
		showExplanation("Hill shade index at 9am, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-9am-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-noon-tutorial2").hover(function() {
		showExplanation("Hill shade index at noon, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-noon-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-3pm-tutorial2").hover(function() {
		showExplanation("Hill shade index at 3pm, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-3pm-tutorial2")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-fire-tutorial2").hover(function() {
		showExplanation("Horizontal distance to nearest wildfire ignition points.","#horizontal-fire-tutorial2")
	}, function() {layer.close(differentindex);});
});
// tutorial-second
// tutorial-second
// tutorial-second

// tasks
// tasks
// tasks
$(document).ready(function(){
	$("#elevation").hover(function() {
		showExplanation("Elevation in meters.","#elevation")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#aspect").hover(function() {
		showExplanation("Aspect is the orientation of slope, measured clockwise in degrees from 0 to 360, where 0 is north-facing, 90 is east-facing, 180 is south-facing, and 270 is west-facing.","#aspect")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#slope").hover(function() {
		showExplanation("Slope (from 0 to 90) is the steepness or slope of the ground surface on which the plant grows. The higher the number, the steeper it is.","#slope")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-hydrology").hover(function() {
		showExplanation("Horizontal distance to nearest surface water.","#horizontal-hydrology")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#vertical-hydrology").hover(function() {
		showExplanation("Vertical distance to nearest surface water.","#vertical-hydrology")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-roadways").hover(function() {
		showExplanation("Horizontal distance to nearest roadway.","#horizontal-roadways")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-9am").hover(function() {
		showExplanation("Hill shade index at 9am, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-9am")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-noon").hover(function() {
		showExplanation("Hill shade index at noon, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-noon")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-3pm").hover(function() {
		showExplanation("Hill shade index at 3pm, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-3pm")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-firepoints").hover(function() {
		showExplanation("Horizontal distance to nearest wildfire ignition points.","#horizontal-firepoints")
	}, function() {layer.close(differentindex);});
});

$(document).ready(function(){
	$("#elevation-final").hover(function() {
		showExplanation("Elevation in meters.","#elevation-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#aspect-final").hover(function() {
		showExplanation("Aspect is the orientation of slope, measured clockwise in degrees from 0 to 360, where 0 is north-facing, 90 is east-facing, 180 is south-facing, and 270 is west-facing.","#aspect-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#slope-final").hover(function() {
		showExplanation("Slope (from 0 to 90) is the steepness or slope of the ground surface on which the plant grows. The higher the number, the steeper it is.","#slope-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-hydrology-final").hover(function() {
		showExplanation("Horizontal distance to nearest surface water.","#horizontal-hydrology-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#vertical-hydrology-final").hover(function() {
		showExplanation("Vertical distance to nearest surface water.","#vertical-hydrology-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-roadways-final").hover(function() {
		showExplanation("Horizontal distance to nearest roadway.","#horizontal-roadways-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-9am-final").hover(function() {
		showExplanation("Hill shade index at 9am, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-9am-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-noon-final").hover(function() {
		showExplanation("Hill shade index at noon, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-noon-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#hillshade-3pm-final").hover(function() {
		showExplanation("Hill shade index at 3pm, summer solstice. The value ranges from 0 (complete shadow) to 255 (complete sun).","#hillshade-3pm-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#horizontal-fire-final").hover(function() {
		showExplanation("Horizontal distance to nearest wildfire ignition points.","#horizontal-fire-final")
	}, function() {layer.close(differentindex);});
});
// tasks
// tasks
// tasks

//tasks prediction2
//tasks prediction2
//tasks prediction2

$(document).ready(function(){
	$("#spruce-final").hover(function() {
		showExplanation("<ul><li>Grow in high altitudes&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li></ul>","#spruce-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#lodgepole-final").hover(function() {
		showExplanation("<ul><li>Grow in areas with cold, wet winters and warm, dry summers&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#lodgepole-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#ponderosa-final").hover(function() {
		showExplanation("<ul><li>Adapt to a wide range of soil and growing conditions&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li><li>Highly drought tolerant&emsp;&emsp;</li><li>Resistant to wild fires&emsp;&emsp;</li></ul>","#ponderosa-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#douglas-final").hover(function() {
		showExplanation("<ul><li>Grow in inland mountainous regions and coastal areas&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#douglas-final")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#krummholz-final").hover(function() {
		showExplanation("<ul><li>Bush-like growth-forms&emsp;&emsp;</li><li>Grow in the forest-tundra ecotone&emsp;&emsp;</li></ul>","#krummholz-final")
	}, function() {layer.close(differentindex);});
});

//tasks prediction2
//tasks prediction2
//tasks prediction2


//tutorial prediction1
//tutorial prediction1
//tutorial prediction1
$(document).ready(function(){
	$("#tutorial-prediction1-spruce").hover(function() {
		showExplanation("<ul><li>Grow in high altitudes&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li></ul>","#tutorial-prediction1-spruce")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction1-lodgepole").hover(function() {
		showExplanation("<ul><li>Grow in areas with cold, wet winters and warm, dry summers&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#tutorial-prediction1-lodgepole")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction1-ponderosa").hover(function() {
		showExplanation("<ul><li>Adapt to a wide range of soil and growing conditions&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li><li>Highly drought tolerant&emsp;&emsp;</li><li>Resistant to wild fires&emsp;&emsp;</li></ul>","#tutorial-prediction1-ponderosa")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction1-douglas").hover(function() {
		showExplanation("<ul><li>Grow in inland mountainous regions and coastal areas&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#tutorial-prediction1-douglas")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction1-krummholz").hover(function() {
		showExplanation("<ul><li>Bush-like growth-forms&emsp;&emsp;</li><li>Grow in the forest-tundra ecotone&emsp;&emsp;</li></ul>","#tutorial-prediction1-krummholz")
	}, function() {layer.close(differentindex);});
});
//tutorial prediction1
//tutorial prediction1
//tutorial prediction1


//tutorial prediction2
//tutorial prediction2
//tutorial prediction2

$(document).ready(function(){
	$("#tutorial-prediction2-spruce").hover(function() {
		showExplanation("<ul><li>Grow in high altitudes&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li></ul>","#tutorial-prediction2-spruce")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction2-lodgepole").hover(function() {
		showExplanation("<ul><li>Grow in areas with cold, wet winters and warm, dry summers&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#tutorial-prediction2-lodgepole")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction2-ponderosa").hover(function() {
		showExplanation("<ul><li>Adapt to a wide range of soil and growing conditions&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li><li>Highly drought tolerant&emsp;&emsp;</li><li>Resistant to wild fires&emsp;&emsp;</li></ul>","#tutorial-prediction2-ponderosa")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction2-douglas").hover(function() {
		showExplanation("<ul><li>Grow in inland mountainous regions and coastal areas&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#tutorial-prediction2-douglas")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tutorial-prediction2-krummholz").hover(function() {
		showExplanation("<ul><li>Bush-like growth-forms&emsp;&emsp;</li><li>Grow in the forest-tundra ecotone&emsp;&emsp;</li></ul>","#tutorial-prediction2-krummholz")
	}, function() {layer.close(differentindex);});
});

//tutorial prediction2
//tutorial prediction2
//tutorial prediction2

//tasks prediction1
//tasks prediction1
//tasks prediction1

$(document).ready(function(){
	$("#tasks-prediction1-spruce").hover(function() {
		showExplanation("<ul><li>Grow in high altitudes&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li></ul>","#tasks-prediction1-spruce")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tasks-prediction1-lodgepole").hover(function() {
		showExplanation("<ul><li>Grow in areas with cold, wet winters and warm, dry summers&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#tasks-prediction1-lodgepole")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tasks-prediction1-ponderosa").hover(function() {
		showExplanation("<ul><li>Adapt to a wide range of soil and growing conditions&emsp;&emsp;</li><li>Prefer full sun&emsp;&emsp;</li><li>Highly drought tolerant&emsp;&emsp;</li><li>Resistant to wild fires&emsp;&emsp;</li></ul>","#tasks-prediction1-ponderosa")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tasks-prediction1-douglas").hover(function() {
		showExplanation("<ul><li>Grow in inland mountainous regions and coastal areas&emsp;&emsp;</li><li>Prefer full sun or partial sun/shade&emsp;&emsp;</li></ul>","#tasks-prediction1-douglas")
	}, function() {layer.close(differentindex);});
});
$(document).ready(function(){
	$("#tasks-prediction1-krummholz").hover(function() {
		showExplanation("<ul><li>Bush-like growth-forms&emsp;&emsp;</li><li>Grow in the forest-tundra ecotone&emsp;&emsp;</li></ul>","#tasks-prediction1-krummholz")
	}, function() {layer.close(differentindex);});
});

//tasks prediction1
//tasks prediction1
//tasks prediction1



$("#see_ai_suggestion").click(function(){


	var objData1 = $("#firstdecision1").serializeArray();

	console.log("hello",objData1);

	
	//console.log(document.getElementById('radio-first-decision-1').checked);


	if(document.getElementById('radio-first-decision-1').checked == false && document.getElementById('radio-first-decision-2').checked == false && document.getElementById('radio-first-decision-3').checked == false
	&& document.getElementById('radio-first-decision-4').checked == false && document.getElementById('radio-first-decision-5').checked == false){
		alert("Please make your prediction");
		return false;
	}
	/*if((document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true) && (document.getElementById('radio-first-confidence-1').checked == true || document.getElementById('radio-first-confidence-2').checked == true)){*/
	if (document.getElementById('radio-first-decision-1').checked == true || document.getElementById('radio-first-decision-2').checked == true || document.getElementById('radio-first-decision-3').checked == true
	|| document.getElementById('radio-first-decision-4').checked == true || document.getElementById('radio-first-decision-5').checked == true) {
		firstdecision_1 = objData1[0];

		updateCharts();
		document.getElementById("next-task-btn").style.display="block";

		// 取5个output中第一位（最大概率）作为AI的预测
		ai_pred = ai_prediction[order_list[AIRoles_index]][0];
		ai_secondary_pred = ai_prediction[order_list[AIRoles_index]][1];


		var ai_third_pred = ai_prediction[order_list[AIRoles_index]][2];
		var ai_fourth_pred = ai_prediction[order_list[AIRoles_index]][3];
		var ai_fifth_pred = ai_prediction[order_list[AIRoles_index]][4];


		firstdecision_1 = objData1[0];

		human_pred = firstdecision_1['value'];



		var forest_list = ['Spruce/Fir', 'Lodgepole Pine', 'Ponderosa Pine', 'Douglas-fir', 'Krummholz'];

		

		var top1_tab = "tab" + (ai_pred+1);
		var top2_tab = "tab" + (ai_secondary_pred+1);
		var top3_tab = "tab" + (ai_third_pred+1);
		var top4_tab = "tab" + (ai_fourth_pred+1);
		var top5_tab = "tab" + (ai_fifth_pred+1);


		var top1_highlight = "highlight_" + (ai_pred+1);

		// 初始化展示top1的解释
		document.getElementById(top1_tab).className = "active";
		document.getElementById(top1_highlight).style.display = "block";



		document.getElementById(top1_tab).innerHTML = "<b><u>" + forest_list[ai_pred] + "</u></b>";
		document.getElementById(top2_tab).innerHTML = "<b><u>" + forest_list[ai_secondary_pred] + "</u></b>";
		



		document.getElementById(top3_tab).innerHTML = forest_list[ai_third_pred];
		document.getElementById(top4_tab).innerHTML = forest_list[ai_fourth_pred];
		document.getElementById(top5_tab).innerHTML = forest_list[ai_fifth_pred];





		var human_tab = "tab" + (parseInt(human_pred)+1);

		// 把用户选择的那个一tab 绘制上用户icon
		// if(ai_pred == human_pred){
		// 	document.getElementById(top1_tab).innerHTML = "<b><u>" + forest_list[ai_pred] + " <i class=\"fa-solid fa-user-check\"></i>" + "</u></b>";
		// }
		// if(ai_pred != human_pred){
		// 	document.getElementById(top1_tab).innerHTML = "<b><u>" + forest_list[ai_pred] + "</u></b>";
		// }

		// if(ai_secondary_pred == human_pred){
		// 	document.getElementById(top2_tab).innerHTML = "<b><u>" + forest_list[ai_secondary_pred] + " <i class=\"fa-solid fa-user-check\"></i>" + "</u></b>";
		// }

		// if(ai_secondary_pred != human_pred){
		// 	document.getElementById(top2_tab).innerHTML = "<b><u>" + forest_list[ai_secondary_pred] + "</u></b>";
		// }
		
		// if(ai_secondary_pred != human_pred && ai_pred != human_pred){
		// 	document.getElementById(human_tab).innerHTML = option_list[human_pred] + " <i class=\"fa-solid fa-user-check\"></i>";
		// }
		
		document.getElementById("human_initialprediction").innerHTML = "Your prediction: <b>" + option_list[human_pred] + "</b>";







		$(".nav-tabs a[href='#AI_suggestion1']").tab('show');
		$("html, body").animate({ scrollTop: 0 }, "slow");


		// 把选项框清零

		document.getElementById('radio-first-decision-1').checked = false;
		document.getElementById('radio-first-decision-2').checked = false;
		document.getElementById('radio-first-decision-3').checked = false;
		document.getElementById('radio-first-decision-4').checked = false;
		document.getElementById('radio-first-decision-5').checked = false;

	}

});







$("#go_to_questionnaire").click(function(){
	document.getElementById("go_to_questionnaire").style.display = "none";
	$(".nav-tabs a[href='#questionnaire']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	document.getElementById("go_to_questionnaire2").style.display = "block";
});


var attention_tocheck = false;





$("#go_to_next").click(function(){

	var objData = $("#post-task-questionnaire2").serializeArray();
	console.log(objData);

	// document.getElementById("go_to_questionnaire2").style.display="none";

	if(!checkIterationFormInfo2(objData)){
		return;
	}
	else{
		questionnaire_data2 = objData;
	}

	
	document.getElementById("question_area2").style.display = "none";


	$("#finishModal").modal('show');
	submitData_ms();


});


$("#exit_button").click(function(){
	document.getElementById("go_to_next").textContent = "Finished";
	document.getElementById("go_to_next").disabled = true;
});


//must input personal info
function checkIterationFormInfo(objData){
	
	if (objData.length < 24) {
		alert("Please answer all questions before finishing the experiment");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			// alert("Please answer question: " + objData[i].name);
			alert("Please answer all questions before finishing the experiment");
			return false;
		}
	}
	return true;
}



//must input personal info
function checkIterationFormInfo2(objData){
	
	if (objData.length < 16) {
		alert("Please answer all questions before finishing the experiment");
		return false;
	}

	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == ""){
			// alert("Please answer question: " + objData[i].name);
			alert("Please answer all questions before finishing the experiment");
			return false;
		}
	}
	return true;
}



function submitData_ms(){

	/*
	* 把数据上传到server
	*/

	var xhr = new XMLHttpRequest();
	//var url = "http://165.227.108.67/mingfei/submit.php"
	// var url = "https://shuaima.info/userstudy/submit.php"

	// var url = "https://shuaima.top/userstudy/submit.php";
	// var url = "http://49.232.60.34/userstudy/submit.php";

	var url = "http://49.232.60.34/userstudy/submit_prolific.php";

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById('user_id').innerHTML = xhr.responseText;
			console.log(xhr.responseText);
			//alert("Your response has been saved successfully!");
			$("#finishModal").modal('show');
	    }
	};

	//CFG6PO0K

	var userinfo_alldata = {
		"uid": user_id,

		"condition": 'Evaluative_Forest',

		"prolific_id": prolific_id,

		"user_info": userinfo,

		"decision_data": all_data_tosave,

		"interaction_log": user_interaction_log,

		"questionnaire_data": questionnaire_data,

		"questionnaire_data2": questionnaire_data2,

		"simple_attention_check": attention_check_useranswer,
		
		"tab_click_times": [tab1_clickTimes, tab2_clickTimes, tab3_clickTimes, tab4_clickTimes, tab5_clickTimes]
	}
	
	var dataJson = JSON.stringify(userinfo_alldata);
	xhr.send(dataJson);
	

	/*
	* 把数据存为本地json文件，不上传到server
	*/
	// var blob = new Blob([dataJson], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, user_id + ".json");
}




//must input personal info
function checkFormInfo(objData) {
	for (var i = 0; i < objData.length; i++) {
		if (objData[i].value == "") {
			alert("Please input value: " + objData[i].name);
			return false;
		}
	}
	return true;
}




let nav = document.querySelectorAll(".nav>div");
let item = document.querySelectorAll(".item>div");

for (let i = 0; i < nav.length; i++) {
  nav[i].index = i;
  nav[i].onclick = function () {
	for (var j = 0; j < item.length; j++) {
	  nav[j].className = "";
	  item[j].style.display = "none";
	}
	this.className = "active";
	console.log(nav[i].index, 'index')
	item[nav[i].index].style.display = "block";
  };
}



$("#go_to_questionnaire2").click(function(){



	


	var objData = $("#post-task-questionnaire").serializeArray();
	console.log(objData);

	// document.getElementById("go_to_questionnaire").style.display="none";

	if(!checkIterationFormInfo(objData)){
		return;
	}
	else{
		questionnaire_data = objData;
	}


	document.getElementById("go_to_questionnaire2").style.display = "none";

	$(".nav-tabs a[href='#questionnaire2']").tab('show');
	$("html, body").animate({ scrollTop: 0 }, "slow");

	document.getElementById("go_to_next").style.display = "block";


});