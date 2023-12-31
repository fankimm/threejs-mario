import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as CANNON from 'cannon';
const mapData = [
  {
    imgNo: 1,
    x: 19,
    y: 2,
  },
  {
    imgNo: 2,
    x: 20,
    y: 2,
  },
  {
    imgNo: 3,
    x: 21,
    y: 2,
  },
  {
    imgNo: 1,
    x: 36,
    y: 2,
  },
  {
    imgNo: 2,
    x: 37,
    y: 2,
  },
  {
    imgNo: 2,
    x: 38,
    y: 2,
  },
  {
    imgNo: 3,
    x: 39,
    y: 2,
  },
  {
    imgNo: 1,
    x: 67,
    y: 2,
  },
  {
    imgNo: 2,
    x: 68,
    y: 2,
  },
  {
    imgNo: 3,
    x: 69,
    y: 2,
  },
  {
    imgNo: 1,
    x: 84,
    y: 2,
  },
  {
    imgNo: 2,
    x: 85,
    y: 2,
  },
  {
    imgNo: 2,
    x: 86,
    y: 2,
  },
  {
    imgNo: 3,
    x: 87,
    y: 2,
  },
  {
    imgNo: 1,
    x: 115,
    y: 2,
  },
  {
    imgNo: 2,
    x: 116,
    y: 2,
  },
  {
    imgNo: 3,
    x: 117,
    y: 2,
  },
  {
    imgNo: 1,
    x: 132,
    y: 2,
  },
  {
    imgNo: 2,
    x: 133,
    y: 2,
  },
  {
    imgNo: 2,
    x: 134,
    y: 2,
  },
  {
    imgNo: 3,
    x: 135,
    y: 2,
  },
  {
    imgNo: 1,
    x: 163,
    y: 2,
  },
  {
    imgNo: 2,
    x: 164,
    y: 2,
  },
  {
    imgNo: 3,
    x: 165,
    y: 2,
  },
  {
    imgNo: 1,
    x: 180,
    y: 2,
  },
  {
    imgNo: 2,
    x: 181,
    y: 2,
  },
  {
    imgNo: 2,
    x: 182,
    y: 2,
  },
  {
    imgNo: 3,
    x: 183,
    y: 2,
  },
  {
    imgNo: 4,
    x: 198,
    y: 2,
  },
  {
    imgNo: 1,
    x: 8,
    y: 3,
  },
  {
    imgNo: 2,
    x: 9,
    y: 3,
  },
  {
    imgNo: 3,
    x: 10,
    y: 3,
  },
  {
    imgNo: 5,
    x: 19,
    y: 3,
  },
  {
    imgNo: 6,
    x: 20,
    y: 3,
  },
  {
    imgNo: 7,
    x: 21,
    y: 3,
  },
  {
    imgNo: 1,
    x: 27,
    y: 3,
  },
  {
    imgNo: 2,
    x: 28,
    y: 3,
  },
  {
    imgNo: 2,
    x: 29,
    y: 3,
  },
  {
    imgNo: 2,
    x: 30,
    y: 3,
  },
  {
    imgNo: 3,
    x: 31,
    y: 3,
  },
  {
    imgNo: 5,
    x: 36,
    y: 3,
  },
  {
    imgNo: 6,
    x: 37,
    y: 3,
  },
  {
    imgNo: 6,
    x: 38,
    y: 3,
  },
  {
    imgNo: 7,
    x: 39,
    y: 3,
  },
  {
    imgNo: 1,
    x: 56,
    y: 3,
  },
  {
    imgNo: 2,
    x: 57,
    y: 3,
  },
  {
    imgNo: 3,
    x: 58,
    y: 3,
  },
  {
    imgNo: 5,
    x: 67,
    y: 3,
  },
  {
    imgNo: 6,
    x: 68,
    y: 3,
  },
  {
    imgNo: 7,
    x: 69,
    y: 3,
  },
  {
    imgNo: 1,
    x: 75,
    y: 3,
  },
  {
    imgNo: 2,
    x: 76,
    y: 3,
  },
  {
    imgNo: 2,
    x: 77,
    y: 3,
  },
  {
    imgNo: 2,
    x: 78,
    y: 3,
  },
  {
    imgNo: 3,
    x: 79,
    y: 3,
  },
  {
    imgNo: 5,
    x: 84,
    y: 3,
  },
  {
    imgNo: 6,
    x: 85,
    y: 3,
  },
  {
    imgNo: 6,
    x: 86,
    y: 3,
  },
  {
    imgNo: 7,
    x: 87,
    y: 3,
  },
  {
    imgNo: 1,
    x: 104,
    y: 3,
  },
  {
    imgNo: 2,
    x: 105,
    y: 3,
  },
  {
    imgNo: 3,
    x: 106,
    y: 3,
  },
  {
    imgNo: 5,
    x: 115,
    y: 3,
  },
  {
    imgNo: 6,
    x: 116,
    y: 3,
  },
  {
    imgNo: 7,
    x: 117,
    y: 3,
  },
  {
    imgNo: 1,
    x: 123,
    y: 3,
  },
  {
    imgNo: 2,
    x: 124,
    y: 3,
  },
  {
    imgNo: 2,
    x: 125,
    y: 3,
  },
  {
    imgNo: 2,
    x: 126,
    y: 3,
  },
  {
    imgNo: 3,
    x: 127,
    y: 3,
  },
  {
    imgNo: 5,
    x: 132,
    y: 3,
  },
  {
    imgNo: 6,
    x: 133,
    y: 3,
  },
  {
    imgNo: 6,
    x: 134,
    y: 3,
  },
  {
    imgNo: 7,
    x: 135,
    y: 3,
  },
  {
    imgNo: 1,
    x: 152,
    y: 3,
  },
  {
    imgNo: 2,
    x: 153,
    y: 3,
  },
  {
    imgNo: 3,
    x: 154,
    y: 3,
  },
  {
    imgNo: 5,
    x: 163,
    y: 3,
  },
  {
    imgNo: 6,
    x: 164,
    y: 3,
  },
  {
    imgNo: 7,
    x: 165,
    y: 3,
  },
  {
    imgNo: 1,
    x: 171,
    y: 3,
  },
  {
    imgNo: 2,
    x: 172,
    y: 3,
  },
  {
    imgNo: 2,
    x: 173,
    y: 3,
  },
  {
    imgNo: 2,
    x: 174,
    y: 3,
  },
  {
    imgNo: 3,
    x: 175,
    y: 3,
  },
  {
    imgNo: 5,
    x: 180,
    y: 3,
  },
  {
    imgNo: 6,
    x: 181,
    y: 3,
  },
  {
    imgNo: 6,
    x: 182,
    y: 3,
  },
  {
    imgNo: 7,
    x: 183,
    y: 3,
  },
  {
    imgNo: 8,
    x: 197,
    y: 3,
  },
  {
    imgNo: 9,
    x: 198,
    y: 3,
  },
  {
    imgNo: 1,
    x: 200,
    y: 3,
  },
  {
    imgNo: 2,
    x: 201,
    y: 3,
  },
  {
    imgNo: 3,
    x: 202,
    y: 3,
  },
  {
    imgNo: 5,
    x: 8,
    y: 4,
  },
  {
    imgNo: 6,
    x: 9,
    y: 4,
  },
  {
    imgNo: 7,
    x: 10,
    y: 4,
  },
  {
    imgNo: 5,
    x: 27,
    y: 4,
  },
  {
    imgNo: 6,
    x: 28,
    y: 4,
  },
  {
    imgNo: 6,
    x: 29,
    y: 4,
  },
  {
    imgNo: 6,
    x: 30,
    y: 4,
  },
  {
    imgNo: 7,
    x: 31,
    y: 4,
  },
  {
    imgNo: 5,
    x: 56,
    y: 4,
  },
  {
    imgNo: 6,
    x: 57,
    y: 4,
  },
  {
    imgNo: 7,
    x: 58,
    y: 4,
  },
  {
    imgNo: 5,
    x: 75,
    y: 4,
  },
  {
    imgNo: 6,
    x: 76,
    y: 4,
  },
  {
    imgNo: 6,
    x: 77,
    y: 4,
  },
  {
    imgNo: 6,
    x: 78,
    y: 4,
  },
  {
    imgNo: 7,
    x: 79,
    y: 4,
  },
  {
    imgNo: 5,
    x: 104,
    y: 4,
  },
  {
    imgNo: 6,
    x: 105,
    y: 4,
  },
  {
    imgNo: 7,
    x: 106,
    y: 4,
  },
  {
    imgNo: 5,
    x: 123,
    y: 4,
  },
  {
    imgNo: 6,
    x: 124,
    y: 4,
  },
  {
    imgNo: 6,
    x: 125,
    y: 4,
  },
  {
    imgNo: 6,
    x: 126,
    y: 4,
  },
  {
    imgNo: 7,
    x: 127,
    y: 4,
  },
  {
    imgNo: 5,
    x: 152,
    y: 4,
  },
  {
    imgNo: 6,
    x: 153,
    y: 4,
  },
  {
    imgNo: 7,
    x: 154,
    y: 4,
  },
  {
    imgNo: 5,
    x: 171,
    y: 4,
  },
  {
    imgNo: 6,
    x: 172,
    y: 4,
  },
  {
    imgNo: 6,
    x: 173,
    y: 4,
  },
  {
    imgNo: 6,
    x: 174,
    y: 4,
  },
  {
    imgNo: 7,
    x: 175,
    y: 4,
  },
  {
    imgNo: 10,
    x: 198,
    y: 4,
  },
  {
    imgNo: 5,
    x: 200,
    y: 4,
  },
  {
    imgNo: 6,
    x: 201,
    y: 4,
  },
  {
    imgNo: 7,
    x: 202,
    y: 4,
  },
  {
    imgNo: 11,
    x: 22,
    y: 5,
  },
  {
    imgNo: 12,
    x: 80,
    y: 5,
  },
  {
    imgNo: 12,
    x: 81,
    y: 5,
  },
  {
    imgNo: 12,
    x: 82,
    y: 5,
  },
  {
    imgNo: 12,
    x: 83,
    y: 5,
  },
  {
    imgNo: 12,
    x: 84,
    y: 5,
  },
  {
    imgNo: 12,
    x: 85,
    y: 5,
  },
  {
    imgNo: 12,
    x: 86,
    y: 5,
  },
  {
    imgNo: 12,
    x: 87,
    y: 5,
  },
  {
    imgNo: 12,
    x: 91,
    y: 5,
  },
  {
    imgNo: 12,
    x: 92,
    y: 5,
  },
  {
    imgNo: 12,
    x: 93,
    y: 5,
  },
  {
    imgNo: 11,
    x: 94,
    y: 5,
  },
  {
    imgNo: 11,
    x: 109,
    y: 5,
  },
  {
    imgNo: 12,
    x: 121,
    y: 5,
  },
  {
    imgNo: 12,
    x: 122,
    y: 5,
  },
  {
    imgNo: 12,
    x: 123,
    y: 5,
  },
  {
    imgNo: 12,
    x: 128,
    y: 5,
  },
  {
    imgNo: 11,
    x: 129,
    y: 5,
  },
  {
    imgNo: 11,
    x: 130,
    y: 5,
  },
  {
    imgNo: 12,
    x: 131,
    y: 5,
  },
  {
    imgNo: 13,
    x: 188,
    y: 5,
  },
  {
    imgNo: 13,
    x: 189,
    y: 5,
  },
  {
    imgNo: 14,
    x: 198,
    y: 5,
  },
  {
    imgNo: 13,
    x: 187,
    y: 6,
  },
  {
    imgNo: 13,
    x: 188,
    y: 6,
  },
  {
    imgNo: 13,
    x: 189,
    y: 6,
  },
  {
    imgNo: 14,
    x: 198,
    y: 6,
  },
  {
    imgNo: 13,
    x: 186,
    y: 7,
  },
  {
    imgNo: 13,
    x: 187,
    y: 7,
  },
  {
    imgNo: 13,
    x: 188,
    y: 7,
  },
  {
    imgNo: 13,
    x: 189,
    y: 7,
  },
  {
    imgNo: 14,
    x: 198,
    y: 7,
  },
  {
    imgNo: 13,
    x: 185,
    y: 8,
  },
  {
    imgNo: 13,
    x: 186,
    y: 8,
  },
  {
    imgNo: 13,
    x: 187,
    y: 8,
  },
  {
    imgNo: 13,
    x: 188,
    y: 8,
  },
  {
    imgNo: 13,
    x: 189,
    y: 8,
  },
  {
    imgNo: 14,
    x: 198,
    y: 8,
  },
  {
    imgNo: 15,
    x: 203,
    y: 8,
  },
  {
    imgNo: 15,
    x: 204,
    y: 8,
  },
  {
    imgNo: 15,
    x: 205,
    y: 8,
  },
  {
    imgNo: 11,
    x: 16,
    y: 9,
  },
  {
    imgNo: 12,
    x: 20,
    y: 9,
  },
  {
    imgNo: 11,
    x: 21,
    y: 9,
  },
  {
    imgNo: 12,
    x: 22,
    y: 9,
  },
  {
    imgNo: 11,
    x: 23,
    y: 9,
  },
  {
    imgNo: 12,
    x: 24,
    y: 9,
  },
  {
    imgNo: 16,
    x: 46,
    y: 9,
  },
  {
    imgNo: 17,
    x: 47,
    y: 9,
  },
  {
    imgNo: 16,
    x: 57,
    y: 9,
  },
  {
    imgNo: 17,
    x: 58,
    y: 9,
  },
  {
    imgNo: 12,
    x: 77,
    y: 9,
  },
  {
    imgNo: 11,
    x: 78,
    y: 9,
  },
  {
    imgNo: 12,
    x: 79,
    y: 9,
  },
  {
    imgNo: 12,
    x: 94,
    y: 9,
  },
  {
    imgNo: 12,
    x: 100,
    y: 9,
  },
  {
    imgNo: 12,
    x: 101,
    y: 9,
  },
  {
    imgNo: 11,
    x: 106,
    y: 9,
  },
  {
    imgNo: 11,
    x: 109,
    y: 9,
  },
  {
    imgNo: 11,
    x: 112,
    y: 9,
  },
  {
    imgNo: 12,
    x: 118,
    y: 9,
  },
  {
    imgNo: 12,
    x: 129,
    y: 9,
  },
  {
    imgNo: 12,
    x: 130,
    y: 9,
  },
  {
    imgNo: 13,
    x: 137,
    y: 9,
  },
  {
    imgNo: 13,
    x: 140,
    y: 9,
  },
  {
    imgNo: 13,
    x: 151,
    y: 9,
  },
  {
    imgNo: 13,
    x: 152,
    y: 9,
  },
  {
    imgNo: 13,
    x: 155,
    y: 9,
  },
  {
    imgNo: 12,
    x: 168,
    y: 9,
  },
  {
    imgNo: 12,
    x: 169,
    y: 9,
  },
  {
    imgNo: 11,
    x: 170,
    y: 9,
  },
  {
    imgNo: 12,
    x: 171,
    y: 9,
  },
  {
    imgNo: 13,
    x: 184,
    y: 9,
  },
  {
    imgNo: 13,
    x: 185,
    y: 9,
  },
  {
    imgNo: 13,
    x: 186,
    y: 9,
  },
  {
    imgNo: 13,
    x: 187,
    y: 9,
  },
  {
    imgNo: 13,
    x: 188,
    y: 9,
  },
  {
    imgNo: 13,
    x: 189,
    y: 9,
  },
  {
    imgNo: 14,
    x: 198,
    y: 9,
  },
  {
    imgNo: 18,
    x: 203,
    y: 9,
  },
  {
    imgNo: 19,
    x: 204,
    y: 9,
  },
  {
    imgNo: 20,
    x: 205,
    y: 9,
  },
  {
    imgNo: 21,
    x: 2,
    y: 10,
  },
  {
    imgNo: 16,
    x: 38,
    y: 10,
  },
  {
    imgNo: 17,
    x: 39,
    y: 10,
  },
  {
    imgNo: 22,
    x: 46,
    y: 10,
  },
  {
    imgNo: 23,
    x: 47,
    y: 10,
  },
  {
    imgNo: 21,
    x: 50,
    y: 10,
  },
  {
    imgNo: 22,
    x: 57,
    y: 10,
  },
  {
    imgNo: 23,
    x: 58,
    y: 10,
  },
  {
    imgNo: 21,
    x: 98,
    y: 10,
  },
  {
    imgNo: 13,
    x: 136,
    y: 10,
  },
  {
    imgNo: 13,
    x: 137,
    y: 10,
  },
  {
    imgNo: 13,
    x: 140,
    y: 10,
  },
  {
    imgNo: 13,
    x: 141,
    y: 10,
  },
  {
    imgNo: 21,
    x: 146,
    y: 10,
  },
  {
    imgNo: 13,
    x: 150,
    y: 10,
  },
  {
    imgNo: 13,
    x: 151,
    y: 10,
  },
  {
    imgNo: 13,
    x: 152,
    y: 10,
  },
  {
    imgNo: 13,
    x: 155,
    y: 10,
  },
  {
    imgNo: 13,
    x: 156,
    y: 10,
  },
  {
    imgNo: 13,
    x: 183,
    y: 10,
  },
  {
    imgNo: 13,
    x: 184,
    y: 10,
  },
  {
    imgNo: 13,
    x: 185,
    y: 10,
  },
  {
    imgNo: 13,
    x: 186,
    y: 10,
  },
  {
    imgNo: 13,
    x: 187,
    y: 10,
  },
  {
    imgNo: 13,
    x: 188,
    y: 10,
  },
  {
    imgNo: 13,
    x: 189,
    y: 10,
  },
  {
    imgNo: 21,
    x: 194,
    y: 10,
  },
  {
    imgNo: 14,
    x: 198,
    y: 10,
  },
  {
    imgNo: 15,
    x: 202,
    y: 10,
  },
  {
    imgNo: 24,
    x: 203,
    y: 10,
  },
  {
    imgNo: 24,
    x: 204,
    y: 10,
  },
  {
    imgNo: 24,
    x: 205,
    y: 10,
  },
  {
    imgNo: 15,
    x: 206,
    y: 10,
  },
  {
    imgNo: 25,
    x: 1,
    y: 11,
  },
  {
    imgNo: 26,
    x: 2,
    y: 11,
  },
  {
    imgNo: 27,
    x: 3,
    y: 11,
  },
  {
    imgNo: 21,
    x: 17,
    y: 11,
  },
  {
    imgNo: 16,
    x: 28,
    y: 11,
  },
  {
    imgNo: 17,
    x: 29,
    y: 11,
  },
  {
    imgNo: 22,
    x: 38,
    y: 11,
  },
  {
    imgNo: 23,
    x: 39,
    y: 11,
  },
  {
    imgNo: 22,
    x: 46,
    y: 11,
  },
  {
    imgNo: 23,
    x: 47,
    y: 11,
  },
  {
    imgNo: 25,
    x: 49,
    y: 11,
  },
  {
    imgNo: 26,
    x: 50,
    y: 11,
  },
  {
    imgNo: 27,
    x: 51,
    y: 11,
  },
  {
    imgNo: 22,
    x: 57,
    y: 11,
  },
  {
    imgNo: 23,
    x: 58,
    y: 11,
  },
  {
    imgNo: 21,
    x: 65,
    y: 11,
  },
  {
    imgNo: 25,
    x: 97,
    y: 11,
  },
  {
    imgNo: 26,
    x: 98,
    y: 11,
  },
  {
    imgNo: 27,
    x: 99,
    y: 11,
  },
  {
    imgNo: 21,
    x: 113,
    y: 11,
  },
  {
    imgNo: 13,
    x: 135,
    y: 11,
  },
  {
    imgNo: 13,
    x: 136,
    y: 11,
  },
  {
    imgNo: 13,
    x: 137,
    y: 11,
  },
  {
    imgNo: 13,
    x: 140,
    y: 11,
  },
  {
    imgNo: 13,
    x: 141,
    y: 11,
  },
  {
    imgNo: 13,
    x: 142,
    y: 11,
  },
  {
    imgNo: 25,
    x: 145,
    y: 11,
  },
  {
    imgNo: 26,
    x: 146,
    y: 11,
  },
  {
    imgNo: 27,
    x: 147,
    y: 11,
  },
  {
    imgNo: 13,
    x: 149,
    y: 11,
  },
  {
    imgNo: 13,
    x: 150,
    y: 11,
  },
  {
    imgNo: 13,
    x: 151,
    y: 11,
  },
  {
    imgNo: 13,
    x: 152,
    y: 11,
  },
  {
    imgNo: 13,
    x: 155,
    y: 11,
  },
  {
    imgNo: 13,
    x: 156,
    y: 11,
  },
  {
    imgNo: 13,
    x: 157,
    y: 11,
  },
  {
    imgNo: 21,
    x: 161,
    y: 11,
  },
  {
    imgNo: 16,
    x: 163,
    y: 11,
  },
  {
    imgNo: 17,
    x: 164,
    y: 11,
  },
  {
    imgNo: 16,
    x: 179,
    y: 11,
  },
  {
    imgNo: 17,
    x: 180,
    y: 11,
  },
  {
    imgNo: 13,
    x: 182,
    y: 11,
  },
  {
    imgNo: 13,
    x: 183,
    y: 11,
  },
  {
    imgNo: 13,
    x: 184,
    y: 11,
  },
  {
    imgNo: 13,
    x: 185,
    y: 11,
  },
  {
    imgNo: 13,
    x: 186,
    y: 11,
  },
  {
    imgNo: 13,
    x: 187,
    y: 11,
  },
  {
    imgNo: 13,
    x: 188,
    y: 11,
  },
  {
    imgNo: 13,
    x: 189,
    y: 11,
  },
  {
    imgNo: 25,
    x: 193,
    y: 11,
  },
  {
    imgNo: 26,
    x: 194,
    y: 11,
  },
  {
    imgNo: 27,
    x: 195,
    y: 11,
  },
  {
    imgNo: 14,
    x: 198,
    y: 11,
  },
  {
    imgNo: 19,
    x: 202,
    y: 11,
  },
  {
    imgNo: 19,
    x: 203,
    y: 11,
  },
  {
    imgNo: 28,
    x: 204,
    y: 11,
  },
  {
    imgNo: 19,
    x: 205,
    y: 11,
  },
  {
    imgNo: 19,
    x: 206,
    y: 11,
  },
  {
    imgNo: 21,
    x: 209,
    y: 11,
  },
  {
    imgNo: 25,
    x: 0,
    y: 12,
  },
  {
    imgNo: 26,
    x: 1,
    y: 12,
  },
  {
    imgNo: 29,
    x: 2,
    y: 12,
  },
  {
    imgNo: 30,
    x: 3,
    y: 12,
  },
  {
    imgNo: 27,
    x: 4,
    y: 12,
  },
  {
    imgNo: 31,
    x: 11,
    y: 12,
  },
  {
    imgNo: 32,
    x: 12,
    y: 12,
  },
  {
    imgNo: 32,
    x: 13,
    y: 12,
  },
  {
    imgNo: 32,
    x: 14,
    y: 12,
  },
  {
    imgNo: 33,
    x: 15,
    y: 12,
  },
  {
    imgNo: 25,
    x: 16,
    y: 12,
  },
  {
    imgNo: 26,
    x: 17,
    y: 12,
  },
  {
    imgNo: 27,
    x: 18,
    y: 12,
  },
  {
    imgNo: 31,
    x: 23,
    y: 12,
  },
  {
    imgNo: 32,
    x: 24,
    y: 12,
  },
  {
    imgNo: 33,
    x: 25,
    y: 12,
  },
  {
    imgNo: 22,
    x: 28,
    y: 12,
  },
  {
    imgNo: 23,
    x: 29,
    y: 12,
  },
  {
    imgNo: 22,
    x: 38,
    y: 12,
  },
  {
    imgNo: 23,
    x: 39,
    y: 12,
  },
  {
    imgNo: 31,
    x: 41,
    y: 12,
  },
  {
    imgNo: 32,
    x: 42,
    y: 12,
  },
  {
    imgNo: 32,
    x: 43,
    y: 12,
  },
  {
    imgNo: 33,
    x: 44,
    y: 12,
  },
  {
    imgNo: 22,
    x: 46,
    y: 12,
  },
  {
    imgNo: 23,
    x: 47,
    y: 12,
  },
  {
    imgNo: 25,
    x: 48,
    y: 12,
  },
  {
    imgNo: 26,
    x: 49,
    y: 12,
  },
  {
    imgNo: 29,
    x: 50,
    y: 12,
  },
  {
    imgNo: 30,
    x: 51,
    y: 12,
  },
  {
    imgNo: 27,
    x: 52,
    y: 12,
  },
  {
    imgNo: 22,
    x: 57,
    y: 12,
  },
  {
    imgNo: 23,
    x: 58,
    y: 12,
  },
  {
    imgNo: 31,
    x: 59,
    y: 12,
  },
  {
    imgNo: 32,
    x: 60,
    y: 12,
  },
  {
    imgNo: 32,
    x: 61,
    y: 12,
  },
  {
    imgNo: 32,
    x: 62,
    y: 12,
  },
  {
    imgNo: 33,
    x: 63,
    y: 12,
  },
  {
    imgNo: 25,
    x: 64,
    y: 12,
  },
  {
    imgNo: 26,
    x: 65,
    y: 12,
  },
  {
    imgNo: 27,
    x: 66,
    y: 12,
  },
  {
    imgNo: 31,
    x: 71,
    y: 12,
  },
  {
    imgNo: 32,
    x: 72,
    y: 12,
  },
  {
    imgNo: 33,
    x: 73,
    y: 12,
  },
  {
    imgNo: 31,
    x: 89,
    y: 12,
  },
  {
    imgNo: 32,
    x: 90,
    y: 12,
  },
  {
    imgNo: 32,
    x: 91,
    y: 12,
  },
  {
    imgNo: 33,
    x: 92,
    y: 12,
  },
  {
    imgNo: 25,
    x: 96,
    y: 12,
  },
  {
    imgNo: 26,
    x: 97,
    y: 12,
  },
  {
    imgNo: 29,
    x: 98,
    y: 12,
  },
  {
    imgNo: 30,
    x: 99,
    y: 12,
  },
  {
    imgNo: 27,
    x: 100,
    y: 12,
  },
  {
    imgNo: 31,
    x: 107,
    y: 12,
  },
  {
    imgNo: 32,
    x: 108,
    y: 12,
  },
  {
    imgNo: 32,
    x: 109,
    y: 12,
  },
  {
    imgNo: 32,
    x: 110,
    y: 12,
  },
  {
    imgNo: 33,
    x: 111,
    y: 12,
  },
  {
    imgNo: 25,
    x: 112,
    y: 12,
  },
  {
    imgNo: 26,
    x: 113,
    y: 12,
  },
  {
    imgNo: 27,
    x: 114,
    y: 12,
  },
  {
    imgNo: 31,
    x: 119,
    y: 12,
  },
  {
    imgNo: 32,
    x: 120,
    y: 12,
  },
  {
    imgNo: 33,
    x: 121,
    y: 12,
  },
  {
    imgNo: 13,
    x: 134,
    y: 12,
  },
  {
    imgNo: 13,
    x: 135,
    y: 12,
  },
  {
    imgNo: 13,
    x: 136,
    y: 12,
  },
  {
    imgNo: 13,
    x: 137,
    y: 12,
  },
  {
    imgNo: 32,
    x: 138,
    y: 12,
  },
  {
    imgNo: 32,
    x: 139,
    y: 12,
  },
  {
    imgNo: 13,
    x: 140,
    y: 12,
  },
  {
    imgNo: 13,
    x: 141,
    y: 12,
  },
  {
    imgNo: 13,
    x: 142,
    y: 12,
  },
  {
    imgNo: 13,
    x: 143,
    y: 12,
  },
  {
    imgNo: 25,
    x: 144,
    y: 12,
  },
  {
    imgNo: 26,
    x: 145,
    y: 12,
  },
  {
    imgNo: 29,
    x: 146,
    y: 12,
  },
  {
    imgNo: 30,
    x: 147,
    y: 12,
  },
  {
    imgNo: 13,
    x: 148,
    y: 12,
  },
  {
    imgNo: 13,
    x: 149,
    y: 12,
  },
  {
    imgNo: 13,
    x: 150,
    y: 12,
  },
  {
    imgNo: 13,
    x: 151,
    y: 12,
  },
  {
    imgNo: 13,
    x: 152,
    y: 12,
  },
  {
    imgNo: 13,
    x: 155,
    y: 12,
  },
  {
    imgNo: 13,
    x: 156,
    y: 12,
  },
  {
    imgNo: 13,
    x: 157,
    y: 12,
  },
  {
    imgNo: 13,
    x: 158,
    y: 12,
  },
  {
    imgNo: 33,
    x: 159,
    y: 12,
  },
  {
    imgNo: 25,
    x: 160,
    y: 12,
  },
  {
    imgNo: 26,
    x: 161,
    y: 12,
  },
  {
    imgNo: 27,
    x: 162,
    y: 12,
  },
  {
    imgNo: 22,
    x: 163,
    y: 12,
  },
  {
    imgNo: 23,
    x: 164,
    y: 12,
  },
  {
    imgNo: 31,
    x: 167,
    y: 12,
  },
  {
    imgNo: 32,
    x: 168,
    y: 12,
  },
  {
    imgNo: 33,
    x: 169,
    y: 12,
  },
  {
    imgNo: 22,
    x: 179,
    y: 12,
  },
  {
    imgNo: 23,
    x: 180,
    y: 12,
  },
  {
    imgNo: 13,
    x: 181,
    y: 12,
  },
  {
    imgNo: 13,
    x: 182,
    y: 12,
  },
  {
    imgNo: 13,
    x: 183,
    y: 12,
  },
  {
    imgNo: 13,
    x: 184,
    y: 12,
  },
  {
    imgNo: 13,
    x: 185,
    y: 12,
  },
  {
    imgNo: 13,
    x: 186,
    y: 12,
  },
  {
    imgNo: 13,
    x: 187,
    y: 12,
  },
  {
    imgNo: 13,
    x: 188,
    y: 12,
  },
  {
    imgNo: 13,
    x: 189,
    y: 12,
  },
  {
    imgNo: 25,
    x: 192,
    y: 12,
  },
  {
    imgNo: 26,
    x: 193,
    y: 12,
  },
  {
    imgNo: 29,
    x: 194,
    y: 12,
  },
  {
    imgNo: 30,
    x: 195,
    y: 12,
  },
  {
    imgNo: 27,
    x: 196,
    y: 12,
  },
  {
    imgNo: 13,
    x: 198,
    y: 12,
  },
  {
    imgNo: 19,
    x: 202,
    y: 12,
  },
  {
    imgNo: 19,
    x: 203,
    y: 12,
  },
  {
    imgNo: 34,
    x: 204,
    y: 12,
  },
  {
    imgNo: 19,
    x: 205,
    y: 12,
  },
  {
    imgNo: 19,
    x: 206,
    y: 12,
  },
  {
    imgNo: 33,
    x: 207,
    y: 12,
  },
  {
    imgNo: 25,
    x: 208,
    y: 12,
  },
  {
    imgNo: 26,
    x: 209,
    y: 12,
  },
  {
    imgNo: 27,
    x: 210,
    y: 12,
  },
  {
    imgNo: 35,
    x: 0,
    y: 13,
  },
  {
    imgNo: 35,
    x: 1,
    y: 13,
  },
  {
    imgNo: 35,
    x: 2,
    y: 13,
  },
  {
    imgNo: 35,
    x: 3,
    y: 13,
  },
  {
    imgNo: 35,
    x: 4,
    y: 13,
  },
  {
    imgNo: 35,
    x: 5,
    y: 13,
  },
  {
    imgNo: 35,
    x: 6,
    y: 13,
  },
  {
    imgNo: 35,
    x: 7,
    y: 13,
  },
  {
    imgNo: 35,
    x: 8,
    y: 13,
  },
  {
    imgNo: 35,
    x: 9,
    y: 13,
  },
  {
    imgNo: 35,
    x: 10,
    y: 13,
  },
  {
    imgNo: 35,
    x: 11,
    y: 13,
  },
  {
    imgNo: 35,
    x: 12,
    y: 13,
  },
  {
    imgNo: 35,
    x: 13,
    y: 13,
  },
  {
    imgNo: 35,
    x: 14,
    y: 13,
  },
  {
    imgNo: 35,
    x: 15,
    y: 13,
  },
  {
    imgNo: 35,
    x: 16,
    y: 13,
  },
  {
    imgNo: 35,
    x: 17,
    y: 13,
  },
  {
    imgNo: 35,
    x: 18,
    y: 13,
  },
  {
    imgNo: 35,
    x: 19,
    y: 13,
  },
  {
    imgNo: 35,
    x: 20,
    y: 13,
  },
  {
    imgNo: 35,
    x: 21,
    y: 13,
  },
  {
    imgNo: 35,
    x: 22,
    y: 13,
  },
  {
    imgNo: 35,
    x: 23,
    y: 13,
  },
  {
    imgNo: 35,
    x: 24,
    y: 13,
  },
  {
    imgNo: 35,
    x: 25,
    y: 13,
  },
  {
    imgNo: 35,
    x: 26,
    y: 13,
  },
  {
    imgNo: 35,
    x: 27,
    y: 13,
  },
  {
    imgNo: 35,
    x: 28,
    y: 13,
  },
  {
    imgNo: 35,
    x: 29,
    y: 13,
  },
  {
    imgNo: 35,
    x: 30,
    y: 13,
  },
  {
    imgNo: 35,
    x: 31,
    y: 13,
  },
  {
    imgNo: 35,
    x: 32,
    y: 13,
  },
  {
    imgNo: 35,
    x: 33,
    y: 13,
  },
  {
    imgNo: 35,
    x: 34,
    y: 13,
  },
  {
    imgNo: 35,
    x: 35,
    y: 13,
  },
  {
    imgNo: 35,
    x: 36,
    y: 13,
  },
  {
    imgNo: 35,
    x: 37,
    y: 13,
  },
  {
    imgNo: 35,
    x: 38,
    y: 13,
  },
  {
    imgNo: 35,
    x: 39,
    y: 13,
  },
  {
    imgNo: 35,
    x: 40,
    y: 13,
  },
  {
    imgNo: 35,
    x: 41,
    y: 13,
  },
  {
    imgNo: 35,
    x: 42,
    y: 13,
  },
  {
    imgNo: 35,
    x: 43,
    y: 13,
  },
  {
    imgNo: 35,
    x: 44,
    y: 13,
  },
  {
    imgNo: 35,
    x: 45,
    y: 13,
  },
  {
    imgNo: 35,
    x: 46,
    y: 13,
  },
  {
    imgNo: 35,
    x: 47,
    y: 13,
  },
  {
    imgNo: 35,
    x: 48,
    y: 13,
  },
  {
    imgNo: 35,
    x: 49,
    y: 13,
  },
  {
    imgNo: 35,
    x: 50,
    y: 13,
  },
  {
    imgNo: 35,
    x: 51,
    y: 13,
  },
  {
    imgNo: 35,
    x: 52,
    y: 13,
  },
  {
    imgNo: 35,
    x: 53,
    y: 13,
  },
  {
    imgNo: 35,
    x: 54,
    y: 13,
  },
  {
    imgNo: 35,
    x: 55,
    y: 13,
  },
  {
    imgNo: 35,
    x: 56,
    y: 13,
  },
  {
    imgNo: 35,
    x: 57,
    y: 13,
  },
  {
    imgNo: 35,
    x: 58,
    y: 13,
  },
  {
    imgNo: 35,
    x: 59,
    y: 13,
  },
  {
    imgNo: 35,
    x: 60,
    y: 13,
  },
  {
    imgNo: 35,
    x: 61,
    y: 13,
  },
  {
    imgNo: 35,
    x: 62,
    y: 13,
  },
  {
    imgNo: 35,
    x: 63,
    y: 13,
  },
  {
    imgNo: 35,
    x: 64,
    y: 13,
  },
  {
    imgNo: 35,
    x: 65,
    y: 13,
  },
  {
    imgNo: 35,
    x: 66,
    y: 13,
  },
  {
    imgNo: 35,
    x: 67,
    y: 13,
  },
  {
    imgNo: 35,
    x: 68,
    y: 13,
  },
  {
    imgNo: 35,
    x: 71,
    y: 13,
  },
  {
    imgNo: 35,
    x: 72,
    y: 13,
  },
  {
    imgNo: 35,
    x: 73,
    y: 13,
  },
  {
    imgNo: 35,
    x: 74,
    y: 13,
  },
  {
    imgNo: 35,
    x: 75,
    y: 13,
  },
  {
    imgNo: 35,
    x: 76,
    y: 13,
  },
  {
    imgNo: 35,
    x: 77,
    y: 13,
  },
  {
    imgNo: 35,
    x: 78,
    y: 13,
  },
  {
    imgNo: 35,
    x: 79,
    y: 13,
  },
  {
    imgNo: 35,
    x: 80,
    y: 13,
  },
  {
    imgNo: 35,
    x: 81,
    y: 13,
  },
  {
    imgNo: 35,
    x: 82,
    y: 13,
  },
  {
    imgNo: 35,
    x: 83,
    y: 13,
  },
  {
    imgNo: 35,
    x: 84,
    y: 13,
  },
  {
    imgNo: 35,
    x: 85,
    y: 13,
  },
  {
    imgNo: 35,
    x: 89,
    y: 13,
  },
  {
    imgNo: 35,
    x: 90,
    y: 13,
  },
  {
    imgNo: 35,
    x: 91,
    y: 13,
  },
  {
    imgNo: 35,
    x: 92,
    y: 13,
  },
  {
    imgNo: 35,
    x: 93,
    y: 13,
  },
  {
    imgNo: 35,
    x: 94,
    y: 13,
  },
  {
    imgNo: 35,
    x: 95,
    y: 13,
  },
  {
    imgNo: 35,
    x: 96,
    y: 13,
  },
  {
    imgNo: 35,
    x: 97,
    y: 13,
  },
  {
    imgNo: 35,
    x: 98,
    y: 13,
  },
  {
    imgNo: 35,
    x: 99,
    y: 13,
  },
  {
    imgNo: 35,
    x: 100,
    y: 13,
  },
  {
    imgNo: 35,
    x: 101,
    y: 13,
  },
  {
    imgNo: 35,
    x: 102,
    y: 13,
  },
  {
    imgNo: 35,
    x: 103,
    y: 13,
  },
  {
    imgNo: 35,
    x: 104,
    y: 13,
  },
  {
    imgNo: 35,
    x: 105,
    y: 13,
  },
  {
    imgNo: 35,
    x: 106,
    y: 13,
  },
  {
    imgNo: 35,
    x: 107,
    y: 13,
  },
  {
    imgNo: 35,
    x: 108,
    y: 13,
  },
  {
    imgNo: 35,
    x: 109,
    y: 13,
  },
  {
    imgNo: 35,
    x: 110,
    y: 13,
  },
  {
    imgNo: 35,
    x: 111,
    y: 13,
  },
  {
    imgNo: 35,
    x: 112,
    y: 13,
  },
  {
    imgNo: 35,
    x: 113,
    y: 13,
  },
  {
    imgNo: 35,
    x: 114,
    y: 13,
  },
  {
    imgNo: 35,
    x: 115,
    y: 13,
  },
  {
    imgNo: 35,
    x: 116,
    y: 13,
  },
  {
    imgNo: 35,
    x: 117,
    y: 13,
  },
  {
    imgNo: 35,
    x: 118,
    y: 13,
  },
  {
    imgNo: 35,
    x: 119,
    y: 13,
  },
  {
    imgNo: 35,
    x: 120,
    y: 13,
  },
  {
    imgNo: 35,
    x: 121,
    y: 13,
  },
  {
    imgNo: 35,
    x: 122,
    y: 13,
  },
  {
    imgNo: 35,
    x: 123,
    y: 13,
  },
  {
    imgNo: 35,
    x: 124,
    y: 13,
  },
  {
    imgNo: 35,
    x: 125,
    y: 13,
  },
  {
    imgNo: 35,
    x: 126,
    y: 13,
  },
  {
    imgNo: 35,
    x: 127,
    y: 13,
  },
  {
    imgNo: 35,
    x: 128,
    y: 13,
  },
  {
    imgNo: 35,
    x: 129,
    y: 13,
  },
  {
    imgNo: 35,
    x: 130,
    y: 13,
  },
  {
    imgNo: 35,
    x: 131,
    y: 13,
  },
  {
    imgNo: 35,
    x: 132,
    y: 13,
  },
  {
    imgNo: 35,
    x: 133,
    y: 13,
  },
  {
    imgNo: 35,
    x: 134,
    y: 13,
  },
  {
    imgNo: 35,
    x: 135,
    y: 13,
  },
  {
    imgNo: 35,
    x: 136,
    y: 13,
  },
  {
    imgNo: 35,
    x: 137,
    y: 13,
  },
  {
    imgNo: 35,
    x: 138,
    y: 13,
  },
  {
    imgNo: 35,
    x: 139,
    y: 13,
  },
  {
    imgNo: 35,
    x: 140,
    y: 13,
  },
  {
    imgNo: 35,
    x: 141,
    y: 13,
  },
  {
    imgNo: 35,
    x: 142,
    y: 13,
  },
  {
    imgNo: 35,
    x: 143,
    y: 13,
  },
  {
    imgNo: 35,
    x: 144,
    y: 13,
  },
  {
    imgNo: 35,
    x: 145,
    y: 13,
  },
  {
    imgNo: 35,
    x: 146,
    y: 13,
  },
  {
    imgNo: 35,
    x: 147,
    y: 13,
  },
  {
    imgNo: 35,
    x: 148,
    y: 13,
  },
  {
    imgNo: 35,
    x: 149,
    y: 13,
  },
  {
    imgNo: 35,
    x: 150,
    y: 13,
  },
  {
    imgNo: 35,
    x: 151,
    y: 13,
  },
  {
    imgNo: 35,
    x: 152,
    y: 13,
  },
  {
    imgNo: 35,
    x: 155,
    y: 13,
  },
  {
    imgNo: 35,
    x: 156,
    y: 13,
  },
  {
    imgNo: 35,
    x: 157,
    y: 13,
  },
  {
    imgNo: 35,
    x: 158,
    y: 13,
  },
  {
    imgNo: 35,
    x: 159,
    y: 13,
  },
  {
    imgNo: 35,
    x: 160,
    y: 13,
  },
  {
    imgNo: 35,
    x: 161,
    y: 13,
  },
  {
    imgNo: 35,
    x: 162,
    y: 13,
  },
  {
    imgNo: 35,
    x: 163,
    y: 13,
  },
  {
    imgNo: 35,
    x: 164,
    y: 13,
  },
  {
    imgNo: 35,
    x: 165,
    y: 13,
  },
  {
    imgNo: 35,
    x: 166,
    y: 13,
  },
  {
    imgNo: 35,
    x: 167,
    y: 13,
  },
  {
    imgNo: 35,
    x: 168,
    y: 13,
  },
  {
    imgNo: 35,
    x: 169,
    y: 13,
  },
  {
    imgNo: 35,
    x: 170,
    y: 13,
  },
  {
    imgNo: 35,
    x: 171,
    y: 13,
  },
  {
    imgNo: 35,
    x: 172,
    y: 13,
  },
  {
    imgNo: 35,
    x: 173,
    y: 13,
  },
  {
    imgNo: 35,
    x: 174,
    y: 13,
  },
  {
    imgNo: 35,
    x: 175,
    y: 13,
  },
  {
    imgNo: 35,
    x: 176,
    y: 13,
  },
  {
    imgNo: 35,
    x: 177,
    y: 13,
  },
  {
    imgNo: 35,
    x: 178,
    y: 13,
  },
  {
    imgNo: 35,
    x: 179,
    y: 13,
  },
  {
    imgNo: 35,
    x: 180,
    y: 13,
  },
  {
    imgNo: 35,
    x: 181,
    y: 13,
  },
  {
    imgNo: 35,
    x: 182,
    y: 13,
  },
  {
    imgNo: 35,
    x: 183,
    y: 13,
  },
  {
    imgNo: 35,
    x: 184,
    y: 13,
  },
  {
    imgNo: 35,
    x: 185,
    y: 13,
  },
  {
    imgNo: 35,
    x: 186,
    y: 13,
  },
  {
    imgNo: 35,
    x: 187,
    y: 13,
  },
  {
    imgNo: 35,
    x: 188,
    y: 13,
  },
  {
    imgNo: 35,
    x: 189,
    y: 13,
  },
  {
    imgNo: 35,
    x: 190,
    y: 13,
  },
  {
    imgNo: 35,
    x: 191,
    y: 13,
  },
  {
    imgNo: 35,
    x: 192,
    y: 13,
  },
  {
    imgNo: 35,
    x: 193,
    y: 13,
  },
  {
    imgNo: 35,
    x: 194,
    y: 13,
  },
  {
    imgNo: 35,
    x: 195,
    y: 13,
  },
  {
    imgNo: 35,
    x: 196,
    y: 13,
  },
  {
    imgNo: 35,
    x: 197,
    y: 13,
  },
  {
    imgNo: 35,
    x: 198,
    y: 13,
  },
  {
    imgNo: 35,
    x: 199,
    y: 13,
  },
  {
    imgNo: 35,
    x: 200,
    y: 13,
  },
  {
    imgNo: 35,
    x: 201,
    y: 13,
  },
  {
    imgNo: 35,
    x: 202,
    y: 13,
  },
  {
    imgNo: 35,
    x: 203,
    y: 13,
  },
  {
    imgNo: 35,
    x: 204,
    y: 13,
  },
  {
    imgNo: 35,
    x: 205,
    y: 13,
  },
  {
    imgNo: 35,
    x: 206,
    y: 13,
  },
  {
    imgNo: 35,
    x: 207,
    y: 13,
  },
  {
    imgNo: 35,
    x: 208,
    y: 13,
  },
  {
    imgNo: 35,
    x: 209,
    y: 13,
  },
  {
    imgNo: 35,
    x: 210,
    y: 13,
  },
  {
    imgNo: 35,
    x: 0,
    y: 14,
  },
  {
    imgNo: 35,
    x: 1,
    y: 14,
  },
  {
    imgNo: 35,
    x: 2,
    y: 14,
  },
  {
    imgNo: 35,
    x: 3,
    y: 14,
  },
  {
    imgNo: 35,
    x: 4,
    y: 14,
  },
  {
    imgNo: 35,
    x: 5,
    y: 14,
  },
  {
    imgNo: 35,
    x: 6,
    y: 14,
  },
  {
    imgNo: 35,
    x: 7,
    y: 14,
  },
  {
    imgNo: 35,
    x: 8,
    y: 14,
  },
  {
    imgNo: 35,
    x: 9,
    y: 14,
  },
  {
    imgNo: 35,
    x: 10,
    y: 14,
  },
  {
    imgNo: 35,
    x: 11,
    y: 14,
  },
  {
    imgNo: 35,
    x: 12,
    y: 14,
  },
  {
    imgNo: 35,
    x: 13,
    y: 14,
  },
  {
    imgNo: 35,
    x: 14,
    y: 14,
  },
  {
    imgNo: 35,
    x: 15,
    y: 14,
  },
  {
    imgNo: 35,
    x: 16,
    y: 14,
  },
  {
    imgNo: 35,
    x: 17,
    y: 14,
  },
  {
    imgNo: 35,
    x: 18,
    y: 14,
  },
  {
    imgNo: 35,
    x: 19,
    y: 14,
  },
  {
    imgNo: 35,
    x: 20,
    y: 14,
  },
  {
    imgNo: 35,
    x: 21,
    y: 14,
  },
  {
    imgNo: 35,
    x: 22,
    y: 14,
  },
  {
    imgNo: 35,
    x: 23,
    y: 14,
  },
  {
    imgNo: 35,
    x: 24,
    y: 14,
  },
  {
    imgNo: 35,
    x: 25,
    y: 14,
  },
  {
    imgNo: 35,
    x: 26,
    y: 14,
  },
  {
    imgNo: 35,
    x: 27,
    y: 14,
  },
  {
    imgNo: 35,
    x: 28,
    y: 14,
  },
  {
    imgNo: 35,
    x: 29,
    y: 14,
  },
  {
    imgNo: 35,
    x: 30,
    y: 14,
  },
  {
    imgNo: 35,
    x: 31,
    y: 14,
  },
  {
    imgNo: 35,
    x: 32,
    y: 14,
  },
  {
    imgNo: 35,
    x: 33,
    y: 14,
  },
  {
    imgNo: 35,
    x: 34,
    y: 14,
  },
  {
    imgNo: 35,
    x: 35,
    y: 14,
  },
  {
    imgNo: 35,
    x: 36,
    y: 14,
  },
  {
    imgNo: 35,
    x: 37,
    y: 14,
  },
  {
    imgNo: 35,
    x: 38,
    y: 14,
  },
  {
    imgNo: 35,
    x: 39,
    y: 14,
  },
  {
    imgNo: 35,
    x: 40,
    y: 14,
  },
  {
    imgNo: 35,
    x: 41,
    y: 14,
  },
  {
    imgNo: 35,
    x: 42,
    y: 14,
  },
  {
    imgNo: 35,
    x: 43,
    y: 14,
  },
  {
    imgNo: 35,
    x: 44,
    y: 14,
  },
  {
    imgNo: 35,
    x: 45,
    y: 14,
  },
  {
    imgNo: 35,
    x: 46,
    y: 14,
  },
  {
    imgNo: 35,
    x: 47,
    y: 14,
  },
  {
    imgNo: 35,
    x: 48,
    y: 14,
  },
  {
    imgNo: 35,
    x: 49,
    y: 14,
  },
  {
    imgNo: 35,
    x: 50,
    y: 14,
  },
  {
    imgNo: 35,
    x: 51,
    y: 14,
  },
  {
    imgNo: 35,
    x: 52,
    y: 14,
  },
  {
    imgNo: 35,
    x: 53,
    y: 14,
  },
  {
    imgNo: 35,
    x: 54,
    y: 14,
  },
  {
    imgNo: 35,
    x: 55,
    y: 14,
  },
  {
    imgNo: 35,
    x: 56,
    y: 14,
  },
  {
    imgNo: 35,
    x: 57,
    y: 14,
  },
  {
    imgNo: 35,
    x: 58,
    y: 14,
  },
  {
    imgNo: 35,
    x: 59,
    y: 14,
  },
  {
    imgNo: 35,
    x: 60,
    y: 14,
  },
  {
    imgNo: 35,
    x: 61,
    y: 14,
  },
  {
    imgNo: 35,
    x: 62,
    y: 14,
  },
  {
    imgNo: 35,
    x: 63,
    y: 14,
  },
  {
    imgNo: 35,
    x: 64,
    y: 14,
  },
  {
    imgNo: 35,
    x: 65,
    y: 14,
  },
  {
    imgNo: 35,
    x: 66,
    y: 14,
  },
  {
    imgNo: 35,
    x: 67,
    y: 14,
  },
  {
    imgNo: 35,
    x: 68,
    y: 14,
  },
  {
    imgNo: 35,
    x: 71,
    y: 14,
  },
  {
    imgNo: 35,
    x: 72,
    y: 14,
  },
  {
    imgNo: 35,
    x: 73,
    y: 14,
  },
  {
    imgNo: 35,
    x: 74,
    y: 14,
  },
  {
    imgNo: 35,
    x: 75,
    y: 14,
  },
  {
    imgNo: 35,
    x: 76,
    y: 14,
  },
  {
    imgNo: 35,
    x: 77,
    y: 14,
  },
  {
    imgNo: 35,
    x: 78,
    y: 14,
  },
  {
    imgNo: 35,
    x: 79,
    y: 14,
  },
  {
    imgNo: 35,
    x: 80,
    y: 14,
  },
  {
    imgNo: 35,
    x: 81,
    y: 14,
  },
  {
    imgNo: 35,
    x: 82,
    y: 14,
  },
  {
    imgNo: 35,
    x: 83,
    y: 14,
  },
  {
    imgNo: 35,
    x: 84,
    y: 14,
  },
  {
    imgNo: 35,
    x: 85,
    y: 14,
  },
  {
    imgNo: 35,
    x: 89,
    y: 14,
  },
  {
    imgNo: 35,
    x: 90,
    y: 14,
  },
  {
    imgNo: 35,
    x: 91,
    y: 14,
  },
  {
    imgNo: 35,
    x: 92,
    y: 14,
  },
  {
    imgNo: 35,
    x: 93,
    y: 14,
  },
  {
    imgNo: 35,
    x: 94,
    y: 14,
  },
  {
    imgNo: 35,
    x: 95,
    y: 14,
  },
  {
    imgNo: 35,
    x: 96,
    y: 14,
  },
  {
    imgNo: 35,
    x: 97,
    y: 14,
  },
  {
    imgNo: 35,
    x: 98,
    y: 14,
  },
  {
    imgNo: 35,
    x: 99,
    y: 14,
  },
  {
    imgNo: 35,
    x: 100,
    y: 14,
  },
  {
    imgNo: 35,
    x: 101,
    y: 14,
  },
  {
    imgNo: 35,
    x: 102,
    y: 14,
  },
  {
    imgNo: 35,
    x: 103,
    y: 14,
  },
  {
    imgNo: 35,
    x: 104,
    y: 14,
  },
  {
    imgNo: 35,
    x: 105,
    y: 14,
  },
  {
    imgNo: 35,
    x: 106,
    y: 14,
  },
  {
    imgNo: 35,
    x: 107,
    y: 14,
  },
  {
    imgNo: 35,
    x: 108,
    y: 14,
  },
  {
    imgNo: 35,
    x: 109,
    y: 14,
  },
  {
    imgNo: 35,
    x: 110,
    y: 14,
  },
  {
    imgNo: 35,
    x: 111,
    y: 14,
  },
  {
    imgNo: 35,
    x: 112,
    y: 14,
  },
  {
    imgNo: 35,
    x: 113,
    y: 14,
  },
  {
    imgNo: 35,
    x: 114,
    y: 14,
  },
  {
    imgNo: 35,
    x: 115,
    y: 14,
  },
  {
    imgNo: 35,
    x: 116,
    y: 14,
  },
  {
    imgNo: 35,
    x: 117,
    y: 14,
  },
  {
    imgNo: 35,
    x: 118,
    y: 14,
  },
  {
    imgNo: 35,
    x: 119,
    y: 14,
  },
  {
    imgNo: 35,
    x: 120,
    y: 14,
  },
  {
    imgNo: 35,
    x: 121,
    y: 14,
  },
  {
    imgNo: 35,
    x: 122,
    y: 14,
  },
  {
    imgNo: 35,
    x: 123,
    y: 14,
  },
  {
    imgNo: 35,
    x: 124,
    y: 14,
  },
  {
    imgNo: 35,
    x: 125,
    y: 14,
  },
  {
    imgNo: 35,
    x: 126,
    y: 14,
  },
  {
    imgNo: 35,
    x: 127,
    y: 14,
  },
  {
    imgNo: 35,
    x: 128,
    y: 14,
  },
  {
    imgNo: 35,
    x: 129,
    y: 14,
  },
  {
    imgNo: 35,
    x: 130,
    y: 14,
  },
  {
    imgNo: 35,
    x: 131,
    y: 14,
  },
  {
    imgNo: 35,
    x: 132,
    y: 14,
  },
  {
    imgNo: 35,
    x: 133,
    y: 14,
  },
  {
    imgNo: 35,
    x: 134,
    y: 14,
  },
  {
    imgNo: 35,
    x: 135,
    y: 14,
  },
  {
    imgNo: 35,
    x: 136,
    y: 14,
  },
  {
    imgNo: 35,
    x: 137,
    y: 14,
  },
  {
    imgNo: 35,
    x: 138,
    y: 14,
  },
  {
    imgNo: 35,
    x: 139,
    y: 14,
  },
  {
    imgNo: 35,
    x: 140,
    y: 14,
  },
  {
    imgNo: 35,
    x: 141,
    y: 14,
  },
  {
    imgNo: 35,
    x: 142,
    y: 14,
  },
  {
    imgNo: 35,
    x: 143,
    y: 14,
  },
  {
    imgNo: 35,
    x: 144,
    y: 14,
  },
  {
    imgNo: 35,
    x: 145,
    y: 14,
  },
  {
    imgNo: 35,
    x: 146,
    y: 14,
  },
  {
    imgNo: 35,
    x: 147,
    y: 14,
  },
  {
    imgNo: 35,
    x: 148,
    y: 14,
  },
  {
    imgNo: 35,
    x: 149,
    y: 14,
  },
  {
    imgNo: 35,
    x: 150,
    y: 14,
  },
  {
    imgNo: 35,
    x: 151,
    y: 14,
  },
  {
    imgNo: 35,
    x: 152,
    y: 14,
  },
  {
    imgNo: 35,
    x: 155,
    y: 14,
  },
  {
    imgNo: 35,
    x: 156,
    y: 14,
  },
  {
    imgNo: 35,
    x: 157,
    y: 14,
  },
  {
    imgNo: 35,
    x: 158,
    y: 14,
  },
  {
    imgNo: 35,
    x: 159,
    y: 14,
  },
  {
    imgNo: 35,
    x: 160,
    y: 14,
  },
  {
    imgNo: 35,
    x: 161,
    y: 14,
  },
  {
    imgNo: 35,
    x: 162,
    y: 14,
  },
  {
    imgNo: 35,
    x: 163,
    y: 14,
  },
  {
    imgNo: 35,
    x: 164,
    y: 14,
  },
  {
    imgNo: 35,
    x: 165,
    y: 14,
  },
  {
    imgNo: 35,
    x: 166,
    y: 14,
  },
  {
    imgNo: 35,
    x: 167,
    y: 14,
  },
  {
    imgNo: 35,
    x: 168,
    y: 14,
  },
  {
    imgNo: 35,
    x: 169,
    y: 14,
  },
  {
    imgNo: 35,
    x: 170,
    y: 14,
  },
  {
    imgNo: 35,
    x: 171,
    y: 14,
  },
  {
    imgNo: 35,
    x: 172,
    y: 14,
  },
  {
    imgNo: 35,
    x: 173,
    y: 14,
  },
  {
    imgNo: 35,
    x: 174,
    y: 14,
  },
  {
    imgNo: 35,
    x: 175,
    y: 14,
  },
  {
    imgNo: 35,
    x: 176,
    y: 14,
  },
  {
    imgNo: 35,
    x: 177,
    y: 14,
  },
  {
    imgNo: 35,
    x: 178,
    y: 14,
  },
  {
    imgNo: 35,
    x: 179,
    y: 14,
  },
  {
    imgNo: 35,
    x: 180,
    y: 14,
  },
  {
    imgNo: 35,
    x: 181,
    y: 14,
  },
  {
    imgNo: 35,
    x: 182,
    y: 14,
  },
  {
    imgNo: 35,
    x: 183,
    y: 14,
  },
  {
    imgNo: 35,
    x: 184,
    y: 14,
  },
  {
    imgNo: 35,
    x: 185,
    y: 14,
  },
  {
    imgNo: 35,
    x: 186,
    y: 14,
  },
  {
    imgNo: 35,
    x: 187,
    y: 14,
  },
  {
    imgNo: 35,
    x: 188,
    y: 14,
  },
  {
    imgNo: 35,
    x: 189,
    y: 14,
  },
  {
    imgNo: 35,
    x: 190,
    y: 14,
  },
  {
    imgNo: 35,
    x: 191,
    y: 14,
  },
  {
    imgNo: 35,
    x: 192,
    y: 14,
  },
  {
    imgNo: 35,
    x: 193,
    y: 14,
  },
  {
    imgNo: 35,
    x: 194,
    y: 14,
  },
  {
    imgNo: 35,
    x: 195,
    y: 14,
  },
  {
    imgNo: 35,
    x: 196,
    y: 14,
  },
  {
    imgNo: 35,
    x: 197,
    y: 14,
  },
  {
    imgNo: 35,
    x: 198,
    y: 14,
  },
  {
    imgNo: 35,
    x: 199,
    y: 14,
  },
  {
    imgNo: 35,
    x: 200,
    y: 14,
  },
  {
    imgNo: 35,
    x: 201,
    y: 14,
  },
  {
    imgNo: 35,
    x: 202,
    y: 14,
  },
  {
    imgNo: 35,
    x: 203,
    y: 14,
  },
  {
    imgNo: 35,
    x: 204,
    y: 14,
  },
  {
    imgNo: 35,
    x: 205,
    y: 14,
  },
  {
    imgNo: 35,
    x: 206,
    y: 14,
  },
  {
    imgNo: 35,
    x: 207,
    y: 14,
  },
  {
    imgNo: 35,
    x: 208,
    y: 14,
  },
  {
    imgNo: 35,
    x: 209,
    y: 14,
  },
  {
    imgNo: 35,
    x: 210,
    y: 14,
  },
];

