import {Injectable} from '@angular/core';
import {PaletteType} from '../model/palette-type.enum';
import {HueType} from '../model/hue-type.enum';
import {MaterialPalette} from '../model/palette.model';
import {Hue} from '../model/hue.model';

/**
 * Handles Material colors
 */
@Injectable({
  providedIn: 'root'
})
export class MaterialColorService {

  /** App theme */
  themeClass = 'klubtalent-blue-theme';
  /** Primary palette */
  primaryPalette = PaletteType.KLUBTALENT_BLUE;
  /** Accent palette */
  accentPalette = PaletteType.KLUBTALENT_ORANGE;

  /** List of palettes */
  palettes: MaterialPalette[] = [];

  /**
   * Constructor
   */
  constructor() {
    this.initializeColors();
  }

  //
  // Initialization
  //

  /**
   * Initializes colors
   */
  private initializeColors() {
    // Red
    const red = new MaterialPalette(PaletteType.RED);
    red.hues.push(new Hue(HueType._50, '#ffebee', '#000000'));
    red.hues.push(new Hue(HueType._100, '#ffcdd2', '#000000'));
    red.hues.push(new Hue(HueType._200, '#ef9a9a', '#000000'));
    red.hues.push(new Hue(HueType._300, '#e57373', '#000000'));
    red.hues.push(new Hue(HueType._400, '#ef5350', '#000000'));
    red.hues.push(new Hue(HueType._500, '#f44336', '#000000'));
    red.hues.push(new Hue(HueType._600, '#e53935', '#000000'));
    red.hues.push(new Hue(HueType._700, '#d32f2f', '#FFFFFF'));
    red.hues.push(new Hue(HueType._800, '#c62828', '#FFFFFF'));
    red.hues.push(new Hue(HueType._900, '#b71c1c', '#FFFFFF'));
    red.hues.push(new Hue(HueType.A100, '#ff8a80', '#000000'));
    red.hues.push(new Hue(HueType.A200, '#ff5252', '#000000'));
    red.hues.push(new Hue(HueType.A400, '#ff1744', '#000000'));
    red.hues.push(new Hue(HueType.A700, '#d50000', '#FFFFFF'));
    this.palettes.push(red);

    // Pink
    const pink = new MaterialPalette(PaletteType.PINK);
    pink.hues.push(new Hue(HueType._50, '#fce4ec', '#000000'));
    pink.hues.push(new Hue(HueType._100, '#f8bbd0', '#000000'));
    pink.hues.push(new Hue(HueType._200, '#f48fb1', '#000000'));
    pink.hues.push(new Hue(HueType._300, '#f06292', '#000000'));
    pink.hues.push(new Hue(HueType._400, '#ec407a', '#000000'));
    pink.hues.push(new Hue(HueType._500, '#e91e63', '#000000'));
    pink.hues.push(new Hue(HueType._600, '#d81b60', '#FFFFFF'));
    pink.hues.push(new Hue(HueType._700, '#c2185b', '#FFFFFF'));
    pink.hues.push(new Hue(HueType._800, '#ad1457', '#FFFFFF'));
    pink.hues.push(new Hue(HueType._900, '#880e4f', '#FFFFFF'));
    pink.hues.push(new Hue(HueType.A100, '#ff80ab', '#000000'));
    pink.hues.push(new Hue(HueType.A200, '#ff4081', '#000000'));
    pink.hues.push(new Hue(HueType.A400, '#f50057', '#000000'));
    pink.hues.push(new Hue(HueType.A700, '#c51162', '#FFFFFF'));
    this.palettes.push(pink);

    // Purple
    const purple = new MaterialPalette(PaletteType.PURPLE);
    purple.hues.push(new Hue(HueType._50, '#f3e5f5', '#000000'));
    purple.hues.push(new Hue(HueType._100, '#e1bee7', '#000000'));
    purple.hues.push(new Hue(HueType._200, '#ce93d8', '#000000'));
    purple.hues.push(new Hue(HueType._300, '#ba68c8', '#000000'));
    purple.hues.push(new Hue(HueType._400, '#ab47bc', '#FFFFFF'));
    purple.hues.push(new Hue(HueType._500, '#9c27b0', '#FFFFFF'));
    purple.hues.push(new Hue(HueType._600, '#8e24aa', '#FFFFFF'));
    purple.hues.push(new Hue(HueType._700, '#7b1fa2', '#FFFFFF'));
    purple.hues.push(new Hue(HueType._800, '#6a1b9a', '#FFFFFF'));
    purple.hues.push(new Hue(HueType._900, '#4a148c', '#FFFFFF'));
    purple.hues.push(new Hue(HueType.A100, '#ea80fc', '#000000'));
    purple.hues.push(new Hue(HueType.A200, '#e040fb', '#000000'));
    purple.hues.push(new Hue(HueType.A400, '#d500f9', '#000000'));
    purple.hues.push(new Hue(HueType.A700, '#aa00ff', '#FFFFFF'));
    this.palettes.push(purple);

    // Deeppurple
    const deeppurple = new MaterialPalette(PaletteType.DEEP_PURPLE);
    deeppurple.hues.push(new Hue(HueType._50, '#ede7f6', '#000000'));
    deeppurple.hues.push(new Hue(HueType._100, '#d1c4e9', '#000000'));
    deeppurple.hues.push(new Hue(HueType._200, '#b39ddb', '#000000'));
    deeppurple.hues.push(new Hue(HueType._300, '#9575cd', '#000000'));
    deeppurple.hues.push(new Hue(HueType._400, '#7e57c2', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType._500, '#673ab7', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType._600, '#5e35b1', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType._700, '#512da8', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType._800, '#4527a0', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType._900, '#311b92', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType.A100, '#b388ff', '#000000'));
    deeppurple.hues.push(new Hue(HueType.A200, '#7c4dff', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType.A400, '#651fff', '#FFFFFF'));
    deeppurple.hues.push(new Hue(HueType.A700, '#6200ea', '#FFFFFF'));
    this.palettes.push(deeppurple);

    // Indigo
    const indigo = new MaterialPalette(PaletteType.INDIGO);
    indigo.hues.push(new Hue(HueType._50, '#e8eaf6', '#000000'));
    indigo.hues.push(new Hue(HueType._100, '#c5cae9', '#000000'));
    indigo.hues.push(new Hue(HueType._200, '#9fa8da', '#000000'));
    indigo.hues.push(new Hue(HueType._300, '#7986cb', '#000000'));
    indigo.hues.push(new Hue(HueType._400, '#5c6bc0', '#FFFFFF'));
    indigo.hues.push(new Hue(HueType._500, '#3f51b5', '#FFFFFF'));
    indigo.hues.push(new Hue(HueType._600, '#3949ab', '#FFFFFF'));
    indigo.hues.push(new Hue(HueType._700, '#303f9f', '#FFFFFF'));
    indigo.hues.push(new Hue(HueType._800, '#283593', '#FFFFFF'));
    indigo.hues.push(new Hue(HueType._900, '#1a237e', '#FFFFFF'));
    indigo.hues.push(new Hue(HueType.A100, '#8c9eff', '#000000'));
    indigo.hues.push(new Hue(HueType.A200, '#536dfe', '#000000'));
    indigo.hues.push(new Hue(HueType.A400, '#3d5afe', '#FFFFFF'));
    indigo.hues.push(new Hue(HueType.A700, '#304ffe', '#FFFFFF'));
    this.palettes.push(indigo);

    // Blue
    const blue = new MaterialPalette(PaletteType.BLUE);
    blue.hues.push(new Hue(HueType._50, '#e3f2fd', '#000000'));
    blue.hues.push(new Hue(HueType._100, '#bbdefb', '#000000'));
    blue.hues.push(new Hue(HueType._200, '#90caf9', '#000000'));
    blue.hues.push(new Hue(HueType._300, '#64b5f6', '#000000'));
    blue.hues.push(new Hue(HueType._400, '#42a5f5', '#000000'));
    blue.hues.push(new Hue(HueType._500, '#2196f3', '#000000'));
    blue.hues.push(new Hue(HueType._600, '#1e88e5', '#000000'));
    blue.hues.push(new Hue(HueType._700, '#1976d2', '#FFFFFF'));
    blue.hues.push(new Hue(HueType._800, '#1565c0', '#FFFFFF'));
    blue.hues.push(new Hue(HueType._900, '#0d47a1', '#FFFFFF'));
    blue.hues.push(new Hue(HueType.A100, '#82b1ff', '#000000'));
    blue.hues.push(new Hue(HueType.A200, '#448aff', '#000000'));
    blue.hues.push(new Hue(HueType.A400, '#2979ff', '#000000'));
    blue.hues.push(new Hue(HueType.A700, '#2962ff', '#FFFFFF'));
    this.palettes.push(blue);

    // Lightblue
    const lightblue = new MaterialPalette(PaletteType.LIGHT_BLUE);
    lightblue.hues.push(new Hue(HueType._50, '#e1f5fe', '#000000'));
    lightblue.hues.push(new Hue(HueType._100, '#bbdefb', '#000000'));
    lightblue.hues.push(new Hue(HueType._200, '#81d4fa', '#000000'));
    lightblue.hues.push(new Hue(HueType._300, '#4fc3f7', '#000000'));
    lightblue.hues.push(new Hue(HueType._400, '#29b6f6', '#000000'));
    lightblue.hues.push(new Hue(HueType._500, '#03a9f4', '#000000'));
    lightblue.hues.push(new Hue(HueType._600, '#039be5', '#000000'));
    lightblue.hues.push(new Hue(HueType._700, '#0288d1', '#000000'));
    lightblue.hues.push(new Hue(HueType._800, '#0277bd', '#FFFFFF'));
    lightblue.hues.push(new Hue(HueType._900, '#01579b', '#FFFFFF'));
    lightblue.hues.push(new Hue(HueType.A100, '#80d8ff', '#000000'));
    lightblue.hues.push(new Hue(HueType.A200, '#40c4ff', '#000000'));
    lightblue.hues.push(new Hue(HueType.A400, '#00b0ff', '#000000'));
    lightblue.hues.push(new Hue(HueType.A700, '#0091ea', '#000000'));
    this.palettes.push(lightblue);

    // Cyan
    const cyan = new MaterialPalette(PaletteType.CYAN);
    cyan.hues.push(new Hue(HueType._50, '#e0f7fa', '#000000'));
    cyan.hues.push(new Hue(HueType._100, '#b2ebf2', '#000000'));
    cyan.hues.push(new Hue(HueType._200, '#80deea', '#000000'));
    cyan.hues.push(new Hue(HueType._300, '#4dd0e1', '#000000'));
    cyan.hues.push(new Hue(HueType._400, '#26c6da', '#000000'));
    cyan.hues.push(new Hue(HueType._500, '#00bcd4', '#FFFFFF'));
    cyan.hues.push(new Hue(HueType._600, '#00acc1', '#FFFFFF'));
    cyan.hues.push(new Hue(HueType._700, '#0097a7', '#FFFFFF'));
    cyan.hues.push(new Hue(HueType._800, '#00838f', '#FFFFFF'));
    cyan.hues.push(new Hue(HueType._900, '#006064', '#FFFFFF'));
    cyan.hues.push(new Hue(HueType.A100, '#84ffff', '#000000'));
    cyan.hues.push(new Hue(HueType.A200, '#18ffff', '#000000'));
    cyan.hues.push(new Hue(HueType.A400, '#00e5ff', '#000000'));
    cyan.hues.push(new Hue(HueType.A700, '#00b8d4', '#000000'));
    this.palettes.push(cyan);

    // Teal
    const teal = new MaterialPalette(PaletteType.TEAL);
    teal.hues.push(new Hue(HueType._50, '#e0f2f1', '#000000'));
    teal.hues.push(new Hue(HueType._100, '#b2dfdb', '#000000'));
    teal.hues.push(new Hue(HueType._200, '#80cbc4', '#000000'));
    teal.hues.push(new Hue(HueType._300, '#4db6ac', '#000000'));
    teal.hues.push(new Hue(HueType._400, '#26a69a', '#000000'));
    teal.hues.push(new Hue(HueType._500, '#009688', '#000000'));
    teal.hues.push(new Hue(HueType._600, '#00897b', '#000000'));
    teal.hues.push(new Hue(HueType._700, '#00796b', '#FFFFFF'));
    teal.hues.push(new Hue(HueType._800, '#00695c', '#FFFFFF'));
    teal.hues.push(new Hue(HueType._900, '#004d40', '#FFFFFF'));
    teal.hues.push(new Hue(HueType.A100, '#a7ffeb', '#000000'));
    teal.hues.push(new Hue(HueType.A200, '#64ffda', '#000000'));
    teal.hues.push(new Hue(HueType.A400, '#1de9b6', '#000000'));
    teal.hues.push(new Hue(HueType.A700, '#00bfa5', '#000000'));
    this.palettes.push(teal);

    // Green
    const green = new MaterialPalette(PaletteType.GREEN);
    green.hues.push(new Hue(HueType._50, '#e8f5e9', '#000000'));
    green.hues.push(new Hue(HueType._100, '#c8e6c9', '#000000'));
    green.hues.push(new Hue(HueType._200, '#a5d6a7', '#000000'));
    green.hues.push(new Hue(HueType._300, '#81c784', '#000000'));
    green.hues.push(new Hue(HueType._400, '#66bb6a', '#000000'));
    green.hues.push(new Hue(HueType._500, '#4caf50', '#000000'));
    green.hues.push(new Hue(HueType._600, '#43a047', '#000000'));
    green.hues.push(new Hue(HueType._700, '#388e3c', '#000000'));
    green.hues.push(new Hue(HueType._800, '#2e7d32', '#FFFFFF'));
    green.hues.push(new Hue(HueType._900, '#1b5e20', '#FFFFFF'));
    green.hues.push(new Hue(HueType.A100, '#b9f6ca', '#000000'));
    green.hues.push(new Hue(HueType.A200, '#69f0ae', '#000000'));
    green.hues.push(new Hue(HueType.A400, '#00e676', '#000000'));
    green.hues.push(new Hue(HueType.A700, '#00c853', '#000000'));
    this.palettes.push(green);

    // Light Green
    const lightgreen = new MaterialPalette(PaletteType.LIGHT_GREEN);
    lightgreen.hues.push(new Hue(HueType._50, '#f1f8e9', '#000000'));
    lightgreen.hues.push(new Hue(HueType._100, '#dcedc8', '#000000'));
    lightgreen.hues.push(new Hue(HueType._200, '#c5e1a5', '#000000'));
    lightgreen.hues.push(new Hue(HueType._300, '#aed581', '#000000'));
    lightgreen.hues.push(new Hue(HueType._400, '#9ccc65', '#000000'));
    lightgreen.hues.push(new Hue(HueType._500, '#8bc34a', '#000000'));
    lightgreen.hues.push(new Hue(HueType._600, '#7cb342', '#000000'));
    lightgreen.hues.push(new Hue(HueType._700, '#689f38', '#FFFFFF'));
    lightgreen.hues.push(new Hue(HueType._800, '#558b2f', '#FFFFFF'));
    lightgreen.hues.push(new Hue(HueType._900, '#33691e', '#FFFFFF'));
    lightgreen.hues.push(new Hue(HueType.A100, '#ccff90', '#000000'));
    lightgreen.hues.push(new Hue(HueType.A200, '#b2ff59', '#000000'));
    lightgreen.hues.push(new Hue(HueType.A400, '#76ff03', '#000000'));
    lightgreen.hues.push(new Hue(HueType.A700, '#64dd17', '#000000'));
    this.palettes.push(lightgreen);

    // Lime
    const lime = new MaterialPalette(PaletteType.LIME);
    lime.hues.push(new Hue(HueType._50, '#f9fbe7', '#000000'));
    lime.hues.push(new Hue(HueType._100, '#f0f4c3', '#000000'));
    lime.hues.push(new Hue(HueType._200, '#e6ee9c', '#000000'));
    lime.hues.push(new Hue(HueType._300, '#dce775', '#000000'));
    lime.hues.push(new Hue(HueType._400, '#d4e157', '#000000'));
    lime.hues.push(new Hue(HueType._500, '#cddc39', '#000000'));
    lime.hues.push(new Hue(HueType._600, '#c0ca33', '#000000'));
    lime.hues.push(new Hue(HueType._700, '#afb42b', '#000000'));
    lime.hues.push(new Hue(HueType._800, '#9e9d24', '#000000'));
    lime.hues.push(new Hue(HueType._900, '#827717', '#FFFFFF'));
    lime.hues.push(new Hue(HueType.A100, '#f4ff81', '#000000'));
    lime.hues.push(new Hue(HueType.A200, '#eeff41', '#000000'));
    lime.hues.push(new Hue(HueType.A400, '#c6ff00', '#000000'));
    lime.hues.push(new Hue(HueType.A700, '#aeea00', '#000000'));
    this.palettes.push(lime);

    // Yellow
    const yellow = new MaterialPalette(PaletteType.YELLOW);
    yellow.hues.push(new Hue(HueType._50, '#fffde7', '#000000'));
    yellow.hues.push(new Hue(HueType._100, '#fff9c4', '#000000'));
    yellow.hues.push(new Hue(HueType._200, '#fff59d', '#000000'));
    yellow.hues.push(new Hue(HueType._300, '#fff176', '#000000'));
    yellow.hues.push(new Hue(HueType._400, '#ffee58', '#000000'));
    yellow.hues.push(new Hue(HueType._500, '#ffeb3b', '#000000'));
    yellow.hues.push(new Hue(HueType._600, '#fdd835', '#000000'));
    yellow.hues.push(new Hue(HueType._700, '#fbc02d', '#000000'));
    yellow.hues.push(new Hue(HueType._800, '#f9a825', '#000000'));
    yellow.hues.push(new Hue(HueType._900, '#f57f17', '#000000'));
    yellow.hues.push(new Hue(HueType.A100, '#ffff8d', '#000000'));
    yellow.hues.push(new Hue(HueType.A200, '#ffff00', '#000000'));
    yellow.hues.push(new Hue(HueType.A400, '#ffea00', '#000000'));
    yellow.hues.push(new Hue(HueType.A700, '#ffd600', '#000000'));
    this.palettes.push(yellow);


    // Amber
    const amber = new MaterialPalette(PaletteType.AMBER);
    amber.hues.push(new Hue(HueType._50, '#fff8e1', '#000000'));
    amber.hues.push(new Hue(HueType._100, '#ffecb3', '#000000'));
    amber.hues.push(new Hue(HueType._200, '#ffe082', '#000000'));
    amber.hues.push(new Hue(HueType._300, '#ffd54f', '#000000'));
    amber.hues.push(new Hue(HueType._400, '#ffca28', '#000000'));
    amber.hues.push(new Hue(HueType._500, '#ffc107', '#000000'));
    amber.hues.push(new Hue(HueType._600, '#ffb300', '#000000'));
    amber.hues.push(new Hue(HueType._700, '#ffa000', '#000000'));
    amber.hues.push(new Hue(HueType._800, '#ff8f00', '#000000'));
    amber.hues.push(new Hue(HueType._900, '#ff6f00', '#000000'));
    amber.hues.push(new Hue(HueType.A100, '#ffe57f', '#000000'));
    amber.hues.push(new Hue(HueType.A200, '#ffd740', '#000000'));
    amber.hues.push(new Hue(HueType.A400, '#ffc400', '#000000'));
    amber.hues.push(new Hue(HueType.A700, '#ffab00', '#000000'));
    this.palettes.push(amber);

    // Orange
    const orange = new MaterialPalette(PaletteType.ORANGE);
    orange.hues.push(new Hue(HueType._50, '#fff3e0', '#000000'));
    orange.hues.push(new Hue(HueType._100, '#ffe0b2', '#000000'));
    orange.hues.push(new Hue(HueType._200, '#ffcc80', '#000000'));
    orange.hues.push(new Hue(HueType._300, '#ffb74d', '#000000'));
    orange.hues.push(new Hue(HueType._400, '#ffa726', '#000000'));
    orange.hues.push(new Hue(HueType._500, '#ff9800', '#000000'));
    orange.hues.push(new Hue(HueType._600, '#fb8c00', '#000000'));
    orange.hues.push(new Hue(HueType._700, '#f57c00', '#000000'));
    orange.hues.push(new Hue(HueType._800, '#ef6c00', '#000000'));
    orange.hues.push(new Hue(HueType._900, '#e65100', '#000000'));
    orange.hues.push(new Hue(HueType.A100, '#ffd180', '#000000'));
    orange.hues.push(new Hue(HueType.A200, '#ffab40', '#000000'));
    orange.hues.push(new Hue(HueType.A400, '#ff9100', '#000000'));
    orange.hues.push(new Hue(HueType.A700, '#ff6d00', '#000000'));
    this.palettes.push(orange);

    // Deep Orange
    const deeporange = new MaterialPalette(PaletteType.DEEP_ORANGE);
    deeporange.hues.push(new Hue(HueType._50, '#fbe9e7', '#000000'));
    deeporange.hues.push(new Hue(HueType._100, '#ffccbc', '#000000'));
    deeporange.hues.push(new Hue(HueType._200, '#ffab91', '#000000'));
    deeporange.hues.push(new Hue(HueType._300, '#ff8a65', '#000000'));
    deeporange.hues.push(new Hue(HueType._400, '#ff7043', '#000000'));
    deeporange.hues.push(new Hue(HueType._500, '#ff5722', '#000000'));
    deeporange.hues.push(new Hue(HueType._600, '#f4511e', '#000000'));
    deeporange.hues.push(new Hue(HueType._700, '#e64a19', '#000000'));
    deeporange.hues.push(new Hue(HueType._800, '#d84315', '#000000'));
    deeporange.hues.push(new Hue(HueType._900, '#bf360c', '#FFFFFF'));
    deeporange.hues.push(new Hue(HueType.A100, '#ff9e80', '#000000'));
    deeporange.hues.push(new Hue(HueType.A200, '#ff6e40', '#000000'));
    deeporange.hues.push(new Hue(HueType.A400, '#ff3d00', '#000000'));
    deeporange.hues.push(new Hue(HueType.A700, '#dd2c00', '#FFFFFF'));
    this.palettes.push(deeporange);

    // Brown
    const brown = new MaterialPalette(PaletteType.BROWN);
    brown.hues.push(new Hue(HueType._50, '#efebe9', '#000000'));
    brown.hues.push(new Hue(HueType._100, '#d7ccc8', '#000000'));
    brown.hues.push(new Hue(HueType._200, '#bcaaa4', '#000000'));
    brown.hues.push(new Hue(HueType._300, '#a1887f', '#000000'));
    brown.hues.push(new Hue(HueType._400, '#8d6e63', '#FFFFFF'));
    brown.hues.push(new Hue(HueType._500, '#795548', '#FFFFFF'));
    brown.hues.push(new Hue(HueType._600, '#6d4c41', '#FFFFFF'));
    brown.hues.push(new Hue(HueType._700, '#5d4037', '#FFFFFF'));
    brown.hues.push(new Hue(HueType._800, '#4e342e', '#FFFFFF'));
    brown.hues.push(new Hue(HueType._900, '#3e2723', '#FFFFFF'));
    brown.hues.push(new Hue(HueType.A100, '#d7ccc8', '#000000'));
    brown.hues.push(new Hue(HueType.A200, '#bcaaa4', '#000000'));
    brown.hues.push(new Hue(HueType.A400, '#8d6e63', '#FFFFFF'));
    brown.hues.push(new Hue(HueType.A700, '#5d4037', '#FFFFFF'));
    this.palettes.push(brown);

    // Grey
    const grey = new MaterialPalette(PaletteType.GREY);
    grey.hues.push(new Hue(HueType._50, '#fafafa', '#000000'));
    grey.hues.push(new Hue(HueType._100, '#f5f5f5', '#000000'));
    grey.hues.push(new Hue(HueType._200, '#eeeeee', '#000000'));
    grey.hues.push(new Hue(HueType._300, '#e0e0e0', '#000000'));
    grey.hues.push(new Hue(HueType._400, '#bdbdbd', '#000000'));
    grey.hues.push(new Hue(HueType._500, '#9e9e9e', '#000000'));
    grey.hues.push(new Hue(HueType._600, '#757575', '#FFFFFF'));
    grey.hues.push(new Hue(HueType._700, '#616161', '#FFFFFF'));
    grey.hues.push(new Hue(HueType._800, '#424242', '#FFFFFF'));
    grey.hues.push(new Hue(HueType._900, '#212121', '#FFFFFF'));
    grey.hues.push(new Hue(HueType.A100, '#ffffff', '#000000'));
    grey.hues.push(new Hue(HueType.A200, '#eeeeee', '#000000'));
    grey.hues.push(new Hue(HueType.A400, '#bdbdbd', '#000000'));
    grey.hues.push(new Hue(HueType.A700, '#616161', '#FFFFFF'));
    this.palettes.push(grey);

    // Klubtalent blue
    const klubtalentBlue = new MaterialPalette(PaletteType.KLUBTALENT_BLUE);
    klubtalentBlue.hues.push(new Hue(HueType._50, 'hsl(240, 100%, 100%)', '#000000'));
    klubtalentBlue.hues.push(new Hue(HueType._100, 'hsl(240, 100%, 90%)', '#000000'));
    klubtalentBlue.hues.push(new Hue(HueType._200, 'hsl(240, 100%, 80%)', '#000000'));
    klubtalentBlue.hues.push(new Hue(HueType._300, 'hsl(240, 100%, 70%)', '#000000'));
    klubtalentBlue.hues.push(new Hue(HueType._400, 'hsl(240, 100%, 60%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType._500, 'hsl(240, 100%, 50%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType._600, 'hsl(240, 100%, 40%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType._700, 'hsl(240, 100%, 30%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType._800, 'hsl(240, 100%, 20%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType._900, 'hsl(240, 100%, 10%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType.A100, 'hsl(240, 100%, 10%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType.A200, 'hsl(240, 100%, 10%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType.A400, 'hsl(240, 100%, 10%)', '#FFFFFF'));
    klubtalentBlue.hues.push(new Hue(HueType.A700, 'hsl(240, 100%, 10%)', '#FFFFFF'));
    this.palettes.push(klubtalentBlue);

    // Klubtalent orange
    const klubtalentOrange = new MaterialPalette(PaletteType.KLUBTALENT_ORANGE);
    klubtalentOrange.hues.push(new Hue(HueType._50, 'hsl(14, 76%, 100%)', '#000000'));
    klubtalentOrange.hues.push(new Hue(HueType._100, 'hsl(14, 76%, 98%)', '#000000'));
    klubtalentOrange.hues.push(new Hue(HueType._200, 'hsl(14, 76%, 88%)', '#000000'));
    klubtalentOrange.hues.push(new Hue(HueType._300, 'hsl(14, 76%, 78%)', '#000000'));
    klubtalentOrange.hues.push(new Hue(HueType._400, 'hsl(14, 76%, 68%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType._500, 'hsl(14, 76%, 58%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType._600, 'hsl(14, 76%, 48%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType._700, 'hsl(14, 76%, 38%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType._800, 'hsl(14, 76%, 28%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType._900, 'hsl(14, 76%, 18%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType.A100, 'hsl(14, 76%, 58%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType.A200, 'hsl(14, 76%, 58%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType.A400, 'hsl(14, 76%, 58%)', '#FFFFFF'));
    klubtalentOrange.hues.push(new Hue(HueType.A700, 'hsl(14, 76%, 58%)', '#FFFFFF'));
    this.palettes.push(klubtalentOrange);

    // Klubtalent purple
    const klubtalentPurple = new MaterialPalette(PaletteType.KLUBTALENT_PURPLE);
    klubtalentPurple.hues.push(new Hue(HueType._50, 'hsl(305, 25%, 100%)', '#000000'));
    klubtalentPurple.hues.push(new Hue(HueType._100, 'hsl(305, 25%, 90%)', '#000000'));
    klubtalentPurple.hues.push(new Hue(HueType._200, 'hsl(305, 25%, 80%)', '#000000'));
    klubtalentPurple.hues.push(new Hue(HueType._300, 'hsl(305, 25%, 70%)', '#000000'));
    klubtalentPurple.hues.push(new Hue(HueType._400, 'hsl(305, 25%, 60%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType._500, 'hsl(305, 25%, 50%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType._600, 'hsl(305, 25%, 40%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType._700, 'hsl(305, 25%, 30%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType._800, 'hsl(305, 25%, 20%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType._900, 'hsl(305, 25%, 10%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType.A100, 'hsl(305, 25%, 50%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType.A200, 'hsl(305, 25%, 50%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType.A400, 'hsl(305, 25%, 50%)', '#FFFFFF'));
    klubtalentPurple.hues.push(new Hue(HueType.A700, 'hsl(305, 25%, 50%)', '#FFFFFF'));
    this.palettes.push(klubtalentPurple);

    // Klubtalent yellow
    const klubtalentYellow = new MaterialPalette(PaletteType.KLUBTALENT_YELLOW);
    klubtalentYellow.hues.push(new Hue(HueType._50, 'hsl(47, 79%, 94%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType._100, 'hsl(47, 79%, 90%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType._200, 'hsl(47, 79%, 80%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType._300, 'hsl(47, 79%, 70%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType._400, 'hsl(47, 79%, 60%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType._500, 'hsl(47, 79%, 50%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType._600, 'hsl(47, 79%, 40%)', '#FFFFFF'));
    klubtalentYellow.hues.push(new Hue(HueType._700, 'hsl(47, 79%, 30%)', '#FFFFFF'));
    klubtalentYellow.hues.push(new Hue(HueType._800, 'hsl(47, 79%, 20%)', '#FFFFFF'));
    klubtalentYellow.hues.push(new Hue(HueType._900, 'hsl(47, 79%, 10%)', '#FFFFFF'));
    klubtalentYellow.hues.push(new Hue(HueType.A100, 'hsl(47, 79%, 50%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType.A200, 'hsl(47, 79%, 50%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType.A400, 'hsl(47, 79%, 50%)', '#000000'));
    klubtalentYellow.hues.push(new Hue(HueType.A700, 'hsl(47, 79%, 50%)', '#000000'));
    this.palettes.push(klubtalentYellow);

    // Klubtalent green
    const klubtalentGreen = new MaterialPalette(PaletteType.KLUBTALENT_GREEN);
    klubtalentGreen.hues.push(new Hue(HueType._50, 'hsl(143, 38%, 96%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType._100, 'hsl(143, 38%, 90%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType._200, 'hsl(143, 38%, 80%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType._300, 'hsl(143, 38%, 70%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType._400, 'hsl(143, 38%, 60%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType._500, 'hsl(143, 38%, 50%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType._600, 'hsl(143, 38%, 40%)', '#FFFFFF'));
    klubtalentGreen.hues.push(new Hue(HueType._700, 'hsl(143, 38%, 30%)', '#FFFFFF'));
    klubtalentGreen.hues.push(new Hue(HueType._800, 'hsl(143, 38%, 20%)', '#FFFFFF'));
    klubtalentGreen.hues.push(new Hue(HueType._900, 'hsl(143, 38%, 10%)', '#FFFFFF'));
    klubtalentGreen.hues.push(new Hue(HueType.A100, 'hsl(143, 38%, 50%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType.A200, 'hsl(143, 38%, 50%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType.A400, 'hsl(143, 38%, 50%)', '#000000'));
    klubtalentGreen.hues.push(new Hue(HueType.A700, 'hsl(143, 38%, 50%)', '#000000'));
    this.palettes.push(klubtalentGreen);
  }

  /**
   * Initializes theme
   */
  initializeTheme(theme: string) {
    switch(theme) {
      case "blue" : {
        this.themeClass = 'klubtalent-blue-theme';
        this.primaryPalette = PaletteType.KLUBTALENT_BLUE;
        this.accentPalette = PaletteType.KLUBTALENT_ORANGE;
        break;
      }
      case "purple" : {
        this.themeClass = 'klubtalent-purple-theme';
        this.primaryPalette = PaletteType.KLUBTALENT_PURPLE;
        this.accentPalette = PaletteType.KLUBTALENT_ORANGE;
        break;
      }
      case "yellow" : {
        this.themeClass = 'klubtalent-yellow-theme';
        this.primaryPalette = PaletteType.KLUBTALENT_YELLOW;
        this.accentPalette = PaletteType.KLUBTALENT_ORANGE;
        break;
      }
      case "green" : {
        this.themeClass = 'klubtalent-green-theme';
        this.primaryPalette = PaletteType.KLUBTALENT_GREEN;
        this.accentPalette = PaletteType.KLUBTALENT_PURPLE;
        break;
      }
    }
  }

  /**
   * Returns the color of a given palette and a hue
   * @param paletteType personColor palette
   * @param hueType personColor hue
   */
  public color(paletteType: PaletteType, hueType: HueType): string {
    const hue = this.hue(paletteType, hueType);

    if (hue == null) {
      return 'transparent';
    }

    return hue.color;
  }

  /**
   * Returns the contrast of a given palette and a hue
   * @param paletteType palette type
   * @param hueType hue type
   */
  public contrast(paletteType: PaletteType, hueType: HueType): string {
    const hue = this.hue(paletteType, hueType);

    if (hue == null) {
      return 'transparent';
    }

    return hue.contrast;
  }

  /**
   * Returns the hue of a given palette and a hue
   * @param paletteType palette type
   * @param hueType hue type
   */
  public hue(paletteType: PaletteType, hueType: HueType): Hue | undefined {
    const pal = this.palettes.find(p => {
      return p.type === paletteType;
    });

    if (pal == null) {
      return undefined;
    }

    return pal.hues.find(h => {
      return h.type === hueType;
    });
  }
}
