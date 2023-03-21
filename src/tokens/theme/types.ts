export type Foreground = {
        default: string;
        muted: string;
        subtle: string;
        onEmphasis: string;
}

export type Canvas = {
    default: string;
    overlay: string;
    inset: string;
    subtle: string;
}

export type Border = {
    default: string;
    muted: string;
    subtle: string;
}

export type Shadow = {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}

export type Neutral = {
    emphasisPlus: string;
    emphasis: string;
    muted: string;
    subtle: string;
}

export type SemanticColor = {
    foreground: string;
    emphasis: string;
    muted: string;
    subtle: string;
}

export type AccentColor = SemanticColor;
export type SuccessColor = SemanticColor;
export type AttentionColor = SemanticColor;
export type SevereColor = SemanticColor;
export type DangerColor = SemanticColor;
export type OpenColor = SemanticColor;
export type ClosedColor = SemanticColor;
export type DoneColor = SemanticColor;

export type ThemeProps = Record<"foreground", Foreground> &
                              Record<"canvas", Canvas> & 
                              Record<"border", Border> & 
                              Record<"neutral", Neutral> & 
                              Record<"accent", AccentColor> & 
                              Record<"success", SuccessColor> & 
                              Record<"attention", AttentionColor> & 
                              Record<"severe", SevereColor> & 
                              Record<"danger", DangerColor> & 
                              Record<"open" ,OpenColor> & 
                              Record<"closed", ClosedColor> & 
                              Record<"done" ,DoneColor> &
                              Record<"shadow", Shadow>;