// const mapCanvas = document.getElementById('imageCanvas') as HTMLCanvasElement;
// const tileCanvas = document.getElementById('tileCanvas') as HTMLCanvasElement;
// const context = mapCanvas.getContext('2d');
// const tileContext = tileCanvas.getContext('2d');
// const mapImage = new Image();
// mapImage.src = 'img/map.png'; // 이미지 파일 경로를 지정합니다.
// tileCanvas.width = 16 * 40;
// tileCanvas.height = 16;
// // 이미지 로드 후 처리
// const ts = 16;
// mapImage.onload = function () {
//   mapCanvas.width = mapImage.width;
//   mapCanvas.height = mapImage.height;
//   context?.drawImage(mapImage, 0, 0, mapCanvas.width, mapCanvas.height);
//   const tiles: { key: string; imageData: ImageData }[] = [];
//   for (let y = 0; y < mapCanvas.height; y += ts) {
//     for (let x = 0; x < mapCanvas.width; x += ts) {
//       const temp = context?.getImageData(x, y, ts, ts);
//       if (temp) {
//         tiles.push({ imageData: temp, key: temp.data.join('') });
//       }
//     }
//   }
//   const keysOfTilesSet = [...new Set(tiles.map((t) => t.key))];
//   // const comp = tiles.filter((t) => keysOfTilesSet.includes(t.key));
//   const comp = keysOfTilesSet.map((kot, idx) => {
//     return {
//       id: idx,
//       key: kot,
//       imageData: tiles.find((t) => t.key === kot)?.imageData,
//     };
//   });
//   // 중복 제거된 타일 다시 그리기
//   const tmpMapData = [];
//   for (let y = 0; y < mapCanvas.height; y += ts) {
//     for (let x = 0; x < mapCanvas.width; x += ts) {
//       const temp = context?.getImageData(x, y, ts, ts);

