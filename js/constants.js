var
    //Output ports
    MOTOR_A = 0x00,
    MOTOR_B = 0x01,
    MOTOR_C = 0x02,
    MOTOR_ALL = 0xff,

    //Output modes
    MOTORON = 0x01,
    BRAKE = 0x02,
    REGULATED = 0x04,

    //Regulations mode
    REGULATION_MODE_IDLE = 0x00,
    REGULATION_MODE_MOTOR_SPEED = 0x01,
    REGULATION_MODE_MOTOR_SYNC = 0x02,

    //Runstate
    MOTOR_RUN_STATE_IDLE = 0x00,
    MOTOR_RUN_STATE_RAMPUP = 0x10,
    MOTOR_RUN_STATE_RUNNING = 0x20,
    MOTOR_RUN_STATE_RAMPDOWN = 0x40,

    //Input ports
    INPUT_PORT_1 = 0x00,
    INPUT_PORT_2 = 0x01,
    INPUT_PORT_3 = 0x02,
    INPUT_PORT_4 = 0x03,

    //Sensor types
    NO_SENSOR = 0x00,
    SWITCH = 0x01,
    TEMPERATURE = 0x02,
    REFLECTION = 0x03,
    ANGLE = 0x04,
    LIGHT_ACTIVE = 0x05,
    LIGHT_INACTIVE = 0x06,
    SOUND_DB = 0x07,
    SOUND_DBA = 0x08,
    CUSTOM = 0x09,
    LOWSPEED = 0x0a,
    LOWSPEED_9V = 0x0b,
    NO_OF_SENSOR_TYPES = 0x0c,

    //Sensor modes
    RAWMODE = 0x00,
    BOOLEANMODE = 0x20,
    TRANSITIONCNTMODE = 0x40,
    PERIODCOUNTERMODE = 0x60,
    PCTFULLSCALEMODE = 0x80,
    CELSIUSMODE = 0xa0,
    FAHRENHEITMODE = 0xc0,
    ANGLESTEPSMODE = 0xe0,
    SLOPEMASK = 0x1f,
    MODEMASK = 0xe0;