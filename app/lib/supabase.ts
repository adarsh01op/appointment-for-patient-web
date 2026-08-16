import { createClient } from '@supabase/supabase-js';

// The || (OR) operator tells it: Try to use the hidden file, but if you can't find it, use this exact string instead.
const supabaseUrl = "https://igjakjdswqcdwnzjimue.supabase.co";

// IMPORTANT: Replace the text inside the quotes below with your actual sb_publishable... key!
const supabaseKey = "sb_publishable_HhhgGNCtAVCt7cdihV_eaQ_oE-zJ0Ak"

export const supabase = createClient(supabaseUrl, supabaseKey);