//       if (temp) {
//         tmpMapData.push({
//           imgNo: comp.find((c) => c.key === temp.data.join(''))?.id,
//           x: x / 16,
//           y: y / 16,
//         });
//       }
//     }
//   }

//   // mapCanvas.remove();
//   comp.forEach((t, idx) => {
//     if (t?.imageData) {
//       tileContext?.putImageData(t.imageData, (idx % 210) * 16, 0);
//     }
//   });
// };

type State = 'JUMPING' | 'FALLING' | 'IDLE' | 'RUNNING';
type Direction = 'LEFT' | 'RIGHT';
const scene = new THREE.Scene();
// 기즈모 헬퍼
scene.add(new THREE.AxesHelper(5));
const bgm = new Audio('./sound/bgm.mp3');
const gamveOverBgm = new Audio('./sound/gameover.mp3');
const jumpSound = new Audio('./sound/jump.mp3');
const clearSound = new Audio('./sound/clear.mp3');
jumpSound.volume = 0.2;
// const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10000);
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

// 카메라 초기 위치

// camera.position.y = 1;
// camera.zoom = 0.5;

// world.broadphase = new CANNON.NaiveBroadphase();
// (world.solver as CANNON.GSSolver).iterations = 10;
// world.allowSleep = true;

// const normalMaterial = new THREE.MeshNormalMaterial();
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// const cubeMesh = new THREE.Mesh(cubeGeometry, normalMaterial);
// const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
// const cubeBody = new CANNON.Body({ mass: 1 });
// cubeBody.addShape(cubeShape);
// cubeBody.position.x = cubeMesh.position.x;
// cubeBody.position.y = cubeMesh.position.y;
// cubeBody.position.z = cubeMesh.position.z;
// world.addBody(cubeBody);

