import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function ProfileHeader(props, {width,height}) {
    return (
        <Svg width={width} height={height} viewBox="0 0 1002 1024" {...props}>
            <G fillRule="nonzero" fill="none">
                <Path fill="#F3F3F3" d="M487.8.22h480.22v697.59H487.8z" />
                <Path
                    fill="#FD8369"
                    d="M0 852.6h143.78v170.94H0zM185.79 723.29h143.78v300.25H185.79zM371.57 574.58h143.78v448.97H371.57z"
                />
                <Path
                    fill="#DE8E68"
                    d="M238.68 736.08h16.7v12.24h-16.7zM421.89 577.78h16.7v12.24h-16.7z"
                />
                <Path
                    d="M352.19 387.9c10 0 90.23 11.33 125.33 29.36-4.83 23.51-36.39 162-36.39 162h-19.65s-7.4-116.59-9-115.62c-10.63 5.47-52.82 19.27-97.91 19.94"
                    fill="#56CAD8"
                />
                <Path fill="#74D5DE" d="M352.19 387.9L256 737.69h-17.32V387.9" />
                <Path
                    d="M370 240.89c4.85 2.11 21.47 16 24.44 21 27.14-33.79 71.9-67.89 75.56-71.83 3.66-3.94 4.8-25.89 4.8-30.69 0-4.8 6.62-17.59 13-17.59v57.55s-74.9 105.05-87.23 105.05c-8 0-47.51-17.36-53-22.61"
                    fill="#DE8E68"
                />
                <Path
                    d="M309 221.55c9.88-16 67 8.78 67 16.43s-21.18 42.88-30.67 42.38c-7.56-.36-46.56-42.2-36.33-58.81z"
                    fill="#FCC486"
                />
                <Path
                    d="M295.13 198.34c72.58 0 68.52 180.72 57.06 189.56-11.46 8.84-105.52 13.13-114.12 0-8.6-13.13-11.93-189.56 57.06-189.56z"
                    fill="#FED385"
                />
                <Path
                    d="M216.63 255.39c-12.89 4.05-46.05 66.57-46.05 76.11 0 20 67.52 108.09 76.11 108.09 3.58-6.21 9.31-19.09 9.31-19.09s-40.56-75.64-48-85.42c6.44-6 29.82-37.46 33.64-47.24 3.82-9.78 2.39-30.78 2.39-30.78l-27.4-1.67z"
                    fill="#DE8E68"
                />
                <Path
                    d="M262.94 217.68c16.46 9-5.25 67.32-12.89 67.8-7.64.48-43.93-18.91-43.93-28.41 0-7.64 39.7-48.78 56.82-39.39z"
                    fill="#FED892"
                />
                <Path
                    fill="#000"
                    d="M238.68 745.73v14.8h44.6v-5.37l-27.08-9.43zM421.16 588.67v14.8h44.61v-5.36l-27.08-9.44z"
                />
                <Path
                    fill="#DFDFDF"
                    d="M487.8.22h480.22v44.93H487.8zM598.7 101.74H1002v114.91H598.7z"
                />
                <Path
                    fill="#F9F9F9"
                    d="M622.25 123.98h360.56v10.41H622.25zM622.25 148.78h360.56v10.41H622.25zM622.25 173.59h360.56V184H622.25z"
                />
                <Path fill="#DFDFDF" d="M598.7 262.83H1002v114.91H598.7z" />
                <Circle fill="#F9F9F9" cx={652.42} cy={320.28} r={34.22} />
                <Path
                    fill="#F9F9F9"
                    d="M711.89 286.06h262.55v33.1H711.89zM711.89 330.38h262.55v12.16H711.89z"
                />
                <Path fill="#FFF" d="M534.74 427.58h378.79v186.36H534.74z" />
                <Path
                    d="M313.14 162.78h-28.75v40.79c0 10.13 28.75 10.3 28.75 0v-40.79z"
                    fill="#D37C59"
                />
                <Path
                    d="M334.15 144.08c-5.06-21.67-21.15-36.43-35.94-33-12.67 3-20.26 18.32-19 36.29a9.42 9.42 0 002.6 18.47 9.74 9.74 0 001.72-.17c6.86 16.52 20.41 26.81 33 23.87 14.79-3.43 22.68-23.8 17.62-45.46z"
                    fill="#DE8E68"
                />
                <Path
                    d="M286.55 154.21c3.78 0 4.44-5.22 4.44-9.85 0-6.2 5.89-11.8 9.52-12.86 6.57-1.9 9.92-2.34 13.9-4.5 3.98-2.16 8.72-5.41 8.72-5.41a55.65 55.65 0 014.79 6.73c3.65-1 22.77-5.56 22.77-19.26 0-9-7.56-10.18-11-13-3.66-3-2.09-12.07-12-12.07-8.88 0-13.25 9.33-18.93 12.92-6.87 4.35-20.35.85-29.23 10-4.31 4.44-5.32 15.37-8 19.37-3.66 5.42-10 7-10 15.27 0 6.07 5.15 16.32 11.35 17.82 0-6 2.19-11.74 6.63-11.74 4.83 0 1.49 6.58 7.04 6.58z"
                    fill="#FD8369"
                />
            </G>
        </Svg>
    )
}

export default ProfileHeader;
