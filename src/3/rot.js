exports.rot_x = rad_x => {
    const mat = require('./matrix').getMatrix(4, 4);
    mat.setValue(0, 0, 1);
    mat.setValue(1, 1, Math.cos(rad_x));
    mat.setValue(2, 1, -Math.sin(rad_x));
    mat.setValue(1, 2, Math.sin(rad_x));
    mat.setValue(2, 2, Math.cos(rad_x));
    mat.setValue(3, 3, 1);
    return mat;
}

exports.rot_y = rad_y => {
    const mat = require('./matrix').getMatrix(4, 4);
    mat.setValue(0, 0, Math.cos(rad_y));
    mat.setValue(2, 0, Math.sin(rad_y));
    mat.setValue(1, 1, 1);
    mat.setValue(0, 2, -Math.sin(rad_y));
    mat.setValue(2, 2, Math.cos(rad_y));
    mat.setValue(3, 3, 1);
    return mat;
}

exports.rot_z = rad_z => {
    const mat = require('./matrix').getMatrix(4, 4);
    mat.setValue(0, 0, Math.cos(rad_z));
    mat.setValue(1, 0, -Math.sin(rad_z));
    mat.setValue(0, 1, Math.sin(rad_z));
    mat.setValue(1, 1, Math.cos(rad_z));
    mat.setValue(2, 2, 1);
    mat.setValue(3, 3, 1);
    return mat;
}