const canvas = document.getElementById('c1') as HTMLCanvasElement;
const stateLabel = document.getElementById('info') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerWidth);
console.log(
  '🚀 ~ file: client.ts:4273 ~ window.innerWidth:',
  window.innerWidth
);
let gameState = '';
const controls = new OrbitControls(camera, renderer.domElement);
const jumpLimit = 0.5;
const jumpAmount = window.innerWidth / 17000;
const tileSize = 1;
const cubeTile = new THREE.BoxGeometry(tileSize, tileSize, tileSize);
const planeTile = new THREE.PlaneGeometry(tileSize, tileSize);
const mapOffset = { x: -20, y: 20, z: 0 };
const marioTexture = new THREE.TextureLoader().load('img/characters.png');
marioTexture.minFilter = THREE.NearestFilter;
marioTexture.magFilter = THREE.NearestFilter;
marioTexture.offset.x = 0;
marioTexture.offset.y = 0.75;

marioTexture.repeat.x = 0.25;
marioTexture.repeat.y = 0.25;

const marioMaterial = new THREE.MeshBasicMaterial({
  map: marioTexture,
  transparent: true,
  side: THREE.DoubleSide,
});

const marioMesh = new THREE.Mesh(planeTile, marioMaterial);
camera.position.x = marioMesh.position.x;
camera.position.y = 30;
camera.position.z = 30;
// const marioMesh = new THREE.Mesh(planeTile, marioMaterial);
// 마리오 초기위치;
// const x = -10;
const x = -15;
const y = 10;

