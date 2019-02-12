import React from 'react'
import { Svg } from 'expo'

const glassPath = [
  'M8.033,75.0086358 L8.033,6.042 C8.033,5.467 8.5,5 9.075,5 L61.647,5 C62.221,5 62.688,5.467 62.688,6.042 L62.688,22.0771452 C64.7537276,22.0291633 69.1957642,22.3591133 72.91,25.59 C76.701,28.887 78.623,34.219 78.623,41.437 L78.623,53.036 C78.623,60.253 76.701,65.586 72.91,68.883 C69.396,71.937 65.231,72.397 63.043,72.397 C62.9180609,72.397 62.7995646,72.3954913 62.688,72.3928726 L62.688,75.0018293 C62.6925785,75.027895 62.6962565,75.054297 62.699,75.081 C62.7046333,75.1369577 62.7546947,75.6742902 62.688,76.4639073 L62.688,93.957 C62.688,94.533 62.221,94.999 61.646,94.999 L9.075,94.999 C8.5,94.999 8.033,94.533 8.033,93.957 L8.033,76.452609 C7.96778251,75.6691678 8.01739358,75.1366904 8.023,75.081 C8.02554223,75.0565779 8.02888517,75.0324493 8.033,75.0086358 Z M10.117,81.4880897 L10.117,92.916 L60.605,92.916 L60.605,81.4870282 C58.973102,83.2642306 56.5383641,84.166 53.371,84.166 L17.351,84.166 C14.1842664,84.166 11.7498673,83.2645896 10.1169999,81.4880831 Z M10.117,74.9180049 C10.1482429,75.0375627 10.1590987,75.1646795 10.146,75.295 C10.144,75.318 9.908,78.09 11.671,80.026 C12.884,81.357 14.795,82.032 17.351,82.032 L53.371,82.032 C55.928,82.032 57.838,81.357 59.051,80.026 C60.815,78.089 60.578,75.318 60.576,75.29 C60.5638222,75.163003 60.5746269,75.0389853 60.605,74.9220807 L60.605,7.083 L10.117,7.083 L10.117,74.9180049 Z M62.688,24.2129503 L62.688,70.2531526 C64.4004952,70.2910702 68.3443929,70.0360859 71.529,67.255 C74.82,64.378 76.49,59.594 76.49,53.034 L76.49,41.436 C76.49,34.863 74.814,30.072 71.509,27.199 C68.3105419,24.416372 64.3907936,24.169612 62.688,24.2129503 Z M23.436,64.878 C21.516,64.878 20.013,63.01 20.013,60.624 L20.013,30.819 C20.013,28.434 21.516,26.566 23.436,26.566 C25.354,26.566 26.858,28.434 26.858,30.819 L26.858,60.624 C26.857,63.01 25.354,64.878 23.436,64.878 Z M23.436,28.699 C22.826,28.699 22.146,29.57 22.146,30.819 L22.146,60.624 C22.146,61.873 22.825,62.744 23.436,62.744 C24.045,62.744 24.725,61.873 24.725,60.624 L24.725,30.819 C24.724,29.57 24.045,28.699 23.436,28.699 Z M35.362,64.878 C33.442,64.878 31.939,63.01 31.939,60.624 L31.939,30.819 C31.939,28.434 33.442,26.566 35.362,26.566 C37.28,26.566 38.784,28.434 38.784,30.819 L38.784,60.624 C38.784,63.01 37.28,64.878 35.362,64.878 Z M35.362,28.699 C34.751,28.699 34.072,29.57 34.072,30.819 L34.072,60.624 C34.072,61.873 34.751,62.744 35.362,62.744 C35.971,62.744 36.651,61.873 36.651,60.624 L36.651,30.819 C36.65,29.57 35.971,28.699 35.362,28.699 Z M47.288,64.878 C45.368,64.878 43.865,63.01 43.865,60.624 L43.865,30.819 C43.865,28.434 45.368,26.566 47.288,26.566 C49.207,26.566 50.71,28.434 50.71,30.819 L50.71,60.624 C50.71,63.01 49.207,64.878 47.288,64.878 Z M47.288,28.699 C46.678,28.699 45.998,29.57 45.998,30.819 L45.998,60.624 C45.998,61.873 46.677,62.744 47.288,62.744 C47.897,62.744 48.577,61.873 48.577,60.624 L48.577,30.819 C48.576,29.57 47.897,28.699 47.288,28.699 Z',
  'M36.0309704,11.3061313 L34.054,32.33 C34.033,32.551 33.511,37.768 30.969,42.199 C30.941,42.248 30.908,42.294 30.871,42.337 C30.874,42.337 29.807,43.855 29.807,49.57 L29.807,50.69 L50.4470946,50.69 L50.447,49.57 C50.447,44.401 49.289,42.208 49.278,42.187 C46.868,38.497 46.226,32.589 46.2,32.339 L44.2932299,11.4134202 L43.861,11.19 L42.825,12.088 C42.49,12.378 41.986,12.361 41.67,12.051 L41.236,11.622 L40.676,12.261 C40.516,12.446 40.282,12.551 40.038,12.551 C40.027,12.551 40.015,12.551 40.003,12.55 C39.747,12.54 39.508,12.414 39.355,12.207 L38.96,11.675 L38.58,12.05 C38.264,12.362 37.761,12.378 37.425,12.087 L36.359,11.163 L36.0309704,11.3061313 Z M34.2837061,11.7235161 C34.205285,11.6829316 34.1323355,11.6298543 34.068,11.565 C33.821,11.313 33.756,10.935 33.903,10.614 L34.4,9.534 C34.055,8.698 34.021,7.504 34.021,7.489 C34.021,6.115 35.138,4.999 36.511,4.999 L43.739,4.999 C45.112,4.999 46.229,6.116 46.229,7.489 C46.229,7.504 46.196,8.697 45.851,9.533 L46.378,10.67 C46.479,10.81 46.539,10.982 46.539,11.168 C46.539,11.508954 46.3384971,11.802545 46.0489659,11.938062 L47.891,32.173 C47.895,32.219 48.517,37.915 50.732,41.311 C50.817,41.459 52.146,43.885 52.146,49.57 L52.146,85.002 C52.412,88.054 51.567,94.135 46.441,94.774 C46.407,94.777 46.371,94.78 46.336,94.78 L33.916,94.78 C33.881,94.78 33.846,94.777 33.811,94.773 C28.685,94.133 27.84,88.052 28.109,84.927 L28.105,49.569 C28.105,43.686 29.171,41.77 29.523,41.298 C31.858,37.193 32.356,32.218 32.36,32.168 L34.2837061,11.7235161 Z M29.807,79.436 L50.4495236,79.436 L50.4472383,52.39 L29.807,52.39 L29.807,79.436 Z M29.807,81.137 L29.807,85.002 C29.798,85.148 29.241,92.437 33.972,93.08 L46.282,93.08 C51.013,92.436 50.456,85.148 50.45,85.074 L50.4496673,81.137 L29.807,81.137 Z M39.06,9.533 C39.081,9.533 39.103,9.533 39.125,9.535 C39.371,9.554 39.596,9.679 39.743,9.876 L40.093,10.348 L40.553,9.822 C40.707,9.646 40.928,9.541 41.162,9.533 C41.396,9.516 41.623,9.613 41.79,9.777 L42.307,10.288 L43.183,9.527 C43.426,9.316 43.766,9.263 44.057,9.381 C44.082,9.202 44.164,9.033 44.298,8.9 C44.373,8.75 44.529,7.869 44.529,7.49 C44.529,7.055 44.175,6.7 43.74,6.7 L36.512,6.7 C36.077,6.7 35.722,7.054 35.722,7.49 C35.722,7.869 35.879,8.75 36.002,8.958 C36.126,9.082 36.193,9.223 36.212,9.374 C36.503,9.264 36.831,9.323 37.068,9.527 L37.944,10.288 L38.461,9.777 C38.622,9.62 38.836,9.533 39.06,9.533 Z',
  'M32.400308,58.7420359 C32.3911837,58.6534286 32.3864688,58.6046881 32.386,58.6 C32.3841476,58.5803991 32.3829948,58.5608929 32.3825213,58.5415061 C30.4583933,36.8365316 28.0117728,5.31655627 27.979,4.892 C27.961,4.663 28.041,4.435 28.197,4.265 C28.354,4.096 28.574,4 28.805,4 L52.529,4 C52.759,4 52.98,4.096 53.137,4.265 C53.293,4.435 53.372,4.662 53.354,4.892 C53.3212295,5.3165267 50.8755022,36.8321412 48.9517186,58.5365578 C48.9512876,58.5575726 48.9500568,58.5787306 48.948,58.6 C48.947502,58.6050795 48.9422227,58.659847 48.9319645,58.7592885 C48.280554,66.0994504 47.6903701,72.2943369 47.276,75.747 C47.272,75.776 47.267,75.808 47.259,75.837 C47.239,75.922 45.32,84.399 49.939,87.376 C50.084,87.47 50.235,87.559 50.389,87.648 C51.642,88.382 53.357,89.389 53.356,93.386 C53.357,93.845 52.986,94.215 52.529,94.215 L28.805,94.215 C28.348,94.215 27.977,93.845 27.977,93.387 C27.977,89.39 29.692,88.383 30.944,87.649 C31.098,87.559 31.249,87.47 31.394,87.377 C36.025,84.394 34.094,75.924 34.074,75.838 C34.067,75.809 34.062,75.778 34.058,75.748 C33.6432974,72.2923139 33.0524349,66.0900663 32.400308,58.7420359 Z M35.4841894,73.6226086 C35.5597016,74.3170587 35.6311319,74.9470862 35.698,75.506 C35.883,76.323 37.752,85.25 32.292,88.77 C32.128,88.874 31.958,88.976 31.783,89.078 C30.786,89.662 29.839,90.218 29.663,92.559 L51.672,92.559 C51.496,90.218 50.549,89.663 49.553,89.078 C49.378,88.976 49.207,88.875 49.043,88.77 C43.584,85.25 45.452,76.324 45.638,75.506 C45.7050236,74.9454193 45.7766385,74.3133001 45.8523601,73.6163935 C44.4233918,77.4587856 42.7115122,79.341 40.667,79.341 C38.6235142,79.341 36.9123272,77.4612154 35.4841894,73.6226086 Z M34.061306,58.7145892 C34.8526183,66.6844867 37.391236,77.684 40.667,77.684 C43.9647762,77.684 46.5133983,66.5496101 47.2870238,58.5687877 C49.0323822,38.8938668 51.2191304,10.9817672 51.634,5.657 L29.701,5.657 C30.1168954,10.994934 32.3134432,39.0320439 34.061306,58.7145892 Z',
]

export const BeerGlassIcon = ({ glassType, height = 100, color = 'white' }) => {
  return (
    <Svg width={height * 0.8} height={height} viewBox="0 0 80 100">
      <Svg.Path d={glassPath[glassType]} fill={color} fillRule="nonzero" />
    </Svg>
  )
}
