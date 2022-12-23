import { css } from 'styled-components';

import InterThin from '@fonts/Inter-Thin.ttf';
import InterExtraLight from '@fonts/Inter-ExtraLight.ttf';
import InterLight from '@fonts/Inter-Light.ttf';
import InterRegular from '@fonts/Inter-Regular.ttf';
import InterMedium from '@fonts/Inter-Medium.ttf';
import InterSemiBold from '@fonts/Inter-SemiBold.ttf';
import InterBold from '@fonts/Inter-Bold.ttf';
import InterExtraBold from '@fonts/Inter-ExtraBold.ttf';
import InterBlack from '@fonts/Inter-Black.ttf';

const InterWeights = {
    100: InterThin,
    200: InterExtraLight,
    300: InterLight,
    400: InterRegular,
    500: InterMedium,
    600: InterSemiBold,
    700: InterBold,
    800: InterExtraBold,
    900: InterBlack,
};

// Create font-face for each weight
// and join them into a single string
// to be used in the styled-components css`` function
const createFontFace = (name, weights) => {
    // Map over the weights object and create a font-face for each weight
    const fontFace = Object.keys(weights).map(
        (weight) => `
            @font-face {
                font-family: '${name}';
                font-style: normal;
                font-weight: ${weight};
                src: url(${weights[weight]}) format('truetype');
            }
        `
    );

    return fontFace.join('');
}

const Fonts = css`
    ${createFontFace('Inter', InterWeights)}
`;

export default Fonts;