marioMesh.position.x = x * tileSize;
marioMesh.position.y = y * tileSize;
marioMesh.position.z = 0;
scene.add(marioMesh);
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);
// const defaultMaterial = new CANNON.Material('default');

// const defaultContactMaterial = new CANNON.ContactMaterial(
//   defaultMaterial,
//   defaultMaterial,
//   {
//     friction: 0,
//     restitution: 0,
//   }
// );
// world.addContactMaterial(defaultContactMaterial);
// world.defaultContactMaterial = defaultContactMaterial;
// const marioShape = new CANNON.Sphere(tileSize / 2);
const marioShape = new CANNON.Box(
  new CANNON.Vec3(tileSize / 2, tileSize / 2, tileSize * 2)
);
const marioBody = new CANNON.Body({
  mass: 1,
  shape: marioShape,
});
marioBody.angularDamping = 1;
marioBody.fixedRotation = true;
marioBody.addEventListener('collide', (e: CANNON.ICollisionEvent) => {
  state = 'IDLE';
});
camera.lookAt(marioBody.position.x, 0, 0);

// marioBody.position.set(-10, 20, 0);
// marioMesh.position.copy(
//   new THREE.Vector3(
//     marioBody.position.x,
//     marioBody.position.y,
//     marioBody.position.z
//   )
// );
// marioMesh.position.x = marioBody.position.x;
// marioMesh.position.y = marioBody.position.y;
// marioMesh.position.z = marioBody.position.z;
marioBody.position.x = marioMesh.position.x + tileSize / 2;
marioBody.position.y = marioMesh.position.y;
marioBody.position.z = marioMesh.position.z;
// marioBody.position.copy(new THREE.Vector3(marioMesh.position.x))
world.addBody(marioBody);

