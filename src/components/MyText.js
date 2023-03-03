import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

/* ở font open sans chỉ có 5 styles, còn mặc định của react-native có 9 styles 
và kèm 2 styles mặc định ở đây chúng ta custom lại sao cho khớp với react-native */
const GilroyFont = {
    normal: Platform.OS === 'android' ? 'regular' : '',
    bold: Platform.OS === 'android' ? 'bold' : 'Bold',
    100: Platform.OS === 'android' ? 'thin' : 'Thin',
    200: Platform.OS === 'android' ? 'xlight' : 'XLight',
    300: Platform.OS === 'android' ? 'light' : 'Light',
    400: Platform.OS === 'android' ? 'medium' : 'Medium',
    500: Platform.OS === 'android' ? 'semibold' : 'SemiBold',
    600: Platform.OS === 'android' ? 'bold' : 'Bold',
    700: Platform.OS === 'android' ? 'xbold' : 'XBold',
    800: Platform.OS === 'android' ? 'heavy' : 'Heavy',
    900: Platform.OS === 'android' ? 'black' : 'Black'
};

/* chuyển fontWeight và fontStyle lại ban đầu
bởi vì chúng ta sử dụng fontFamily có kèm 2 thằng này rồi */
const disableStyles = {
    fontStyle: 'normal',
    fontWeight: 'normal'
};

export default function MyText(props) {
    /* ở đây mình lấy giá trị fontWeight với fontStyle ra */
    const { fontWeight = 'normal', fontStyle } = StyleSheet.flatten(props.style || {});

    /* bây giờ mình thêm fontFamily vào với cú pháp font mình đã định trước 
  cú pháp: tên font _ độ đậm _ italic (nếu có) */
    const fontFamily =
        Platform.OS === 'android'
            ? `gilroy_${GilroyFont[fontWeight]}${fontStyle === 'italic' ? '_italic' : ''}`
            : `SVN-Gilroy${GilroyFont[fontWeight]}${fontStyle === 'italic' ? 'Italic' : ''}`;
            
    return (
        <Text
            {...props}
            allowFontScaling={false}
            style={[
                props.style,
                {
                    fontFamily,
                    lineHeight: props?.style?.fontSize
                        ? props.style.fontSize + props.style.fontSize / 3
                        : props?.style[1]?.fontSize
                        ? props?.style[1]?.fontSize + props?.style[1]?.fontSize / 3
                        : 14 + 14 / 3
                },
                Platform.OS === 'android' && disableStyles
            ]}
        />
    );
}
