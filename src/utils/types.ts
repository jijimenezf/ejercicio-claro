/**
 * Types for handling the response received from Claro Endpoint
 */

export type Enc_Rec_Tech = {
    id: string;
    desc: string;
}

export type Group = {
    common: {
        id: string;
        title: string;
        title_episode: string | null;
        title_uri?: string;
        title_original?: string;
        description?: string;
        description_large?: string;
        short_description: string | null;
        image_large?: string;
        image_medium?: string;
        image_small?: string;
        image_still: string | null;
        image_background?: string;
        url_imagen_t1?: string;
        url_imagen_t2?: string;
        image_base_horizontal?: string;
        image_base_vertical?: string;
        image_base_square?: string;
        image_clean_horizontal?: string;
        image_clean_vertical?: string;
        image_clean_square?: string;
        image_sprites?: string;
        image_frames?: string;
        image_trickplay?: string;
        image_external: string | null;
        duration: string | null;
        date?: string;
        year: string | null;
        preview?: string;
        season_number: string | null;
        episode_number: string | null;
        format_types?: string;
        live_enabled?: string;
        live_type?: string;
        live_ref?: string;
        timeshift?: string;
        votes_average?: string;
        rating_code?: string;
        proveedor_name?: string;
        proveedor_code?: string;
        encoder_tecnology: Enc_Rec_Tech;
        recorder_technology: Enc_Rec_Tech;
        resource_name: string | null;
        rollingcreditstime: string | null;
        rollingcreditstimedb: string | null;
        is_series: boolean;
        channel_number: string;
    }
}

export type EventChannel = {
    channel_id?: string;
    id: string;
    name?: string;
    description: string | null;
    talent: string | null;
    date_begin?: string;
    date_end?: string;
    unix_begin?: string;
    unix_end?: string;
    duration?: string;
    language: string | null;
    type: string | null;
    group_id: string | null;
    confirmado: string | null;
    id_empleado: string | null;
    tms_id: string | null;
    event_alf_id: string | null;
    ext_ncont_id: string | null;
    ext_nevt_id: string | null;
    ext_actors: string | null;
    ext_director: string | null;
    ext_year: string | null;
    ext_country: string | null;
    ext_original_name: string | null;
    ext_ep_original_name: string | null;
    ext_series_id: string | null;
    ext_season_id: string | null;
    ext_episode_id: string | null;
    ext_language: string | null;
    ext_serie_short_desc: string | null;
    ext_serie_desc: string | null;
    image_base_horizontal?: string;
    image_base_vertical?: string;
    image_base_square?: string;
    ext_eventimage_name?: string;
    ext_eventimage_name_base?: string;
    ext_catchup: string | null;
    ext_startover: string | null;
    ext_recordable: string | null;
    parental_rating: string | null;
    aud_stereo: string | null;
    aud_dolby: string | null;
    vid_black_and_white: string | null;
    dvb_content: string | null;
    user_content: string | null;
    group_rel: string | null;
    gmt: number;
}

export type Channel = {
    id: string;
    number: string;
    name: string;
    hd: boolean;
    image: string;
    group_id: string;
    liveref: string;
    epg_url: string;
    provider_metadata_id: number;
    provider_metadata_name: string;
    group: Group;
    events: EventChannel[];
}

export type Entry = {
    device_id: string;
    device_category: string;
    device_model: string;
    device_type: string;
    device_so: string;
    format: string;
    device_manufacturer: string;
    authpn: string;
    authpt: string;
    api_version: string;
    region: string;
    HKS: string;
    user_id: string;
    date_from: string;
    date_to: string;
    quantity: string;
}

export type MediaContextType = {
    event: EventChannel;
    saveEvent: (event: EventChannel) => void;
};