const clock = new THREE.Clock();
let oldElapsedTime = 0;
let vel = {
  x: 0,
  y: 0,
};
const tick = (target: THREE.Mesh) => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - oldElapsedTime;
  oldElapsedTime = elapsedTime;
  world.step(1 / 60, deltaTime);
  // physicsRenderList.forEach((l) => {
  //   l.tile.position.copy(
  //     new THREE.Vector3(l.body.position.x, l.body.position.y, l.body.position.z)
  //   );
  //   // l.tile.position.x = l.body.position.x;
  //   // l.tile.position.y = l.body.position.y;
  //   // l.tile.position.z = l.body.position.z;
  // });
  target.position.copy(
    new THREE.Vector3(marioBody.position.x, marioBody.position.y, 0)
  );
  // target.position.x = marioBody.position.x;
  // target.position.y = marioBody.position.y;
  // target.position.z = marioBody.position.z;
};

let state: State = 'IDLE';
let direction: Direction = 'RIGHT';
const velocityAmount = window.innerWidth / 15000;

const keysPressed: { [key: string]: boolean } = {};
window.onload = function () {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(() => {
      const AudioContext = window.AudioContext;
      const audioContext = new AudioContext();
      bgm.play();
    })
    .catch((e) => {
      console.error(`Audio permissions denied: ${e}`);
    });
};
document.addEventListener('keydown', (e) => {
  keysPressed[e.key] = true;
  if (e.key === 'ArrowRight') {
    state = 'RUNNING';
    direction = 'RIGHT';
    // vel.x = velocityAmount;
  } else if (e.key === 'ArrowLeft') {
    state = 'RUNNING';
    direction = 'LEFT';
    marioBody.position.x -= 0.2;
    // vel.x = -velocityAmount;
  } else if (e.code === 'Space') {
    if (state !== 'JUMPING') {
      jumpSound.play();
    }
    state = 'JUMPING';
    // if (keysPressed['ArrowRight'] === true) {
    //   vel.x = velocityAmount;
    // } else if (keysPressed['ArrowLeft'] === true) {
    //   vel.x = -velocityAmount;
    // }

    vel.y = jumpAmount;
    // marioBody.applyImpulse(
    //   new CANNON.Vec3(0, -0.1, 0),
    //   new CANNON.Vec3(0, 0.412, 0)
    // );
  } else {
    vel.y = 0;
  }
});

