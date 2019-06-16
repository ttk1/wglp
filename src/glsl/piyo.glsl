float zero_one(float t) {
    return clamp(t, -1.0, 1.0) * 0.5 + 0.5;
}

#pragma glslify: export(zero_one)