document.addEventListener('keyup', (e) => {
  keysPressed[e.key] = false;
  // if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
  //   state = 'IDLE';
  //   vel.x = 0;
  // }
});

// const physicsRenderList: { tile: THREE.Mesh; body: CANNON.Body }[] = [];
mapData.forEach((tile) => {
  const hasToRender3D = [11, 12, 13, 15, 35, 18, 19, 20, 24, 28, 34].includes(
    tile.imgNo
  );
  const tileGeometry = new THREE.PlaneGeometry(tileSize, tileSize);
  const cubeGeometry = new THREE.BoxGeometry(tileSize, tileSize, tileSize);
  const tempTileTexture = new THREE.TextureLoader().load('img/sprites.png');
  tempTileTexture.offset.x = (tile.imgNo % 10) / 10;
  tempTileTexture.offset.y = 1 - Math.floor(tile.imgNo / 10) / 10 - 0.1;
  tempTileTexture.repeat.x = 0.1;
  tempTileTexture.repeat.y = 0.1;
  tempTileTexture.minFilter = THREE.NearestFilter;
  tempTileTexture.magFilter = THREE.NearestFilter;
  const tileMaterial = new THREE.MeshBasicMaterial({
    map: tempTileTexture,
    transparent: !hasToRender3D,
    side: THREE.DoubleSide,
  });
  // 11 : 물음표
  // 12 : 벽돌
  // 13 : 딱딱한돌
  // 35 : 바닥
  // 15, 18, 19, 20, 24, 28, 34 : 성

  if (hasToRender3D) {
    const tileMesh = new THREE.Mesh(cubeGeometry, tileMaterial);
    tileMesh.position.x = (tile.x + mapOffset.x) * tileSize;
    tileMesh.position.y = (mapOffset.y - tile.y) * tileSize;
    tileMesh.position.z = 0;

    scene.add(tileMesh);
    const cubeShape = new CANNON.Box(
      new CANNON.Vec3(tileSize / 2, tileSize / 2, tileSize / 2)
    );
    const cubeBody = new CANNON.Body({
      mass: 0,
    });
    cubeBody.addShape(cubeShape);
    cubeBody.fixedRotation = true;
    cubeBody.position.set(
      tileMesh.position.x,
      // tileMesh.position.x + tileSize / 2,
      tileMesh.position.y,
      0
    );
    // physicsRenderList.push({ tile: tileMesh, body: cubeBody });
    world.addBody(cubeBody);
  } else {
    const tileMesh = new THREE.Mesh(tileGeometry, tileMaterial);
    tileMesh.position.x = (tile.x + mapOffset.x) * tileSize;
    tileMesh.position.y = (mapOffset.y - tile.y) * tileSize;
    tileMesh.position.z = -tileSize / 2;
    // tileMesh.position.z = 0;
    scene.add(tileMesh);
  }
});
// worldMap.forEach((tile) => {
//   const tileGeometry = new THREE.BoxGeometry(tileSize, tileSize, tileSize);
//   const cube = new THREE.Mesh(tileGeometry, tile.material);
//   cube.position.x = (tile.position.x + mapOffset.x) * tileSize;
//   cube.position.y = (tile.position.y + mapOffset.y) * tileSize;
//   cube.position.z = (tile.position.z + mapOffset.z) * tileSize;
//   scene.add(cube);
// });

scene.background = new THREE.Color('rgb(87, 141, 249)');

let frameCount = 0;

//마리오 자동 달리기
// state = 'RUNNING';
direction = 'RIGHT';
vel.x = velocityAmount;

function animate() {
  console.log(marioBody.position.y);
  if (!['GAMEOVER', 'CLEAR'].includes(gameState)) {
    marioBody.position.z = 0;
    if (
      marioBody.position.x >= 177.5
      // marioBody.position.x <= 179 &&
      // marioBody.position.y > 9 &&
      // marioBody.position.y < 17
    ) {
      gameState = 'CLEAR';
    }
    if (marioBody.position.y < -0.1) {
      gameState = 'GAMEOVER';
    }
    // camera.lookAt(marioBody.position.x, 0, 0);
    requestAnimationFrame(animate);
    // 마리오 자동이동
    marioBody.position.x += velocityAmount;
    marioBody.position.z = 0;
    tick(marioMesh);
    if (state !== 'JUMPING') {
      if (keysPressed['ArrowRight'] === true) {
        state = 'RUNNING';
      } else if (keysPressed['ArrowLeft'] === true) {
        state = 'RUNNING';
      }
    }
    if (state === 'JUMPING') {
      marioBody.position.y += vel.y;
    }

    // if (state === 'RUNNING') {
    //   marioBody.position.x += vel.x;
    //   // marioBody.position.y += vel.y;
    //   // marioBody.applyImpulse(
    //   //   new CANNON.Vec3(-vel.x, 0, 0),
    //   //   new CANNON.Vec3(0, 0, 0)
    //   // );
    // }
    //
    // 카메라 자동이동
    // camera.position.x += 0.005;
    // camera.position.z = Math.sin(frameCount / 400);
    // camera.lookAt(new THREE.Vector3(marioMesh.position.x - 0.5, -0.5, 0));

    frameCount += 1;
    if (frameCount % 10 === 0) {
      //debug
    }

    //자동 점핑
    // if (frameCount % 300 === 0) {
    //   if (state !== 'JUMPING') {
    //     state = 'JUMPING';
    //     vel.y = jumpAmount;
    //   }
    // }

    if (frameCount % 12 === 0) {
      //애니메이션
    }
    if (frameCount % 8 === 0) {
      if (state !== 'JUMPING') {
        marioTexture.offset.y = 0.5;
        if (marioTexture.offset.x >= 0.75) {
          marioTexture.offset.x = 0;
        } else {
          marioTexture.offset.x += 0.25;
        }
      } else if (state === 'JUMPING') {
        marioTexture.offset.x = 0.75;
        marioTexture.offset.y = 0.75;
      }
      //   if (direction === 'RIGHT') {
      //     marioTexture.offset.x = 0.75;
      //     marioTexture.offset.y = 0.75;
      //   } else if (direction === 'LEFT') {
      //     marioTexture.offset.x = 0;
      //     marioTexture.offset.y = 0.25;
      //   }
      // } else if (state === 'RUNNING') {
      //   if (marioTexture.offset.x >= 0.75) {
      //     marioTexture.offset.x = 0;
      //   } else {
      //     marioTexture.offset.x += 0.25;
      //   }
      //   if (direction === 'RIGHT') {
      //     marioTexture.offset.y = 0.5;
      //   } else {
      //     marioTexture.offset.y = 0;
      //   }
      // } else if (state === 'IDLE') {
      //   if (direction === 'RIGHT') {
      //     marioTexture.offset.x = 0;
      //     marioTexture.offset.y = 0.75;
      //   } else if (direction === 'LEFT') {
      //     marioTexture.offset.x = 0.75;
      //     marioTexture.offset.y = 0.25;
      //   }
    }
    // if (marioMesh.position.y < 0.4) {
    //   marioMesh.position.y = 0.4;
    //   vel.y = 0;
    //   state = 'IDLE';
    // }

    // if (marioMesh.position.y > jumpLimit || '') {
    //   vel.y = vel.y * -1;
    // }
    // marioMesh.position.x += vel.x;
    // marioMesh.position.y += vel.y;
    camera.position.x = Math.ceil(marioMesh.position.x * 1000) / 1000;
    // camera.position.y = marioMesh.position.y + 1;
    render();
  } else if (gameState === 'GAMEOVER') {
    bgm.pause();
    gamveOverBgm.play();
    stateLabel.style.display = 'block';
  } else if (gameState === 'CLEAR') {
    bgm.pause();
    clearSound.play();
    stateLabel.style.display = 'block';
    stateLabel.innerText = 'CONGRATULATIONS';
  }
}

function render() {
  renderer.render(scene, camera);
}

animate();
